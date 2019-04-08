import sdk from '@api/sdk';
import {IResult} from '@/types';

/**
 *
 * login
 *
 */
async function loginUsingGET(
  code: ILoginUsingGETCodeReq,
): Promise<ILoginUsingGETRes> {
  let result = await sdk.get<ILoginUsingGETRes>(
    '/auth/login/{code}'.replace('{code}', code),

    {
      code,
    },
  );
  return result.data;
}

/**
 *
 * logout
 *
 */
async function logoutUsingGET(): Promise<ILogoutUsingGETRes> {
  let result = await sdk.get<ILogoutUsingGETRes>(
    '/auth/logout',

    {},
  );
  return result.data;
}

/**
 *
 * session
 *
 */
async function sessionUsingGET(): Promise<ISessionUsingGETRes> {
  let result = await sdk.get<ISessionUsingGETRes>(
    '/auth/session',

    {},
  );
  return result.data;
}

/**
 *
 * verify
 *
 */
async function verifyUsingGET(): Promise<IVerifyUsingGETRes> {
  let result = await sdk.get<IVerifyUsingGETRes>(
    '/auth/verify',

    {},
  );
  return result.data;
}

export default {
  loginUsingGET,

  logoutUsingGET,

  sessionUsingGET,

  verifyUsingGET,
};

/**
 * code
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ILoginUsingGETCodeReq".
 */
export type ILoginUsingGETCodeReq = string;

export interface IgnoreType {
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "BaseResponse".
 */
export interface BaseResponse {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: {
    [k: string]: any;
  };
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ILoginUsingGETRes".
 */
export interface ILoginUsingGETRes {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: {
    [k: string]: any;
  };
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ILogoutUsingGETRes".
 */
export interface ILogoutUsingGETRes {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: {
    [k: string]: any;
  };
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ISessionUsingGETRes".
 */
export interface ISessionUsingGETRes {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: {
    [k: string]: any;
  };
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IVerifyUsingGETRes".
 */
export interface IVerifyUsingGETRes {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: {
    [k: string]: any;
  };
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
