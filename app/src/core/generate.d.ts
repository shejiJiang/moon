/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/3/19
 **/

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
  pagePath:string;
  //通过filepath计算出来
  pageKey?:string;
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
  value:any;
  type:DataType;
}

export interface IActorEvent {
  name: string;
  param: any;
}

export interface IAction {
  fileName: string;
  methods: IActionItem[];
}

export interface IActionItem {
  name: string;
  param: any;
}

export interface ISubComp {
  fileName: string;
  methods: IActionItem[];
}

