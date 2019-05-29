import { fromJS } from 'immutable';
import { Action, Actor, IMap } from 'plume2';

export default class MainActor extends Actor {
  defaultState() {
    return {
      detail: {},
      delModal:false,
      delSuccess: false
    };
  }


  /**
   * 详情
   * @param state
   * @param detail
   */
  @Action('detail:detail')
  detail(state: IMap,detail: any) {
    return state.set('detail',detail);
  }

  @Action("detail:archives:rename")
  rename(state: IMap, headLine: string) {
    return state
      .setIn(["detail", "headline"], headLine);
  }

  /**
   * 小程序码
   * @param state
   * @param detail
   */
  @Action('detail:qrCode')
  qrCode(state: IMap,url: string) {
    return state.setIn(['detail','qrCodeUrl'],url);
  }

  /**
   * 详情内容
   * @param state
   * @param detail
   */
  @Action('detail:detailHtml')
  detailHtml(state: IMap,htmlText: string) {
    return state.setIn(['detail','htmlText'],htmlText);
  }


  /**
   * 删除提示
   * @param state
   * @param value
   */
  @Action('detail:delModal')
  delModal(state: IMap,value: boolean) {

    return state.set('delModal',value);
  }

  /**
   * 删除成功
   * @param state
   * @param value
   */
  @Action('detail:delSuccess')
  delSuccess(state: IMap,value: boolean) {
    return state.set('delSuccess',value).set('delModal',false);
  }
}
