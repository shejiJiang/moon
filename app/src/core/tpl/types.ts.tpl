import {  } from '@/types'
import Actions from "./action.ts"

export interface ITradeSendReducer {
    info : any
}

export type ITradeSendProps = { tradeSend: ITradeSendReducer } & ReturnType<typeof Actions>;