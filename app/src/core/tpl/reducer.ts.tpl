import { INIT, CLEAN, TYPE, COMPANY } from "./constant.ts";
import { Action } from "@/types";
import { ITradeSendReducer } from "./types";
import _ from "lodash";

const INITIAL_STATE: ITradeSendReducer = {
    info: {} as any
};

export default function tradeSend(state = INITIAL_STATE, action: Action): ITradeSendReducer {
    const { type, payload } = action;
    switch (type) {
        //
        case INIT:
            return {
                ...state,
                info: payload
            };

        //
        //
        //
        case CLEAN:
            return INITIAL_STATE;

        //
        // 选择方式
        //
        case TYPE:
            return {
                ...state
            };
        //
        // 选择公司
        //
        case COMPANY:
            return {
                ...state
            };
    }
    return state;
}
