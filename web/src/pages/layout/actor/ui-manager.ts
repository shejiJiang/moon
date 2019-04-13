import {fromJS} from 'immutable';
import {Action, Actor, IMap} from 'plume2';

export default class UiManager extends Actor {
  defaultState() {
    return {
      uiInfo: {
        choosedCompPath:null
      },
    } as any;
  }

  /**
   *
   */
  @Action('ui:manger:update')
  UiMangerUpdate(state: IMap, {keyPath,value}:{keyPath:string[],value}) {
    return state.setIn(keyPath,value);
  }
}
