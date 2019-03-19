/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/3/19
 **/

export interface IPageDefined{
  key:string;
  actors:IActorItem[];
  actions:IAction[];
  subComps:ISubComp[];
}

//TODO 事件要自己选择了.
export interface IActorItem {
  name: string;
  events: IActorEvent[];
}

export interface IActorEvent {
  name: string;
  param: any;
}

export interface IAction {
  name: string;
  methods: IActionItem[];
}

export interface IActionItem {
  name: string;
  param: any;
}

export interface ISubComp {
  name: string;
  methods: IActionItem[];
}


// 带扩展信息的. 页面定义;
export interface IPageDefined{
  key:string;
  actors:IActorItem[];
  actions:IAction[];
  subComps:ISubComp[];
}
