import { fromJS } from "immutable";
import { Action, Actor, IMap } from "plume2";

export default class MainActor extends Actor {
  defaultState() {
    return {
      archiveId: "",
      title: "",
      showPicUp: false,
      showGiveUp: false,
      showSaveOk: false,
      context: "",
      qrCode: "",
      loading: false
    };
  }

  /**
   * 设置标题
   * @param state
   * @param title
   */
  @Action("ueditor:setTitle")
  setTitle(state: IMap, title: string) {
    return state.set("title", title);
  }

  /**
   * 显示上传图片
   * @param state
   * @param value
   */
  @Action("ueditor:changePicUp")
  changePicUp(state: IMap, value: boolean) {
    return state.set("showPicUp", value);
  }

  /**
   * 设置放弃编辑
   * @param state
   * @param value
   */
  @Action("ueditor:changeGiveUp")
  changeGiveUp(state: IMap, value: boolean) {
    return state.set("showGiveUp", value);
  }

  /**
   * 获取正文内容
   * @param state
   * @param context
   */
  @Action("ueditor:getContext")
  getContext(state: IMap, context: string) {
    return state.set("context", context);
  }

  /**
   * 保存loading
   * @param state
   * @param value
   */
  @Action("ueditor:saveLoading")
  saveLoading(state: IMap, value: boolean) {
    return state.set("loading", value);
  }

  /**
   * 保存成功弹窗
   * @param state
   * @param value
   */
  @Action("ueditor:saveOkModal")
  saveOkModal(state: IMap, value: boolean) {
    return state.set("showSaveOk", value);
  }

  /**
   * 保存成功
   * @param state
   * @param value
   */
  @Action("ueditor:saveOk")
  saveOk(state: IMap, url: string) {
    return state.withMutations(state => {
      state.set("qrCode", url).set("showSaveOk", true);
    });
  }

  /**
   * 编辑内容填充
   * @param state
   * @param value
   */
  @Action("ueditor:editIn")
  editIn(state: IMap, { archiveId, title }: any) {
    return state.withMutations(state => {
      state.set("archiveId", archiveId).set("title", title);
    });
  }
}
