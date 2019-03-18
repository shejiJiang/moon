import { fromJS } from 'immutable';
import { Action, Actor, IMap } from 'plume2';

export default class MainActor extends Actor {
  defaultState() {
    return {
      test:"home::teststeste"
    };
  }

  /**
   * 设置挂单数据
   * @param state
   * @param cart
   */
  @Action('Home:initCart')
  initCart(state: IMap) {

    return state;
  }
}
