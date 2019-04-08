import sdk from '@api/sdk';
import {IResult} from '@/types';

/**
 *
 * 查询平台Logo
 *
 */
async function queryBossLogoUsingGET(): Promise<IQueryBossLogoUsingGETRes> {
  let result = await sdk.get<IQueryBossLogoUsingGETRes>(
    '/bosslogo',

    {},
  );
  return result.data;
}

export default {
  queryBossLogoUsingGET,
};

export interface IgnoreType {
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "BaseResponse«string»".
 */
export interface BaseResponseString {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: string;
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IQueryBossLogoUsingGETRes".
 */
export interface IQueryBossLogoUsingGETRes {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: string;
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
