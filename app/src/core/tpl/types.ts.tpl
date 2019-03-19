import Actions from "./action.ts"

export interface I<%=Util.toUCamelize(pageInfo.key)%>Reducer {
    info : any
}

export type I<%=Util.toUCamelize(pageInfo.key)%>Props = { <%=Util.toLCamelize(pageInfo.key)%>: I<%=Util.toUCamelize(pageInfo.key)%>Reducer } & ReturnType<typeof Actions>;