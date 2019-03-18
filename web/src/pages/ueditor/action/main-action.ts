import { ViewAction } from "plume2";
import Store from "../store";
import {
  add,
  update,
  IArchiveInfo,
  getQrCode,
  IQrCode,
  saveThumb,
  IThumb,
  webshotDynamicImg
} from "../../../webapi/archive";
import { message } from "antd";
import config from "kit/config";

export default class MainAction extends ViewAction {
  store: Store;

  setTitle = (text: string) => {
    this.store.dispatch("ueditor:setTitle", text);
  };

  changeGiveUp = (value: boolean) => {
    this.store.dispatch("ueditor:changeGiveUp", value);
  };

  changePicUp = (value: boolean) => {
    this.store.dispatch("ueditor:changePicUp", value);
  };

  getContext = async (params: IArchiveInfo) => {
    let result = await Promise.resolve(`<p>get result !!!</p>`);
    this.store.dispatch("ueditor:getContext", result);
  };

  changeSaveOk = (value: boolean) => {
    this.store.dispatch("ueditor:saveOkModal", value);
  };

  saveContext = async (params: IArchiveInfo) => {
    this.store.dispatch("ueditor:saveLoading", true);
    let { res, err } = await add(params);
    if (res) {
      if (res.qrCodeUrl) {
        this.store.dispatch("ueditor:saveOk", res.qrCodeUrl);
      } else {
        // 主动生成小程序码
        let qrCodeRes: any = await getQrCode({
          archiveId: res.archiveId,
          optCId: localStorage.getItem("qm:cardId")
        });
        if (qrCodeRes && qrCodeRes.res) {
          this.store.dispatch("ueditor:saveOk", qrCodeRes.res.data);
        } else {
          message.error("生成小程序码失败");
        }
      }
      this.saveGroupDynamictThumb({
        id: res.archiveId,
        thumbUrl: params.logoUrl,
        content: params.content
      });
    } else {
      message.error("创建失败");
      //this.store.dispatch('ueditor:saveOkModal',false);
    }
    this.store.dispatch("ueditor:saveLoading", false);
  };

  saveGroupDynamictThumb = async (params: IThumb) => {
    if (!params.thumbUrl) {
      const content =
        params.content.length > 100
          ? params.content.slice(0, 100) + "..."
          : params.content;
      const userInfo = JSON.parse(localStorage.getItem("qm:userInfo"));
      const { res } = await webshotDynamicImg({
        userLogo: userInfo.userLogo,
        content
      });
      params.thumbUrl = config.imgApi + res;
    }
    saveThumb(params);
  };

  editIn = (archiveId: string, title: string) => {
    this.store.dispatch("ueditor:editIn", { archiveId, title });
  };

  updateContext = async (params: IArchiveInfo) => {
    this.store.dispatch("ueditor:saveLoading", true);
    let { res, err } = await update(params);
    if (res) {
      this.store.dispatch("ueditor:saveOk", res.qrCodeUrl);
    } else {
      message.error("更新失败");
    }

    this.store.dispatch("ueditor:saveLoading", false);
  };
}
