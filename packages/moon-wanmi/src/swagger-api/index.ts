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
import * as _ from  'lodash';
import { join } from 'path';
import MoonCore from 'moon-core';
import debug from 'debug';
import {
  IJSObjectProps,
  IWebApiContext,
  IWebApiDefinded,
  IWebApiGroup,
  SchemaProps
} from 'moon-core/declarations/typings/api';

import { IFileSaveOptions } from 'moon-core/declarations/typings/page';
import { IInsertOption } from 'moon-core/declarations/typings/util';
import { IMoonConfig } from 'moon-core/declarations/typings/config';

const log = debug('j2t:cli');
async function loadJson(): Promise<any> {
  return new Promise((resolve, reject) => {

    console.log(`从${defaulltMoonConfig.api.swaggerUrl}中加载api doc信息`);
    request(defaulltMoonConfig.swaggerApi, function(error, response, body) {
      if (error) {
        reject(error);
      } else {
        resolve(JSON.parse(body));
      }
    });
  });
}

let defaulltMoonConfig: IMoonConfig;

let projectPath = process.cwd();
let configFilePath = join(projectPath, '.moon.json');
try {
  console.log('读取配置文件', configFilePath);
  if (fse.pathExistsSync(configFilePath)) {
    defaulltMoonConfig = fse.readJSONSync(configFilePath);
  } else {
    throw new Error('配置不存在:' + configFilePath);
  }
} catch (err) {
  throw new Error('配置读取失败:' + configFilePath);
}

interface IApiIndex {
  [controllerName: string]: {
    fileName: string;
    methods: {
      [methodName: string]: {
        responseTs: string[];
      };
    };
  };
}
let oldApiIndex: IApiIndex = {};

/**
 * 判断是否是新添加的方法,如果是新方法, 默认在开发时走mock流程.
 *
 * @param {string} controller
 * @param {string} method
 * @returns {boolean}
 */
function isNewMethod(controller: string, method: string): boolean {
  let controllerInfo = oldApiIndex[controller];
  if (controllerInfo && controllerInfo.methods[method]) {
    return false;
  }

  return true;
}

function isContain(db,controller: string, method: string){

  if(db[controller] && db[controller].includes(method)){
    return true;
  }else{
    return false;
  }
}

(async () => {
  let workBase = projectPath;
  const ApiIndexPath = join(workBase,defaulltMoonConfig.api.dir ,'_api-info.json');

  let apiJson = await loadJson();
  //   // // console.log(apiJson);
  //   await fse.writeJSON(join(__dirname, 'swagger-api.json'), apiJson);
  //   // //按分组;
  // let apiJson= await fse.readJSON(join(__dirname, 'pets-api.json'));
  //
  // //单个文件 生成 , 不生成总的.生成总的, 更新 会有问题.
  let apiGroups = transfer(apiJson);
  // await fse.writeJSON(join(__dirname, 'webapi-def.json'), apiGroups);

  try {
    oldApiIndex = await fse.readJSONSync(ApiIndexPath);
  } catch (err) {
    console.warn('读取历史api索引出错: ', err);
  }

  let basePath = join(workBase,defaulltMoonConfig.api.dir);

  let inserts: IInsertOption[] = [];
  let newMethods: { controller: string; method: string }[] = []; //新添加的方法记录
  for (let i = 0, ilen = apiGroups.length; i < ilen; i++) {
    try {
      let webapiGroup: IWebApiGroup = apiGroups[i];
      if (defaulltMoonConfig.api.exclude.includes(webapiGroup.name)) {
        console.log(
          `${i}/${ilen}`,
          'ignore webapiGroup:',
          webapiGroup.name,
          'due to MoonConfig.api.exclude'
        );
        continue;
      } else {
        console.log(`${i}/${ilen}`, 'current webapiGroup:', webapiGroup.name);
      }
      let mockData = {};

      await MoonCore.WebApiGen.buildWebApi({
        webapiGroup,
        projectPath: basePath, // join(__dirname, 'out'),
        beforeCompile: (apiItem: IWebApiDefinded) => {
          // apiItem.url =hostPre + apiItem.url;
          return apiItem;
        },
        resSchemaModify: async (
          schema: SchemaProps,
          apiItem: IWebApiDefinded,
          context: IWebApiContext
        ): Promise<SchemaProps> => {
          let _isNewMethod  = isNewMethod(context.webapiGroup.name, apiItem.name);
          if (_isNewMethod) {
            newMethods.push({
              controller: context.webapiGroup.name,
              method: apiItem.name
            });
          }
          //添加生成mock数据的流程;;
          let finalSchema = resSchemaModify(schema, apiItem, context);
          if (finalSchema) {
            //如果Schema有值,那么生成假数据
            let json = {};
            if (!isContain(defaulltMoonConfig.api.mock.ignoreApi,webapiGroup.name,apiItem.name)
            ) {
              //查看 是否需要翻译 , 只有当前是mock的, 及新接口才需要mock
              if(isContain(defaulltMoonConfig.api.mock.mockApi,webapiGroup.name,apiItem.name) || _isNewMethod) {
                try {
                  console.log(
                    `当前Controller:  ${webapiGroup.name}:['${apiItem.name}'],如果过进入infinite loop . 请设置moon.config :api.mock.ignoreApi`
                  );
                  json = await MoonCore.fakeGen.genrateFakeData(
                    finalSchema,
                    context.webapiGroup.definitions
                  );
                } catch (err) {
                  //TODO 这里把出错的数据记录下来后面分析出错的原因;;
                  console.error(err, '解析数据出错;;');
                }
              }
            } else {
              fse.writeFileSync(join(workBase,"mock-err"+webapiGroup.name+".json"), JSON.stringify({...finalSchema,definitions:context.webapiGroup.definitions}, null, 2));
            }
            mockData[
              (finalSchema.title || 'noneName').replace(/(«|»)/gi, '')
            ] = json;
          }
          return finalSchema;
        },
        beforeSave: (options: IFileSaveOptions, context: any) => {
          options.content = options.content
            .replace(
              `import sdk from "@api/sdk";`,
              `import * as sdk from './fetch';`
            )
            .replace(
              `import sdk from '@api/sdk';`,
              `import * as sdk from './fetch';`
            )
            .replace(/result\.data/gi, 'result.context');

          //在这里添加api TODO api中mock相关的操作, 应该在这里添加
          return Promise.resolve(options);
        }
      });

      let controllerName = MoonCore.StringUtil.toLCamelize(webapiGroup.name);
      let filePath = `./${webapiGroup.name}`;

      inserts.push({
        mark: "'whatwg-fetch';",
        isBefore: false,
        content: `import  ${controllerName} from '${filePath}';`,
        check: (content: string) => !content.includes(filePath)
      });

      inserts.push({
        mark: 'default {',
        isBefore: false,
        content: `${controllerName},`,
        check: (_, raw) => !raw.includes(filePath)
      });

      //保存mock数据;
      let mockFilePath = join(
        projectPath,
        'web_modules/api/mock/',
        webapiGroup.name + '.json'
      );
      log('保存mock api定义数据');
      fse.ensureFileSync(mockFilePath);
       let oldValue ={};
      try {
        log('读取oldvalue, 执行merge操作');
        oldValue = fse.readJsonSync(mockFilePath);
      } finally {
        fse.writeFileSync(mockFilePath, JSON.stringify(_.merge(mockData,oldValue), null, 2));
      }
    } catch (err) {
      console.error(err);
    }
  }

  await MoonCore.CompileUtil.insertFile(join(basePath, 'index.ts'), inserts);
  //还是生成 一个总的 ?
  //转换

  //生成api索引文件::
  console.log('开始生成api索引文件,时间稍长,耐心等待');
  let indexInfo = MoonCore.TsIndex.genApiTsIndex({
    tsConfig: join(workBase, 'tsconfig.json'),
    apiDir: join(workBase, 'web_modules/api'),
    apiSuffix: 'Controller'
  });
  log('保存api索引信息');

  if (newMethods.length > 0) {
    modifyAndSaveMoonConfig(newMethods);
  } else {
  }

  fse.writeFileSync(ApiIndexPath, JSON.stringify(indexInfo, null, 2));
})();

function modifyAndSaveMoonConfig(
  newMethods: { controller: string; method: string }[]
) {
  for (let i = 0, iLen = newMethods.length; i < iLen; i++) {
    let { controller, method } = newMethods[i];
    if (!defaulltMoonConfig.api.mock.mockApi[controller]) {
      defaulltMoonConfig.api.mock.mockApi[controller] = [];
    }

    if (!defaulltMoonConfig.api.mock.mockApi[controller].includes(method)) {
      defaulltMoonConfig.api.mock.mockApi[controller].push(method);
    }
  }
  console.log('保存.moon.config,更新mock接口信息');
  fse.writeFileSync(
    configFilePath,
    JSON.stringify(defaulltMoonConfig, null, 2)
  );
}

function resSchemaModify(
  schema: SchemaProps,
  apiItem: IWebApiDefinded,
  context: IWebApiContext
): SchemaProps {
  //api外了一层. 所有内容均把data提取出来即可..
  if (!schema) {
    return schema;
  }

  //TODO void怎么表示  ?
  //@ts-ignore;
  if (schema['originalRef'] === 'BaseResponse') {
    return null;
  } else if (schema['$ref']) {
    // console.log('schema[\'$ref\']',schema);
    let subSchema = context.webapiGroup.definitions[
      schema['originalRef']
    ] as IJSObjectProps;

    if (!subSchema) {
      return null;
    }
    // console.log('hema[\'originalRef\']===\'BaseResponse\'',subSchema);
    if (
      subSchema.type === 'object' &&
      subSchema.properties &&
      subSchema.properties.context
    ) {
      if (subSchema.properties.context['$ref']) {
        return context.webapiGroup.definitions[
          subSchema.properties.context['originalRef']
        ];
      } else if (subSchema.properties.context['type'] === 'array') {
        let arrayAschema = subSchema.properties.context;
        arrayAschema.title =
          //@ts-ignore
          subSchema.properties.context.items.originalRef + 'Array';
        return arrayAschema;
      } else {
        return subSchema.properties.context;
      }
    } else {
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

  let temp = {};
  let KeyMap = {};
  for (let url in apiDocs.paths) {
    let apiItem = apiDocs.paths[url];

    let groupKey = '';

    //TODO 会不会有两个及三个方法呢 ? 会 account/invoiceProject/{projectId}
    for (let method in apiItem) {
      let apiDefItem: any = { url, method };
      let methodInfo: IMethodDefinded = apiItem[method];

      // let groupKey = url.split('/')[1];
      groupKey = methodInfo.tags[0]; //controller

      if (!KeyMap[groupKey]) {
        KeyMap[groupKey] = {
          name: groupKey,
          apis: [],
          definitions: {}
        };
      }

      temp[url] = { url, methodName: methodInfo.operationId, group: groupKey };

      apiDefItem.name = MoonCore.StringUtil.toLCamelize(methodInfo.operationId)
        .replace(/UsingPOST.*/gi, '')
        .replace(/UsingPUT.*/gi, '')
        .replace(/UsingGET.*/gi, '')
        .replace(/UsingDELETE.*/gi, '_');
      apiDefItem.comment = methodInfo.summary;
      //in  = body header path

      apiDefItem.requestParam = methodInfo.parameters
        .filter(item => item.in != 'header')
        .map(item => {
          if (item.schema) {
            addDef2List(
              KeyMap[groupKey].definitions,
              findAllRefType(apiDocs.definitions, item.schema)
            );
          }

          return {
            name: item.name,
            isInPath: item.in === 'path' ? true : false,
            comment: item.description,
            jsonSchema: item.schema ? item.schema : item
          };
        });
      apiDefItem.responseSchema = methodInfo.responses['200'].schema;
      addDef2List(
        KeyMap[groupKey].definitions,
        findAllRefType(apiDocs.definitions, apiDefItem.responseSchema)
      );
      KeyMap[groupKey].apis.push(apiDefItem);
    }
  }

  for (let key in KeyMap) {
    apiGroups.push(KeyMap[key]);
  }
  return apiGroups;
}

function addDef2List(
  definitions: {
    [defName: string]: SchemaProps;
  },
  schema: SchemaProps | SchemaProps[]
) {
  if (schema instanceof Array) {
    for (let i = 0, iLen = schema.length; i < iLen; i++) {
      let schemaItem = schema[i];

      if (!definitions[schemaItem.title]) {
        definitions[schemaItem.title] = schemaItem;
      }
    }
  } else {
    if (!definitions[schema.title]) {
      definitions[schema.title] = schema;
    }
  }
}

//TODO 枚举类型的控制.
function findAllRefType(
  definitions: {
    [defName: string]: SchemaProps;
  },
  obj: any,
  refs: string[] = []
): SchemaProps[] {
  if (!obj) {
    return [];
  }

  let refLeng = refs.length;
  traverseObj(obj, refs);

  //TODO 这里要不要把名字改了呢 ?
  let results = [];

  if (obj && !obj.$ref) {
    results.push(obj);
  }

  for (let i = refLeng, ilen = refs.length; i < ilen; i++) {
    let ref = refs[i].replace('#/definitions/', '');

    if (ref && definitions[ref]) {
      results.push(definitions[ref]);
      //遍历对象, 至到找到所有的引用内容为至;
      let jlen = refs.length;
      traverseObj(definitions[ref], refs);
      // console.log('子 traverseObj',refs);
      if (refs.length > jlen) {
        //有新的ref添加进来..

        for (let j = jlen, allen = refs.length; j < allen; j++) {
          results = results.concat(
            findAllRefType(
              definitions,
              definitions[refs[j].replace('#/definitions/', '')],
              refs
            )
          );
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
function traverseObj(obj: object, refs: string[] = []) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key) && key === '$ref') {
      if (!refs.includes(obj[key])) {
        refs.push(obj[key]);
      }
    } else if (typeof obj[key] === 'object') {
      traverseObj(obj[key], refs);
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
