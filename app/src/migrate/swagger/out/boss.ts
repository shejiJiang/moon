import sdk from '@api/sdk';
import {IResult} from '@/types';

/**
 *
 * 关闭客户信息完善开关-------关闭客户信息完善开关时，客户审核开关一起关闭
 *
 */
async function closeAuditCustomerInfoUsingPOST(): Promise<
  ICloseAuditCustomerInfoUsingPOSTRes
> {
  let result = await sdk.post<ICloseAuditCustomerInfoUsingPOSTRes>(
    '/boss/config/audit/customer-info/close',

    {},
  );
  return result.data;
}

/**
 *
 * 开启客户信息完善开关
 *
 */
async function openAuditCustomerInfoUsingPOST(): Promise<
  IOpenAuditCustomerInfoUsingPOSTRes
> {
  let result = await sdk.post<IOpenAuditCustomerInfoUsingPOSTRes>(
    '/boss/config/audit/customer-info/open',

    {},
  );
  return result.data;
}

/**
 *
 * 关闭客户审核开关
 *
 */
async function closeAuditCustomerUsingPOST(): Promise<
  ICloseAuditCustomerUsingPOSTRes
> {
  let result = await sdk.post<ICloseAuditCustomerUsingPOSTRes>(
    '/boss/config/audit/customer/close',

    {},
  );
  return result.data;
}

/**
 *
 * 开启客户审核开关
 *
 */
async function openAuditCustomerUsingPOST(): Promise<
  IOpenAuditCustomerUsingPOSTRes
> {
  let result = await sdk.post<IOpenAuditCustomerUsingPOSTRes>(
    '/boss/config/audit/customer/open',

    {},
  );
  return result.data;
}

/**
 *
 * 关闭商品审核开关
 *
 */
async function closeAuditGoodsUsingPOST(): Promise<
  ICloseAuditGoodsUsingPOSTRes
> {
  let result = await sdk.post<ICloseAuditGoodsUsingPOSTRes>(
    '/boss/config/audit/goods/close',

    {},
  );
  return result.data;
}

/**
 *
 * 开启商品审核开关
 *
 */
async function openAuditGoodsUsingPOST(): Promise<IOpenAuditGoodsUsingPOSTRes> {
  let result = await sdk.post<IOpenAuditGoodsUsingPOSTRes>(
    '/boss/config/audit/goods/open',

    {},
  );
  return result.data;
}

/**
 *
 * 关闭自营商品审核开关
 *
 */
async function closeAuditSelfGoodsUsingPOST(): Promise<
  ICloseAuditSelfGoodsUsingPOSTRes
> {
  let result = await sdk.post<ICloseAuditSelfGoodsUsingPOSTRes>(
    '/boss/config/audit/goods/self/close',

    {},
  );
  return result.data;
}

/**
 *
 * 开启自营商品审核开关
 *
 */
async function openAuditSelfGoodsUsingPOST(): Promise<
  IOpenAuditSelfGoodsUsingPOSTRes
> {
  let result = await sdk.post<IOpenAuditSelfGoodsUsingPOSTRes>(
    '/boss/config/audit/goods/self/open',

    {},
  );
  return result.data;
}

/**
 *
 * 移动端商品列表大小图默认展示设置
 *
 */
async function setDisplayImgForMobileUsingPOST(
  status: ISetDisplayImgForMobileUsingPOSTStatusReq,
): Promise<ISetDisplayImgForMobileUsingPOSTRes> {
  let result = await sdk.post<ISetDisplayImgForMobileUsingPOSTRes>(
    '/boss/config/audit/imgdisplayformobile/{status}'.replace(
      '{status}',
      status,
    ),

    {
      ...status,
    },
  );
  return result.data;
}

/**
 *
 * pc端商品列表大小图默认展示设置
 *
 */
async function setDisplayImgForPcUsingPOST(
  status: ISetDisplayImgForPcUsingPOSTStatusReq,
): Promise<ISetDisplayImgForPcUsingPOSTRes> {
  let result = await sdk.post<ISetDisplayImgForPcUsingPOSTRes>(
    '/boss/config/audit/imgdisplayforpc/{status}'.replace('{status}', status),

    {
      ...status,
    },
  );
  return result.data;
}

/**
 *
 * 查询审核开关状态
 *
 */
async function listConfigsUsingGET(): Promise<IListConfigsUsingGETRes> {
  let result = await sdk.get<IListConfigsUsingGETRes>(
    '/boss/config/audit/list',

    {},
  );
  return result.data;
}

/**
 *
 * 小程序分享设置
 *
 */
async function modifyShareLittleProgramUsingPOST(
  request: IModifyShareLittleProgramUsingPOSTRequestReq,
): Promise<IModifyShareLittleProgramUsingPOSTRes> {
  let result = await sdk.post<IModifyShareLittleProgramUsingPOSTRes>(
    '/boss/config/audit/modify-share-little-program',

    {},
  );
  return result.data;
}

/**
 *
 * 关闭订单审核开关
 *
 */
async function closeAuditOrderUsingPOST(): Promise<
  ICloseAuditOrderUsingPOSTRes
> {
  let result = await sdk.post<ICloseAuditOrderUsingPOSTRes>(
    '/boss/config/audit/order/close',

    {},
  );
  return result.data;
}

/**
 *
 * 开启订单审核开关
 *
 */
async function openAuditOrderUsingPOST(): Promise<IOpenAuditOrderUsingPOSTRes> {
  let result = await sdk.post<IOpenAuditOrderUsingPOSTRes>(
    '/boss/config/audit/order/open',

    {},
  );
  return result.data;
}

/**
 *
 * 移动端商城商品列表展示维度SKU或者SPU设置
 *
 */
async function setDisplaySpecForMobileUsingPOST(
  status: ISetDisplaySpecForMobileUsingPOSTStatusReq,
): Promise<ISetDisplaySpecForMobileUsingPOSTRes> {
  let result = await sdk.post<ISetDisplaySpecForMobileUsingPOSTRes>(
    '/boss/config/audit/specdisplayformobile/{status}'.replace(
      '{status}',
      status,
    ),

    {
      ...status,
    },
  );
  return result.data;
}

/**
 *
 * PC商城商品列表展示维度SKU或者SPU设置
 *
 */
async function setDisplaySpecForPcUsingPOST(
  status: ISetDisplaySpecForPcUsingPOSTStatusReq,
): Promise<ISetDisplaySpecForPcUsingPOSTRes> {
  let result = await sdk.post<ISetDisplaySpecForPcUsingPOSTRes>(
    '/boss/config/audit/specdisplayforpc/{status}'.replace('{status}', status),

    {
      ...status,
    },
  );
  return result.data;
}

/**
 *
 * 关闭用户审核（即访问商城无需登录）
 *
 */
async function closeUserSettingUsingPOST(): Promise<
  ICloseUserSettingUsingPOSTRes
> {
  let result = await sdk.post<ICloseUserSettingUsingPOSTRes>(
    '/boss/config/audit/usersetting/close',

    {},
  );
  return result.data;
}

/**
 *
 * 开启用户审核（即访问需登录）
 *
 */
async function openUserSettingUsingPOST(): Promise<
  IOpenUserSettingUsingPOSTRes
> {
  let result = await sdk.post<IOpenUserSettingUsingPOSTRes>(
    '/boss/config/audit/usersetting/open',

    {},
  );
  return result.data;
}

/**
 *
 * 查询BOSS管理后台邮箱接口配置
 *
 */
async function queryEmailConfigUsingGET(): Promise<
  IQueryEmailConfigUsingGETRes
> {
  let result = await sdk.get<IQueryEmailConfigUsingGETRes>(
    '/boss/emailConfig',

    {},
  );
  return result.data;
}

/**
 *
 * 更新邮箱接口配置
 *
 */
async function modifyEmailConfigUsingPUT(
  request: IModifyEmailConfigUsingPUTRequestReq,
): Promise<IModifyEmailConfigUsingPUTRes> {
  let result = await sdk.put<IModifyEmailConfigUsingPUTRes>(
    '/boss/emailConfig',

    {},
  );
  return result.data;
}

/**
 *
 * S2B平台端 查询所有有效的物流公司列表
 *
 */
async function allExpressCompanyListUsingGET(): Promise<
  IAllExpressCompanyListUsingGETRes
> {
  let result = await sdk.get<IAllExpressCompanyListUsingGETRes>(
    '/boss/expressCompany',

    {},
  );
  return result.data;
}

/**
 *
 * S2B平台端 新增物流公司
 *
 */
async function addExpressCompanyUsingPOST(
  saveRopRequest: IAddExpressCompanyUsingPOSTSaveRopRequestReq,
): Promise<IAddExpressCompanyUsingPOSTRes> {
  let result = await sdk.post<IAddExpressCompanyUsingPOSTRes>(
    '/boss/expressCompany',

    {},
  );
  return result.data;
}

/**
 *
 * S2B平台端 删除物流公司
 *
 */
async function delExpressCompanyUsingDELETE(
  expressCompanyId: IDelExpressCompanyUsingDELETEExpressCompanyIdReq,
): Promise<IDelExpressCompanyUsingDELETERes> {
  let result = await sdk.delete<IDelExpressCompanyUsingDELETERes>(
    '/boss/expressCompany/{expressCompanyId}'.replace(
      '{expressCompanyId}',
      expressCompanyId,
    ),

    {
      expressCompanyId,
    },
  );
  return result.data;
}

export default {
  closeAuditCustomerInfoUsingPOST,

  openAuditCustomerInfoUsingPOST,

  closeAuditCustomerUsingPOST,

  openAuditCustomerUsingPOST,

  closeAuditGoodsUsingPOST,

  openAuditGoodsUsingPOST,

  closeAuditSelfGoodsUsingPOST,

  openAuditSelfGoodsUsingPOST,

  setDisplayImgForMobileUsingPOST,

  setDisplayImgForPcUsingPOST,

  listConfigsUsingGET,

  modifyShareLittleProgramUsingPOST,

  closeAuditOrderUsingPOST,

  openAuditOrderUsingPOST,

  setDisplaySpecForMobileUsingPOST,

  setDisplaySpecForPcUsingPOST,

  closeUserSettingUsingPOST,

  openUserSettingUsingPOST,

  queryEmailConfigUsingGET,

  modifyEmailConfigUsingPUT,

  allExpressCompanyListUsingGET,

  addExpressCompanyUsingPOST,

  delExpressCompanyUsingDELETE,
};

/**
 * 物流公司id
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IDelExpressCompanyUsingDELETEExpressCompanyIdReq".
 */
export type IDelExpressCompanyUsingDELETEExpressCompanyIdReq = number;

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
 * via the `definition` "BaseResponse«List«ConfigVO»»".
 */
export interface BaseResponseListConfigVO {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: ConfigVO[];
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
export interface ConfigVO {
  /**
   * 配置键
   */
  configKey?: string;
  /**
   * 名称
   */
  configName?: string;
  /**
   * 类型
   */
  configType?: string;
  /**
   * 内容
   */
  context?: string;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 删除标记
   * * NO: 否
   * * YES: 是
   */
  delFlag?: '0' | '1';
  /**
   * 编号
   */
  id?: number;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 状态
   */
  status?: number;
  /**
   * 更新时间
   */
  updateTime?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ConfigVO".
 */
export interface ConfigVO1 {
  /**
   * 配置键
   */
  configKey?: string;
  /**
   * 名称
   */
  configName?: string;
  /**
   * 类型
   */
  configType?: string;
  /**
   * 内容
   */
  context?: string;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 删除标记
   * * NO: 否
   * * YES: 是
   */
  delFlag?: '0' | '1';
  /**
   * 编号
   */
  id?: number;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 状态
   */
  status?: number;
  /**
   * 更新时间
   */
  updateTime?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ConfigContextModifyByTypeAndKeyRequest".
 */
export interface ConfigContextModifyByTypeAndKeyRequest {
  /**
   * 配置键
   * * IMAGESERVER: image_server:图片服务器
   * * KUAIDI100: kuaidi100
   * * S2BAUDIT: S2B审核管理
   * * ORDERSETTING: 订单设置
   * * MOBILE_SETTING: 移动端设置
   * * SMALL_PROGRAM_SETTING: 小程序设置
   * * GROWTH_VALUE: 成长值
   * * GROWTH_VALUE_BASIC_RULE: 成长值获取基础规则
   */
  configKey?:
    | 'image_server'
    | 'kuaidi100'
    | 's2b_audit'
    | 'order_setting'
    | 'mobile_setting'
    | 'small_program_setting'
    | 'growth_value'
    | 'growth_value_basic_rule';
  /**
   * 类型
   * * ALIYUN: aliYun:阿里云
   * * KUAIDI100: kuaidi100
   * * TICKETAUDIT: 增值税资质审核
   * * SUPPLIERAUDIT: 供应商审核
   * * SUPPLIERGOODSAUDIT: 供应商商品审核
   * * BOSSGOODSAUDIT: 自营商品审核
   * * ORDERAUDIT: 订单审核
   * * CUSTOMERAUDIT: 客户审核
   * * CUSTOMERINFOAUDIT: 客户审核
   * * USERAUDIT: 用户设置
   * * ORDER_SETTING_AUTO_RECEIVE: 订单设置自动收货
   * * ORDER_SETTING_REFUND_AUTO_AUDIT: 退单自动审核
   * * ORDER_SETTING_REFUND_AUTO_RECEIVE: 退单自动收货
   * * ORDER_SETTING_APPLY_REFUND: 允许申请退单
   * * PC_GOODS_IMAGE_SWITCH: PC商城商品列表默认展示大图或小图
   * * PC_GOODS_SPEC_SWITCH: PC商城商品列表展示维度SKU或者SPU
   * * MOBILE_GOODS_IMAGE_SWITCH: 移动端商城商品列表默认展示大图或小图
   * * MOBILE_GOODS_SPEC_SWITCH: 移动端商城商品列表展示维度SKU或者SPU
   * * ORDER_SETTING_PAYMENT_ORDER: 订单支付顺序设置（先款后货/不限）
   * * ORDER_SETTING_TIMEOUT_CANCEL: 超时未支付取消订单
   * * ABOUT_US: 关于我们
   * * APP_UPDATE: app检测升级
   * * APP_SHARE: app分享
   * * APPLET_SHARE_SETTING: 小程序分享设置
   * * SMALL_PROGRAM_SETTING_CUSTOMER: 小程序基础配置
   * * GROWTH_VALUE_SWITCH: 成长值开关
   * * GROWTH_VALUE_BASIC_RULE_REGISTER: 成长值基础规则类型——注册
   * * GROWTH_VALUE_BASIC_RULE_BIND_WECHAT: 成长值基础规则类型——绑定微信
   * * GROWTH_VALUE_BASIC_RULE_ADD_DELIVERY_ADDRESS: 成长值基础获取规则类型——添加收货地址
   * * GROWTH_VALUE_BASIC_RULE_FOLLOW_STORE: 成长值基础获取规则类型——关注店铺
   * * GROWTH_VALUE_BASIC_RULE_INTRODUCTION: 成长值获取规则说明
   */
  configType?:
    | 'aliYun'
    | 'kuaidi100'
    | 'ticket_aduit'
    | 'supplier_audit'
    | 'supplier_goods_audit'
    | 'boss_goods_audit'
    | 'order_audit'
    | 'customer_audit'
    | 'customer_info_audit'
    | 'user_audit'
    | 'order_setting_auto_receive'
    | 'order_setting_refund_auto_audit'
    | 'order_setting_refund_auto_receive'
    | 'order_setting_apply_refund'
    | 'pc_goods_image_switch'
    | 'pc_goods_spec_switch'
    | 'mobile_goods_image_switch'
    | 'mobile_goods_spec_switch'
    | 'order_setting_payment_order'
    | 'order_setting_timeout_cancel'
    | 'about_us'
    | 'app_update'
    | 'app_share'
    | 'applet_share_setting'
    | 'small_program_setting_customer'
    | 'growth_value_switch'
    | 'growth_value_basic_rule_register'
    | 'growth_value_basic_rule_bind_wechat'
    | 'growth_value_basic_rule_add_delivery_address'
    | 'growth_value_basic_rule_follow_store'
    | 'growth_value_basic_rule_introduction';
  /**
   * 配置内容
   */
  context?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "BaseResponse«EmailConfigQueryResponse»".
 */
export interface BaseResponseEmailConfigQueryResponse {
  /**
   * 结果码
   */
  code: string;
  context?: EmailConfigQueryResponse;
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * 内容
 */
export interface EmailConfigQueryResponse {
  /**
   * SMTP服务器授权码
   */
  authCode?: string;
  /**
   * 邮箱配置Id
   */
  emailConfigId?: string;
  /**
   * SMTP服务器主机名
   */
  emailSmtpHost?: string;
  /**
   * SMTP服务器端口号
   */
  emailSmtpPort?: string;
  /**
   * 发信人邮箱地址
   */
  fromEmailAddress?: string;
  /**
   * 发信人
   */
  fromPerson?: string;
  /**
   * 邮箱启用状态
   * * DISABLE: 0：停用
   * * ENABLE: 1：启用
   */
  status?: '0' | '1';
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "EmailConfigQueryResponse".
 */
export interface EmailConfigQueryResponse1 {
  /**
   * SMTP服务器授权码
   */
  authCode?: string;
  /**
   * 邮箱配置Id
   */
  emailConfigId?: string;
  /**
   * SMTP服务器主机名
   */
  emailSmtpHost?: string;
  /**
   * SMTP服务器端口号
   */
  emailSmtpPort?: string;
  /**
   * 发信人邮箱地址
   */
  fromEmailAddress?: string;
  /**
   * 发信人
   */
  fromPerson?: string;
  /**
   * 邮箱启用状态
   * * DISABLE: 0：停用
   * * ENABLE: 1：启用
   */
  status?: '0' | '1';
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "EmailConfigModifyRequest".
 */
export interface EmailConfigModifyRequest {
  /**
   * SMTP服务器授权码
   */
  authCode?: string;
  /**
   * 邮箱配置Id
   */
  emailConfigId?: string;
  /**
   * SMTP服务器主机名
   */
  emailSmtpHost?: string;
  /**
   * SMTP服务器端口号
   */
  emailSmtpPort?: string;
  /**
   * 发信人邮箱地址
   */
  fromEmailAddress?: string;
  /**
   * 发信人
   */
  fromPerson?: string;
  /**
   * 邮箱启用状态
   * * DISABLE: 0：停用
   * * ENABLE: 1：启用
   */
  status?: '0' | '1';
  /**
   * 修改时间
   */
  updateTime?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "BaseResponse«List»".
 */
export interface BaseResponseList {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: {
    [k: string]: any;
  }[];
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ExpsComSaveRopRequest".
 */
export interface ExpsComSaveRopRequest {
  expressCode?: string;
  expressName?: string;
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
 * via the `definition` "ICloseAuditCustomerInfoUsingPOSTRes".
 */
export interface ICloseAuditCustomerInfoUsingPOSTRes {
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
 * via the `definition` "IOpenAuditCustomerInfoUsingPOSTRes".
 */
export interface IOpenAuditCustomerInfoUsingPOSTRes {
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
 * via the `definition` "ICloseAuditCustomerUsingPOSTRes".
 */
export interface ICloseAuditCustomerUsingPOSTRes {
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
 * via the `definition` "IOpenAuditCustomerUsingPOSTRes".
 */
export interface IOpenAuditCustomerUsingPOSTRes {
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
 * via the `definition` "ICloseAuditGoodsUsingPOSTRes".
 */
export interface ICloseAuditGoodsUsingPOSTRes {
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
 * via the `definition` "IOpenAuditGoodsUsingPOSTRes".
 */
export interface IOpenAuditGoodsUsingPOSTRes {
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
 * via the `definition` "ICloseAuditSelfGoodsUsingPOSTRes".
 */
export interface ICloseAuditSelfGoodsUsingPOSTRes {
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
 * via the `definition` "IOpenAuditSelfGoodsUsingPOSTRes".
 */
export interface IOpenAuditSelfGoodsUsingPOSTRes {
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
 * 状态
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ISetDisplayImgForMobileUsingPOSTStatusReq".
 */
export interface ISetDisplayImgForMobileUsingPOSTStatusReq {
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ISetDisplayImgForMobileUsingPOSTRes".
 */
export interface ISetDisplayImgForMobileUsingPOSTRes {
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
 * 状态
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ISetDisplayImgForPcUsingPOSTStatusReq".
 */
export interface ISetDisplayImgForPcUsingPOSTStatusReq {
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ISetDisplayImgForPcUsingPOSTRes".
 */
export interface ISetDisplayImgForPcUsingPOSTRes {
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
 * via the `definition` "IListConfigsUsingGETRes".
 */
export interface IListConfigsUsingGETRes {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: ConfigVO[];
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IModifyShareLittleProgramUsingPOSTRequestReq".
 */
export interface IModifyShareLittleProgramUsingPOSTRequestReq {
  /**
   * 配置键
   * * IMAGESERVER: image_server:图片服务器
   * * KUAIDI100: kuaidi100
   * * S2BAUDIT: S2B审核管理
   * * ORDERSETTING: 订单设置
   * * MOBILE_SETTING: 移动端设置
   * * SMALL_PROGRAM_SETTING: 小程序设置
   * * GROWTH_VALUE: 成长值
   * * GROWTH_VALUE_BASIC_RULE: 成长值获取基础规则
   */
  configKey?:
    | 'image_server'
    | 'kuaidi100'
    | 's2b_audit'
    | 'order_setting'
    | 'mobile_setting'
    | 'small_program_setting'
    | 'growth_value'
    | 'growth_value_basic_rule';
  /**
   * 类型
   * * ALIYUN: aliYun:阿里云
   * * KUAIDI100: kuaidi100
   * * TICKETAUDIT: 增值税资质审核
   * * SUPPLIERAUDIT: 供应商审核
   * * SUPPLIERGOODSAUDIT: 供应商商品审核
   * * BOSSGOODSAUDIT: 自营商品审核
   * * ORDERAUDIT: 订单审核
   * * CUSTOMERAUDIT: 客户审核
   * * CUSTOMERINFOAUDIT: 客户审核
   * * USERAUDIT: 用户设置
   * * ORDER_SETTING_AUTO_RECEIVE: 订单设置自动收货
   * * ORDER_SETTING_REFUND_AUTO_AUDIT: 退单自动审核
   * * ORDER_SETTING_REFUND_AUTO_RECEIVE: 退单自动收货
   * * ORDER_SETTING_APPLY_REFUND: 允许申请退单
   * * PC_GOODS_IMAGE_SWITCH: PC商城商品列表默认展示大图或小图
   * * PC_GOODS_SPEC_SWITCH: PC商城商品列表展示维度SKU或者SPU
   * * MOBILE_GOODS_IMAGE_SWITCH: 移动端商城商品列表默认展示大图或小图
   * * MOBILE_GOODS_SPEC_SWITCH: 移动端商城商品列表展示维度SKU或者SPU
   * * ORDER_SETTING_PAYMENT_ORDER: 订单支付顺序设置（先款后货/不限）
   * * ORDER_SETTING_TIMEOUT_CANCEL: 超时未支付取消订单
   * * ABOUT_US: 关于我们
   * * APP_UPDATE: app检测升级
   * * APP_SHARE: app分享
   * * APPLET_SHARE_SETTING: 小程序分享设置
   * * SMALL_PROGRAM_SETTING_CUSTOMER: 小程序基础配置
   * * GROWTH_VALUE_SWITCH: 成长值开关
   * * GROWTH_VALUE_BASIC_RULE_REGISTER: 成长值基础规则类型——注册
   * * GROWTH_VALUE_BASIC_RULE_BIND_WECHAT: 成长值基础规则类型——绑定微信
   * * GROWTH_VALUE_BASIC_RULE_ADD_DELIVERY_ADDRESS: 成长值基础获取规则类型——添加收货地址
   * * GROWTH_VALUE_BASIC_RULE_FOLLOW_STORE: 成长值基础获取规则类型——关注店铺
   * * GROWTH_VALUE_BASIC_RULE_INTRODUCTION: 成长值获取规则说明
   */
  configType?:
    | 'aliYun'
    | 'kuaidi100'
    | 'ticket_aduit'
    | 'supplier_audit'
    | 'supplier_goods_audit'
    | 'boss_goods_audit'
    | 'order_audit'
    | 'customer_audit'
    | 'customer_info_audit'
    | 'user_audit'
    | 'order_setting_auto_receive'
    | 'order_setting_refund_auto_audit'
    | 'order_setting_refund_auto_receive'
    | 'order_setting_apply_refund'
    | 'pc_goods_image_switch'
    | 'pc_goods_spec_switch'
    | 'mobile_goods_image_switch'
    | 'mobile_goods_spec_switch'
    | 'order_setting_payment_order'
    | 'order_setting_timeout_cancel'
    | 'about_us'
    | 'app_update'
    | 'app_share'
    | 'applet_share_setting'
    | 'small_program_setting_customer'
    | 'growth_value_switch'
    | 'growth_value_basic_rule_register'
    | 'growth_value_basic_rule_bind_wechat'
    | 'growth_value_basic_rule_add_delivery_address'
    | 'growth_value_basic_rule_follow_store'
    | 'growth_value_basic_rule_introduction';
  /**
   * 配置内容
   */
  context?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IModifyShareLittleProgramUsingPOSTRes".
 */
export interface IModifyShareLittleProgramUsingPOSTRes {
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
 * via the `definition` "ICloseAuditOrderUsingPOSTRes".
 */
export interface ICloseAuditOrderUsingPOSTRes {
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
 * via the `definition` "IOpenAuditOrderUsingPOSTRes".
 */
export interface IOpenAuditOrderUsingPOSTRes {
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
 * 状态
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ISetDisplaySpecForMobileUsingPOSTStatusReq".
 */
export interface ISetDisplaySpecForMobileUsingPOSTStatusReq {
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ISetDisplaySpecForMobileUsingPOSTRes".
 */
export interface ISetDisplaySpecForMobileUsingPOSTRes {
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
 * 状态
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ISetDisplaySpecForPcUsingPOSTStatusReq".
 */
export interface ISetDisplaySpecForPcUsingPOSTStatusReq {
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ISetDisplaySpecForPcUsingPOSTRes".
 */
export interface ISetDisplaySpecForPcUsingPOSTRes {
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
 * via the `definition` "ICloseUserSettingUsingPOSTRes".
 */
export interface ICloseUserSettingUsingPOSTRes {
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
 * via the `definition` "IOpenUserSettingUsingPOSTRes".
 */
export interface IOpenUserSettingUsingPOSTRes {
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
 * via the `definition` "IQueryEmailConfigUsingGETRes".
 */
export interface IQueryEmailConfigUsingGETRes {
  /**
   * 结果码
   */
  code: string;
  context?: EmailConfigQueryResponse;
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IModifyEmailConfigUsingPUTRequestReq".
 */
export interface IModifyEmailConfigUsingPUTRequestReq {
  /**
   * SMTP服务器授权码
   */
  authCode?: string;
  /**
   * 邮箱配置Id
   */
  emailConfigId?: string;
  /**
   * SMTP服务器主机名
   */
  emailSmtpHost?: string;
  /**
   * SMTP服务器端口号
   */
  emailSmtpPort?: string;
  /**
   * 发信人邮箱地址
   */
  fromEmailAddress?: string;
  /**
   * 发信人
   */
  fromPerson?: string;
  /**
   * 邮箱启用状态
   * * DISABLE: 0：停用
   * * ENABLE: 1：启用
   */
  status?: '0' | '1';
  /**
   * 修改时间
   */
  updateTime?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IModifyEmailConfigUsingPUTRes".
 */
export interface IModifyEmailConfigUsingPUTRes {
  /**
   * 结果码
   */
  code: string;
  context?: EmailConfigQueryResponse;
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IAllExpressCompanyListUsingGETRes".
 */
export interface IAllExpressCompanyListUsingGETRes {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: {
    [k: string]: any;
  }[];
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IAddExpressCompanyUsingPOSTSaveRopRequestReq".
 */
export interface IAddExpressCompanyUsingPOSTSaveRopRequestReq {
  expressCode?: string;
  expressName?: string;
  ropRequestContext?: RopRequestContext;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IAddExpressCompanyUsingPOSTRes".
 */
export interface IAddExpressCompanyUsingPOSTRes {
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
 * via the `definition` "IDelExpressCompanyUsingDELETERes".
 */
export interface IDelExpressCompanyUsingDELETERes {
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
