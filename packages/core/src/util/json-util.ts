/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/3/27
 **/


import * as  generateSchema from 'generate-schema';
import {compile} from 'json-schema-to-typescript';
import {IWebApiContext} from "../typings/api";
import {IJsonTsGenResult, ITsGenResult} from "../typings/util";

import debug from  'debug';

const log  = debug('web-apis:jsonUtil');
/**
 * 将json转换为ts定义
 *
 * @param value
 * @returns {any}
 */
export async function genTsFromJSON(name:string,value:any,context?: IWebApiContext):Promise<IJsonTsGenResult> {
  log(`根据JSON生成ts定义文件`);
  let schema  = generateSchema.json(name,value);
  let tsResult = await genTsFromSchema(name,schema,context);
  return {...tsResult, schema};
}


//考虑使用z隐式传参呢..

/**
 * 将json schema 转换为ts定义
 *
 * @param {string} name
 * @param jsonSchema
 * @returns {Promise<string>}
 */
export async function genTsFromSchema(name:string,jsonSchema:any,context?: IWebApiContext):Promise<ITsGenResult>{
  log(`根据jsonSchema生成ts定义文件`);
  let tsContent = await compile(
    jsonSchema,
    name,{
      bannerComment:"",
      // unreachableDefinitions:true,
      // $refOptions:{
      //   parse:{
      //     definitions:parse
      //   }
      // }
    }
  );

  let result ={
    //TODO 这是一个默认的规则;
    typeName:jsonSchema.title?jsonSchema.title.replace(/ */ig,""):name,
    tsContent
  }
  return result;
}

export async function genTsFromDefines(definitions:{
  definitions:{[key:string]:any}
},name='IgnoreType'):Promise<string>{
  log(`根据jsonSchema中definitions生成ts定义文件`);

  let tsContent = await compile(
    definitions,name
    ,{
      bannerComment:"",
      unreachableDefinitions:true,
    }
  );
  return tsContent;
}

