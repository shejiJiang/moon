/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/3/19
 **/
//TODO 这里不应该这样引用吧;
import {SchemaProps} from "../web-api/client/index";

export interface IPageDefined{
  /**
   * 页面路径
   *
   * eg:
   *   order
   *   trade/info
   *   trade/list
   *   trade/sub
   *   a-b
   *   a/b/c/e-d
   */
  title:string;

  pagePath:string;
  //通过filepath计算出来
  pageKey?:string;
  lifeCycles:{
    init:{
      param:string;
      content:string;
    },
    clean:{
      param:string;
      content:string;
    },
  },
  mainComp:{
    methods:IActionItem[];
  }

  actors:IActorItem[];
  actions:IAction[];
  subComps:ISubComp[];
}

//TODO 事件要自己选择了.
export interface IActorItem {
  fileName: string;
  datas:IType[];
  events: IActorEvent[];
}

export type DataType ="any"|"string"|"object"|'string[]'|'number';

export interface IType {
  name:string;
  value:any;//从初始值里直接生成ts的定义
  typeName:string;//生成ts类型的名称;  在生成ts时定义出来
  schema:SchemaProps;//ts类型schema  这个可以用户指定或自动生成来做了.
}

export interface IActorEvent {
  content?: string;
  name: string;
  param: any;
}

export interface IAction {
  content?: string;
  fileName: string;
  methods: IActionItem[];
}

export interface IActionItem {
  name: string;
  param: any;
  content?:string;
  comment?:string;
}

export interface ISubComp {
  fileName: string;
  methods: IActionItem[];
}

