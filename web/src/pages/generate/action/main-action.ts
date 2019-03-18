import { ViewAction } from "plume2";
import Store from "../store";
import webapi from "webapi";
import { ArchiveType, ArchiveSource, getQrCode, del } from "webapi/archive";
import { message } from "antd";

export default class MainAction extends ViewAction {
  store: Store;

  init() {
    // this.query();
  }


  add(type:"actor"|"action"|"subComp") {
    this.store.dispatch("main:"+type+":add", type);
  }

  addActorEvent(actorIndex:number) {
    this.store.dispatch("main:actor:event:add", actorIndex);
  }


  addActionMethod(actionIndex:number) {
    this.store.dispatch("main:action:method:add", actionIndex);
  }
  //
  // async rename(archiveId: string, headline: string, index: number) {
  //   await webapi.archive.rename(archiveId, headline);
  //   //修改本地列表,避免再次查询了.
  //   this.store.dispatch("Home:archives:rename", {
  //     index,
  //     headline: headline
  //   });
  // }
  //
  // async query() {
  //   let search = this.store.get("search").toJS();
  //   let _params = {
  //     q: search.q,
  //     source: search.source,
  //     type: search.type,
  //     pageNum: search.pageNum,
  //     pageSize: search.pageSize,
  //     cardId: localStorage.getItem("qm:cardId")
  //   };
  //   console.log("查询参数", _params);
  //   let { res, err } = await webapi.archive.query(_params);
  //
  //   if (!err) {
  //     this.store.dispatch("Home:archives:query:sucess", {
  //       total: res.total,
  //       archives: res.root,
  //       pageNum: _params.pageNum
  //     });
  //   }
  // }
  //
  // async switchType(type: ArchiveType) {
  //   this.store.dispatch("Home:archives:query:switchType", type);
  //   await this.query();
  // }
  //
  // async switchSource(source: ArchiveSource) {
  //   this.store.dispatch("Home:archives:query:switchSource", source);
  //   await this.query();
  // }
  //
  // async chageQ(q: string) {
  //   this.store.dispatch("Home:archives:query:chageQ", q);
  //   await this.query();
  // }
  //
  // async changePageNum(pageNum: number) {
  //   this.store.dispatch("Home:archives:change:pageNum", pageNum);
  //   await this.query();
  // }
  //
  // showOrHideUpload() {
  //   this.store.dispatch("Home:upload:showOrHide");
  // }
  //
  // async getQrcode(archiveId: string, index: number) {
  //   // 主动生成小程序码
  //   let qrCodeRes: any = await getQrCode({
  //     archiveId,
  //     optCId: localStorage.getItem("qm:cardId")
  //   });
  //   if (qrCodeRes && qrCodeRes.res) {
  //     this.store.dispatch("Home:archives:get:qrCode", {
  //       index,
  //       url: qrCodeRes.res.data
  //     });
  //   } else {
  //     message.error("生成小程序码失败");
  //   }
  // }
  //
  // // 删除
  // deleteContext = async (archiveId: string) => {
  //   let { res, err } = await del(archiveId);
  //   if (res) {
  //     setTimeout(() => {
  //       message.success("删除成功");
  //       this.query();
  //     }, 1000);
  //   } else {
  //     message.success("删除失败");
  //   }
  // };
}
