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

export default {
  findAllOfflineAccountsWithDeleteUsingGET,
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
