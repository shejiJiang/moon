import { Command } from "./constant";
import { Action } from "@/types";
import { I<%=Util.toUCamelize(pageInfo.pageKey)%>Reducer } from "./types";
import produce from "immer";
import _ from "lodash";

const INITIAL_STATE: I<%=className%>Reducer = {
    isReady:false,
    <% actor.datas.forEach(dataItem=>{ %>
             <%=dataItem.name%>:<%- JSON.stringify(dataItem.value) || Util.getDefaultByType(dataItem.type)%>,
    <% }) %>
};

export default function <%=Util.toLCamelize(pageInfo.pageKey)%>(state = _.cloneDeep(INITIAL_STATE), action: Action): I<%=Util.toUCamelize(pageInfo.pageKey)%>Reducer {
    const { type, payload } = action;

    return produce(state, draftState => {

            switch (type) {
             <% actor.events.forEach(event=>{ %>
                //<%=event.comment||""%>
                case Command.<%=event.name.toUpperCase()%>:
                    return draftState;
            <% }) %>
                //初始化
                case Command.INIT:

                    draftState.isReady=true;
                    for (let propKey in payload) {
                        draftState[propKey] =payload[propKey];
                    }
                    return draftState;

                //重置
                case Command.CLEAN:
                    for (let propKey in INITIAL_STATE) {
                        draftState[propKey] =payload[propKey];
                    }
                    return draftState;
            }



    });
}
