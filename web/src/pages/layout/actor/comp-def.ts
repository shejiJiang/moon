import {fromJS} from 'immutable';
import {Action, Actor, IMap} from 'plume2';

export default class CompDef extends Actor {
  defaultState() {
    return {
      compInfo: [{key: '', style: {}, props: {}, children: []}],

      context: {platform: ''},
    } as any;
  }

  /**
   * 添加组件
   */
  @Action('comp:add')
  CompAdd(state: IMap, payload) {
    return state;
  }

  /**
   * 删除组件
   */
  @Action('comp:del')
  CompDel(state: IMap, payload) {
    return state;
  }

  /**
   * 更新组件属性
   */
  @Action('comp:update')
  CompUpdate(state: IMap, payload) {
    return state;
  }

  /**
   * 更新组件上下文信息
   */
  @Action('context:update')
  ContextUpdate(state: IMap, payload) {
    return state;
  }
}
