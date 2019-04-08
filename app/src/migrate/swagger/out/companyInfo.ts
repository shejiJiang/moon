import sdk from '@api/sdk';
import {IResult} from '@/types';

/**
 *
 * 查询公司信息
 *
 */
async function findCompanyInfoUsingGET(): Promise<IFindCompanyInfoUsingGETRes> {
  let result = await sdk.get<IFindCompanyInfoUsingGETRes>(
    '/companyInfo',

    {},
  );
  return result.data;
}

/**
 *
 * 保存公司信息
 *
 */
async function saveCompanyInfoUsingPOST(
  saveRopRequest: ISaveCompanyInfoUsingPOSTSaveRopRequestReq,
): Promise<ISaveCompanyInfoUsingPOSTRes> {
  let result = await sdk.post<ISaveCompanyInfoUsingPOSTRes>(
    '/companyInfo',

    {},
  );
  return result.data;
}

/**
 *
 * 修改公司信息
 *
 */
async function updateCompanyInfoUsingPUT(
  saveRopRequest: IUpdateCompanyInfoUsingPUTSaveRopRequestReq,
): Promise<IUpdateCompanyInfoUsingPUTRes> {
  let result = await sdk.put<IUpdateCompanyInfoUsingPUTRes>(
    '/companyInfo',

    {},
  );
  return result.data;
}

export default {
  findCompanyInfoUsingGET,

  saveCompanyInfoUsingPOST,

  updateCompanyInfoUsingPUT,
};

export interface IgnoreType {
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "BaseResponse«CompanyInfoRopResponse»".
 */
export interface BaseResponseCompanyInfoRopResponse {
  /**
   * 结果码
   */
  code: string;
  context?: CompanyInfoRopResponse;
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * 内容
 */
export interface CompanyInfoRopResponse {
  areaId?: number;
  cityId?: number;
  companyDescript?: string;
  companyInfoId?: number;
  companyName?: string;
  contactName?: string;
  contactPhone?: string;
  copyright?: string;
  detailAddress?: string;
  provinceId?: number;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "CompanyInfoRopResponse".
 */
export interface CompanyInfoRopResponse1 {
  areaId?: number;
  cityId?: number;
  companyDescript?: string;
  companyInfoId?: number;
  companyName?: string;
  contactName?: string;
  contactPhone?: string;
  copyright?: string;
  detailAddress?: string;
  provinceId?: number;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "CompanyInfoSaveRopRequest".
 */
export interface CompanyInfoSaveRopRequest {
  areaId?: number;
  cityId?: number;
  companyDescript?: string;
  companyInfoId?: number;
  companyName?: string;
  contactName?: string;
  contactPhone?: string;
  copyright?: string;
  detailAddress?: string;
  provinceId?: number;
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
 * via the `definition` "IFindCompanyInfoUsingGETRes".
 */
export interface IFindCompanyInfoUsingGETRes {
  /**
   * 结果码
   */
  code: string;
  context?: CompanyInfoRopResponse;
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ISaveCompanyInfoUsingPOSTSaveRopRequestReq".
 */
export interface ISaveCompanyInfoUsingPOSTSaveRopRequestReq {
  areaId?: number;
  cityId?: number;
  companyDescript?: string;
  companyInfoId?: number;
  companyName?: string;
  contactName?: string;
  contactPhone?: string;
  copyright?: string;
  detailAddress?: string;
  provinceId?: number;
  ropRequestContext?: RopRequestContext;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ISaveCompanyInfoUsingPOSTRes".
 */
export interface ISaveCompanyInfoUsingPOSTRes {
  /**
   * 结果码
   */
  code: string;
  context?: CompanyInfoRopResponse;
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IUpdateCompanyInfoUsingPUTSaveRopRequestReq".
 */
export interface IUpdateCompanyInfoUsingPUTSaveRopRequestReq {
  areaId?: number;
  cityId?: number;
  companyDescript?: string;
  companyInfoId?: number;
  companyName?: string;
  contactName?: string;
  contactPhone?: string;
  copyright?: string;
  detailAddress?: string;
  provinceId?: number;
  ropRequestContext?: RopRequestContext;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IUpdateCompanyInfoUsingPUTRes".
 */
export interface IUpdateCompanyInfoUsingPUTRes {
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
