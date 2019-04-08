import sdk from '@api/sdk';
import {IResult} from '@/types';

/**
 *
 * 验证用户是否有某一个url/requestType的接口权限
 *
 */
async function checkFunctionAuthUsingPOST(
  authorityRequest: ICheckFunctionAuthUsingPOSTAuthorityRequestReq,
): Promise<ICheckFunctionAuthUsingPOSTRes> {
  let result = await sdk.post<ICheckFunctionAuthUsingPOSTRes>(
    '/check-function-auth',

    {},
  );
  return result.data;
}

export default {
  checkFunctionAuthUsingPOST,
};

export interface IgnoreType {
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "AuthorityRequest".
 */
export interface AuthorityRequest {
  /**
   * 请求类型-GET,POST,PUT,DELETE
   */
  requestType?: string;
  /**
   * 接口路径
   */
  urlPath?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "BaseResponse«boolean»".
 */
export interface BaseResponseBoolean {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: boolean;
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ICheckFunctionAuthUsingPOSTAuthorityRequestReq".
 */
export interface ICheckFunctionAuthUsingPOSTAuthorityRequestReq {
  /**
   * 请求类型-GET,POST,PUT,DELETE
   */
  requestType?: string;
  /**
   * 接口路径
   */
  urlPath?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ICheckFunctionAuthUsingPOSTRes".
 */
export interface ICheckFunctionAuthUsingPOSTRes {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: boolean;
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
