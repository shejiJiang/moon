import sdk from '@api/sdk';
import {IResult} from '@/types';

/**
 *
 * 获取验证码
 *
 */
async function captchaUsingGET(uuid: ICaptchaUsingGETUuidReq): Promise<any> {
  let result = await sdk.get(
    '/captcha',

    {},
  );
  return result.data;
}

/**
 *
 * 获取验证码
 *
 */
async function captchaUsingHEAD(uuid: ICaptchaUsingHEADUuidReq): Promise<any> {
  let result = await sdk.head(
    '/captcha',

    {},
  );
  return result.data;
}

/**
 *
 * 获取验证码
 *
 */
async function captchaUsingPOST(uuid: ICaptchaUsingPOSTUuidReq): Promise<any> {
  let result = await sdk.post(
    '/captcha',

    {},
  );
  return result.data;
}

/**
 *
 * 获取验证码
 *
 */
async function captchaUsingPUT(uuid: ICaptchaUsingPUTUuidReq): Promise<any> {
  let result = await sdk.put(
    '/captcha',

    {},
  );
  return result.data;
}

/**
 *
 * 获取验证码
 *
 */
async function captchaUsingDELETE(
  uuid: ICaptchaUsingDELETEUuidReq,
): Promise<any> {
  let result = await sdk.delete(
    '/captcha',

    {},
  );
  return result.data;
}

/**
 *
 * 获取验证码
 *
 */
async function captchaUsingOPTIONS(
  uuid: ICaptchaUsingOPTIONSUuidReq,
): Promise<any> {
  let result = await sdk.options(
    '/captcha',

    {},
  );
  return result.data;
}

/**
 *
 * 获取验证码
 *
 */
async function captchaUsingPATCH(
  uuid: ICaptchaUsingPATCHUuidReq,
): Promise<any> {
  let result = await sdk.patch(
    '/captcha',

    {},
  );
  return result.data;
}

export default {
  captchaUsingGET,

  captchaUsingHEAD,

  captchaUsingPOST,

  captchaUsingPUT,

  captchaUsingDELETE,

  captchaUsingOPTIONS,

  captchaUsingPATCH,
};

/**
 * uuid
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ICaptchaUsingGETUuidReq".
 */
export type ICaptchaUsingGETUuidReq = string;
/**
 * uuid
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ICaptchaUsingHEADUuidReq".
 */
export type ICaptchaUsingHEADUuidReq = string;
/**
 * uuid
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ICaptchaUsingPOSTUuidReq".
 */
export type ICaptchaUsingPOSTUuidReq = string;
/**
 * uuid
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ICaptchaUsingPUTUuidReq".
 */
export type ICaptchaUsingPUTUuidReq = string;
/**
 * uuid
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ICaptchaUsingDELETEUuidReq".
 */
export type ICaptchaUsingDELETEUuidReq = string;
/**
 * uuid
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ICaptchaUsingOPTIONSUuidReq".
 */
export type ICaptchaUsingOPTIONSUuidReq = string;
/**
 * uuid
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ICaptchaUsingPATCHUuidReq".
 */
export type ICaptchaUsingPATCHUuidReq = string;

export interface IgnoreType {
  [k: string]: any;
}
