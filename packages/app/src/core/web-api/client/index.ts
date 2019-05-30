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
import {insertFile, getHandleFile, IFileSaveOpt} from '../../util/compile-util';
import * as stringUtil from '../../util/string-util';
import {compile, compileFromFile} from 'json-schema-to-typescript';
import {genTsFromDefines, genTsFromSchema} from '../../util/json-util';


//TODO 参数是file类型的处理
//TODO 类型生成重复的问题?

const Util = {
  ...stringUtil,

  getMethodName(methodName:string){

    if(!methodName){
      return 'post';
    }else if(methodName.toLowerCase()==='export'){
      return 'exportF'
    }else if(methodName.toLowerCase()==='delete'){
      return 'deleteF'
    }else{
      return methodName;
    }
  },

  /**
   * 生成ts interface 名称
   * @param names
   */
  genInterfaceName(...names) {
    return `I${stringUtil.toUCamelize(names.join('-'))}`;
  },

  /**
   * 从jsonSchema中获取类型的名称;
   * @param schema
   */
  getTypeNameFromSchema(schema){
    if(!schema){
      return 'unknown';
    }


    if(schema.title){
      return schema.title.replace(/(«|»)/ig,"");
    }else{
      return 'unknown';
    }
  }
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

export interface IWebApiContext  extends IFileSaveOpt{
  webapiGroup: IWebApiGroup;
  projectPath: string;
  //修改返回值的schema信息; 进行调整以生成ts定义; 因为多了api层的修改;
  resSchemaModify?: (resScheme: SchemaProps,context: IWebApiContext) => SchemaProps;
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
    context,
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

  // let results = [];

  let param2RespTypes = [];

  for (let i = 0, ilen = webapiGroup.apis.length; i < ilen; i++) {
    let apiItem: IWebApiDefinded = webapiGroup.apis[i];

    for (let i = 0, ilen = apiItem.requestParam.length; i < ilen; i++) {
      let param: IParamShape = apiItem.requestParam[i];
      //@ts-ignore
      param.jsonSchema.title=Util.genInterfaceName(apiItem.name, param.name, 'req');
      param2RespTypes.push(param.jsonSchema);
      // let {tsContent} = await genTsFromSchema(
      //   Util.genInterfaceName(apiItem.name, param.name, 'req'),
      //   param.jsonSchema as any,
      //   context,
      // );
      // results.push(tsContent);
    }

    if (apiItem.responseSchema) {

      let _resSchema = apiItem.responseSchema;
      if (resSchemaModify) {
        _resSchema = await resSchemaModify(apiItem.responseSchema,context);
      }
      apiItem.responseSchema = _resSchema;

      if (_resSchema) {
        param2RespTypes.push(_resSchema);
        // let {tsContent} = await genTsFromSchema(
        //   Util.genInterfaceName(apiItem.name, 'res'),
        //   _resSchema as any,
        //   context,
        // );
        // results.push(tsContent);
      }
    }
  }


  for (let i = 0, ilen = param2RespTypes.length; i < ilen; i++) {
    let item = param2RespTypes[i];
    context.webapiGroup.definitions[item.title]=item;
  }

 let content  = await genTsFromDefines({
    definitions:context.webapiGroup.definitions
  });

  return content;
}

interface IJsonSchemaProps {
  description?: string;
  title?: string;
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