import Taro from "@tarojs/taro";
import Api from "@/api";
import Store from "@/store";
import tradeUtil from "@/util/trade";
import { Action } from "@/types";

import {<% events.forEach(event=>{ %>
    <%= event.name.toUpperCase()%>,
  <% }) %>
} from "./constant";

export default (dispatch) => {
    const actions = {
    {<% action.methods.forEach(method=>{ %>
        async <%=method.name%>(id) {
                    //dispatch({ type: INIT, payload: trade });
         },
      <% }) %>

    };
    return actions;
};
