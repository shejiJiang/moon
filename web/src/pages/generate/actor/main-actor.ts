import {fromJS} from 'immutable';
import {Action, Actor, IMap} from 'plume2';
import {ArchiveType, ArchiveSource} from 'webapi/archive';
// import {IPageDefined} from "../../../../../app/src/core/generate";

export default class MainActor extends Actor {
  defaultState() {
    return {
      pageDefine: {
        key: '',
        actors: [],
        actions: [],
        subComps: [],
      },
    } as any;
  }

  /**
   * 设置挂单数据
   * @param state
   * @param cart
   */
  @Action('Home:init')
  initCart(state: IMap) {
    return state;
  }

  /**
   * 添加 actor
   *
   * @param {IMap} state
   * @returns {Map<string, any>}
   */
  @Action('main:actor:add')
  addActor(state: IMap) {
    return state.updateIn(['pageDefine', 'actors'], actors => {
      return actors.push(fromJS({name: '', events: [{name: '', param: ''}]}));
    });
  }

  /**
   * 为某个actor添加方法
   * @param {IMap} state
   * @param {number} index
   * @returns {Map<string, any>}
   */
  @Action('main:actor:event:add')
  addActorEvent(state: IMap,index:number) {
    return state.updateIn(['pageDefine', 'actors',index,'events'], events => {
      return events.push(fromJS({name: '', param: ''}));
    });
  }


  /**
   * 添加一个action
   * @param {IMap} state
   * @returns {Map<string, any>}
   */
  @Action('main:action:add')
  addAction(state: IMap) {
    return state.updateIn(['pageDefine', 'actors'], actors => {
      return actors.push(fromJS({name: '', events: [{name: '', param: ''}]}));
    });
  }


  /**
   * 为某个action添加方法
   * @param {IMap} state
   * @param {number} index
   * @returns {Map<string, any>}
   */
  @Action('main:action:method:add')
  addActionMethod(state: IMap,index:number) {
    return state.updateIn(['pageDefine', 'actions',index,'methods'], methods => {
      return methods.push(fromJS({name: '', param: ''}));
    });
  }


  /**
   * 添加子组件
   * @param {IMap} state
   * @returns {Map<string, any>}
   */
  @Action('main:subComp:add')
  addSubComp(state: IMap) {
    return state.updateIn(['pageDefine', 'actors'], actors => {
      return actors.push(fromJS({name: '', events: [{name: '', param: ''}]}));
    });
  }
}
