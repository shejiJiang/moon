
const BASE = "<%=Util.toUCamelize(pageInfo.pageKey)%>_"

export const CLEAN=BASE + "CLEAN";
export const INIT=BASE + "INIT";

<% events.forEach(event=>{ %>
export const <%=event.name.toUpperCase()%> = BASE + "<%=event.name%>";
<% }) %>
