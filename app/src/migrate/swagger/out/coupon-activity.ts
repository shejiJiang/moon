import sdk from '@api/sdk';
import {IResult} from '@/types';

/**
 *
 * 查询活动（注册赠券活动、进店赠券活动）不可用的时间范围
 *
 */
async function queryActivityEnableTimeUsingGET(
  activityId: IQueryActivityEnableTimeUsingGETActivityIdReq,
  couponActivityType: IQueryActivityEnableTimeUsingGETCouponActivityTypeReq,
): Promise<IQueryActivityEnableTimeUsingGETRes> {
  let result = await sdk.get<IQueryActivityEnableTimeUsingGETRes>(
    '/coupon-activity/activity-disable-time/{couponActivityType}/{activityId}'

      .replace('{activityId}', activityId)

      .replace('{couponActivityType}', couponActivityType),

    {
      activityId,

      ...couponActivityType,
    },
  );
  return result.data;
}

/**
 *
 * 新增优惠券活动
 *
 */
async function addUsingPOST_1(
  couponActivityAddRequest: IAddUsingPOST_1CouponActivityAddRequestReq,
): Promise<IAddUsingPOST_1Res> {
  let result = await sdk.post<IAddUsingPOST_1Res>(
    '/coupon-activity/add',

    {},
  );
  return result.data;
}

/**
 *
 * 修改优惠券活动
 *
 */
async function modifyUsingPUT(
  couponActivityModifyRequest: IModifyUsingPUTCouponActivityModifyRequestReq,
): Promise<IModifyUsingPUTRes> {
  let result = await sdk.put<IModifyUsingPUTRes>(
    '/coupon-activity/modify',

    {},
  );
  return result.data;
}

/**
 *
 * 优惠券活动列表分页
 *
 */
async function pageUsingPOST_2(
  request: IPageUsingPOST_2RequestReq,
): Promise<IPageUsingPOST_2Res> {
  let result = await sdk.post<IPageUsingPOST_2Res>(
    '/coupon-activity/page',

    {},
  );
  return result.data;
}

/**
 *
 * 暂停活动
 *
 */
async function pauseActivityUsingPUT(
  id: IPauseActivityUsingPUTIdReq,
): Promise<IPauseActivityUsingPUTRes> {
  let result = await sdk.put<IPauseActivityUsingPUTRes>(
    '/coupon-activity/pause/{id}'.replace('{id}', id),

    {
      id,
    },
  );
  return result.data;
}

/**
 *
 * 开始活动
 *
 */
async function startActivityUsingPUT(
  id: IStartActivityUsingPUTIdReq,
): Promise<IStartActivityUsingPUTRes> {
  let result = await sdk.put<IStartActivityUsingPUTRes>(
    '/coupon-activity/start/{id}'.replace('{id}', id),

    {
      id,
    },
  );
  return result.data;
}

/**
 *
 * 获取活动详情
 *
 */
async function getActivityDetailUsingGET(
  id: IGetActivityDetailUsingGETIdReq,
): Promise<IGetActivityDetailUsingGETRes> {
  let result = await sdk.get<IGetActivityDetailUsingGETRes>(
    '/coupon-activity/{id}'.replace('{id}', id),

    {
      id,
    },
  );
  return result.data;
}

/**
 *
 * 删除活动
 *
 */
async function deleteActivityUsingDELETE(
  id: IDeleteActivityUsingDELETEIdReq,
): Promise<IDeleteActivityUsingDELETERes> {
  let result = await sdk.delete<IDeleteActivityUsingDELETERes>(
    '/coupon-activity/{id}'.replace('{id}', id),

    {
      id,
    },
  );
  return result.data;
}

export default {
  queryActivityEnableTimeUsingGET,

  addUsingPOST_1,

  modifyUsingPUT,

  pageUsingPOST_2,

  pauseActivityUsingPUT,

  startActivityUsingPUT,

  getActivityDetailUsingGET,

  deleteActivityUsingDELETE,
};

/**
 * 优惠券活动Id
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IQueryActivityEnableTimeUsingGETActivityIdReq".
 */
export type IQueryActivityEnableTimeUsingGETActivityIdReq = string;
/**
 * 优惠券活动Id
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IPauseActivityUsingPUTIdReq".
 */
export type IPauseActivityUsingPUTIdReq = string;
/**
 * 优惠券活动Id
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IStartActivityUsingPUTIdReq".
 */
export type IStartActivityUsingPUTIdReq = string;
/**
 * 优惠券活动Id
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IGetActivityDetailUsingGETIdReq".
 */
export type IGetActivityDetailUsingGETIdReq = string;
/**
 * 优惠券活动Id
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IDeleteActivityUsingDELETEIdReq".
 */
export type IDeleteActivityUsingDELETEIdReq = string;

export interface IgnoreType {
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "BaseResponse«List«CouponActivityDisabledTimeVO»»".
 */
export interface BaseResponseListCouponActivityDisabledTimeVO {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: CouponActivityDisabledTimeVO[];
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
export interface CouponActivityDisabledTimeVO {
  /**
   * 结束时间
   */
  endTime?: string;
  /**
   * 开始时间
   */
  startTime?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "CouponActivityDisabledTimeVO".
 */
export interface CouponActivityDisabledTimeVO1 {
  /**
   * 结束时间
   */
  endTime?: string;
  /**
   * 开始时间
   */
  startTime?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "CouponActivityAddRequest".
 */
export interface CouponActivityAddRequest {
  /**
   * 参与成功通知描述
   */
  activityDesc?: string;
  /**
   * 优惠券活动名称
   */
  activityName?: string;
  /**
   * 参与成功通知标题
   */
  activityTitle?: string;
  /**
   * 优惠券活动配置信息
   */
  couponActivityConfigs?: CouponActivityConfigSaveRequest[];
  /**
   * 优惠券活动类型
   * * ALL_COUPONS: 0：全场赠券
   * * SPECIFY_COUPON: 1：指定赠券
   * * STORE_COUPONS: 2：进店赠券
   * * REGISTERED_COUPON: 3：注册赠券
   */
  couponActivityType?: '0' | '1' | '2' | '3';
  /**
   * 操作人
   */
  createPerson?: string;
  /**
   * 结束时间
   */
  endTime?: string;
  /**
   * 关联的客户等级
   * * ALL_CUSTOMER: -1：所有客户
   * * ALL_LEVEL: 0：所有等级
   * * LEVEL_LIST: 1：其他等级
   */
  joinLevel?: '-1' | '0' | '1';
  /**
   * 剩余优惠券组数
   */
  leftGroupNum?: number;
  /**
   * 是否是平台
   * * NO: 否
   * * YES: 是
   */
  platformFlag?: '0' | '1';
  /**
   * 优惠券被使用后可再次领取的次数，每次仅限领取1张
   */
  receiveCount?: number;
  /**
   * 是否限制领取优惠券次数
   * * NO: 否
   * * YES: 是
   */
  receiveType?: '0' | '1';
  /**
   * 开始时间
   */
  startTime?: string;
  /**
   * 店铺id
   */
  storeId?: number;
  /**
   * 生效终端,以逗号分隔
   * * ALL: 0：全部
   * * PC: 1：PC
   * * H5: 2：移动端H5
   * * APP: 3：APP
   */
  terminals?: '0' | '1' | '2' | '3';
  /**
   * 登录用户Id
   */
  userId?: string;
  [k: string]: any;
}
export interface CouponActivityConfigSaveRequest {
  /**
   * 优惠券id
   */
  couponId?: string;
  /**
   * 优惠券总张数
   */
  totalCount?: number;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "CouponActivityConfigSaveRequest".
 */
export interface CouponActivityConfigSaveRequest1 {
  /**
   * 优惠券id
   */
  couponId?: string;
  /**
   * 优惠券总张数
   */
  totalCount?: number;
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
 * via the `definition` "CouponActivityModifyRequest".
 */
export interface CouponActivityModifyRequest {
  /**
   * 参与成功通知描述
   */
  activityDesc?: string;
  /**
   * 优惠券活动id
   */
  activityId?: string;
  /**
   * 优惠券活动名称
   */
  activityName?: string;
  /**
   * 参与成功通知标题
   */
  activityTitle?: string;
  /**
   * 优惠券活动配置信息
   */
  couponActivityConfigs?: CouponActivityConfigSaveRequest2[];
  /**
   * 优惠券活动类型
   * * ALL_COUPONS: 0：全场赠券
   * * SPECIFY_COUPON: 1：指定赠券
   * * STORE_COUPONS: 2：进店赠券
   * * REGISTERED_COUPON: 3：注册赠券
   */
  couponActivityType?: '0' | '1' | '2' | '3';
  /**
   * 结束时间
   */
  endTime?: string;
  /**
   * 关联的客户等级
   * * ALL_CUSTOMER: -1：所有客户
   * * ALL_LEVEL: 0：所有等级
   * * LEVEL_LIST: 1：其他等级
   */
  joinLevel?: '-1' | '0' | '1';
  /**
   * 剩余优惠券组数
   */
  leftGroupNum?: number;
  /**
   * 是否是平台
   * * NO: 否
   * * YES: 是
   */
  platformFlag?: '0' | '1';
  /**
   * 优惠券被使用后可再次领取的次数，每次仅限领取1张
   */
  receiveCount?: number;
  /**
   * 是否限制领取优惠券次数
   * * NO: 否
   * * YES: 是
   */
  receiveType?: '0' | '1';
  /**
   * 开始时间
   */
  startTime?: string;
  /**
   * 店铺id
   */
  storeId?: number;
  /**
   * 生效终端,以逗号分隔
   * * ALL: 0：全部
   * * PC: 1：PC
   * * H5: 2：移动端H5
   * * APP: 3：APP
   */
  terminals?: '0' | '1' | '2' | '3';
  /**
   * 修改人
   */
  updatePerson?: string;
  /**
   * 登录用户Id
   */
  userId?: string;
  [k: string]: any;
}
export interface CouponActivityConfigSaveRequest2 {
  /**
   * 优惠券id
   */
  couponId?: string;
  /**
   * 优惠券总张数
   */
  totalCount?: number;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "CouponActivityPageRequest".
 */
export interface CouponActivityPageRequest {
  /**
   * 优惠券活动名称
   */
  activityName?: string;
  /**
   * 优惠券活动类型
   * * ALL_COUPONS: 0：全场赠券
   * * SPECIFY_COUPON: 1：指定赠券
   * * STORE_COUPONS: 2：进店赠券
   * * REGISTERED_COUPON: 3：注册赠券
   */
  couponActivityType?: '0' | '1' | '2' | '3';
  /**
   * 结束时间
   */
  endTime?: string;
  /**
   * 关联的客户等级
   * * ALL_CUSTOMER: -1：所有客户
   * * ALL_LEVEL: 0：所有等级
   * * LEVEL_LIST: 1：其他等级
   */
  joinLevel?: '-1' | '0' | '1';
  /**
   * 第几页
   */
  pageNum?: number;
  /**
   * 每页显示多少条
   */
  pageSize?: number;
  /**
   * 查询类型
   * * ALL: 0：全部
   * * STARTED: 1：进行中
   * * PAUSED: 2：暂停中
   * * NOT_START: 3：未开始
   * * ENDED: 4：已结束
   */
  queryTab?: '0' | '1' | '2' | '3' | '4';
  /**
   * 排序字段
   */
  sortColumn?: string;
  /**
   * 多重排序
   */
  sortMap?: {
    [k: string]: string;
  };
  /**
   * 排序规则 desc asc
   */
  sortRole?: string;
  /**
   * 排序类型
   */
  sortType?: string;
  /**
   * 开始时间
   */
  startTime?: string;
  /**
   * 店铺id
   */
  storeId?: number;
  /**
   * 登录用户Id
   */
  userId?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "BaseResponse«MicroServicePage«CouponActivityVO»»".
 */
export interface BaseResponseMicroServicePageCouponActivityVO {
  /**
   * 结果码
   */
  code: string;
  context?: MicroServicePageCouponActivityVO;
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * 内容
 */
export interface MicroServicePageCouponActivityVO {
  /**
   * 具体数据内容
   */
  content?: CouponActivityVO[];
  first?: boolean;
  last?: boolean;
  /**
   * 页码
   */
  number?: number;
  numberOfElements?: number;
  /**
   * 每页条数
   */
  size?: number;
  sort?: Sort;
  /**
   * 总数据大小
   */
  total?: number;
  totalElements?: number;
  totalPages?: number;
  [k: string]: any;
}
export interface CouponActivityVO {
  /**
   * 参与成功通知描述
   */
  activityDesc?: string;
  /**
   * 优惠券活动id
   */
  activityId?: string;
  /**
   * 优惠券活动名称
   */
  activityName?: string;
  /**
   * 参与成功通知标题
   */
  activityTitle?: string;
  /**
   * 优惠券活动类型
   * * ALL_COUPONS: 0：全场赠券
   * * SPECIFY_COUPON: 1：指定赠券
   * * STORE_COUPONS: 2：进店赠券
   * * REGISTERED_COUPON: 3：注册赠券
   */
  couponActivityType?: '0' | '1' | '2' | '3';
  /**
   * 创建人
   */
  createPerson?: string;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 是否已删除
   * * NO: 否
   * * YES: 是
   */
  delFlag?: '0' | '1';
  /**
   * 删除人
   */
  delPerson?: string;
  /**
   * 删除时间
   */
  delTime?: string;
  /**
   * 结束时间
   */
  endTime?: string;
  /**
   * 关联的客户等级
   * * ALL_CUSTOMER: -1：所有客户
   * * ALL_LEVEL: 0：所有等级
   * * LEVEL_LIST: 1：其他等级
   */
  joinLevel?: '-1' | '0' | '1';
  /**
   * 剩余优惠券组数
   */
  leftGroupNum?: number;
  /**
   * 是否暂停
   * * NO: 否
   * * YES: 是
   */
  pauseFlag?: '0' | '1';
  /**
   * 是否平台
   * * NO: 否
   * * YES: 是
   */
  platformFlag?: '0' | '1';
  /**
   * 优惠券被使用后可再次领取的次数，每次仅限领取1张
   */
  receiveCount?: number;
  /**
   * 是否限制领取优惠券次数
   * * NO: 否
   * * YES: 是
   */
  receiveType?: '0' | '1';
  /**
   * 开始时间
   */
  startTime?: string;
  /**
   * 店铺id
   */
  storeId?: number;
  /**
   * 生效终端,以逗号分隔
   * * ALL: 0：全部
   * * PC: 1：PC
   * * H5: 2：移动端H5
   * * APP: 3：APP
   */
  terminals?: '0' | '1' | '2' | '3';
  /**
   * 修改人
   */
  updatePerson?: string;
  /**
   * 修改时间
   */
  updateTime?: string;
  [k: string]: any;
}
export interface Sort {
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "MicroServicePage«CouponActivityVO»".
 */
export interface MicroServicePageCouponActivityVO1 {
  /**
   * 具体数据内容
   */
  content?: CouponActivityVO[];
  first?: boolean;
  last?: boolean;
  /**
   * 页码
   */
  number?: number;
  numberOfElements?: number;
  /**
   * 每页条数
   */
  size?: number;
  sort?: Sort;
  /**
   * 总数据大小
   */
  total?: number;
  totalElements?: number;
  totalPages?: number;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "CouponActivityVO".
 */
export interface CouponActivityVO1 {
  /**
   * 参与成功通知描述
   */
  activityDesc?: string;
  /**
   * 优惠券活动id
   */
  activityId?: string;
  /**
   * 优惠券活动名称
   */
  activityName?: string;
  /**
   * 参与成功通知标题
   */
  activityTitle?: string;
  /**
   * 优惠券活动类型
   * * ALL_COUPONS: 0：全场赠券
   * * SPECIFY_COUPON: 1：指定赠券
   * * STORE_COUPONS: 2：进店赠券
   * * REGISTERED_COUPON: 3：注册赠券
   */
  couponActivityType?: '0' | '1' | '2' | '3';
  /**
   * 创建人
   */
  createPerson?: string;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 是否已删除
   * * NO: 否
   * * YES: 是
   */
  delFlag?: '0' | '1';
  /**
   * 删除人
   */
  delPerson?: string;
  /**
   * 删除时间
   */
  delTime?: string;
  /**
   * 结束时间
   */
  endTime?: string;
  /**
   * 关联的客户等级
   * * ALL_CUSTOMER: -1：所有客户
   * * ALL_LEVEL: 0：所有等级
   * * LEVEL_LIST: 1：其他等级
   */
  joinLevel?: '-1' | '0' | '1';
  /**
   * 剩余优惠券组数
   */
  leftGroupNum?: number;
  /**
   * 是否暂停
   * * NO: 否
   * * YES: 是
   */
  pauseFlag?: '0' | '1';
  /**
   * 是否平台
   * * NO: 否
   * * YES: 是
   */
  platformFlag?: '0' | '1';
  /**
   * 优惠券被使用后可再次领取的次数，每次仅限领取1张
   */
  receiveCount?: number;
  /**
   * 是否限制领取优惠券次数
   * * NO: 否
   * * YES: 是
   */
  receiveType?: '0' | '1';
  /**
   * 开始时间
   */
  startTime?: string;
  /**
   * 店铺id
   */
  storeId?: number;
  /**
   * 生效终端,以逗号分隔
   * * ALL: 0：全部
   * * PC: 1：PC
   * * H5: 2：移动端H5
   * * APP: 3：APP
   */
  terminals?: '0' | '1' | '2' | '3';
  /**
   * 修改人
   */
  updatePerson?: string;
  /**
   * 修改时间
   */
  updateTime?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "Sort".
 */
export interface Sort1 {
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "BaseResponse«CouponActivityDetailResponse»".
 */
export interface BaseResponseCouponActivityDetailResponse {
  /**
   * 结果码
   */
  code: string;
  context?: CouponActivityDetailResponse;
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * 内容
 */
export interface CouponActivityDetailResponse {
  couponActivity?: CouponActivityVO2;
  /**
   * 优惠券活动配置列表
   */
  couponActivityConfigList?: CouponActivityConfigVO[];
  /**
   * 优惠券信息
   */
  couponInfoList?: CouponInfoVO[];
  /**
   * 客户等级列表
   */
  customerLevelList?: CustomerLevelVO[];
  [k: string]: any;
}
/**
 * 优惠券活动
 */
export interface CouponActivityVO2 {
  /**
   * 参与成功通知描述
   */
  activityDesc?: string;
  /**
   * 优惠券活动id
   */
  activityId?: string;
  /**
   * 优惠券活动名称
   */
  activityName?: string;
  /**
   * 参与成功通知标题
   */
  activityTitle?: string;
  /**
   * 优惠券活动类型
   * * ALL_COUPONS: 0：全场赠券
   * * SPECIFY_COUPON: 1：指定赠券
   * * STORE_COUPONS: 2：进店赠券
   * * REGISTERED_COUPON: 3：注册赠券
   */
  couponActivityType?: '0' | '1' | '2' | '3';
  /**
   * 创建人
   */
  createPerson?: string;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 是否已删除
   * * NO: 否
   * * YES: 是
   */
  delFlag?: '0' | '1';
  /**
   * 删除人
   */
  delPerson?: string;
  /**
   * 删除时间
   */
  delTime?: string;
  /**
   * 结束时间
   */
  endTime?: string;
  /**
   * 关联的客户等级
   * * ALL_CUSTOMER: -1：所有客户
   * * ALL_LEVEL: 0：所有等级
   * * LEVEL_LIST: 1：其他等级
   */
  joinLevel?: '-1' | '0' | '1';
  /**
   * 剩余优惠券组数
   */
  leftGroupNum?: number;
  /**
   * 是否暂停
   * * NO: 否
   * * YES: 是
   */
  pauseFlag?: '0' | '1';
  /**
   * 是否平台
   * * NO: 否
   * * YES: 是
   */
  platformFlag?: '0' | '1';
  /**
   * 优惠券被使用后可再次领取的次数，每次仅限领取1张
   */
  receiveCount?: number;
  /**
   * 是否限制领取优惠券次数
   * * NO: 否
   * * YES: 是
   */
  receiveType?: '0' | '1';
  /**
   * 开始时间
   */
  startTime?: string;
  /**
   * 店铺id
   */
  storeId?: number;
  /**
   * 生效终端,以逗号分隔
   * * ALL: 0：全部
   * * PC: 1：PC
   * * H5: 2：移动端H5
   * * APP: 3：APP
   */
  terminals?: '0' | '1' | '2' | '3';
  /**
   * 修改人
   */
  updatePerson?: string;
  /**
   * 修改时间
   */
  updateTime?: string;
  [k: string]: any;
}
export interface CouponActivityConfigVO {
  /**
   * 优惠券活动配置表id
   */
  activityConfigId?: string;
  /**
   * 优惠券活动id
   */
  activityId?: string;
  /**
   * 优惠券id
   */
  couponId?: string;
  /**
   * 优惠券是否有剩余
   * * NO: 否
   * * YES: 是
   */
  hasLeft?: '0' | '1';
  /**
   * 优惠券总张数
   */
  totalCount?: number;
  [k: string]: any;
}
export interface CouponInfoVO {
  /**
   * 优惠券分类Id集合
   */
  cateIds?: string[];
  /**
   * 优惠券分类名集合
   */
  cateNames?: string[];
  /**
   * 优惠券说明
   */
  couponDesc?: string;
  /**
   * 优惠券主键Id
   */
  couponId?: string;
  /**
   * 优惠券名称
   */
  couponName?: string;
  /**
   * 优惠券查询状态
   * * ALL: 0：全部
   * * STARTED: 1：生效中
   * * NOT_START: 2：未生效
   * * DAYS: 3：领取生效
   * * ENDED: 4：已失效
   */
  couponStatus?: '0' | '1' | '2' | '3' | '4';
  /**
   * 优惠券类型
   * * GENERAL_VOUCHERS: 0：通用券
   * * STORE_VOUCHERS: 1：店铺券
   * * FREIGHT_VOUCHER: 2：运费券
   */
  couponType?: '0' | '1' | '2';
  /**
   * 是否已删除
   * * NO: 否
   * * YES: 是
   */
  delFlag?: '0' | '1';
  /**
   * 优惠券面值
   */
  denomination?: number;
  /**
   * 有效天数
   */
  effectiveDays?: number;
  /**
   * 优惠券结束时间
   */
  endTime?: string;
  /**
   * 购满多少钱
   */
  fullBuyPrice?: number;
  /**
   * 购满类型
   * * NO_THRESHOLD: 0：无门槛
   * * FULL_MONEY: 1：满N元可使用
   */
  fullBuyType?: '0' | '1';
  /**
   * 是否已经绑定营销活动
   * * NO: 否
   * * YES: 是
   */
  isFree?: '0' | '1';
  /**
   * 是否平台优惠券
   * * NO: 否
   * * YES: 是
   */
  platformFlag?: '0' | '1';
  /**
   * 起止时间类型
   * * RANGE_DAY: 0：按起止时间
   * * DAYS: 1：按N天有效
   */
  rangeDayType?: '0' | '1';
  /**
   * 优惠券关联的商品范围id集合(可以为0(全部)，brand_id(品牌id)，cate_id(分类id), goods_info_id(货品id))
   */
  scopeIds?: string[];
  /**
   * 关联的商品范围名称集合，如分类名、品牌名
   */
  scopeNames?: string[];
  /**
   * 优惠券营销范围
   * * ALL: 0：全部商品
   * * BRAND: 1：品牌
   * * BOSS_CATE: 2：平台(boss)类目
   * * STORE_CATE: 3：店铺分类
   * * SKU: 4：自定义货品（店铺可用）
   */
  scopeType?: '0' | '1' | '2' | '3' | '4';
  /**
   * 优惠券开始时间
   */
  startTime?: string;
  /**
   * 店铺id
   */
  storeId?: number;
  [k: string]: any;
}
export interface CustomerLevelVO {
  /**
   * 创建人
   */
  createPerson?: string;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 客户等级折扣
   */
  customerLevelDiscount?: number;
  /**
   * 客户等级ID
   */
  customerLevelId?: number;
  /**
   * 客户等级名称
   */
  customerLevelName?: string;
  /**
   * 等级权益
   */
  customerLevelRightsVOS?: CustomerLevelRightsVO[];
  /**
   * 删除标志
   * * NO: 否
   * * YES: 是
   */
  delFlag?: '0' | '1';
  /**
   * 删除人
   */
  deletePerson?: string;
  /**
   * 删除时间
   */
  deleteTime?: string;
  /**
   * 所需成长值
   */
  growthValue?: number;
  /**
   * 是否是默认
   * * NO: 否
   * * YES: 是
   */
  isDefalt?: '0' | '1';
  /**
   * 等级徽章图
   */
  rankBadgeImg?: string;
  /**
   * 修改人
   */
  updatePerson?: string;
  /**
   * 修改时间
   */
  updateTime?: string;
  [k: string]: any;
}
export interface CustomerLevelRightsVO {
  delFlag?: '0' | '1';
  rightsDescription?: string;
  rightsId?: number;
  rightsLogo?: string;
  rightsName?: string;
  rightsRule?: string;
  rightsType?: '0' | '1' | '2' | '3' | '4' | '5';
  sort?: number;
  status?: number;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "CouponActivityDetailResponse".
 */
export interface CouponActivityDetailResponse1 {
  couponActivity?: CouponActivityVO2;
  /**
   * 优惠券活动配置列表
   */
  couponActivityConfigList?: CouponActivityConfigVO[];
  /**
   * 优惠券信息
   */
  couponInfoList?: CouponInfoVO[];
  /**
   * 客户等级列表
   */
  customerLevelList?: CustomerLevelVO[];
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "CouponActivityConfigVO".
 */
export interface CouponActivityConfigVO1 {
  /**
   * 优惠券活动配置表id
   */
  activityConfigId?: string;
  /**
   * 优惠券活动id
   */
  activityId?: string;
  /**
   * 优惠券id
   */
  couponId?: string;
  /**
   * 优惠券是否有剩余
   * * NO: 否
   * * YES: 是
   */
  hasLeft?: '0' | '1';
  /**
   * 优惠券总张数
   */
  totalCount?: number;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "CouponInfoVO".
 */
export interface CouponInfoVO1 {
  /**
   * 优惠券分类Id集合
   */
  cateIds?: string[];
  /**
   * 优惠券分类名集合
   */
  cateNames?: string[];
  /**
   * 优惠券说明
   */
  couponDesc?: string;
  /**
   * 优惠券主键Id
   */
  couponId?: string;
  /**
   * 优惠券名称
   */
  couponName?: string;
  /**
   * 优惠券查询状态
   * * ALL: 0：全部
   * * STARTED: 1：生效中
   * * NOT_START: 2：未生效
   * * DAYS: 3：领取生效
   * * ENDED: 4：已失效
   */
  couponStatus?: '0' | '1' | '2' | '3' | '4';
  /**
   * 优惠券类型
   * * GENERAL_VOUCHERS: 0：通用券
   * * STORE_VOUCHERS: 1：店铺券
   * * FREIGHT_VOUCHER: 2：运费券
   */
  couponType?: '0' | '1' | '2';
  /**
   * 是否已删除
   * * NO: 否
   * * YES: 是
   */
  delFlag?: '0' | '1';
  /**
   * 优惠券面值
   */
  denomination?: number;
  /**
   * 有效天数
   */
  effectiveDays?: number;
  /**
   * 优惠券结束时间
   */
  endTime?: string;
  /**
   * 购满多少钱
   */
  fullBuyPrice?: number;
  /**
   * 购满类型
   * * NO_THRESHOLD: 0：无门槛
   * * FULL_MONEY: 1：满N元可使用
   */
  fullBuyType?: '0' | '1';
  /**
   * 是否已经绑定营销活动
   * * NO: 否
   * * YES: 是
   */
  isFree?: '0' | '1';
  /**
   * 是否平台优惠券
   * * NO: 否
   * * YES: 是
   */
  platformFlag?: '0' | '1';
  /**
   * 起止时间类型
   * * RANGE_DAY: 0：按起止时间
   * * DAYS: 1：按N天有效
   */
  rangeDayType?: '0' | '1';
  /**
   * 优惠券关联的商品范围id集合(可以为0(全部)，brand_id(品牌id)，cate_id(分类id), goods_info_id(货品id))
   */
  scopeIds?: string[];
  /**
   * 关联的商品范围名称集合，如分类名、品牌名
   */
  scopeNames?: string[];
  /**
   * 优惠券营销范围
   * * ALL: 0：全部商品
   * * BRAND: 1：品牌
   * * BOSS_CATE: 2：平台(boss)类目
   * * STORE_CATE: 3：店铺分类
   * * SKU: 4：自定义货品（店铺可用）
   */
  scopeType?: '0' | '1' | '2' | '3' | '4';
  /**
   * 优惠券开始时间
   */
  startTime?: string;
  /**
   * 店铺id
   */
  storeId?: number;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "CustomerLevelVO".
 */
export interface CustomerLevelVO1 {
  /**
   * 创建人
   */
  createPerson?: string;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 客户等级折扣
   */
  customerLevelDiscount?: number;
  /**
   * 客户等级ID
   */
  customerLevelId?: number;
  /**
   * 客户等级名称
   */
  customerLevelName?: string;
  /**
   * 等级权益
   */
  customerLevelRightsVOS?: CustomerLevelRightsVO[];
  /**
   * 删除标志
   * * NO: 否
   * * YES: 是
   */
  delFlag?: '0' | '1';
  /**
   * 删除人
   */
  deletePerson?: string;
  /**
   * 删除时间
   */
  deleteTime?: string;
  /**
   * 所需成长值
   */
  growthValue?: number;
  /**
   * 是否是默认
   * * NO: 否
   * * YES: 是
   */
  isDefalt?: '0' | '1';
  /**
   * 等级徽章图
   */
  rankBadgeImg?: string;
  /**
   * 修改人
   */
  updatePerson?: string;
  /**
   * 修改时间
   */
  updateTime?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "CustomerLevelRightsVO".
 */
export interface CustomerLevelRightsVO1 {
  delFlag?: '0' | '1';
  rightsDescription?: string;
  rightsId?: number;
  rightsLogo?: string;
  rightsName?: string;
  rightsRule?: string;
  rightsType?: '0' | '1' | '2' | '3' | '4' | '5';
  sort?: number;
  status?: number;
  [k: string]: any;
}
/**
 * 优惠券活动类型，0全场赠券，1指定赠券，2进店赠券，3注册赠券
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IQueryActivityEnableTimeUsingGETCouponActivityTypeReq".
 */
export interface IQueryActivityEnableTimeUsingGETCouponActivityTypeReq {
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IQueryActivityEnableTimeUsingGETRes".
 */
export interface IQueryActivityEnableTimeUsingGETRes {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: CouponActivityDisabledTimeVO[];
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IAddUsingPOST_1CouponActivityAddRequestReq".
 */
export interface IAddUsingPOST_1CouponActivityAddRequestReq {
  /**
   * 参与成功通知描述
   */
  activityDesc?: string;
  /**
   * 优惠券活动名称
   */
  activityName?: string;
  /**
   * 参与成功通知标题
   */
  activityTitle?: string;
  /**
   * 优惠券活动配置信息
   */
  couponActivityConfigs?: CouponActivityConfigSaveRequest[];
  /**
   * 优惠券活动类型
   * * ALL_COUPONS: 0：全场赠券
   * * SPECIFY_COUPON: 1：指定赠券
   * * STORE_COUPONS: 2：进店赠券
   * * REGISTERED_COUPON: 3：注册赠券
   */
  couponActivityType?: '0' | '1' | '2' | '3';
  /**
   * 操作人
   */
  createPerson?: string;
  /**
   * 结束时间
   */
  endTime?: string;
  /**
   * 关联的客户等级
   * * ALL_CUSTOMER: -1：所有客户
   * * ALL_LEVEL: 0：所有等级
   * * LEVEL_LIST: 1：其他等级
   */
  joinLevel?: '-1' | '0' | '1';
  /**
   * 剩余优惠券组数
   */
  leftGroupNum?: number;
  /**
   * 是否是平台
   * * NO: 否
   * * YES: 是
   */
  platformFlag?: '0' | '1';
  /**
   * 优惠券被使用后可再次领取的次数，每次仅限领取1张
   */
  receiveCount?: number;
  /**
   * 是否限制领取优惠券次数
   * * NO: 否
   * * YES: 是
   */
  receiveType?: '0' | '1';
  /**
   * 开始时间
   */
  startTime?: string;
  /**
   * 店铺id
   */
  storeId?: number;
  /**
   * 生效终端,以逗号分隔
   * * ALL: 0：全部
   * * PC: 1：PC
   * * H5: 2：移动端H5
   * * APP: 3：APP
   */
  terminals?: '0' | '1' | '2' | '3';
  /**
   * 登录用户Id
   */
  userId?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IAddUsingPOST_1Res".
 */
export interface IAddUsingPOST_1Res {
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
 * via the `definition` "IModifyUsingPUTCouponActivityModifyRequestReq".
 */
export interface IModifyUsingPUTCouponActivityModifyRequestReq {
  /**
   * 参与成功通知描述
   */
  activityDesc?: string;
  /**
   * 优惠券活动id
   */
  activityId?: string;
  /**
   * 优惠券活动名称
   */
  activityName?: string;
  /**
   * 参与成功通知标题
   */
  activityTitle?: string;
  /**
   * 优惠券活动配置信息
   */
  couponActivityConfigs?: CouponActivityConfigSaveRequest2[];
  /**
   * 优惠券活动类型
   * * ALL_COUPONS: 0：全场赠券
   * * SPECIFY_COUPON: 1：指定赠券
   * * STORE_COUPONS: 2：进店赠券
   * * REGISTERED_COUPON: 3：注册赠券
   */
  couponActivityType?: '0' | '1' | '2' | '3';
  /**
   * 结束时间
   */
  endTime?: string;
  /**
   * 关联的客户等级
   * * ALL_CUSTOMER: -1：所有客户
   * * ALL_LEVEL: 0：所有等级
   * * LEVEL_LIST: 1：其他等级
   */
  joinLevel?: '-1' | '0' | '1';
  /**
   * 剩余优惠券组数
   */
  leftGroupNum?: number;
  /**
   * 是否是平台
   * * NO: 否
   * * YES: 是
   */
  platformFlag?: '0' | '1';
  /**
   * 优惠券被使用后可再次领取的次数，每次仅限领取1张
   */
  receiveCount?: number;
  /**
   * 是否限制领取优惠券次数
   * * NO: 否
   * * YES: 是
   */
  receiveType?: '0' | '1';
  /**
   * 开始时间
   */
  startTime?: string;
  /**
   * 店铺id
   */
  storeId?: number;
  /**
   * 生效终端,以逗号分隔
   * * ALL: 0：全部
   * * PC: 1：PC
   * * H5: 2：移动端H5
   * * APP: 3：APP
   */
  terminals?: '0' | '1' | '2' | '3';
  /**
   * 修改人
   */
  updatePerson?: string;
  /**
   * 登录用户Id
   */
  userId?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IModifyUsingPUTRes".
 */
export interface IModifyUsingPUTRes {
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
 * via the `definition` "IPageUsingPOST_2RequestReq".
 */
export interface IPageUsingPOST_2RequestReq {
  /**
   * 优惠券活动名称
   */
  activityName?: string;
  /**
   * 优惠券活动类型
   * * ALL_COUPONS: 0：全场赠券
   * * SPECIFY_COUPON: 1：指定赠券
   * * STORE_COUPONS: 2：进店赠券
   * * REGISTERED_COUPON: 3：注册赠券
   */
  couponActivityType?: '0' | '1' | '2' | '3';
  /**
   * 结束时间
   */
  endTime?: string;
  /**
   * 关联的客户等级
   * * ALL_CUSTOMER: -1：所有客户
   * * ALL_LEVEL: 0：所有等级
   * * LEVEL_LIST: 1：其他等级
   */
  joinLevel?: '-1' | '0' | '1';
  /**
   * 第几页
   */
  pageNum?: number;
  /**
   * 每页显示多少条
   */
  pageSize?: number;
  /**
   * 查询类型
   * * ALL: 0：全部
   * * STARTED: 1：进行中
   * * PAUSED: 2：暂停中
   * * NOT_START: 3：未开始
   * * ENDED: 4：已结束
   */
  queryTab?: '0' | '1' | '2' | '3' | '4';
  /**
   * 排序字段
   */
  sortColumn?: string;
  /**
   * 多重排序
   */
  sortMap?: {
    [k: string]: string;
  };
  /**
   * 排序规则 desc asc
   */
  sortRole?: string;
  /**
   * 排序类型
   */
  sortType?: string;
  /**
   * 开始时间
   */
  startTime?: string;
  /**
   * 店铺id
   */
  storeId?: number;
  /**
   * 登录用户Id
   */
  userId?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IPageUsingPOST_2Res".
 */
export interface IPageUsingPOST_2Res {
  /**
   * 结果码
   */
  code: string;
  context?: MicroServicePageCouponActivityVO;
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IPauseActivityUsingPUTRes".
 */
export interface IPauseActivityUsingPUTRes {
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
 * via the `definition` "IStartActivityUsingPUTRes".
 */
export interface IStartActivityUsingPUTRes {
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
 * via the `definition` "IGetActivityDetailUsingGETRes".
 */
export interface IGetActivityDetailUsingGETRes {
  /**
   * 结果码
   */
  code: string;
  context?: CouponActivityDetailResponse;
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IDeleteActivityUsingDELETERes".
 */
export interface IDeleteActivityUsingDELETERes {
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
