import Taro from "@tarojs/taro";
import { INIT, CLEAN, TYPE, COMPANY } from "./constant";
import Api from "@/api";
import Store from "@/store";
import tradeUtil from "@/util/trade";
import { Action } from "@/types";

export default (dispatch) => {
    const actions = {
        /**
         * 清空
         */
        async init(id) {
            let trade = await Api.trade.info({ id });

            console.log('init 信息',trade);
            dispatch({ type: INIT, payload: trade });
        },

        /**
         * 重置
         */
        async clean() {
            dispatch({ type: CLEAN } as Action);
        },

        /**
         * 选择方式
         */
        async type(args: any) {
            dispatch({ type: TYPE } as Action);
        },
        /**
         * 选择公司
         */
        async company(args: any) {
            dispatch({ type: COMPANY } as Action);
        },

        /**
         *
         */
        async save() {
          // let trade = await Api.trade.info({ id });
          let  tradeInfo = Store.getState().tradeSend.info;

          console.log('tradeInfo',tradeInfo);
          let eorderParam = tradeUtil.toEOrderInfo(tradeInfo);

          console.log('eorderParam',eorderParam);
          let result = await  Api.tradeLogistics.eorder(eorderParam);
        }

        //
    };
    return actions;
};
