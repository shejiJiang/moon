import sdk from '@api/sdk';
import {IResult} from '@/types';

/**
 *
 * 验证验证码 验证页面传过来的验证码是否与session保存的验证码相等
 *
 */
async function checkCaptchaUsingGET(
  enterValue: ICheckCaptchaUsingGETEnterValueReq,
  uuid: ICheckCaptchaUsingGETUuidReq,
): Promise<ICheckCaptchaUsingGETRes> {
  let result = await sdk.get<ICheckCaptchaUsingGETRes>(
    '/check/captcha'.replace('{enterValue}', enterValue),

    {
      enterValue,
    },
  );
  return result.data;
}

/**
 *
 * 验证验证码 验证页面传过来的验证码是否与session保存的验证码相等
 *
 */
async function checkCaptchaUsingHEAD(
  enterValue: ICheckCaptchaUsingHEADEnterValueReq,
  uuid: ICheckCaptchaUsingHEADUuidReq,
): Promise<ICheckCaptchaUsingHEADRes> {
  let result = await sdk.head<ICheckCaptchaUsingHEADRes>(
    '/check/captcha'.replace('{enterValue}', enterValue),

    {
      enterValue,
    },
  );
  return result.data;
}

/**
 *
 * 验证验证码 验证页面传过来的验证码是否与session保存的验证码相等
 *
 */
async function checkCaptchaUsingPOST(
  enterValue: ICheckCaptchaUsingPOSTEnterValueReq,
  uuid: ICheckCaptchaUsingPOSTUuidReq,
): Promise<ICheckCaptchaUsingPOSTRes> {
  let result = await sdk.post<ICheckCaptchaUsingPOSTRes>(
    '/check/captcha'.replace('{enterValue}', enterValue),

    {
      enterValue,
    },
  );
  return result.data;
}

/**
 *
 * 验证验证码 验证页面传过来的验证码是否与session保存的验证码相等
 *
 */
async function checkCaptchaUsingPUT(
  enterValue: ICheckCaptchaUsingPUTEnterValueReq,
  uuid: ICheckCaptchaUsingPUTUuidReq,
): Promise<ICheckCaptchaUsingPUTRes> {
  let result = await sdk.put<ICheckCaptchaUsingPUTRes>(
    '/check/captcha'.replace('{enterValue}', enterValue),

    {
      enterValue,
    },
  );
  return result.data;
}

/**
 *
 * 验证验证码 验证页面传过来的验证码是否与session保存的验证码相等
 *
 */
async function checkCaptchaUsingDELETE(
  enterValue: ICheckCaptchaUsingDELETEEnterValueReq,
  uuid: ICheckCaptchaUsingDELETEUuidReq,
): Promise<ICheckCaptchaUsingDELETERes> {
  let result = await sdk.delete<ICheckCaptchaUsingDELETERes>(
    '/check/captcha'.replace('{enterValue}', enterValue),

    {
      enterValue,
    },
  );
  return result.data;
}

/**
 *
 * 验证验证码 验证页面传过来的验证码是否与session保存的验证码相等
 *
 */
async function checkCaptchaUsingOPTIONS(
  enterValue: ICheckCaptchaUsingOPTIONSEnterValueReq,
  uuid: ICheckCaptchaUsingOPTIONSUuidReq,
): Promise<ICheckCaptchaUsingOPTIONSRes> {
  let result = await sdk.options<ICheckCaptchaUsingOPTIONSRes>(
    '/check/captcha'.replace('{enterValue}', enterValue),

    {
      enterValue,
    },
  );
  return result.data;
}

/**
 *
 * 验证验证码 验证页面传过来的验证码是否与session保存的验证码相等
 *
 */
async function checkCaptchaUsingPATCH(
  enterValue: ICheckCaptchaUsingPATCHEnterValueReq,
  uuid: ICheckCaptchaUsingPATCHUuidReq,
): Promise<ICheckCaptchaUsingPATCHRes> {
  let result = await sdk.patch<ICheckCaptchaUsingPATCHRes>(
    '/check/captcha'.replace('{enterValue}', enterValue),

    {
      enterValue,
    },
  );
  return result.data;
}

export default {
  checkCaptchaUsingGET,

  checkCaptchaUsingHEAD,

  checkCaptchaUsingPOST,

  checkCaptchaUsingPUT,

  checkCaptchaUsingDELETE,

  checkCaptchaUsingOPTIONS,

  checkCaptchaUsingPATCH,
};

/**
 * 验证码
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ICheckCaptchaUsingGETEnterValueReq".
 */
export type ICheckCaptchaUsingGETEnterValueReq = string;
/**
 * uuid
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ICheckCaptchaUsingGETUuidReq".
 */
export type ICheckCaptchaUsingGETUuidReq = string;
/**
 * 验证码
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ICheckCaptchaUsingHEADEnterValueReq".
 */
export type ICheckCaptchaUsingHEADEnterValueReq = string;
/**
 * uuid
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ICheckCaptchaUsingHEADUuidReq".
 */
export type ICheckCaptchaUsingHEADUuidReq = string;
/**
 * 验证码
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ICheckCaptchaUsingPOSTEnterValueReq".
 */
export type ICheckCaptchaUsingPOSTEnterValueReq = string;
/**
 * uuid
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ICheckCaptchaUsingPOSTUuidReq".
 */
export type ICheckCaptchaUsingPOSTUuidReq = string;
/**
 * 验证码
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ICheckCaptchaUsingPUTEnterValueReq".
 */
export type ICheckCaptchaUsingPUTEnterValueReq = string;
/**
 * uuid
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ICheckCaptchaUsingPUTUuidReq".
 */
export type ICheckCaptchaUsingPUTUuidReq = string;
/**
 * 验证码
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ICheckCaptchaUsingDELETEEnterValueReq".
 */
export type ICheckCaptchaUsingDELETEEnterValueReq = string;
/**
 * uuid
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ICheckCaptchaUsingDELETEUuidReq".
 */
export type ICheckCaptchaUsingDELETEUuidReq = string;
/**
 * 验证码
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ICheckCaptchaUsingOPTIONSEnterValueReq".
 */
export type ICheckCaptchaUsingOPTIONSEnterValueReq = string;
/**
 * uuid
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ICheckCaptchaUsingOPTIONSUuidReq".
 */
export type ICheckCaptchaUsingOPTIONSUuidReq = string;
/**
 * 验证码
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ICheckCaptchaUsingPATCHEnterValueReq".
 */
export type ICheckCaptchaUsingPATCHEnterValueReq = string;
/**
 * uuid
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ICheckCaptchaUsingPATCHUuidReq".
 */
export type ICheckCaptchaUsingPATCHUuidReq = string;

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
 * via the `definition` "ICheckCaptchaUsingGETRes".
 */
export interface ICheckCaptchaUsingGETRes {
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
 * via the `definition` "ICheckCaptchaUsingHEADRes".
 */
export interface ICheckCaptchaUsingHEADRes {
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
 * via the `definition` "ICheckCaptchaUsingPOSTRes".
 */
export interface ICheckCaptchaUsingPOSTRes {
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
 * via the `definition` "ICheckCaptchaUsingPUTRes".
 */
export interface ICheckCaptchaUsingPUTRes {
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
 * via the `definition` "ICheckCaptchaUsingDELETERes".
 */
export interface ICheckCaptchaUsingDELETERes {
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
 * via the `definition` "ICheckCaptchaUsingOPTIONSRes".
 */
export interface ICheckCaptchaUsingOPTIONSRes {
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
 * via the `definition` "ICheckCaptchaUsingPATCHRes".
 */
export interface ICheckCaptchaUsingPATCHRes {
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
