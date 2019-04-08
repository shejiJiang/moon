import sdk from '@api/sdk';
import {IResult} from '@/types';

/**
 *
 * 查询所有的（包括删除的）线下结算银行账户
 *
 */
async function findAllOfflineAccountsWithDeleteUsingGET(): Promise<
  IFindAllOfflineAccountsWithDeleteUsingGETRes
> {
  let result = await sdk.get<IFindAllOfflineAccountsWithDeleteUsingGETRes>(
    '/account/allOfflineAccounts',
    {},
  );
  return result.data;
}

/**
 *
 * 获取配置银行列表
 *
 */
async function getBaseBankUsingGET(): Promise<IGetBaseBankUsingGETRes> {
  let result = await sdk.get<IGetBaseBankUsingGETRes>('/account/base/bank', {});
  return result.data;
}

/**
 *
 * 确认订单收款
 *
 */
async function confirmUsingPOST(
  payOrderOperateRequest: IConfirmUsingPOSTPayOrderOperateRequestReq,
): Promise<IConfirmUsingPOSTRes> {
  let result = await sdk.post<IConfirmUsingPOSTRes>('/account/confirm', {
    ...payOrderOperateRequest,
  });
  return result.data;
}

export default {
  findAllOfflineAccountsWithDeleteUsingGET,

  getBaseBankUsingGET,

  confirmUsingPOST,
};

/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IFindAllOfflineAccountsWithDeleteUsingGETRes".
 */
export type IFindAllOfflineAccountsWithDeleteUsingGETRes = OfflineAccountVO1[];

export interface IgnoreType {
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "OfflineAccountVO".
 */
export interface OfflineAccountVO {
  /**
   * 线下账户id
   */
  accountId?: number;
  /**
   * 账户名称
   */
  accountName?: string;
  /**
   * 支行
   */
  bankBranch?: string;
  /**
   * 开户银行
   */
  bankName?: string;
  /**
   * 账号
   */
  bankNo?: string;
  /**
   * 账号状态
   * * ENABLE: 启用
   * * DISABLE: 禁用
   */
  bankStatus?: '0' | '1';
  /**
   * 公司信息id
   */
  companyInfoId?: number;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 删除标志
   * * NO: 否
   * * YES: 是
   */
  deleteFlag?: '0' | '1';
  /**
   * 删除时间
   */
  deleteTime?: string;
  /**
   * 是否主账号
   * * NO: 否
   * * YES: 是
   */
  isDefaultAccount?: '0' | '1';
  /**
   * 是否收到平台首次打款
   * * NO: 否
   * * YES: 是
   */
  isReceived?: '0' | '1';
  /**
   * 第三方店铺id
   */
  thirdId?: string;
  /**
   * 修改时间
   */
  update_time?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "BaseResponse«List«BaseBank»»".
 */
export interface BaseResponseListBaseBank {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: BaseBank[];
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
export interface BaseBank {
  /**
   * 银行编号
   */
  bankCode?: string;
  /**
   * 银行名称
   */
  bankName?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "BaseBank".
 */
export interface BaseBank1 {
  /**
   * 银行编号
   */
  bankCode?: string;
  /**
   * 银行名称
   */
  bankName?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "TradeConfirmPayOrderRequest".
 */
export interface TradeConfirmPayOrderRequest {
  operator?: Operator;
  /**
   * 支付单id列表
   */
  payOrderIds?: string[];
  [k: string]: any;
}
/**
 * 操作人
 */
export interface Operator {
  /**
   * 操作人账号
   */
  account?: string;
  /**
   * 管理员Id
   */
  adminId?: string;
  /**
   * 供应商类型
   * * NO: 否
   * * YES: 是
   */
  companyType?: '0' | '1';
  /**
   * 操作所在的Ip地址
   */
  ip?: string;
  /**
   * 操作人
   */
  name?: string;
  /**
   * 操作方
   * * BOSS: BOSS
   * * CUSTOMER: 商户(小B)
   * * THIRD: 第三方
   * * SUPPLIER: 供应商
   * * PLATFORM: 平台
   */
  platform?: 'BOSS' | 'CUSTOMER' | 'THIRD' | 'SUPPLIER' | 'PLATFORM';
  /**
   * 店铺id
   */
  storeId?: string;
  /**
   * 用户Id
   */
  userId?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "Operator".
 */
export interface Operator1 {
  /**
   * 操作人账号
   */
  account?: string;
  /**
   * 管理员Id
   */
  adminId?: string;
  /**
   * 供应商类型
   * * NO: 否
   * * YES: 是
   */
  companyType?: '0' | '1';
  /**
   * 操作所在的Ip地址
   */
  ip?: string;
  /**
   * 操作人
   */
  name?: string;
  /**
   * 操作方
   * * BOSS: BOSS
   * * CUSTOMER: 商户(小B)
   * * THIRD: 第三方
   * * SUPPLIER: 供应商
   * * PLATFORM: 平台
   */
  platform?: 'BOSS' | 'CUSTOMER' | 'THIRD' | 'SUPPLIER' | 'PLATFORM';
  /**
   * 店铺id
   */
  storeId?: string;
  /**
   * 用户Id
   */
  userId?: string;
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
export interface OfflineAccountVO1 {
  /**
   * 线下账户id
   */
  accountId?: number;
  /**
   * 账户名称
   */
  accountName?: string;
  /**
   * 支行
   */
  bankBranch?: string;
  /**
   * 开户银行
   */
  bankName?: string;
  /**
   * 账号
   */
  bankNo?: string;
  /**
   * 账号状态
   * * ENABLE: 启用
   * * DISABLE: 禁用
   */
  bankStatus?: '0' | '1';
  /**
   * 公司信息id
   */
  companyInfoId?: number;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 删除标志
   * * NO: 否
   * * YES: 是
   */
  deleteFlag?: '0' | '1';
  /**
   * 删除时间
   */
  deleteTime?: string;
  /**
   * 是否主账号
   * * NO: 否
   * * YES: 是
   */
  isDefaultAccount?: '0' | '1';
  /**
   * 是否收到平台首次打款
   * * NO: 否
   * * YES: 是
   */
  isReceived?: '0' | '1';
  /**
   * 第三方店铺id
   */
  thirdId?: string;
  /**
   * 修改时间
   */
  update_time?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IGetBaseBankUsingGETRes".
 */
export interface IGetBaseBankUsingGETRes {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: BaseBank[];
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IConfirmUsingPOSTPayOrderOperateRequestReq".
 */
export interface IConfirmUsingPOSTPayOrderOperateRequestReq {
  operator?: Operator;
  /**
   * 支付单id列表
   */
  payOrderIds?: string[];
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IConfirmUsingPOSTRes".
 */
export interface IConfirmUsingPOSTRes {
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
