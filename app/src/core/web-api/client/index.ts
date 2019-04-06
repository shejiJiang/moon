/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/3/26
 **/

import * as ejs from 'ejs';
import {join} from 'path';
import {insertContent, getHandleFile} from '../../util/compile-util';
import * as stringUtil from '../../util/string-util';
import {compile, compileFromFile} from 'json-schema-to-typescript';
import {genTsFromSchema} from '../../util/json-util';

const Util = {
  ...stringUtil,

  /**
   * 生成ts interface 名称
   * @param names
   */
  genInterfaceName(...names) {
    return `I${stringUtil.toUCamelize(names.join('-'))}`;
  },
};

/**
 * 对于接口的定义
 */
export interface IWebApiDefinded {
  url: string;
  method?: 'post' | 'get'; //默认为post方法
  name: string;
  comment: string;
  requestParam: IParamShape[];
  responseSchema: SchemaProps;
}

//TODO 参数生成要确定下来..
export interface IWebApiGroup {
  name: string;
  apis: IWebApiDefinded[];
  //公共的props, 供其他人调用;
  definitions?: {
    [defName: string]: SchemaProps;
  };
}

// (async()=>{
//
//   let a :IWebApiDefinded = {
//     url:"/area/info",
//     name:'info',
//     comment:'获取地区详细信息',
//     requestParam:[
//       {
//         name:"areaReq",
//         comment:"这是备注信息",
//         jsonSchema:{
//           type:'object',
//           properties:{
//             level:{
//               type:"integer",//TODO 枚举类型处理
//             },
//             id:{
//               type:"integer",//TODO 枚举类型处理
//             }
//           }
//         }
//       }
//     ],
//     responseSchema: {
//       description:"地区信息返回值",
//       type:"array",
//       items: {
//         type:"object",
//         properties:{
//           id:{
//             type:"number",
//           },
//           mname:{
//             type:"string",
//           },
//           code:{
//             type:"number",
//           },
//           lever:{
//             type:"number",
//           },
//           fid:{
//             type:"number",
//           },
//           create_time:{
//             type:"string",
//           },
//           mod_time:{
//             type:"string",
//           },
//           flag:{
//             type:"number",
//           },
//           type:{
//             type:"number",
//           },
//           company:{
//             type:"number",
//           },
//         }
//       }
//     }
//   };
//
//   let webapiGroup :IWebApiGroup = {
//     name:"area",
//     apis:[a]
//   };
//   console.log(webapiGroup);
//
//   let outDir = join(__dirname,"out");
//
//   let fileHandle  = getHandleFile({outDir,tplBase:join(__dirname,"tpl")});
//
//
//   //生成 方法入参入出参的ts定义;
//
//   let tsDefinded = await generateTsDefined(webapiGroup);
//
//   //本项目公共的 ts定义;
//   await fileHandle("api.ts.ejs",async (tplConent)=>{
//     let conent = ejs.render(tplConent, {
//       // ...base,
//       Util,
//       webapiGroup,
//       tsDefinded
//     });
//     return conent;
//   },{saveFilePath:webapiGroup.name+".ts"});
// })();

export interface IWebApiContext {
  webapiGroup: IWebApiGroup;
  projectPath: string;
  //修改返回值的schema信息; 进行调整以生成ts定义; 因为多了api层的修改;
  resSchemaModify?: (resScheme: SchemaProps) => SchemaProps;
  beforeCompile?: (
    apiItem: IWebApiDefinded,
  ) => Promise<IWebApiDefinded> | IWebApiDefinded;
}

/**
 * 生成webapi相关
 *
 * @param {{webapiGroup: IWebApiGroup; projectPath: string}} param
 * @returns {Promise<void>}
 */
export async function buildWebApi(context: IWebApiContext) {
  let {webapiGroup, projectPath} = context;
  let fileHandle = getHandleFile({
    outDir: context.projectPath,
    tplBase: join(__dirname, 'tpl'),
  });
  //生成 方法入参入出参的ts定义;
  if (context.beforeCompile) {
    for (let i = 0, ilen = webapiGroup.apis.length; i < ilen; i++) {
      let apiItem = webapiGroup.apis[i];
      webapiGroup.apis[i] = await context.beforeCompile(apiItem);
    }
  }

  let tsDefinded = await generateTsDefined(context);
  //本项目公共的ts定义;
  await fileHandle(
    'api.ts.ejs',
    async tplConent => {
      let conent = ejs.render(tplConent, {
        Util,
        webapiGroup,
        tsDefinded,
      });

      return conent;
    },
    {saveFilePath: webapiGroup.name + '.ts'},
  );

  //TODO 自动向index文件中添加引用;
}

async function generateTsDefined(context: IWebApiContext): Promise<string> {
  let {webapiGroup, resSchemaModify} = context;

  let results = [];

  for (let i = 0, ilen = webapiGroup.apis.length; i < ilen; i++) {
    let apiItem: IWebApiDefinded = webapiGroup.apis[i];

    for (let i = 0, ilen = apiItem.requestParam.length; i < ilen; i++) {
      let param: IParamShape = apiItem.requestParam[i];
      let {tsContent} = await genTsFromSchema(
        Util.genInterfaceName(apiItem.name, param.name, 'req'),
        param.jsonSchema as any,
        context,
      );
      results.push(tsContent);
    }

    if (apiItem.responseSchema && apiItem.responseSchema) {
      //@ts-ignore;//TODO 这里可以不删除的  充分利用
      delete apiItem.responseSchema.title;

      let _resSchema = apiItem.responseSchema;
      if (resSchemaModify) {
        _resSchema = await resSchemaModify(apiItem.responseSchema);
      }
      apiItem.responseSchema = _resSchema;

      if (_resSchema) {
        let {tsContent} = await genTsFromSchema(
          Util.genInterfaceName(apiItem.name, 'res'),
          _resSchema as any,
          context,
        );
        results.push(tsContent);
      }
    }
  }
  return results.join('\n');
}

interface IJsonSchemaProps {
  description?: string;
}

//https://json-schema.org/latest/json-schema-validation.html#numeric
interface INumberValidates {
  exclusiveMaximum?: number;
  exclusiveMinimum?: number;
  minimum?: number;
  multipleOf?: number;
  maximum?: number;
}

interface IJSIntegerProps extends IJsonSchemaProps, INumberValidates {
  type: 'integer';
}

interface IJSNumberProps extends IJsonSchemaProps, INumberValidates {
  type: 'number';
}

//https://json-schema.org/latest/json-schema-validation.html#string
export interface JSStringProps extends IJsonSchemaProps {
  type: 'string';
  maxLength?: string;
  minLength?: string;
  pattern?: string;
}

//https://json-schema.org/latest/json-schema-validation.html#rfc.section.6.4
export interface IJSArrayProps extends IJsonSchemaProps {
  type: 'array';
  //如果type是数组要
  // 定义子组件的属性;
  items: SchemaProps;
  // 定义最少数量
  minItems?: number;
  maxItems?: number;
  // 是否可以重复
  uniqueItems?: boolean;
}

export interface IJSObjectProps extends IJsonSchemaProps {
  type: 'object';
  maxProperties?: number;
  minProperties?: number;
  properties: {[name: string]: SchemaProps};
  required?: string[];
}

export type SchemaProps =
  | IJSObjectProps
  | IJSArrayProps
  | JSStringProps
  | IJSNumberProps
  | IJSIntegerProps
  | IJsonSchemaRef;

export interface IJsonSchemaRef extends IJsonSchemaProps {
  $ref: string;
}

export interface IJsonSchemaBean extends IJSObjectProps {
  $schema?: string;
  $id?: string;
  title: string;
}

export interface ITypeShape {
  // type:"string"|"number"|"object"|"array";
  comment?: string; //TODO comment 与description 重复了..
  jsonSchema?: SchemaProps;
}

export interface IParamShape extends ITypeShape {
  name: string;
  isInPath?: boolean; //参数是否在路径上带着? /account/refundOrders/{returnOrderNo}
  defaultValue?: any;
}
