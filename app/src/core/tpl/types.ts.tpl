import Actions from "./action"

export interface I<%=Util.toUCamelize(pageInfo.key)%>Reducer {
    info : any
}
export type I<%=Util.toUCamelize(pageInfo.key)%>Props = { <%=Util.toLCamelize(pageInfo.key)%>: I<%=Util.toUCamelize(pageInfo.key)%>Reducer } & ReturnType<typeof Actions>;

 <% pageInfo.subComps.forEach(item=>{ %>
export type I<%=Util.toUCamelize(item.name)%>Props = { } & I<%=Util.toUCamelize(pageInfo.key)%>Props;
export type I<%=Util.toUCamelize(item.name)%>State = { };
 <% }) %>