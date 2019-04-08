import sdk from '@api/sdk';
import {IResult} from '@/types';

/**
 *
 * 新增优惠券分类
 *
 */
async function addCouponCateUsingPOST(
  couponCateName: IAddCouponCateUsingPOSTCouponCateNameReq,
): Promise<IAddCouponCateUsingPOSTRes> {
  let result = await sdk.post<IAddCouponCateUsingPOSTRes>(
    '/coupon-cate/'.replace('{couponCateName}', couponCateName),

    {
      couponCateName,
    },
  );
  return result.data;
}

/**
 *
 * 修改优惠券分类
 *
 */
async function modifyCouponCateUsingPUT(
  couponCateId: IModifyCouponCateUsingPUTCouponCateIdReq,
  couponCateName: IModifyCouponCateUsingPUTCouponCateNameReq,
): Promise<IModifyCouponCateUsingPUTRes> {
  let result = await sdk.put<IModifyCouponCateUsingPUTRes>(
    '/coupon-cate/'

      .replace('{couponCateId}', couponCateId)

      .replace('{couponCateName}', couponCateName),

    {
      couponCateId,

      couponCateName,
    },
  );
  return result.data;
}

/**
 *
 * 查询优惠券分类列表
 *
 */
async function listCouponCateUsingGET(): Promise<IListCouponCateUsingGETRes> {
  let result = await sdk.get<IListCouponCateUsingGETRes>(
    '/coupon-cate/list',

    {},
  );
  return result.data;
}

/**
 *
 * 查询优惠券分类列表提供给优惠券使用, 最多查询3个
 *
 */
async function listCouponCateLimitThreeByCouponCateIdsUsingPOST(
  couponCateIds: IListCouponCateLimitThreeByCouponCateIdsUsingPOSTCouponCateIdsReq,
): Promise<IListCouponCateLimitThreeByCouponCateIdsUsingPOSTRes> {
  let result = await sdk.post<
    IListCouponCateLimitThreeByCouponCateIdsUsingPOSTRes
  >(
    '/coupon-cate/list/limit-three',

    {},
  );
  return result.data;
}

/**
 *
 * 更改是否平台可用
 *
 */
async function isOnlyPlatformUsingPUT(
  couponCateId: IIsOnlyPlatformUsingPUTCouponCateIdReq,
): Promise<IIsOnlyPlatformUsingPUTRes> {
  let result = await sdk.put<IIsOnlyPlatformUsingPUTRes>(
    '/coupon-cate/platform'.replace('{couponCateId}', couponCateId),

    {
      couponCateId,
    },
  );
  return result.data;
}

/**
 *
 * 修改优惠券分类排序
 *
 */
async function sortCouponCateUsingPUT(
  list: ISortCouponCateUsingPUTListReq,
): Promise<ISortCouponCateUsingPUTRes> {
  let result = await sdk.put<ISortCouponCateUsingPUTRes>(
    '/coupon-cate/sort',

    {},
  );
  return result.data;
}

/**
 *
 * 优惠券分类详情
 *
 */
async function getCouponCateByCouponCateIdUsingGET(
  couponCateId: IGetCouponCateByCouponCateIdUsingGETCouponCateIdReq,
): Promise<IGetCouponCateByCouponCateIdUsingGETRes> {
  let result = await sdk.get<IGetCouponCateByCouponCateIdUsingGETRes>(
    '/coupon-cate/{couponCateId}'.replace('{couponCateId}', couponCateId),

    {
      couponCateId,
    },
  );
  return result.data;
}

/**
 *
 * 删除优惠券分类
 *
 */
async function deleteCouponCateByCouponCateIdUsingDELETE(
  couponCateId: IDeleteCouponCateByCouponCateIdUsingDELETECouponCateIdReq,
): Promise<IDeleteCouponCateByCouponCateIdUsingDELETERes> {
  let result = await sdk.delete<IDeleteCouponCateByCouponCateIdUsingDELETERes>(
    '/coupon-cate/{couponCateId}'.replace('{couponCateId}', couponCateId),

    {
      couponCateId,
    },
  );
  return result.data;
}

export default {
  addCouponCateUsingPOST,

  modifyCouponCateUsingPUT,

  listCouponCateUsingGET,

  listCouponCateLimitThreeByCouponCateIdsUsingPOST,

  isOnlyPlatformUsingPUT,

  sortCouponCateUsingPUT,

  getCouponCateByCouponCateIdUsingGET,

  deleteCouponCateByCouponCateIdUsingDELETE,
};

/**
 * 优惠券分类名称
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IAddCouponCateUsingPOSTCouponCateNameReq".
 */
export type IAddCouponCateUsingPOSTCouponCateNameReq = string;
/**
 * 优惠券分类Id
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IModifyCouponCateUsingPUTCouponCateIdReq".
 */
export type IModifyCouponCateUsingPUTCouponCateIdReq = string;
/**
 * 优惠券分类名称
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IModifyCouponCateUsingPUTCouponCateNameReq".
 */
export type IModifyCouponCateUsingPUTCouponCateNameReq = string;
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IListCouponCateLimitThreeByCouponCateIdsUsingPOSTCouponCateIdsReq".
 */
export type IListCouponCateLimitThreeByCouponCateIdsUsingPOSTCouponCateIdsReq = string[];
/**
 * 优惠券分类Id
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IIsOnlyPlatformUsingPUTCouponCateIdReq".
 */
export type IIsOnlyPlatformUsingPUTCouponCateIdReq = string;
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ISortCouponCateUsingPUTListReq".
 */
export type ISortCouponCateUsingPUTListReq = CouponCateSortDTO1[];
/**
 * 优惠券分类Id
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IGetCouponCateByCouponCateIdUsingGETCouponCateIdReq".
 */
export type IGetCouponCateByCouponCateIdUsingGETCouponCateIdReq = string;
/**
 * 优惠券分类Id
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IDeleteCouponCateByCouponCateIdUsingDELETECouponCateIdReq".
 */
export type IDeleteCouponCateByCouponCateIdUsingDELETECouponCateIdReq = string;

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
 * via the `definition` "BaseResponse«List«CouponCateVO»»".
 */
export interface BaseResponseListCouponCateVO {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: CouponCateVO[];
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
export interface CouponCateVO {
  /**
   * 优惠券分类Id
   */
  couponCateId?: string;
  /**
   * 优惠券分类名称
   */
  couponCateName?: string;
  /**
   * 是否平台专用
   * * NO: 否
   * * YES: 是
   */
  onlyPlatformFlag?: '0' | '1';
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "CouponCateVO".
 */
export interface CouponCateVO1 {
  /**
   * 优惠券分类Id
   */
  couponCateId?: string;
  /**
   * 优惠券分类名称
   */
  couponCateName?: string;
  /**
   * 是否平台专用
   * * NO: 否
   * * YES: 是
   */
  onlyPlatformFlag?: '0' | '1';
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "CouponCateSortDTO".
 */
export interface CouponCateSortDTO {
  /**
   * 优惠券排序顺序
   */
  cateSort?: number;
  /**
   * 优惠券分类Id
   */
  couponCateId?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "BaseResponse«CouponCateGetByCouponCateIdResponse»".
 */
export interface BaseResponseCouponCateGetByCouponCateIdResponse {
  /**
   * 结果码
   */
  code: string;
  context?: CouponCateGetByCouponCateIdResponse;
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * 内容
 */
export interface CouponCateGetByCouponCateIdResponse {
  /**
   * 优惠券分类Id
   */
  couponCateId?: string;
  /**
   * 优惠券分类名称
   */
  couponCateName?: string;
  /**
   * 是否平台专用
   * * NO: 否
   * * YES: 是
   */
  onlyPlatformFlag?: '0' | '1';
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "CouponCateGetByCouponCateIdResponse".
 */
export interface CouponCateGetByCouponCateIdResponse1 {
  /**
   * 优惠券分类Id
   */
  couponCateId?: string;
  /**
   * 优惠券分类名称
   */
  couponCateName?: string;
  /**
   * 是否平台专用
   * * NO: 否
   * * YES: 是
   */
  onlyPlatformFlag?: '0' | '1';
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IAddCouponCateUsingPOSTRes".
 */
export interface IAddCouponCateUsingPOSTRes {
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
 * via the `definition` "IModifyCouponCateUsingPUTRes".
 */
export interface IModifyCouponCateUsingPUTRes {
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
 * via the `definition` "IListCouponCateUsingGETRes".
 */
export interface IListCouponCateUsingGETRes {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: CouponCateVO[];
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IListCouponCateLimitThreeByCouponCateIdsUsingPOSTRes".
 */
export interface IListCouponCateLimitThreeByCouponCateIdsUsingPOSTRes {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: CouponCateVO[];
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IIsOnlyPlatformUsingPUTRes".
 */
export interface IIsOnlyPlatformUsingPUTRes {
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
export interface CouponCateSortDTO1 {
  /**
   * 优惠券排序顺序
   */
  cateSort?: number;
  /**
   * 优惠券分类Id
   */
  couponCateId?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ISortCouponCateUsingPUTRes".
 */
export interface ISortCouponCateUsingPUTRes {
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
 * via the `definition` "IGetCouponCateByCouponCateIdUsingGETRes".
 */
export interface IGetCouponCateByCouponCateIdUsingGETRes {
  /**
   * 结果码
   */
  code: string;
  context?: CouponCateGetByCouponCateIdResponse;
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IDeleteCouponCateByCouponCateIdUsingDELETERes".
 */
export interface IDeleteCouponCateByCouponCateIdUsingDELETERes {
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
