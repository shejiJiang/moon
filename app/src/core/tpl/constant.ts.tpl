
const BASE = "<%=Util.toUCamelize(pageInfo.key)%>_"

<% events.forEach(event=>{ %>
export const <%=event.name.toUpperCase()%> = BASE + "<%=event.name.toUpperCase()%>";
<% }) %>
