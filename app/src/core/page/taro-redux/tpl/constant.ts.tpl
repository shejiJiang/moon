
const BASE = "<%=Util.toUCamelize(pageInfo.pageKey)%>_"

<% events.forEach(event=>{ %>
export const <%=event.name.toUpperCase()%> = BASE + "<%=event.name.toUpperCase()%>";
<% }) %>
