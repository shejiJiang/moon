/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/4/2
 **/

import * as request from 'request';
import  * as fse  from 'fs-extra';
import {join} from 'path';
import {IWebApiGroup, SchemaProps} from "../../core/web-api/client";


async function loadJson():Promise<ISwaggerApisDocs> {
  return new Promise((resolve,reject)=>{

    request("http://118.31.238.229:8390/v2/api-docs",function (error, response, body) {
      if(error) {
        reject(error);
      } else {
        resolve(JSON.parse(body));
      }
      //
      // console.log('error:', error); // Print the error if one occurred
      // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      // console.log('body:', body); // Print the HTML for the Google homepage.
    });
  });

}


(async()=>{

  let apiJson  = await loadJson();
  console.log(apiJson);
  await fse.writeJSON(join(__dirname,"api.json"), apiJson);
  //按分组;
  //单个文件 生成 , 不生成总的.生成总的, 更新 会有问题.


  //还是生成 一个总的 ?
  //转换

})();

function transfer(apiDocs:ISwaggerApisDocs):IWebApiGroup[]{






  return [];
}

interface ISwaggerApisDocs{
  swagger:string;
  host:string;
  basePath:string;
  info:ISwaggerInfo;
  tags:ITag[];
  paths:{
    [apiUrl:string]:IApiDefinded;
  };
  definitions:{
    [defName:string]:SchemaProps;
  }
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


interface IApiDefinded{
  get?:IMethodDefinded;
  post?:IMethodDefinded;
  [methodType:string]:IMethodDefinded;
}

export interface IMethodDefinded {
  tags:string[];
  summary:string;
  operationId:string;
  produces:string[];
  parameters:IParam;
  responses:{
    [status:string]:IResponseDef;
  },
  deprecated:boolean;
}

export interface IResponseDef{
  description:string;
  schema:SchemaProps;
}


export interface IParam{
  name: string;
  in: string;
  description: string;
  required: boolean;
  type: string;
  default: string;
}



export interface Parameter {
}

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

export interface ITag{
  name: string;
  description: string;

}