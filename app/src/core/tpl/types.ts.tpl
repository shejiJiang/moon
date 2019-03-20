import Actions from "./action"

export interface I<%=Util.toUCamelize(pageInfo.pageKey)%>Reducer {
    info : any
}
export type I<%=Util.toUCamelize(pageInfo.pageKey)%>Props = { <%=Util.toLCamelize(pageInfo.pageKey)%>: I<%=Util.toUCamelize(pageInfo.pageKey)%>Reducer } & ReturnType<typeof Actions>;

 <% pageInfo.subComps.forEach(item=>{ %>
export type I<%=Util.toUCamelize(item.fileName)%>Props = { } & I<%=Util.toUCamelize(pageInfo.pageKey)%>Props;
export type I<%=Util.toUCamelize(item.fileName)%>State = { };
 <% }) %>