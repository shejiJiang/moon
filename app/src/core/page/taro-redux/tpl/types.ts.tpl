import Actions from "./action"

export interface <%=Util.getReducerTsName(pageInfo.pageKey)%> {
    isReady:boolean;
    <% pageInfo.actors[0].datas.forEach(dataItem=>{ %>
                 <%=dataItem.name%>:<%= Util.getPropsTsName(pageInfo.actors[0].fileName,dataItem.name)%>;
    <% }) %>
}
export type I<%=Util.toUCamelize(pageInfo.pageKey)%>Props = { <%=Util.toLCamelize(pageInfo.pageKey)%>: I<%=Util.toUCamelize(pageInfo.pageKey)%>Reducer } & ReturnType<typeof Actions>;

 <% pageInfo.subComps.forEach(item=>{ %>
export type I<%=Util.toUCamelize(item.fileName)%>Props = { } & I<%=Util.toUCamelize(pageInfo.pageKey)%>Props;
export type I<%=Util.toUCamelize(item.fileName)%>State = { };
 <% }) %>

 <%=valueTsDefinds%>