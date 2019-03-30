/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/3/27
 **/


import  * as  generateSchema  from  'generate-schema';
import {compile, compileFromFile} from 'json-schema-to-typescript';


/**
 * 将json转换为ts定义
 *
 * @param value
 * @returns {any}
 */
export async function genTsFromJSON(name:string,value:any) {
  let schema  = generateSchema.json(name,value);
  let tsResult = await genTsFromSchema(name,schema);
  return tsResult;
}


/**
 * 将json schema 转换为ts定义
 *
 * @param {string} name
 * @param jsonSchema
 * @returns {Promise<string>}
 */
export async function genTsFromSchema(name:string,jsonSchema:any):Promise<string>{
 console.log(`genTsFromSchema ${name} ${jsonSchema}`);
  let result = await compile(
    jsonSchema,
    name,
  );
  return result;
}



// (async()=>{
//   let resultl  = await genTsFromJSON('tyer',12);
//   console.log(resultl);
// })()