import sdk from '@api/sdk';
import {IResult} from '@/types';

/**
 *
 * 修改供应商工商信息
 *
 */
async function updateUsingPUT(
  request: IUpdateUsingPUTRequestReq,
): Promise<IUpdateUsingPUTRes> {
  let result = await sdk.put<IUpdateUsingPUTRes>(
    '/company',

    {},
  );
  return result.data;
}

/**
 *
 * 分页查询供应商公司收款账户
 *
 */
async function accountListUsingPOST(
  request: IAccountListUsingPOSTRequestReq,
): Promise<IAccountListUsingPOSTRes> {
  let result = await sdk.post<IAccountListUsingPOSTRes>(
    '/company/account',

    {},
  );
  return result.data;
}

/**
 *
 * 根据供应商公司id查询供应商收款账户列表
 *
 */
async function accountDetailUsingGET(
  companyInfoId: IAccountDetailUsingGETCompanyInfoIdReq,
): Promise<IAccountDetailUsingGETRes> {
  let result = await sdk.get<IAccountDetailUsingGETRes>(
    '/company/account/detail/{companyInfoId}'.replace(
      '{companyInfoId}',
      companyInfoId,
    ),

    {
      companyInfoId,
    },
  );
  return result.data;
}

/**
 *
 * 供应商账号打款
 *
 */
async function accountRemitUsingPUT(
  request: IAccountRemitUsingPUTRequestReq,
): Promise<IAccountRemitUsingPUTRes> {
  let result = await sdk.put<IAccountRemitUsingPUTRes>(
    '/company/account/remit',

    {},
  );
  return result.data;
}

/**
 *
 * 查询供应商列表
 *
 */
async function listUsingPOST_1(
  request: IListUsingPOST_1RequestReq,
): Promise<IListUsingPOST_1Res> {
  let result = await sdk.post<IListUsingPOST_1Res>(
    '/company/list',

    {},
  );
  return result.data;
}

/**
 *
 * 查询供应商公司信息
 *
 */
async function findOneUsingGET(
  id: IFindOneUsingGETIdReq,
): Promise<IFindOneUsingGETRes> {
  let result = await sdk.get<IFindOneUsingGETRes>(
    '/company/{id}'.replace('{id}', id),

    {
      id,
    },
  );
  return result.data;
}

export default {
  updateUsingPUT,

  accountListUsingPOST,

  accountDetailUsingGET,

  accountRemitUsingPUT,

  listUsingPOST_1,

  findOneUsingGET,
};

/**
 * 供应商公司id
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IAccountDetailUsingGETCompanyInfoIdReq".
 */
export type IAccountDetailUsingGETCompanyInfoIdReq = number;
/**
 * 供应商公司id
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IFindOneUsingGETIdReq".
 */
export type IFindOneUsingGETIdReq = number;

export interface IgnoreType {
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "CompanyInformationSaveRequest".
 */
export interface CompanyInformationSaveRequest {
  /**
   * 住所
   */
  address?: string;
  /**
   * 法人身份证反面
   */
  backIDCard?: string;
  /**
   * 营业执照副本电子版
   */
  businessLicence?: string;
  /**
   * 经营范围
   */
  businessScope?: string;
  /**
   * 营业期限至
   */
  businessTermEnd?: string;
  /**
   * 营业期限自
   */
  businessTermStart?: string;
  /**
   * 编号
   */
  companyInfoId?: number;
  /**
   * 企业名称
   */
  companyName?: string;
  /**
   * 成立日期
   */
  foundDate?: string;
  /**
   * 法人身份证正面
   */
  frontIDCard?: string;
  /**
   * 法定代表人
   */
  legalRepresentative?: string;
  /**
   * 注册资本
   */
  registeredCapital?: number;
  /**
   * 社会信用代码
   */
  socialCreditCode?: string;
  /**
   * 登录用户Id
   */
  userId?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "BaseResponse«CompanyInformationModifyResponse»".
 */
export interface BaseResponseCompanyInformationModifyResponse {
  /**
   * 结果码
   */
  code: string;
  context?: CompanyInformationModifyResponse;
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * 内容
 */
export interface CompanyInformationModifyResponse {
  /**
   * 住所
   */
  address?: string;
  /**
   * 入驻时间(第一次审核通过时间)
   */
  applyEnterTime?: string;
  /**
   * 区
   */
  areaId?: number;
  /**
   * 法人身份证反面
   */
  backIDCard?: string;
  /**
   * 营业执照副本电子版
   */
  businessLicence?: string;
  /**
   * 经营范围
   */
  businessScope?: string;
  /**
   * 营业期限至
   */
  businessTermEnd?: string;
  /**
   * 营业期限自
   */
  businessTermStart?: string;
  /**
   * 市
   */
  cityId?: number;
  /**
   * 供应商编号
   */
  companyCode?: string;
  /**
   * 公司简介
   */
  companyDescript?: string;
  /**
   * 编号
   */
  companyInfoId?: number;
  /**
   * 公司名称
   */
  companyName?: string;
  /**
   * 供应商类型
   * * NO: 否
   * * YES: 是
   */
  companyType?: '0' | '1';
  /**
   * 联系人名字
   */
  contactName?: string;
  /**
   * 联系方式
   */
  contactPhone?: string;
  /**
   * 版权信息
   */
  copyright?: string;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 删除标志
   * * NO: 否
   * * YES: 是
   */
  delFlag?: '0' | '1';
  /**
   * 详细地址
   */
  detailAddress?: string;
  /**
   * 员工信息
   */
  employeeVOList?: EmployeeVO[];
  /**
   * 成立日期
   */
  foundDate?: string;
  /**
   * 法人身份证正面
   */
  frontIDCard?: string;
  /**
   * 多个SPU编号
   */
  goodsIds?: string[];
  /**
   * 法定代表人
   */
  legalRepresentative?: string;
  /**
   * 操作人
   */
  operator?: string;
  /**
   * 省
   */
  provinceId?: number;
  /**
   * 注册资本
   */
  registeredCapital?: number;
  /**
   * 是否确认打款
   * * NO: 否
   * * YES: 是
   */
  remitAffirm?: '0' | '1';
  /**
   * 社会信用代码
   */
  socialCreditCode?: string;
  /**
   * 店铺信息
   */
  storeVOList?: StoreVO1[];
  /**
   * 供应商名称
   */
  supplierName?: string;
  /**
   * 修改时间
   */
  updateTime?: string;
  [k: string]: any;
}
export interface EmployeeVO {
  /**
   * 账号禁用原因
   */
  accountDisableReason?: string;
  /**
   * 账户名
   */
  accountName?: string;
  /**
   * 密码
   */
  accountPassword?: string;
  /**
   * 账号状态
   * * ENABLE: 启用
   * * DISABLE: 禁用
   */
  accountState?: '0' | '1';
  /**
   * 账号类型
   * * b2bBoss: b2b账号
   * * s2bBoss: s2b平台端账号
   * * s2bSupplier: s2b供应商端账号
   */
  accountType?: '0' | '1' | '2';
  companyInfo?: CompanyInfoVO;
  /**
   * 供应商Id
   */
  companyInfoId?: number;
  /**
   * 创建人
   */
  createPerson?: string;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 会员id
   */
  customerId?: string;
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
   * 业务员id
   */
  employeeId?: string;
  /**
   * 会员电话
   */
  employeeMobile?: string;
  /**
   * 会员名称
   */
  employeeName?: string;
  /**
   * salt
   */
  employeeSaltVal?: string;
  /**
   * 是否业务员(0 是 1否)
   */
  isEmployee?: number;
  /**
   * 是否是主账号
   * * NO: 否
   * * YES: 是
   */
  isMasterAccount?: '0' | '1';
  /**
   * 登录失败次数
   */
  loginErrorTime?: number;
  /**
   * 锁定时间
   */
  loginLockTime?: string;
  /**
   * 会员登录时间
   */
  loginTime?: string;
  /**
   * 角色id
   */
  roleId?: number;
  /**
   * 第三方店铺id
   */
  thirdId?: string;
  /**
   * 更新人
   */
  updatePerson?: string;
  /**
   * 更新时间
   */
  updateTime?: string;
  [k: string]: any;
}
/**
 * 供应商
 */
export interface CompanyInfoVO {
  /**
   * 住所
   */
  address?: string;
  /**
   * 入驻时间(第一次审核通过时间)
   */
  applyEnterTime?: string;
  /**
   * 区
   */
  areaId?: number;
  /**
   * 法人身份证反面
   */
  backIDCard?: string;
  /**
   * 营业执照副本电子版
   */
  businessLicence?: string;
  /**
   * 经营范围
   */
  businessScope?: string;
  /**
   * 营业期限至
   */
  businessTermEnd?: string;
  /**
   * 营业期限自
   */
  businessTermStart?: string;
  /**
   * 市
   */
  cityId?: number;
  /**
   * 供应商编号
   */
  companyCode?: string;
  /**
   * 公司简介
   */
  companyDescript?: string;
  /**
   * 编号
   */
  companyInfoId?: number;
  /**
   * 公司名称
   */
  companyName?: string;
  /**
   * 供应商类型
   * * NO: 否
   * * YES: 是
   */
  companyType?: '0' | '1';
  /**
   * 联系人名字
   */
  contactName?: string;
  /**
   * 联系方式
   */
  contactPhone?: string;
  /**
   * 版权信息
   */
  copyright?: string;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 删除标志
   * * NO: 否
   * * YES: 是
   */
  delFlag?: '0' | '1';
  /**
   * 详细地址
   */
  detailAddress?: string;
  /**
   * 员工信息
   */
  employeeVOList?: EmployeeVO1[];
  /**
   * 成立日期
   */
  foundDate?: string;
  /**
   * 法人身份证正面
   */
  frontIDCard?: string;
  /**
   * 多个SPU编号
   */
  goodsIds?: string[];
  /**
   * 法定代表人
   */
  legalRepresentative?: string;
  /**
   * 操作人
   */
  operator?: string;
  /**
   * 省
   */
  provinceId?: number;
  /**
   * 注册资本
   */
  registeredCapital?: number;
  /**
   * 是否确认打款
   * * NO: 否
   * * YES: 是
   */
  remitAffirm?: '0' | '1';
  /**
   * 社会信用代码
   */
  socialCreditCode?: string;
  /**
   * 店铺信息
   */
  storeVOList?: StoreVO[];
  /**
   * 供应商名称
   */
  supplierName?: string;
  /**
   * 修改时间
   */
  updateTime?: string;
  [k: string]: any;
}
export interface EmployeeVO1 {
  /**
   * 账号禁用原因
   */
  accountDisableReason?: string;
  /**
   * 账户名
   */
  accountName?: string;
  /**
   * 密码
   */
  accountPassword?: string;
  /**
   * 账号状态
   * * ENABLE: 启用
   * * DISABLE: 禁用
   */
  accountState?: '0' | '1';
  /**
   * 账号类型
   * * b2bBoss: b2b账号
   * * s2bBoss: s2b平台端账号
   * * s2bSupplier: s2b供应商端账号
   */
  accountType?: '0' | '1' | '2';
  companyInfo?: CompanyInfoVO;
  /**
   * 供应商Id
   */
  companyInfoId?: number;
  /**
   * 创建人
   */
  createPerson?: string;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 会员id
   */
  customerId?: string;
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
   * 业务员id
   */
  employeeId?: string;
  /**
   * 会员电话
   */
  employeeMobile?: string;
  /**
   * 会员名称
   */
  employeeName?: string;
  /**
   * salt
   */
  employeeSaltVal?: string;
  /**
   * 是否业务员(0 是 1否)
   */
  isEmployee?: number;
  /**
   * 是否是主账号
   * * NO: 否
   * * YES: 是
   */
  isMasterAccount?: '0' | '1';
  /**
   * 登录失败次数
   */
  loginErrorTime?: number;
  /**
   * 锁定时间
   */
  loginLockTime?: string;
  /**
   * 会员登录时间
   */
  loginTime?: string;
  /**
   * 角色id
   */
  roleId?: number;
  /**
   * 第三方店铺id
   */
  thirdId?: string;
  /**
   * 更新人
   */
  updatePerson?: string;
  /**
   * 更新时间
   */
  updateTime?: string;
  [k: string]: any;
}
export interface StoreVO {
  /**
   * 结算日
   */
  accountDay?: string;
  /**
   * 详细地址
   */
  addressDetail?: string;
  /**
   * 申请入驻时间
   */
  applyEnterTime?: string;
  /**
   * 区
   */
  areaId?: number;
  /**
   * 审核未通过原因
   */
  auditReason?: string;
  /**
   * 审核状态
   * * WAIT_CHECK: 0：待审核
   * * CHECKED: 1：已审核
   * * NOT_PASS: 2：审核未通过
   */
  auditState?: '0' | '1' | '2';
  /**
   * 市
   */
  cityId?: number;
  companyInfo?: CompanyInfoVO1;
  /**
   * 供应商类型(0、平台自营 1、第三方供应商)
   * * NO: 否
   * * YES: 是
   */
  companyType?: '0' | '1';
  /**
   * 联系邮箱
   */
  contactEmail?: string;
  /**
   * 联系方式
   */
  contactMobile?: string;
  /**
   * 联系人名字
   */
  contactPerson?: string;
  /**
   * 签约结束日期
   */
  contractEndDate?: string;
  /**
   * 签约开始日期
   */
  contractStartDate?: string;
  /**
   * 删除标志
   * * NO: 否
   * * YES: 是
   */
  delFlag?: '0' | '1';
  /**
   * 使用的运费模板类别(0:店铺运费,1:单品运费)
   * * NO: 否
   * * YES: 是
   */
  freightTemplateType?: '0' | '1';
  /**
   * 多个SPU编号
   */
  goodsIds?: string[];
  /**
   * 省
   */
  provinceId?: number;
  /**
   * 店铺小程序码
   */
  smallProgramCode?: string;
  /**
   * 店铺关店原因
   */
  storeClosedReason?: string;
  /**
   * 店铺主键
   */
  storeId?: number;
  /**
   * 店铺logo
   */
  storeLogo?: string;
  /**
   * 店铺名称
   */
  storeName?: string;
  /**
   * 店铺店招
   */
  storeSign?: string;
  /**
   * 店铺状态
   * * OPENING: 0、开启
   * * CLOSED: 1、关店
   */
  storeState?: '0' | '1';
  /**
   * 供应商名称
   */
  supplierName?: string;
  [k: string]: any;
}
/**
 * 公司信息
 */
export interface CompanyInfoVO1 {
  /**
   * 住所
   */
  address?: string;
  /**
   * 入驻时间(第一次审核通过时间)
   */
  applyEnterTime?: string;
  /**
   * 区
   */
  areaId?: number;
  /**
   * 法人身份证反面
   */
  backIDCard?: string;
  /**
   * 营业执照副本电子版
   */
  businessLicence?: string;
  /**
   * 经营范围
   */
  businessScope?: string;
  /**
   * 营业期限至
   */
  businessTermEnd?: string;
  /**
   * 营业期限自
   */
  businessTermStart?: string;
  /**
   * 市
   */
  cityId?: number;
  /**
   * 供应商编号
   */
  companyCode?: string;
  /**
   * 公司简介
   */
  companyDescript?: string;
  /**
   * 编号
   */
  companyInfoId?: number;
  /**
   * 公司名称
   */
  companyName?: string;
  /**
   * 供应商类型
   * * NO: 否
   * * YES: 是
   */
  companyType?: '0' | '1';
  /**
   * 联系人名字
   */
  contactName?: string;
  /**
   * 联系方式
   */
  contactPhone?: string;
  /**
   * 版权信息
   */
  copyright?: string;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 删除标志
   * * NO: 否
   * * YES: 是
   */
  delFlag?: '0' | '1';
  /**
   * 详细地址
   */
  detailAddress?: string;
  /**
   * 员工信息
   */
  employeeVOList?: EmployeeVO1[];
  /**
   * 成立日期
   */
  foundDate?: string;
  /**
   * 法人身份证正面
   */
  frontIDCard?: string;
  /**
   * 多个SPU编号
   */
  goodsIds?: string[];
  /**
   * 法定代表人
   */
  legalRepresentative?: string;
  /**
   * 操作人
   */
  operator?: string;
  /**
   * 省
   */
  provinceId?: number;
  /**
   * 注册资本
   */
  registeredCapital?: number;
  /**
   * 是否确认打款
   * * NO: 否
   * * YES: 是
   */
  remitAffirm?: '0' | '1';
  /**
   * 社会信用代码
   */
  socialCreditCode?: string;
  /**
   * 店铺信息
   */
  storeVOList?: StoreVO[];
  /**
   * 供应商名称
   */
  supplierName?: string;
  /**
   * 修改时间
   */
  updateTime?: string;
  [k: string]: any;
}
export interface StoreVO1 {
  /**
   * 结算日
   */
  accountDay?: string;
  /**
   * 详细地址
   */
  addressDetail?: string;
  /**
   * 申请入驻时间
   */
  applyEnterTime?: string;
  /**
   * 区
   */
  areaId?: number;
  /**
   * 审核未通过原因
   */
  auditReason?: string;
  /**
   * 审核状态
   * * WAIT_CHECK: 0：待审核
   * * CHECKED: 1：已审核
   * * NOT_PASS: 2：审核未通过
   */
  auditState?: '0' | '1' | '2';
  /**
   * 市
   */
  cityId?: number;
  companyInfo?: CompanyInfoVO1;
  /**
   * 供应商类型(0、平台自营 1、第三方供应商)
   * * NO: 否
   * * YES: 是
   */
  companyType?: '0' | '1';
  /**
   * 联系邮箱
   */
  contactEmail?: string;
  /**
   * 联系方式
   */
  contactMobile?: string;
  /**
   * 联系人名字
   */
  contactPerson?: string;
  /**
   * 签约结束日期
   */
  contractEndDate?: string;
  /**
   * 签约开始日期
   */
  contractStartDate?: string;
  /**
   * 删除标志
   * * NO: 否
   * * YES: 是
   */
  delFlag?: '0' | '1';
  /**
   * 使用的运费模板类别(0:店铺运费,1:单品运费)
   * * NO: 否
   * * YES: 是
   */
  freightTemplateType?: '0' | '1';
  /**
   * 多个SPU编号
   */
  goodsIds?: string[];
  /**
   * 省
   */
  provinceId?: number;
  /**
   * 店铺小程序码
   */
  smallProgramCode?: string;
  /**
   * 店铺关店原因
   */
  storeClosedReason?: string;
  /**
   * 店铺主键
   */
  storeId?: number;
  /**
   * 店铺logo
   */
  storeLogo?: string;
  /**
   * 店铺名称
   */
  storeName?: string;
  /**
   * 店铺店招
   */
  storeSign?: string;
  /**
   * 店铺状态
   * * OPENING: 0、开启
   * * CLOSED: 1、关店
   */
  storeState?: '0' | '1';
  /**
   * 供应商名称
   */
  supplierName?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "CompanyInformationModifyResponse".
 */
export interface CompanyInformationModifyResponse1 {
  /**
   * 住所
   */
  address?: string;
  /**
   * 入驻时间(第一次审核通过时间)
   */
  applyEnterTime?: string;
  /**
   * 区
   */
  areaId?: number;
  /**
   * 法人身份证反面
   */
  backIDCard?: string;
  /**
   * 营业执照副本电子版
   */
  businessLicence?: string;
  /**
   * 经营范围
   */
  businessScope?: string;
  /**
   * 营业期限至
   */
  businessTermEnd?: string;
  /**
   * 营业期限自
   */
  businessTermStart?: string;
  /**
   * 市
   */
  cityId?: number;
  /**
   * 供应商编号
   */
  companyCode?: string;
  /**
   * 公司简介
   */
  companyDescript?: string;
  /**
   * 编号
   */
  companyInfoId?: number;
  /**
   * 公司名称
   */
  companyName?: string;
  /**
   * 供应商类型
   * * NO: 否
   * * YES: 是
   */
  companyType?: '0' | '1';
  /**
   * 联系人名字
   */
  contactName?: string;
  /**
   * 联系方式
   */
  contactPhone?: string;
  /**
   * 版权信息
   */
  copyright?: string;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 删除标志
   * * NO: 否
   * * YES: 是
   */
  delFlag?: '0' | '1';
  /**
   * 详细地址
   */
  detailAddress?: string;
  /**
   * 员工信息
   */
  employeeVOList?: EmployeeVO[];
  /**
   * 成立日期
   */
  foundDate?: string;
  /**
   * 法人身份证正面
   */
  frontIDCard?: string;
  /**
   * 多个SPU编号
   */
  goodsIds?: string[];
  /**
   * 法定代表人
   */
  legalRepresentative?: string;
  /**
   * 操作人
   */
  operator?: string;
  /**
   * 省
   */
  provinceId?: number;
  /**
   * 注册资本
   */
  registeredCapital?: number;
  /**
   * 是否确认打款
   * * NO: 否
   * * YES: 是
   */
  remitAffirm?: '0' | '1';
  /**
   * 社会信用代码
   */
  socialCreditCode?: string;
  /**
   * 店铺信息
   */
  storeVOList?: StoreVO1[];
  /**
   * 供应商名称
   */
  supplierName?: string;
  /**
   * 修改时间
   */
  updateTime?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "EmployeeVO".
 */
export interface EmployeeVO2 {
  /**
   * 账号禁用原因
   */
  accountDisableReason?: string;
  /**
   * 账户名
   */
  accountName?: string;
  /**
   * 密码
   */
  accountPassword?: string;
  /**
   * 账号状态
   * * ENABLE: 启用
   * * DISABLE: 禁用
   */
  accountState?: '0' | '1';
  /**
   * 账号类型
   * * b2bBoss: b2b账号
   * * s2bBoss: s2b平台端账号
   * * s2bSupplier: s2b供应商端账号
   */
  accountType?: '0' | '1' | '2';
  companyInfo?: CompanyInfoVO;
  /**
   * 供应商Id
   */
  companyInfoId?: number;
  /**
   * 创建人
   */
  createPerson?: string;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 会员id
   */
  customerId?: string;
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
   * 业务员id
   */
  employeeId?: string;
  /**
   * 会员电话
   */
  employeeMobile?: string;
  /**
   * 会员名称
   */
  employeeName?: string;
  /**
   * salt
   */
  employeeSaltVal?: string;
  /**
   * 是否业务员(0 是 1否)
   */
  isEmployee?: number;
  /**
   * 是否是主账号
   * * NO: 否
   * * YES: 是
   */
  isMasterAccount?: '0' | '1';
  /**
   * 登录失败次数
   */
  loginErrorTime?: number;
  /**
   * 锁定时间
   */
  loginLockTime?: string;
  /**
   * 会员登录时间
   */
  loginTime?: string;
  /**
   * 角色id
   */
  roleId?: number;
  /**
   * 第三方店铺id
   */
  thirdId?: string;
  /**
   * 更新人
   */
  updatePerson?: string;
  /**
   * 更新时间
   */
  updateTime?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "CompanyInfoVO".
 */
export interface CompanyInfoVO2 {
  /**
   * 住所
   */
  address?: string;
  /**
   * 入驻时间(第一次审核通过时间)
   */
  applyEnterTime?: string;
  /**
   * 区
   */
  areaId?: number;
  /**
   * 法人身份证反面
   */
  backIDCard?: string;
  /**
   * 营业执照副本电子版
   */
  businessLicence?: string;
  /**
   * 经营范围
   */
  businessScope?: string;
  /**
   * 营业期限至
   */
  businessTermEnd?: string;
  /**
   * 营业期限自
   */
  businessTermStart?: string;
  /**
   * 市
   */
  cityId?: number;
  /**
   * 供应商编号
   */
  companyCode?: string;
  /**
   * 公司简介
   */
  companyDescript?: string;
  /**
   * 编号
   */
  companyInfoId?: number;
  /**
   * 公司名称
   */
  companyName?: string;
  /**
   * 供应商类型
   * * NO: 否
   * * YES: 是
   */
  companyType?: '0' | '1';
  /**
   * 联系人名字
   */
  contactName?: string;
  /**
   * 联系方式
   */
  contactPhone?: string;
  /**
   * 版权信息
   */
  copyright?: string;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 删除标志
   * * NO: 否
   * * YES: 是
   */
  delFlag?: '0' | '1';
  /**
   * 详细地址
   */
  detailAddress?: string;
  /**
   * 员工信息
   */
  employeeVOList?: EmployeeVO1[];
  /**
   * 成立日期
   */
  foundDate?: string;
  /**
   * 法人身份证正面
   */
  frontIDCard?: string;
  /**
   * 多个SPU编号
   */
  goodsIds?: string[];
  /**
   * 法定代表人
   */
  legalRepresentative?: string;
  /**
   * 操作人
   */
  operator?: string;
  /**
   * 省
   */
  provinceId?: number;
  /**
   * 注册资本
   */
  registeredCapital?: number;
  /**
   * 是否确认打款
   * * NO: 否
   * * YES: 是
   */
  remitAffirm?: '0' | '1';
  /**
   * 社会信用代码
   */
  socialCreditCode?: string;
  /**
   * 店铺信息
   */
  storeVOList?: StoreVO[];
  /**
   * 供应商名称
   */
  supplierName?: string;
  /**
   * 修改时间
   */
  updateTime?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "StoreVO".
 */
export interface StoreVO2 {
  /**
   * 结算日
   */
  accountDay?: string;
  /**
   * 详细地址
   */
  addressDetail?: string;
  /**
   * 申请入驻时间
   */
  applyEnterTime?: string;
  /**
   * 区
   */
  areaId?: number;
  /**
   * 审核未通过原因
   */
  auditReason?: string;
  /**
   * 审核状态
   * * WAIT_CHECK: 0：待审核
   * * CHECKED: 1：已审核
   * * NOT_PASS: 2：审核未通过
   */
  auditState?: '0' | '1' | '2';
  /**
   * 市
   */
  cityId?: number;
  companyInfo?: CompanyInfoVO1;
  /**
   * 供应商类型(0、平台自营 1、第三方供应商)
   * * NO: 否
   * * YES: 是
   */
  companyType?: '0' | '1';
  /**
   * 联系邮箱
   */
  contactEmail?: string;
  /**
   * 联系方式
   */
  contactMobile?: string;
  /**
   * 联系人名字
   */
  contactPerson?: string;
  /**
   * 签约结束日期
   */
  contractEndDate?: string;
  /**
   * 签约开始日期
   */
  contractStartDate?: string;
  /**
   * 删除标志
   * * NO: 否
   * * YES: 是
   */
  delFlag?: '0' | '1';
  /**
   * 使用的运费模板类别(0:店铺运费,1:单品运费)
   * * NO: 否
   * * YES: 是
   */
  freightTemplateType?: '0' | '1';
  /**
   * 多个SPU编号
   */
  goodsIds?: string[];
  /**
   * 省
   */
  provinceId?: number;
  /**
   * 店铺小程序码
   */
  smallProgramCode?: string;
  /**
   * 店铺关店原因
   */
  storeClosedReason?: string;
  /**
   * 店铺主键
   */
  storeId?: number;
  /**
   * 店铺logo
   */
  storeLogo?: string;
  /**
   * 店铺名称
   */
  storeName?: string;
  /**
   * 店铺店招
   */
  storeSign?: string;
  /**
   * 店铺状态
   * * OPENING: 0、开启
   * * CLOSED: 1、关店
   */
  storeState?: '0' | '1';
  /**
   * 供应商名称
   */
  supplierName?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "CompanyAccountPageRequest".
 */
export interface CompanyAccountPageRequest {
  /**
   * 供应商账号
   */
  accountName?: string;
  /**
   * 账户状态(-1:全部,0:启用,1:禁用)
   */
  accountState?: number;
  /**
   * 申请入驻时间 结束时间
   */
  applyEnterTimeEnd?: string;
  /**
   * 申请入驻时间 开始时间
   */
  applyEnterTimeStart?: string;
  /**
   * 审核状态(-1全部,0:待审核,1:已审核,2:审核未通过)
   */
  auditState?: number;
  /**
   * 供应商编号
   */
  companyCode?: string;
  /**
   * 供应商id列表
   */
  companyInfoIds?: number[];
  /**
   * 签约结束日期
   */
  contractEndDate?: string;
  /**
   * 供应商删除状态
   * * NO: 否
   * * YES: 是
   */
  deleteFlag?: '0' | '1';
  /**
   * 第几页
   */
  pageNum?: number;
  /**
   * 每页显示多少条
   */
  pageSize?: number;
  /**
   * 是否确认打款(-1:全部,0:否,1:是)
   */
  remitAffirm?: number;
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
   * 店铺名称
   */
  storeName?: string;
  /**
   * 店铺状态(-1:全部,0:开启,1:关店,2:过期)
   */
  storeState?: number;
  /**
   * 供应商名称
   */
  supplierName?: string;
  /**
   * 登录用户Id
   */
  userId?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "BaseResponse«Page«CompanyAccountVO»»".
 */
export interface BaseResponsePageCompanyAccountVO {
  /**
   * 结果码
   */
  code: string;
  context?: PageCompanyAccountVO;
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * 内容
 */
export interface PageCompanyAccountVO {
  content?: CompanyAccountVO[];
  first?: boolean;
  last?: boolean;
  number?: number;
  numberOfElements?: number;
  size?: number;
  sort?: Sort;
  totalElements?: number;
  totalPages?: number;
  [k: string]: any;
}
export interface CompanyAccountVO {
  /**
   * 供应商收款账户id
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
   * 银行账号编码
   */
  bankCode?: string;
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
   * 打款金额
   */
  remitPrice?: number;
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
export interface Sort {
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "Page«CompanyAccountVO»".
 */
export interface PageCompanyAccountVO1 {
  content?: CompanyAccountVO[];
  first?: boolean;
  last?: boolean;
  number?: number;
  numberOfElements?: number;
  size?: number;
  sort?: Sort;
  totalElements?: number;
  totalPages?: number;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "CompanyAccountVO".
 */
export interface CompanyAccountVO1 {
  /**
   * 供应商收款账户id
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
   * 银行账号编码
   */
  bankCode?: string;
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
   * 打款金额
   */
  remitPrice?: number;
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
 * via the `definition` "Sort".
 */
export interface Sort1 {
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "BaseResponse«List«CompanyAccountVO»»".
 */
export interface BaseResponseListCompanyAccountVO {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: CompanyAccountVO2[];
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
export interface CompanyAccountVO2 {
  /**
   * 供应商收款账户id
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
   * 银行账号编码
   */
  bankCode?: string;
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
   * 打款金额
   */
  remitPrice?: number;
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
 * via the `definition` "CompanyAccountRemitRequest".
 */
export interface CompanyAccountRemitRequest {
  /**
   * 账户id
   */
  accountId?: number;
  /**
   * 账户名称
   */
  accountName?: string;
  /**
   * 支行信息
   */
  bankBranch?: string;
  /**
   * 银行账号编码
   */
  bankCode?: string;
  /**
   * 开户银行
   */
  bankName?: string;
  /**
   * 账号
   */
  bankNo?: string;
  /**
   * 公司信息ID
   */
  companyInfoId?: number;
  /**
   * 打款金额
   */
  remitPrice?: number;
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
 * via the `definition` "CompanyPageRequest".
 */
export interface CompanyPageRequest {
  /**
   * 供应商账号
   */
  accountName?: string;
  /**
   * 账户状态(-1:全部,0:启用,1:禁用)
   */
  accountState?: number;
  /**
   * 申请入驻时间 结束时间
   */
  applyEnterTimeEnd?: string;
  /**
   * 申请入驻时间 开始时间
   */
  applyEnterTimeStart?: string;
  /**
   * 审核状态(-1:全部,0:待审核,1:已审核,2:审核未通过)
   */
  auditState?: number;
  /**
   * 供应商编号
   */
  companyCode?: string;
  /**
   * 供应商id列表
   */
  companyInfoIds?: number[];
  /**
   * 签约结束日期
   */
  contractEndDate?: string;
  /**
   * 供应商删除状态
   * * NO: 否
   * * YES: 是
   */
  deleteFlag?: '0' | '1';
  /**
   * 第几页
   */
  pageNum?: number;
  /**
   * 每页显示多少条
   */
  pageSize?: number;
  /**
   * 是否确认打款(-1:全部,0:否,1:是)
   */
  remitAffirm?: number;
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
   * 店铺名称
   */
  storeName?: string;
  /**
   * 店铺状态(-1:全部,0:开启,1:关店,2:过期)
   */
  storeState?: number;
  /**
   * 供应商名称
   */
  supplierName?: string;
  /**
   * 登录用户Id
   */
  userId?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "BaseResponse«Page«CompanyReponse»»".
 */
export interface BaseResponsePageCompanyReponse {
  /**
   * 结果码
   */
  code: string;
  context?: PageCompanyReponse;
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * 内容
 */
export interface PageCompanyReponse {
  content?: CompanyReponse[];
  first?: boolean;
  last?: boolean;
  number?: number;
  numberOfElements?: number;
  size?: number;
  sort?: Sort2;
  totalElements?: number;
  totalPages?: number;
  [k: string]: any;
}
export interface CompanyReponse {
  /**
   * 账号禁用原因
   */
  accountDisableReason?: string;
  /**
   * 供应商账号
   */
  accountName?: string;
  /**
   * 账号状态
   * * ENABLE: 启用
   * * DISABLE: 禁用
   */
  accountState?: '0' | '1';
  /**
   * 申请入驻时间
   */
  applyEnterTime?: string;
  /**
   * 审核未通过原因
   */
  auditReason?: string;
  /**
   * 审核状态
   * * WAIT_CHECK: 0：待审核
   * * CHECKED: 1：已审核
   * * NOT_PASS: 2：审核未通过
   */
  auditState?: '0' | '1' | '2';
  /**
   * 供应商编号
   */
  companyCode?: string;
  /**
   * 供应商id
   */
  companyInfoId?: number;
  /**
   * 供应商类型(0、平台自营 1、第三方供应商)
   * * NO: 否
   * * YES: 是
   */
  companyType?: '0' | '1';
  /**
   * 签约结束日期
   */
  contractEndDate?: string;
  /**
   * 签约开始日期
   */
  contractStartDate?: string;
  /**
   * 账号关闭原因
   */
  storeClosedReason?: string;
  /**
   * 店铺Id
   */
  storeId?: number;
  /**
   * 店铺名称
   */
  storeName?: string;
  /**
   * 店铺状态
   * * OPENING: 0、开启
   * * CLOSED: 1、关店
   */
  storeState?: '0' | '1';
  /**
   * 供应商名称
   */
  supplierName?: string;
  [k: string]: any;
}
export interface Sort2 {
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "Page«CompanyReponse»".
 */
export interface PageCompanyReponse1 {
  content?: CompanyReponse[];
  first?: boolean;
  last?: boolean;
  number?: number;
  numberOfElements?: number;
  size?: number;
  sort?: Sort2;
  totalElements?: number;
  totalPages?: number;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "CompanyReponse".
 */
export interface CompanyReponse1 {
  /**
   * 账号禁用原因
   */
  accountDisableReason?: string;
  /**
   * 供应商账号
   */
  accountName?: string;
  /**
   * 账号状态
   * * ENABLE: 启用
   * * DISABLE: 禁用
   */
  accountState?: '0' | '1';
  /**
   * 申请入驻时间
   */
  applyEnterTime?: string;
  /**
   * 审核未通过原因
   */
  auditReason?: string;
  /**
   * 审核状态
   * * WAIT_CHECK: 0：待审核
   * * CHECKED: 1：已审核
   * * NOT_PASS: 2：审核未通过
   */
  auditState?: '0' | '1' | '2';
  /**
   * 供应商编号
   */
  companyCode?: string;
  /**
   * 供应商id
   */
  companyInfoId?: number;
  /**
   * 供应商类型(0、平台自营 1、第三方供应商)
   * * NO: 否
   * * YES: 是
   */
  companyType?: '0' | '1';
  /**
   * 签约结束日期
   */
  contractEndDate?: string;
  /**
   * 签约开始日期
   */
  contractStartDate?: string;
  /**
   * 账号关闭原因
   */
  storeClosedReason?: string;
  /**
   * 店铺Id
   */
  storeId?: number;
  /**
   * 店铺名称
   */
  storeName?: string;
  /**
   * 店铺状态
   * * OPENING: 0、开启
   * * CLOSED: 1、关店
   */
  storeState?: '0' | '1';
  /**
   * 供应商名称
   */
  supplierName?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "BaseResponse«CompanyInfoResponse»".
 */
export interface BaseResponseCompanyInfoResponse {
  /**
   * 结果码
   */
  code: string;
  context?: CompanyInfoResponse;
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * 内容
 */
export interface CompanyInfoResponse {
  /**
   * 住所
   */
  address?: string;
  /**
   * 法人身份证反面
   */
  backIDCard?: string;
  /**
   * 营业执照副本电子版
   */
  businessLicence?: string;
  /**
   * 经营范围
   */
  businessScope?: string;
  /**
   * 营业期限至
   */
  businessTermEnd?: string;
  /**
   * 营业期限自
   */
  businessTermStart?: string;
  /**
   * 公司信息Id
   */
  companyInfoId?: number;
  /**
   * 企业名称
   */
  companyName?: string;
  /**
   * 成立日期
   */
  foundDate?: string;
  /**
   * 法人身份证正面
   */
  frontIDCard?: string;
  /**
   * 法定代表人
   */
  legalRepresentative?: string;
  /**
   * 注册资本
   */
  registeredCapital?: number;
  /**
   * 社会信用代码
   */
  socialCreditCode?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "CompanyInfoResponse".
 */
export interface CompanyInfoResponse1 {
  /**
   * 住所
   */
  address?: string;
  /**
   * 法人身份证反面
   */
  backIDCard?: string;
  /**
   * 营业执照副本电子版
   */
  businessLicence?: string;
  /**
   * 经营范围
   */
  businessScope?: string;
  /**
   * 营业期限至
   */
  businessTermEnd?: string;
  /**
   * 营业期限自
   */
  businessTermStart?: string;
  /**
   * 公司信息Id
   */
  companyInfoId?: number;
  /**
   * 企业名称
   */
  companyName?: string;
  /**
   * 成立日期
   */
  foundDate?: string;
  /**
   * 法人身份证正面
   */
  frontIDCard?: string;
  /**
   * 法定代表人
   */
  legalRepresentative?: string;
  /**
   * 注册资本
   */
  registeredCapital?: number;
  /**
   * 社会信用代码
   */
  socialCreditCode?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IUpdateUsingPUTRequestReq".
 */
export interface IUpdateUsingPUTRequestReq {
  /**
   * 住所
   */
  address?: string;
  /**
   * 法人身份证反面
   */
  backIDCard?: string;
  /**
   * 营业执照副本电子版
   */
  businessLicence?: string;
  /**
   * 经营范围
   */
  businessScope?: string;
  /**
   * 营业期限至
   */
  businessTermEnd?: string;
  /**
   * 营业期限自
   */
  businessTermStart?: string;
  /**
   * 编号
   */
  companyInfoId?: number;
  /**
   * 企业名称
   */
  companyName?: string;
  /**
   * 成立日期
   */
  foundDate?: string;
  /**
   * 法人身份证正面
   */
  frontIDCard?: string;
  /**
   * 法定代表人
   */
  legalRepresentative?: string;
  /**
   * 注册资本
   */
  registeredCapital?: number;
  /**
   * 社会信用代码
   */
  socialCreditCode?: string;
  /**
   * 登录用户Id
   */
  userId?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IUpdateUsingPUTRes".
 */
export interface IUpdateUsingPUTRes {
  /**
   * 结果码
   */
  code: string;
  context?: CompanyInformationModifyResponse;
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IAccountListUsingPOSTRequestReq".
 */
export interface IAccountListUsingPOSTRequestReq {
  /**
   * 供应商账号
   */
  accountName?: string;
  /**
   * 账户状态(-1:全部,0:启用,1:禁用)
   */
  accountState?: number;
  /**
   * 申请入驻时间 结束时间
   */
  applyEnterTimeEnd?: string;
  /**
   * 申请入驻时间 开始时间
   */
  applyEnterTimeStart?: string;
  /**
   * 审核状态(-1全部,0:待审核,1:已审核,2:审核未通过)
   */
  auditState?: number;
  /**
   * 供应商编号
   */
  companyCode?: string;
  /**
   * 供应商id列表
   */
  companyInfoIds?: number[];
  /**
   * 签约结束日期
   */
  contractEndDate?: string;
  /**
   * 供应商删除状态
   * * NO: 否
   * * YES: 是
   */
  deleteFlag?: '0' | '1';
  /**
   * 第几页
   */
  pageNum?: number;
  /**
   * 每页显示多少条
   */
  pageSize?: number;
  /**
   * 是否确认打款(-1:全部,0:否,1:是)
   */
  remitAffirm?: number;
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
   * 店铺名称
   */
  storeName?: string;
  /**
   * 店铺状态(-1:全部,0:开启,1:关店,2:过期)
   */
  storeState?: number;
  /**
   * 供应商名称
   */
  supplierName?: string;
  /**
   * 登录用户Id
   */
  userId?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IAccountListUsingPOSTRes".
 */
export interface IAccountListUsingPOSTRes {
  /**
   * 结果码
   */
  code: string;
  context?: PageCompanyAccountVO;
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IAccountDetailUsingGETRes".
 */
export interface IAccountDetailUsingGETRes {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: CompanyAccountVO2[];
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IAccountRemitUsingPUTRequestReq".
 */
export interface IAccountRemitUsingPUTRequestReq {
  /**
   * 账户id
   */
  accountId?: number;
  /**
   * 账户名称
   */
  accountName?: string;
  /**
   * 支行信息
   */
  bankBranch?: string;
  /**
   * 银行账号编码
   */
  bankCode?: string;
  /**
   * 开户银行
   */
  bankName?: string;
  /**
   * 账号
   */
  bankNo?: string;
  /**
   * 公司信息ID
   */
  companyInfoId?: number;
  /**
   * 打款金额
   */
  remitPrice?: number;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IAccountRemitUsingPUTRes".
 */
export interface IAccountRemitUsingPUTRes {
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
 * via the `definition` "IListUsingPOST_1RequestReq".
 */
export interface IListUsingPOST_1RequestReq {
  /**
   * 供应商账号
   */
  accountName?: string;
  /**
   * 账户状态(-1:全部,0:启用,1:禁用)
   */
  accountState?: number;
  /**
   * 申请入驻时间 结束时间
   */
  applyEnterTimeEnd?: string;
  /**
   * 申请入驻时间 开始时间
   */
  applyEnterTimeStart?: string;
  /**
   * 审核状态(-1:全部,0:待审核,1:已审核,2:审核未通过)
   */
  auditState?: number;
  /**
   * 供应商编号
   */
  companyCode?: string;
  /**
   * 供应商id列表
   */
  companyInfoIds?: number[];
  /**
   * 签约结束日期
   */
  contractEndDate?: string;
  /**
   * 供应商删除状态
   * * NO: 否
   * * YES: 是
   */
  deleteFlag?: '0' | '1';
  /**
   * 第几页
   */
  pageNum?: number;
  /**
   * 每页显示多少条
   */
  pageSize?: number;
  /**
   * 是否确认打款(-1:全部,0:否,1:是)
   */
  remitAffirm?: number;
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
   * 店铺名称
   */
  storeName?: string;
  /**
   * 店铺状态(-1:全部,0:开启,1:关店,2:过期)
   */
  storeState?: number;
  /**
   * 供应商名称
   */
  supplierName?: string;
  /**
   * 登录用户Id
   */
  userId?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IListUsingPOST_1Res".
 */
export interface IListUsingPOST_1Res {
  /**
   * 结果码
   */
  code: string;
  context?: PageCompanyReponse;
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IFindOneUsingGETRes".
 */
export interface IFindOneUsingGETRes {
  /**
   * 结果码
   */
  code: string;
  context?: CompanyInfoResponse;
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
