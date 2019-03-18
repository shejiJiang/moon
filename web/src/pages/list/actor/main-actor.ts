import { fromJS } from "immutable";
import { Action, Actor, IMap } from "plume2";
import { ArchiveType, ArchiveSource } from "webapi/archive";

export default class MainActor extends Actor {
  defaultState() {
    return {
      uploadVisible: false,
      search: {
        total: 0,
        pageNum: 0,
        q: "",
        type: "",
        pageSize: 10,
        source: ""
      },
      archives: fromJS([]),
      isLoading: true
    } as any;
  }

  /**
   * 设置挂单数据
   * @param state
   * @param cart
   */
  @Action("Home:initCart")
  initCart(state: IMap) {
    return state;
  }

  @Action("Home:archives:query:switchType")
  switchType(state: IMap, type: ArchiveType) {
    return state
      .setIn(["search", "type"], type)
      .setIn(["search", "pageNum"], 0);
  }

  @Action("Home:archives:query:switchSource")
  switchSource(state: IMap, source: ArchiveSource) {
    return state
      .setIn(["search", "source"], source)
      .setIn(["search", "pageNum"], 0);
  }

  @Action("Home:archives:query:chageQ")
  chageQ(state: IMap, q: string) {
    return state.setIn(["search", "q"], q).setIn(["search", "pageNum"], 0);
  }

  @Action("Home:archives:query:sucess")
  query(state: IMap, { total, archives, pageNum }: any) {
    return state.withMutations(state => {
      state
        .setIn(["search", "pageNum"], pageNum)
        .setIn(["search", "total"], total)
        .set("archives", fromJS(archives))
        .set("isLoading", false);
    });
  }

  @Action("Home:archives:rename")
  rename(state: IMap, { index, headline }: any) {
    return state.setIn(["archives", index, "headline"], headline);
  }

  @Action("Home:upload:showOrHide")
  showOrHideUpload(state: IMap) {
    return state.set("uploadVisible", !state.get("uploadVisible"));
  }

  @Action("Home:archives:change:pageNum")
  changePageNum(state: IMap, pageNumber: number) {
    return state.setIn(["search", "pageNum"], pageNumber);
  }

  @Action("Home:archives:get:qrCode")
  qrCode(state: IMap, { index, url }: any) {
    return state.setIn(["archives", index, "qrCodeUrl"], url);
  }
}
