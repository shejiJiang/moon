import {<% actor.events.forEach(event=>{ %>
    <%=event.name.toUpperCase()%>,
  <% }) %> CLEAN,INIT
} from "./constant";
import { Action } from "@/types";
import { I<%=Util.toUCamelize(pageInfo.pageKey)%>Reducer } from "./types";
import _ from "lodash";

const INITIAL_STATE: I<%=className%>Reducer = {
    isReady:false,
    <% actor.datas.forEach(dataItem=>{ %>
             <%=dataItem.name%>:<%- JSON.stringify(dataItem.value) || Util.getDefaultByType(dataItem.type)%>,
    <% }) %>
};

export default function <%=Util.toLCamelize(pageInfo.pageKey)%>(state = _.cloneDeep(INITIAL_STATE), action: Action): I<%=Util.toUCamelize(pageInfo.pageKey)%>Reducer {
    const { type, payload } = action;
    switch (type) {

        case INIT:
            return {
                ...state,
                isReady:true,
                ... payload
            };

        case CLEAN:
            return _.cloneDeep(INITIAL_STATE);


     <% actor.events.forEach(event=>{ %>
        case <%=event.name.toUpperCase()%>:
                   return {
                       ...state
                   };
    <% }) %>
    }
    return state;
}
