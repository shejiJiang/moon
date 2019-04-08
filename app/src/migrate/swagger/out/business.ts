import sdk from '@api/sdk';
import {IResult} from '@/types';

/**
 *
 * 查询招商页设置
 *
 */
async function findConfigUsingGET(): Promise<IFindConfigUsingGETRes> {
  let result = await sdk.get<IFindConfigUsingGETRes>(
    '/business/config',

    {},
  );
  return result.data;
}

/**
 *
 * 保存招商页设置
 *
 */
async function saveBaseConfigUsingPOST_1(
  saveRopRequest: ISaveBaseConfigUsingPOST_1SaveRopRequestReq,
): Promise<ISaveBaseConfigUsingPOST_1Res> {
  let result = await sdk.post<ISaveBaseConfigUsingPOST_1Res>(
    '/business/config',

    {},
  );
  return result.data;
}

/**
 *
 * 修改基本设置
 *
 */
async function updateBaseConfigUsingPUT_1(
  updateRopRequest: IUpdateBaseConfigUsingPUT_1UpdateRopRequestReq,
): Promise<IUpdateBaseConfigUsingPUT_1Res> {
  let result = await sdk.put<IUpdateBaseConfigUsingPUT_1Res>(
    '/business/config',

    {},
  );
  return result.data;
}

export default {
  findConfigUsingGET,

  saveBaseConfigUsingPOST_1,

  updateBaseConfigUsingPUT_1,
};

export interface IgnoreType {
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "BaseResponse«BusinessConfigRopResponse»".
 */
export interface BaseResponseBusinessConfigRopResponse {
  /**
   * 结果码
   */
  code: string;
  context?: BusinessConfigRopResponse;
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * 内容
 */
export interface BusinessConfigRopResponse {
  businessBanner?: string;
  businessConfigId?: number;
  businessCustom?: string;
  businessEnter?: string;
  businessRegister?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "BusinessConfigRopResponse".
 */
export interface BusinessConfigRopResponse1 {
  businessBanner?: string;
  businessConfigId?: number;
  businessCustom?: string;
  businessEnter?: string;
  businessRegister?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "BusinessConfigSaveRopRequest".
 */
export interface BusinessConfigSaveRopRequest {
  businessBanner?: string;
  businessConfigId?: number;
  businessCustom?: string;
  businessEnter?: string;
  businessRegister?: string;
  ropRequestContext?: RopRequestContext;
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
 * via the `definition` "IFindConfigUsingGETRes".
 */
export interface IFindConfigUsingGETRes {
  /**
   * 结果码
   */
  code: string;
  context?: BusinessConfigRopResponse;
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ISaveBaseConfigUsingPOST_1SaveRopRequestReq".
 */
export interface ISaveBaseConfigUsingPOST_1SaveRopRequestReq {
  businessBanner?: string;
  businessConfigId?: number;
  businessCustom?: string;
  businessEnter?: string;
  businessRegister?: string;
  ropRequestContext?: RopRequestContext;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ISaveBaseConfigUsingPOST_1Res".
 */
export interface ISaveBaseConfigUsingPOST_1Res {
  /**
   * 结果码
   */
  code: string;
  context?: BusinessConfigRopResponse;
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IUpdateBaseConfigUsingPUT_1UpdateRopRequestReq".
 */
export interface IUpdateBaseConfigUsingPUT_1UpdateRopRequestReq {
  businessBanner?: string;
  businessConfigId?: number;
  businessCustom?: string;
  businessEnter?: string;
  businessRegister?: string;
  ropRequestContext?: RopRequestContext;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IUpdateBaseConfigUsingPUT_1Res".
 */
export interface IUpdateBaseConfigUsingPUT_1Res {
  /**
   * 结果码
   */
  code: string;
  context?: BusinessConfigRopResponse;
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
