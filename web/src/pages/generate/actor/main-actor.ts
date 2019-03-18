import { fromJS } from "immutable";
import { Action, Actor, IMap } from "plume2";
import { ArchiveType, ArchiveSource } from "webapi/archive";

//TODO 事件要自己选择了.
export interface IActorItem{
  name:string;
  events:IActorEvent[];
}

export interface IActorEvent{
  name:string;
  param:any
}

export interface IAction{
  name:string;
  methods:IActionItem[];
}

export interface IActionItem{
  name:string;
  param:any
}

export interface ISubComp{
  name:string;
  methods:IActionItem[];
}


export default class MainActor extends Actor {
  defaultState() {
    return {
      pageDefine:{
        key:"",
        actors:[],
        actions:[],
        subComps:[],
      },
    } as any;
  }

  /**
   * 设置挂单数据
   * @param state
   * @param cart
   */
  @Action("Home:init")
  initCart(state: IMap) {
    return state;
  }
}
