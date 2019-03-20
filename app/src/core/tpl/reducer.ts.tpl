import {<% actor.events.forEach(event=>{ %>
    <%=event.name.toUpperCase()%>,
  <% }) %>
} from "./constant";
import { Action } from "@/types";
import { I<%=Util.toUCamelize(pageInfo.pageKey)%>Reducer } from "./types";
import _ from "lodash";

const INITIAL_STATE: I<%=className%>Reducer = {
    <% actor.datas.forEach(dataItem=>{ %>
             <%=dataItem.name%>:<%- JSON.stringify(dataItem.value) || Util.getDefaultByType(dataItem.type)%>,
    <% }) %>
};

export default function <%=Util.toLCamelize(pageInfo.pageKey)%>(state = INITIAL_STATE, action: Action): I<%=Util.toUCamelize(pageInfo.pageKey)%>Reducer {
    const { type, payload } = action;
    switch (type) {
     <% actor.events.forEach(event=>{ %>
        case <%=event.name.toUpperCase()%>:
                   return {
                       ...state
                   };
    <% }) %>
    }
    return state;
}
