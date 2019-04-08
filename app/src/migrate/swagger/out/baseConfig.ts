import sdk from '@api/sdk';
import {IResult} from '@/types';

/**
 *
 * 查询基本设置
 *
 */
async function findBaseConfigUsingGET(): Promise<IFindBaseConfigUsingGETRes> {
  let result = await sdk.get<IFindBaseConfigUsingGETRes>(
    '/baseConfig',

    {},
  );
  return result.data;
}

/**
 *
 * 保存基本设置
 *
 */
async function saveBaseConfigUsingPOST(
  saveRopRequest: ISaveBaseConfigUsingPOSTSaveRopRequestReq,
): Promise<ISaveBaseConfigUsingPOSTRes> {
  let result = await sdk.post<ISaveBaseConfigUsingPOSTRes>(
    '/baseConfig',

    {},
  );
  return result.data;
}

/**
 *
 * 修改基本设置
 *
 */
async function updateBaseConfigUsingPUT(
  updateRopRequest: IUpdateBaseConfigUsingPUTUpdateRopRequestReq,
): Promise<IUpdateBaseConfigUsingPUTRes> {
  let result = await sdk.put<IUpdateBaseConfigUsingPUTRes>(
    '/baseConfig',

    {},
  );
  return result.data;
}

export default {
  findBaseConfigUsingGET,

  saveBaseConfigUsingPOST,

  updateBaseConfigUsingPUT,
};

export interface IgnoreType {
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "BaseResponse«BaseConfigRopResponse»".
 */
export interface BaseResponseBaseConfigRopResponse {
  /**
   * 结果码
   */
  code: string;
  context?: BaseConfigRopResponse;
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * 内容
 */
export interface BaseConfigRopResponse {
  baseConfigId?: number;
  mobileBanner?: string;
  mobileWebsite?: string;
  pcBanner?: string;
  pcIco?: string;
  pcLogo?: string;
  pcMainBanner?: string;
  pcTitle?: string;
  pcWebsite?: string;
  registerContent?: string;
  supplierWebsite?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "BaseConfigRopResponse".
 */
export interface BaseConfigRopResponse1 {
  baseConfigId?: number;
  mobileBanner?: string;
  mobileWebsite?: string;
  pcBanner?: string;
  pcIco?: string;
  pcLogo?: string;
  pcMainBanner?: string;
  pcTitle?: string;
  pcWebsite?: string;
  registerContent?: string;
  supplierWebsite?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "BaseConfigSaveRopRequest".
 */
export interface BaseConfigSaveRopRequest {
  baseConfigId?: number;
  mobileBanner?: string;
  mobileWebsite?: string;
  pcBanner?: string;
  pcIco?: string;
  pcLogo?: string;
  pcMainBanner?: string;
  pcTitle?: string;
  pcWebsite?: string;
  registerContent?: string;
  ropRequestContext?: RopRequestContext;
  supplierWebsite?: string;
  [k: string]: any;
}
export interface RopRequestContext {
  ropResponse?: {
    [k: string]: any;
  };
  serviceBeginTime?: number;
  serviceEndTime?: number;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "RopRequestContext".
 */
export interface RopRequestContext1 {
  ropResponse?: {
    [k: string]: any;
  };
  serviceBeginTime?: number;
  serviceEndTime?: number;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IFindBaseConfigUsingGETRes".
 */
export interface IFindBaseConfigUsingGETRes {
  /**
   * 结果码
   */
  code: string;
  context?: BaseConfigRopResponse;
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ISaveBaseConfigUsingPOSTSaveRopRequestReq".
 */
export interface ISaveBaseConfigUsingPOSTSaveRopRequestReq {
  baseConfigId?: number;
  mobileBanner?: string;
  mobileWebsite?: string;
  pcBanner?: string;
  pcIco?: string;
  pcLogo?: string;
  pcMainBanner?: string;
  pcTitle?: string;
  pcWebsite?: string;
  registerContent?: string;
  ropRequestContext?: RopRequestContext;
  supplierWebsite?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ISaveBaseConfigUsingPOSTRes".
 */
export interface ISaveBaseConfigUsingPOSTRes {
  /**
   * 结果码
   */
  code: string;
  context?: BaseConfigRopResponse;
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IUpdateBaseConfigUsingPUTUpdateRopRequestReq".
 */
export interface IUpdateBaseConfigUsingPUTUpdateRopRequestReq {
  baseConfigId?: number;
  mobileBanner?: string;
  mobileWebsite?: string;
  pcBanner?: string;
  pcIco?: string;
  pcLogo?: string;
  pcMainBanner?: string;
  pcTitle?: string;
  pcWebsite?: string;
  registerContent?: string;
  ropRequestContext?: RopRequestContext;
  supplierWebsite?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IUpdateBaseConfigUsingPUTRes".
 */
export interface IUpdateBaseConfigUsingPUTRes {
  /**
   * 结果码
   */
  code: string;
  context?: BaseConfigRopResponse;
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
