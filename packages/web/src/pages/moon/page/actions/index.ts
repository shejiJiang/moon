import Store from '@/redux/store';
import {Command} from '../constant';
import {Dispatch} from 'typings';
import {getActionProxy} from '@/redux/action-util';

import Action from './action';

let db=window.moon && window.moon.context.pageDb || {};

export default (dispatch: Dispatch) => {
  const actions = {
    action: getActionProxy<typeof Action>(Action)(dispatch),

    /**
     * 初始化数据
     */
    async init(param: {id: string}) {
      debugger;
      if (param.id && db[param.id]) {
        dispatch({
          type: Command.init,
          payload: {
            main  :{
              pageInfo:db[param.id]
            },
          },
        });
      } else {
        dispatch({
          type: Command.init,
          payload: {
            //main  :{},
          },
        });
      }
    },

    /**
     * 重置
     */
    async clean() {
      dispatch({type: Command.clean});
    },
  };

  return {actions};
};
