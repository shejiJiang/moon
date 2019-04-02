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
import {SchemaProps} from "../web-api/client";


/**
 * 将json转换为ts定义
 *
 * @param value
 * @returns {any}
 */
export async function genTsFromJSON(name:string,value:any):Promise<IJsonTsGenResult> {
  let schema  = generateSchema.json(name,value);
  let tsResult = await genTsFromSchema(name,schema);
  return {...tsResult, schema};
}


interface IJsonTsGenResult extends ITsGenResult{
  typeName:string;
  tsContent:string;
  schema:SchemaProps;
}

interface ITsGenResult{
  typeName:string;
  tsContent:string
}

/**
 * 将json schema 转换为ts定义
 *
 * @param {string} name
 * @param jsonSchema
 * @returns {Promise<string>}
 */
export async function genTsFromSchema(name:string,jsonSchema:any):Promise<ITsGenResult>{
  console.log("jsonSchema::",name,jsonSchema,);
  let tsContent = await compile(
    jsonSchema,
    name,
  );

  let result ={
    typeName:jsonSchema.title?jsonSchema.title.replace(/ */ig,""):name,
    tsContent
  }
  console.log(result);
  return result;
}

// (async()=>{
//
//   let value=[ { cardNo: '2312312312', name: '浙江农商银行', cardImg: '', type: '储蓄卡' } ];
//   console.log(generateSchema.json("cards",value))
//   // console.log(await genTsFromSchema("",value ));
// })()



// (async()=>{
//   let resultl  = await genTsFromJSON('tyer',12);
//   console.log(resultl);
// })()


