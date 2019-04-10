import Taro from "@tarojs/taro";
import Api from "@/api";
import Store from "@/store";
import tradeUtil from "@/util/trade";
import { Action } from "@/types";
import { <%=Util.getReducerTsName(pageInfo.pageKey)%> } from "@/pages/<%=pageInfo.pagePath%>/types";

import {<% events.forEach(event=>{ %>
    <%= event.name.toUpperCase()%>,
  <% }) %> CLEAN,INIT
} from "./constant";


export default (dispatch) => {
  function getData():<%=Util.getReducerTsName(pageInfo.pageKey)%> {
          return Store.getState().<%=instanceName%>;
  }

    const actions = {

        /**
         * 初始化数据
         */
        async init() {
            dispatch({ type: INIT,payload:{} } as Action);
        },

        /**
         * 页面注销时还原store状态,
         */
        async clean() {
            dispatch({ type: CLEAN } as Action);
        },

    <% action.methods.forEach(method=>{ %>

        /**
         * <%= method.comment||"" %>
         */
        async <%=method.name%>() {
                    //dispatch({ type: INIT, payload: trade });
         },
      <% }) %>
    };
    return actions;
};
