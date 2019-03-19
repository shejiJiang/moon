import {<% actor.events.forEach(event=>{ %>
    <%=event.name.toUpperCase()%>,
  <% }) %>
} from "./constant.ts";
import { Action } from "@/types";
import { I<%=Util.toUCamelize(pageInfo.key)%>Reducer } from "./types";
import _ from "lodash";

const INITIAL_STATE: I<%=className%>Reducer = {
    info: {} as any
};

export default function <%=Util.toLCamelize(pageInfo.key)%>(state = INITIAL_STATE, action: Action): I<%=Util.toUCamelize(pageInfo.key)%>Reducer {
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
