import {fromJS} from 'immutable';
import {Action, Actor, IMap} from 'plume2';

/**
 {

  key: 'div',
  style: {},
  props: {},
  children: [

  ]
}
 * @type {{key: string; style: {}; props: {}; children: any[]}}
 */


export default class CompDef extends Actor {
  defaultState() {
    return {
      compInfo: {
        key: 'div',
        style: {},
        props: {},
        children: [
          {
            key: 'div',
            style: {
              "backgroundColor":"red"
            },
            props: {},
            children: [
              {
                key: 'div',
                style: {},
                props: {},
                children: [
                ]
              }
            ]
          }, {

            key: 'div',
            style: {},
            props: {},
            children: [

            ]
          }, {

            key: 'div',
            style: {},
            props: {},
            children: [

            ]
          }
        ]
      },
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

  @Action('comp:del')
  CompDel(state: IMap, payload) {
    return state;
  }

  /**
   * 删除组件
   */
  @Action('comp:move')
  CompMove(state: IMap, {from,to,type}:{from:string[];to:string[];type:"sub"|"before"|"after"}) {

    //TODO 这里有bug从后往前插 与从前往后插,还不样, index会变
        if (type==='before') {
          let index=  to[to.length-1];
         let newState =   state.withMutations((stateMu)=>{

           console.log('before:',to.slice(0,to.length-1));
           stateMu.updateIn( to.slice(0,to.length-1),(children)=>{
             children.splice(index,0,stateMu.getIn(from))
           });
           stateMu.deleteIn(from);
           return stateMu;
          });
         console.log(newState.get('compInfo').toJS());
         return newState;
        } else  if(type==='after') {
          let index=  to[to.length-1];
          return  state.withMutations((stateMu)=>{

            console.log('after::',to.slice(0,to.length-1));
            stateMu.updateIn( to.slice(0,to.length-1),(children)=>{
              return children.splice(index+1,0,stateMu.getIn(from))
            });
            stateMu.deleteIn(from);
            return stateMu;
          });

        } else  if(type==='sub'){
          return  state.withMutations((stateMu)=>{
            stateMu.updateIn( to.concat(['children']),(children)=>{
              return children.push(stateMu.getIn(from));
            });
            stateMu.deleteIn(from);
            return stateMu;
          });
        } else {
          throw new Error(`操作类型错误 comp:del => ${type}`);
        }
  }

  /**
   * 更新组件属性
   *
   */
  @Action('comp:update')
  CompUpdate(state: IMap, {propPath,value}) {
    return state.setIn(propPath,fromJS(value));
  }

  /**
   * 更新组件上下文信息
   */
  @Action('context:update')
  ContextUpdate(state: IMap, payload) {
    return state;
  }
}
