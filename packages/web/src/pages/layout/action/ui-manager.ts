import {ViewAction} from 'plume2';
import Store from '../store';
//import webapi from "webapi";
//import { message } from "antd";

export default class extends ViewAction {
  store: Store;

  init() {
    // this.query();
  }

  /**
   * 选中一个节点
   */
  chooseComp(compPaths:string[]) {
    this.store.dispatch("ui:manger:update", {
      keyPath:['uiInfo','choosedCompPath'],
      value:compPaths
    });
  }

  /**
   *
   */
  change() {
    //this.store.dispatch("main:actor:event:add", actorIndex);
  }
}
