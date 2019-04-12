import {fromJS} from 'immutable';
import {Action, Actor, IMap} from 'plume2';

export default class UiManager extends Actor {
  defaultState() {
    return {
      uiInfo: {},
    } as any;
  }

  /**
   *
   */
  @Action('ui:manger:update')
  UiMangerUpdate(state: IMap, payload) {
    return state;
  }
}
