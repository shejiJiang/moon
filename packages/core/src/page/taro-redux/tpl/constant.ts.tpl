
const BASE = "<%=Util.toUCamelize(pageInfo.pageKey)%>_";

export const enum Command {
  init = '<%=Util.toUCamelize(pageInfo.pageKey)%>_INIT',
  clean = '<%=Util.toUCamelize(pageInfo.pageKey)%>_CLEAN',
  <% events.forEach(event=>{ %>

  //<%=event.comment||""%>
  <%=event.name%> =  "<%=Util.toUCamelize(pageInfo.pageKey)%>_<%=event.name%>",
  <% }) %>
}
