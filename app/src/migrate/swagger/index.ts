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
  IJsonSchemaRef,
  IParamShape,
  IWebApiDefinded,
  IWebApiGroup,
  SchemaProps
} from '../../core/web-api/client';
import {IOptions} from "tslint";

async function loadJson(): Promise<ISwaggerApisDocs> {
  return new Promise((resolve, reject) => {
    request('http://118.31.238.229:8390/v2/api-docs', function(
      error,
      response,
      body,
    ) {
      if (error) {
        reject(error);
      } else {
        resolve(JSON.parse(body));
      }
      // console.log('error:', error); // Print the error if one occurred
      // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      // console.log('body:', body); // Print the HTML for the Google homepage.
    });
  });
}

(async () => {
  // let apiJson = await loadJson();
  //   // // console.log(apiJson);
  //   await fse.writeJSON(join(__dirname, 'api.json'), apiJson);
  //   // //按分组;
  // let apiJson= await fse.readJSON(join(__dirname, 'api.json'));
  //
  // //单个文件 生成 , 不生成总的.生成总的, 更新 会有问题.
  // let apiGroups = transfer(apiJson);
  // //
  // await fse.writeJSON(join(__dirname,"webapi-defs.json"),apiGroups);
let apiGroups = await fse.readJSON(join(__dirname, 'webapi-defs.json'));

  //
  // for (let i = 0, ilen = apiGroups.length; i < ilen; i++) {
    let webapiGroup = apiGroups[0];
  webapiGroup.apis=[webapiGroup.apis[0]];
  console.log(webapiGroup);

    await buildWebApi({
      webapiGroup,
      projectPath: join(__dirname, 'out'),
      beforeCompile: (apiItem: IWebApiDefinded) => {
        // apiItem.url =hostPre + apiItem.url;
        return apiItem;
      },
      // resSchemaModify,
    });
  // }

  //还是生成 一个总的 ?
  //转换
})();

function transfer(apiDocs: ISwaggerApisDocs): IWebApiGroup[] {
  //分组;
  let apiGroups: IWebApiGroup[] = [];
  let KeyMap = {};
  for (let url in apiDocs.paths) {
    if(url!=='/account/allOfflineAccounts'){
      continue;
    }
  // let url  = "/account/allOffline Accounts";
    //默认都以/开头.
    let apiItem = apiDocs.paths[url];
    let groupKey = url.split('/')[1];


    if (!KeyMap[groupKey]) {
      KeyMap[groupKey] = {
        name: groupKey,
        apis: [],
        definitions: {},
      };
    }

    let definitions = [];

    //TODO 会不会有两个及三个方法呢 ? 会 account/invoiceProject/{projectId}
    for(let method in apiItem) {
      // console.log(url,method);
      let apiDefItem:any ={url,method};//IWebApiDefinded
      let methodInfo = apiItem[method];


      apiDefItem.name=methodInfo.operationId;
      apiDefItem.comment= methodInfo.summary;
      //in  = body header path

      apiDefItem.requestParam = methodInfo.parameters.filter(item=>
        item.in!='header'
      ).map(item=>{
        if(item.schema){
          definitions=definitions.concat(findAllRefType(apiDocs.definitions,item.schema));
        }

        return {
          name:item.name,
          isInPath:item.in==='path'?true:false,
          comment:item.description,
          jsonSchema:item.schema?item.schema:item
        }
      });
      apiDefItem.responseSchema=methodInfo.responses['200'].schema;

      definitions=definitions.concat(findAllRefType(apiDocs.definitions,apiDefItem.responseSchema));
      KeyMap[groupKey].apis.push(apiDefItem);
    }


    for (let i = 0, ilen = definitions.length; i < ilen; i++) {
      let item = definitions[i];
      if(item.title  && !KeyMap[groupKey].definitions[item.title]){
        KeyMap[groupKey].definitions[item.title]=definitions[i];
      }
    }
  }


  for(let key in KeyMap){
    apiGroups.push(KeyMap[key]);
  }

  return apiGroups;
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

  // console.log("findAllRefType:",refs);
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
      for (let i = jlen, ilen = refs.length; i < ilen; i++) {
        results=results.concat(findAllRefType(definitions,definitions[ref],refs));
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

//
// export interface 2002 {
//   description: string;
//   schema: Schema;
// }
//
// export interface 4012 {
//   description: string;
// }
//
// export interface 4032 {
//   description: string;
// }
//
// export interface 4042 {
//   description: string;
// }
//
// export interface Responses {
//   200: 2002;
//   401: 4012;
//   403: 4032;
//   404: 4042;
// }
//
// export interface Get {
//   tags: string[];
//   summary: string;
//   operationId: string;
//   produces: string[];
//   parameters: Parameter[];
//   responses: Responses;
//   deprecated: boolean;
// }
//
// export interface RootObject {
//   get: Get;
// }

export interface ITag {
  name: string;
  description: string;
}
