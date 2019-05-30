/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/4/2
 **/

import * as request from 'request';
import * as fse from 'fs-extra';
import {join} from 'path';
import {
  buildWebApi,
  IJSObjectProps,
  IWebApiContext,
  IWebApiDefinded,
  IWebApiGroup,
  SchemaProps
} from '../../core/web-api/client';
import {IFileSaveOptions} from "../../core/page/taro-redux/redux-taro";
import {toLCamelize, toUCamelize} from "../../core/util/string-util";
import {IInsertOption, insertContent, insertFile} from "../../core/util/compile-util";
import {genApiTsIndex} from "../../core/web-api/client/ts-index";

async function loadJson(): Promise<any> {
  return new Promise((resolve, reject) => {
    request('http://172.19.26.161:8490/v2/api-docs', function(
    // request('http://118.31.238.229:8390/v2/api-docs', function(
      error,
      response,
      body,
    ) {
      if (error) {
        reject(error);
      } else {
        resolve(JSON.parse(body));
      }
    });
  });
}
let defaulltMoonConfig = {
  api:{
    exclude:[]
  }
};

try {
  let configFilePath = '/Users/dong/wanmi/sbc/sbc-supplier/.moon.json';
  console.log('读取配置文件',configFilePath);
  if(fse.pathExistsSync(configFilePath)){
    defaulltMoonConfig =  fse.readJSONSync(configFilePath);
  }else{
    console.log('读取默认配置');
  }
} catch (err) {

}




(async () => {
  let workBase = "/Users/dong/wanmi/sbc/sbc-supplier/";
  // let apiJson = await loadJson();
  // //   // // console.log(apiJson);
  // //   await fse.writeJSON(join(__dirname, 'swagger-api.json'), apiJson);
  // //   // //按分组;
  // // let apiJson= await fse.readJSON(join(__dirname, 'pets-api.json'));
  // //
  // // //单个文件 生成 , 不生成总的.生成总的, 更新 会有问题.
  // let apiGroups = transfer(apiJson);
  // await fse.writeJSON(join(__dirname,"webapi-def.json"),apiGroups);
  //
  // // let basePath = "/Users/dong/wanmi/athena-frontend/src/webapi/";
  // let basePath = workBase+"web_modules/api";
  //
  // let inserts:IInsertOption[] =[];
  // for (let i = 0, ilen = apiGroups.length; i < ilen; i++) {
  //   try {
  //     let webapiGroup:IWebApiGroup = apiGroups[i];
  //     if(defaulltMoonConfig.api.exclude.includes(webapiGroup.name)){
  //       console.log("ignore webapiGroup:",webapiGroup.name,"due to MoonConfig.api.exclude");
  //       continue;
  //     }else{
  //       console.log("current webapiGroup:",webapiGroup.name);
  //     }
  //
  //     await buildWebApi({
  //       webapiGroup,
  //       projectPath:basePath,// join(__dirname, 'out'),
  //       beforeCompile: (apiItem: IWebApiDefinded) => {
  //         // apiItem.url =hostPre + apiItem.url;
  //         return apiItem;
  //       },
  //       resSchemaModify,
  //       beforeSave:(options:IFileSaveOptions,context: any)=>{
  //         console.log(options.content.substring(0,30));
  //         options.content = options.content
  //           .replace(`import sdk from "@api/sdk";`,`import * as sdk from './fetch';`)
  //           .replace(`import sdk from '@api/sdk';`,`import * as sdk from './fetch';`)
  //           .replace(/result\.data/ig,'result.context');
  //         return Promise.resolve(options);
  //       }
  //     });
  //
  //      let controllerName= toLCamelize(webapiGroup.name);
  //      let filePath =`./${webapiGroup.name}`;
  //
  //     inserts.push({
  //       mark:"'whatwg-fetch';",
  //       isBefore:false,
  //       content:`import  ${controllerName} from '${filePath}';`,
  //       check:(content:string)=>!content.includes(filePath)
  //     });
  //
  //     inserts.push({
  //       mark:"default {",
  //       isBefore:false,
  //       content:`${controllerName},`,
  //       check:(_,raw)=>!raw.includes(filePath)
  //     });
  //
  //   } catch (err) {
  //     console.error(err);
  //
  //   }
  // }
  //
  // await insertFile(join(basePath,"index.ts"),inserts);
  // //还是生成 一个总的 ?
  // //转换

  //生成api索引文件::
  let indexInfo  = genApiTsIndex({
    tsConfig: workBase+'tsconfig.json',
    apiDir:workBase+"web_modules/api",
    apiSuffix:"Controller",
  });

  fse.writeJsonSync(workBase+"web_modules/api/_api-info.json",indexInfo);
})();


function resSchemaModify(schema: IJSObjectProps,context: IWebApiContext) {

  //api外了一层. 所有内容均把data提取出来即可..
  if(!schema){
    return schema;
  }

  //TODO void怎么表示  ?
  //@ts-ignore;
  if(schema['originalRef']==='BaseResponse'){
    return null;
  }else if (schema['$ref']) {
    // console.log('schema[\'$ref\']',schema);
    let subSchema  = context.webapiGroup.definitions[schema['originalRef']] as IJSObjectProps;

    if(!subSchema) {
      return null;
    }
   // console.log('hema[\'originalRef\']===\'BaseResponse\'',subSchema);
    if(subSchema.type==='object' && subSchema.properties && subSchema.properties.context ) {
      if(subSchema.properties.context["$ref"]) {
        return  context.webapiGroup.definitions[subSchema.properties.context["originalRef"]];
      } else if(subSchema.properties.context['type'] ==='array') {
        let arrayAschema =  subSchema.properties.context;
        //@ts-ignore
        arrayAschema.title=subSchema.properties.context.items.originalRef+"Array";
        return arrayAschema;
      } else {
        return subSchema.properties.context;
      }
    }else {
      return schema;
    }
  } else {
    return schema;
  }
}

/**
 * 转换项目
 * @param {ISwaggerApisDocs} apiDocs
 * @returns {IWebApiGroup[]}
 */
function transfer(apiDocs: ISwaggerApisDocs): IWebApiGroup[] {
  //分组;
  let apiGroups: IWebApiGroup[] = [];

  let temp  = {};
  let KeyMap = {};
  for (let url in apiDocs.paths) {
    let apiItem = apiDocs.paths[url];

    let groupKey="";

    //TODO 会不会有两个及三个方法呢 ? 会 account/invoiceProject/{projectId}
    for(let method in apiItem) {
      let apiDefItem:any ={url,method};
      let methodInfo:IMethodDefinded = apiItem[method];

      // let groupKey = url.split('/')[1];
       groupKey = methodInfo.tags[0];//controller

      if (!KeyMap[groupKey]) {
        KeyMap[groupKey] = {
          name: groupKey,
          apis: [],
          definitions: {},
        };
      }


      temp[url]={url,methodName:methodInfo.operationId,group:groupKey};

      apiDefItem.name=toLCamelize(methodInfo.operationId)
        .replace(/UsingPOST.*/ig,"")
        .replace(/UsingPUT.*/ig,"")
        .replace(/UsingGET.*/ig,"")
        .replace(/UsingDELETE.*/ig,"_");
      apiDefItem.comment= methodInfo.summary;
      //in  = body header path

      apiDefItem.requestParam = methodInfo.parameters.filter(item=>
        item.in!='header'
      ).map(item=>{
        if(item.schema){
          addDef2List(KeyMap[groupKey].definitions,findAllRefType(apiDocs.definitions,item.schema));
        }

        return {
          name:item.name,
          isInPath:item.in==='path'?true:false,
          comment:item.description,
          jsonSchema:item.schema?item.schema:item
        }
      });
      apiDefItem.responseSchema=methodInfo.responses['200'].schema;
      addDef2List(KeyMap[groupKey].definitions,findAllRefType(apiDocs.definitions,apiDefItem.responseSchema));
      KeyMap[groupKey].apis.push(apiDefItem);
    }
  }


  for(let key in KeyMap){
    apiGroups.push(KeyMap[key]);
  }
  return apiGroups;
}

function addDef2List(definitions: {
  [defName: string]: SchemaProps;
},schema:SchemaProps|SchemaProps[]){

  if ( schema instanceof Array) {
    for (let i = 0, iLen = schema.length; i < iLen; i++) {
      let schemaItem = schema[i];

      if(!definitions[schemaItem.title]){
        definitions[schemaItem.title]=schemaItem;
      }
    }

  } else {
    if(!definitions[schema.title]){
      definitions[schema.title]=schema;
    }
  }

}

//TODO 枚举类型的控制.
function  findAllRefType(definitions: {
  [defName: string]: SchemaProps;
},obj:any,refs:string[]=[]):SchemaProps[] {
  if(!obj){
    return [];
  }

  let refLeng =refs.length;
   traverseObj(obj,refs);

  //TODO 这里要不要把名字改了呢 ?
  let results  = [];

  if(obj && !obj.$ref) {
    results.push(obj);
  }


  for (let i = refLeng, ilen = refs.length; i < ilen; i++) {
    let ref = refs[i].replace('#/definitions/',"");

    if(ref && definitions[ref]) {

      results.push(definitions[ref]);
      //遍历对象, 至到找到所有的引用内容为至;
      let jlen = refs.length;
      traverseObj(definitions[ref],refs);
      // console.log('子 traverseObj',refs);
      if(refs.length > jlen){ //有新的ref添加进来..

        for (let j = jlen, allen = refs.length; j < allen; j++) {
          results=results.concat(findAllRefType(definitions,definitions[refs[j].replace('#/definitions/',"")],refs));
        }
      }
    }
  }

  return results;
}

/**
 * 遍历 对象 寻找 ref类型.
 * TODO 会不会有相互引用呢?
 */
function traverseObj(obj:object,refs:string[]=[]){
  for(let key in obj){
    if(obj.hasOwnProperty(key) && key==='$ref'){
      if(!refs.includes(obj[key])) {
        refs.push(obj[key]);
      }
    } else if (typeof (obj[key] )==='object') {
      traverseObj(obj[key],refs);
    }
  }
  return refs;
}



interface ISwaggerApisDocs {
  swagger: string;
  host: string;
  basePath: string;
  info: ISwaggerInfo;
  tags: ITag[];
  paths: {
    [apiUrl: string]: IApiDefinded;
  };
  definitions: {
    [defName: string]: SchemaProps;
  };
}

export interface ISwaggerInfo {
  description: string;
  version: string;
  title: string;
  contact: {
    name: string;
    url: string;
    email: string;
  };
}

interface IApiDefinded {
  get?: IMethodDefinded;
  post?: IMethodDefinded;
  [methodType: string]: IMethodDefinded;
}

export interface IMethodDefinded {
  tags: string[];
  summary: string;
  operationId: string;
  produces: string[];
  parameters: any[];
  responses: {
    [status: string]: IResponseDef;
  };
  deprecated: boolean;
}

export interface IResponseDef {
  description: string;
  schema: SchemaProps;
}

export interface IParam {
  name: string;
  in: string;
  description: string;
  required: boolean;
  type: string;
  default: string;
}

export interface Parameter {}

export interface Items {
  $ref: string;
  originalRef: string;
}

export interface Schema {
  type: string;
  items: Items;
}

export interface ITag {
  name: string;
  description: string;
}