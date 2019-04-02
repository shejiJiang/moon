/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/3/28
 **/

import * as fse from 'fs-extra';
import {join} from 'path';
import {
  buildWebApi,
  IJSObjectProps,
  IParamShape,
  IWebApiDefinded,
  IWebApiGroup,
} from '../../core/web-api/client';

//TODO 复杂类型的参数的考虑.
(async () => {
  let yapis = await fse.readJSON(join(__dirname, 'api.json'));

  for (let i = 0, ilen = yapis.length; i < ilen; i++) {
    let item = yapis[i];
    if (item.name === '财务') {
      let webapiGroup: IWebApiGroup = await transfer(item, {
        name: 'finance',
        getMethodName: methodItem => methodItem.path.replace('/finance/', ''),
      });

      // fse.writeJson(join(__dirname,"web-api.json"),item);

      await buildWebApi({
        webapiGroup,
        projectPath: '/Users/dong/extraIn/RHourseO2O/src/api', //join(__dirname, 'out'),
        beforeCompile:(apiItem: IWebApiDefinded)=>{
          apiItem.url="https://pay.npej.net"+apiItem.url;
          return apiItem;
        },
        resSchemaModify: (schema: IJSObjectProps) => {
          //api外了一层. 所有内容均把data提取出来即可..
          //@ts-ignore;
          if (
            schema &&
            schema.properties &&
            schema.type === 'object' &&
            schema.properties.obj &&
            schema.properties.obj['type'] === 'object'
          ) {
            //@ts-ignore;
            if(schema.properties.obj.properties.data){
              //@ts-ignore;
              return schema.properties.obj.properties.data;
              //@ts-ignore;
            }else if(schema.properties.obj.properties.code){
              //@ts-ignore;
              return schema.properties.obj.properties.code;
            } else {
              return null;
            }
          } else {
            return schema;
          }
        },
      });
    }
  }
})();

function transfer(
  yapiDef: any,
  options: {name: string; getMethodName: (methodItem: IYapiMethod) => string},
) {
  let {name} = options;

  let apis = yapiDef.list.map((methodItem: IYapiMethod): IWebApiDefinded => {
    //@ts-ignore;这里的写法很不好 TODO

    let jsonSchema: IJSObjectProps = {
      type: 'object',
      properties: {},
      required: [],
    };

    let requestParam: IParamShape = {
      name: 'param',
      comment: '',
      jsonSchema,
    };

    let params: ReqParam[] = [];
    //空字符串处理.

    if(methodItem.req_query && methodItem.req_query.length>0){
      params=methodItem.req_query;
    }else if(methodItem.req_body_other){
    //TODO 是否对比下参数的多少. 决定 取那个呢  ?  /finance/saveMoneyByWX 两个值都有的情况 怎么出现  ?
      params=JSON.parse(methodItem.req_body_other);
    }else if(methodItem.req_body_form && methodItem.req_body_form.length>0){
      params=methodItem.req_body_form;
    }

    for (let i = 0, ilen = params.length; i < ilen; i++) {
      let item: ReqParam = params[i];
      let propertier = {
        type: 'string', //TODO 没有获取到参数的类型;
        description: item.desc + ' ' + item.example,
      };
      if (item.required === '1') {
        jsonSchema.required.push(item.name);
      }
      //@ts-ignore;这里的写法很不好 TODO
      jsonSchema.properties[item.name] = propertier;
    }

    //如果是get请求, 把参数聚合起来,单参数设计;

    let resJsonSchema;
    if (methodItem.res_body_is_json_schema) {
      resJsonSchema = JSON.parse(methodItem.res_body);
    } else {
      //any的表示呢 ?
      if (methodItem.res_body && methodItem.res_body.includes('\\"type\\"')) {
        console.warn(`方法返回值类型定义有问题:${methodItem.path}`);
        resJsonSchema = JSON.parse(methodItem.res_body);
      } else {
        resJsonSchema = null;
        console.error(`未处理类型${methodItem.path}`);
      }
    }

    //TODO 把返回值 外面包的一层

    let a: IWebApiDefinded = {
      url: methodItem.path,
      method: (methodItem.method.toLowerCase() as any) || 'get',
      name: options.getMethodName(methodItem),
      comment: methodItem.title,
      requestParam: [requestParam],
      responseSchema: resJsonSchema,
    };
    return a;
  });

  // console.log(apis[0]);

  let webapiGroup: IWebApiGroup = {
    name,
    apis,
  };

  return webapiGroup;
}

export interface ReqParam {
  _id: string;
  desc: string;
  example: string;
  name: string;
  required: string;
}

export interface QueryPath {
  path: string;
  params: any[];
}

export interface IYapiMethod {
  _id: number;
  method: 'POST' | 'GET';
  catid: number;
  title: string;
  path: string;
  project_id: number;
  res_body_type: string;
  req_body_other: string;
  uid: number;
  add_time: number;
  up_time: number;
  __v: number;
  markdown: string;
  desc: string;
  res_body: string;
  tag: any[];
  index: number;
  api_opened: boolean;
  res_body_is_json_schema: boolean;
  req_body_form: any[];
  req_body_is_json_schema: boolean;
  req_params: any[];
  req_headers: any[];
  req_query: ReqParam[];
  query_path: QueryPath;
  type: string;
  status: string;
  edit_uid: number;
}
