import { ViewAction } from "plume2";
import Store from "../store";
import { del, getQrCode } from "../../../webapi/archive";
import { handleHttps } from "../../../kit/common";
import { fromJS } from "immutable";
import { message } from "antd";
import webapi from "webapi/index";

export default class MainAction extends ViewAction {
  store: Store;

  init = async (item: any) => {
    item = fromJS(item);
    this.store.dispatch("detail:detail", item);

    if (item.get("type") == "ARTICLE") {
      //如果是文章，加载预览
      let time = "?" + new Date().getTime();
      window.fetch(handleHttps(item.get("url")) + time).then(async resp => {
        let htmlUrl = await resp.text();
        this.store.dispatch("detail:detailHtml", htmlUrl);
      });
    }

    if (!item.get("qrCodeUrl")) {
      // 主动生成小程序码
      let qrCodeRes: any = await getQrCode({
        archiveId: item.get("archiveId"),
        optCId: localStorage.getItem("qm:cardId")
      });
      if (qrCodeRes && qrCodeRes.res) {
        this.store.dispatch("detail:qrCode", qrCodeRes.res.data);
      } else {
        message.error("生成小程序码失败");
      }
    }
  };

  /**
   * 重命名
   * @param {string} archiveId
   * @param {string} headline
   * @returns {Promise<void>}
   */
  async rename(archiveId: string, headline: string) {
    //修改本地列表,避免再次查询了.
    this.store.dispatch("detail:archives:rename", headline);
    await webapi.archive.rename(archiveId, headline);
  }

  initHtml = (htmlText: string) => {
    this.store.dispatch("detail:detailHtml", htmlText);
  };

  deleteSure = (value: boolean) => {
    this.store.dispatch("detail:delModal", value);
  };

  deleteContext = async (archiveId: string) => {
    this.store.dispatch("detail:delModal", true);
    let { res, err } = await del(archiveId);
    if (res) {
      this.store.dispatch("detail:delSuccess", true);
    }
  };
}
