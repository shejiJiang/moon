import sdk from '@api/sdk';
import {IResult} from '@/types';

/**
 *
 * 校验供应商自定义品牌是否与平台重复
 *
 */
async function brandListVerifyUsingGET(
  storeId: IBrandListVerifyUsingGETStoreIdReq,
): Promise<IBrandListVerifyUsingGETRes> {
  let result = await sdk.get<IBrandListVerifyUsingGETRes>(
    '/contract/brand/list/verify/{storeId}'.replace('{storeId}', storeId),

    {
      ...storeId,
    },
  );
  return result.data;
}

/**
 *
 * 获取供应商签约品牌列表
 *
 */
async function brandListUsingGET(
  storeId: IBrandListUsingGETStoreIdReq,
): Promise<IBrandListUsingGETRes> {
  let result = await sdk.get<IBrandListUsingGETRes>(
    '/contract/brand/list/{storeId}'.replace('{storeId}', storeId),

    {
      ...storeId,
    },
  );
  return result.data;
}

/**
 *
 * 直接关联品牌
 *
 */
async function brandRelevanceUsingGET(
  storeId: IBrandRelevanceUsingGETStoreIdReq,
): Promise<IBrandRelevanceUsingGETRes> {
  let result = await sdk.get<IBrandRelevanceUsingGETRes>(
    '/contract/brand/relevance/{storeId}'.replace('{storeId}', storeId),

    {
      ...storeId,
    },
  );
  return result.data;
}

/**
 *
 * 校验签约分类是否有关联商品
 *
 */
async function cateDelVerifyUsingGET(
  cateId: ICateDelVerifyUsingGETCateIdReq,
  storeId: ICateDelVerifyUsingGETStoreIdReq,
): Promise<ICateDelVerifyUsingGETRes> {
  let result = await sdk.get<ICateDelVerifyUsingGETRes>(
    '/contract/cate/del/verify/{cateId}/{storeId}'

      .replace('{cateId}', cateId)

      .replace('{storeId}', storeId),

    {
      ...cateId,

      ...storeId,
    },
  );
  return result.data;
}

/**
 *
 * 获取供应商签约分类列表
 *
 */
async function cateListUsingGET(
  storeId: ICateListUsingGETStoreIdReq,
): Promise<ICateListUsingGETRes> {
  let result = await sdk.get<ICateListUsingGETRes>(
    '/contract/cate/list/{storeId}'.replace('{storeId}', storeId),

    {
      ...storeId,
    },
  );
  return result.data;
}

/**
 *
 * 查询供应商签约的平台品牌列表
 *
 */
async function listBrandUsingGET(
  storeId: IListBrandUsingGETStoreIdReq,
): Promise<IListBrandUsingGETRes> {
  let result = await sdk.get<IListBrandUsingGETRes>(
    '/contract/goods/brand/list/{storeId}'.replace('{storeId}', storeId),

    {
      ...storeId,
    },
  );
  return result.data;
}

/**
 *
 * 查询供应商签约的平台类目列表，包含所有的父级类目
 *
 */
async function listCateUsingGET(
  storeId: IListCateUsingGETStoreIdReq,
): Promise<IListCateUsingGETRes> {
  let result = await sdk.get<IListCateUsingGETRes>(
    '/contract/goods/cate/list/{storeId}'.replace('{storeId}', storeId),

    {
      ...storeId,
    },
  );
  return result.data;
}

/**
 *
 * 签约信息新增修改删除(签约分类，签约品牌)
 *
 */
async function renewalAllUsingPOST(
  contractRequest: IRenewalAllUsingPOSTContractRequestReq,
): Promise<IRenewalAllUsingPOSTRes> {
  let result = await sdk.post<IRenewalAllUsingPOSTRes>(
    '/contract/renewal',

    {},
  );
  return result.data;
}

export default {
  brandListVerifyUsingGET,

  brandListUsingGET,

  brandRelevanceUsingGET,

  cateDelVerifyUsingGET,

  cateListUsingGET,

  listBrandUsingGET,

  listCateUsingGET,

  renewalAllUsingPOST,
};

/**
 * 店铺Id
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IBrandListVerifyUsingGETStoreIdReq".
 */
export type IBrandListVerifyUsingGETStoreIdReq = number;
/**
 * 店铺Id
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IBrandListUsingGETStoreIdReq".
 */
export type IBrandListUsingGETStoreIdReq = number;
/**
 * 店铺Id
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IBrandRelevanceUsingGETStoreIdReq".
 */
export type IBrandRelevanceUsingGETStoreIdReq = number;
/**
 * 分类Id
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ICateDelVerifyUsingGETCateIdReq".
 */
export type ICateDelVerifyUsingGETCateIdReq = number;
/**
 * 店铺Id
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ICateDelVerifyUsingGETStoreIdReq".
 */
export type ICateDelVerifyUsingGETStoreIdReq = number;
/**
 * 店铺Id
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ICateListUsingGETStoreIdReq".
 */
export type ICateListUsingGETStoreIdReq = number;
/**
 * 店铺Id
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IListBrandUsingGETStoreIdReq".
 */
export type IListBrandUsingGETStoreIdReq = number;
/**
 * 店铺Id
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IListCateUsingGETStoreIdReq".
 */
export type IListCateUsingGETStoreIdReq = number;

export interface IgnoreType {
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "BaseResponse«List«ContractBrandVO»»".
 */
export interface BaseResponseListContractBrandVO {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: ContractBrandVO[];
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
export interface ContractBrandVO {
  /**
   * 授权图片路径
   */
  authorizePic?: string;
  checkBrand?: CheckBrandVO;
  /**
   * 签约品牌分类
   */
  contractBrandId?: number;
  goodsBrand?: GoodsBrandVO;
  /**
   * 店铺主键
   */
  storeId?: number;
  [k: string]: any;
}
/**
 * 待审核品牌
 */
export interface CheckBrandVO {
  /**
   * 待审核品牌分类
   */
  checkBrandId?: number;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 品牌logo
   */
  logo?: string;
  /**
   * 品牌名称
   */
  name?: string;
  /**
   * 品牌名称
   */
  nickName?: string;
  /**
   * 审核状态
   * * WAIT_CHECK: 0:未审核
   * * PASS: 1:通过
   * * NOT_PASS: 2:驳回
   */
  status?: '0' | '1' | '2';
  /**
   * 店铺主键
   */
  storeId?: number;
  [k: string]: any;
}
/**
 * 商品品牌
 */
export interface GoodsBrandVO {
  /**
   * 品牌编号
   */
  brandId?: number;
  /**
   * 品牌名称
   */
  brandName?: string;
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
   * 品牌logo
   */
  logo?: string;
  /**
   * 品牌别名
   */
  nickName?: string;
  /**
   * 拼音
   */
  pinYin?: string;
  spinYin?: string;
  /**
   * 店铺id
   */
  storeId?: number;
  /**
   * 更新时间
   */
  updateTime?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ContractBrandVO".
 */
export interface ContractBrandVO1 {
  /**
   * 授权图片路径
   */
  authorizePic?: string;
  checkBrand?: CheckBrandVO;
  /**
   * 签约品牌分类
   */
  contractBrandId?: number;
  goodsBrand?: GoodsBrandVO;
  /**
   * 店铺主键
   */
  storeId?: number;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "CheckBrandVO".
 */
export interface CheckBrandVO1 {
  /**
   * 待审核品牌分类
   */
  checkBrandId?: number;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 品牌logo
   */
  logo?: string;
  /**
   * 品牌名称
   */
  name?: string;
  /**
   * 品牌名称
   */
  nickName?: string;
  /**
   * 审核状态
   * * WAIT_CHECK: 0:未审核
   * * PASS: 1:通过
   * * NOT_PASS: 2:驳回
   */
  status?: '0' | '1' | '2';
  /**
   * 店铺主键
   */
  storeId?: number;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "GoodsBrandVO".
 */
export interface GoodsBrandVO1 {
  /**
   * 品牌编号
   */
  brandId?: number;
  /**
   * 品牌名称
   */
  brandName?: string;
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
   * 品牌logo
   */
  logo?: string;
  /**
   * 品牌别名
   */
  nickName?: string;
  /**
   * 拼音
   */
  pinYin?: string;
  spinYin?: string;
  /**
   * 店铺id
   */
  storeId?: number;
  /**
   * 更新时间
   */
  updateTime?: string;
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
 * via the `definition` "BaseResponse«List«ContractCateVO»»".
 */
export interface BaseResponseListContractCateVO {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: ContractCateVO[];
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
export interface ContractCateVO {
  /**
   * 平台类目id
   */
  cateId?: number;
  /**
   * 平台类目名称
   */
  cateName?: string;
  /**
   * 分类扣率
   */
  cateRate?: number;
  /**
   * 签约分类主键
   */
  contractCateId?: number;
  goodsCate?: GoodsCateVO;
  /**
   * 上级平台类目名称(一级/二级)
   */
  parentGoodCateNames?: string;
  /**
   * 平台扣率
   */
  platformCateRate?: number;
  /**
   * 资质图片路径
   */
  qualificationPics?: string;
  /**
   * 店铺主键
   */
  storeId?: number;
  [k: string]: any;
}
/**
 * 平台分类
 */
export interface GoodsCateVO {
  /**
   * 分类层次
   */
  cateGrade?: number;
  /**
   * 分类编号
   */
  cateId?: number;
  /**
   * 分类图片
   */
  cateImg?: string;
  /**
   * 分类名称
   */
  cateName?: string;
  /**
   * 父类编号
   */
  cateParentId?: number;
  /**
   * 分类路径
   */
  catePath?: string;
  /**
   * 分类扣率
   */
  cateRate?: number;
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
   * 一对多关系，子分类
   */
  goodsCateList?: GoodsCateVO1[];
  /**
   * 一对多关系，属性
   */
  goodsProps?: GoodsCatePropVO[];
  /**
   * 成长值获取比例
   */
  growthValueRate?: number;
  /**
   * 默认标记
   * * NO: 否
   * * YES: 是
   */
  isDefault?: '0' | '1';
  /**
   * 是否使用上级类目扣率
   * * NO: 否
   * * YES: 是
   */
  isParentCateRate?: '0' | '1';
  /**
   * 是否使用上级类目成长值获取比例
   * * NO: 否
   * * YES: 是
   */
  isParentGrowthValueRate?: '0' | '1';
  /**
   * 拼音
   */
  pinYin?: string;
  /**
   * 排序
   */
  sort?: number;
  spinYin?: string;
  /**
   * 更新时间
   */
  updateTime?: string;
  [k: string]: any;
}
export interface GoodsCateVO1 {
  /**
   * 分类层次
   */
  cateGrade?: number;
  /**
   * 分类编号
   */
  cateId?: number;
  /**
   * 分类图片
   */
  cateImg?: string;
  /**
   * 分类名称
   */
  cateName?: string;
  /**
   * 父类编号
   */
  cateParentId?: number;
  /**
   * 分类路径
   */
  catePath?: string;
  /**
   * 分类扣率
   */
  cateRate?: number;
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
   * 一对多关系，子分类
   */
  goodsCateList?: GoodsCateVO1[];
  /**
   * 一对多关系，属性
   */
  goodsProps?: GoodsCatePropVO[];
  /**
   * 成长值获取比例
   */
  growthValueRate?: number;
  /**
   * 默认标记
   * * NO: 否
   * * YES: 是
   */
  isDefault?: '0' | '1';
  /**
   * 是否使用上级类目扣率
   * * NO: 否
   * * YES: 是
   */
  isParentCateRate?: '0' | '1';
  /**
   * 是否使用上级类目成长值获取比例
   * * NO: 否
   * * YES: 是
   */
  isParentGrowthValueRate?: '0' | '1';
  /**
   * 拼音
   */
  pinYin?: string;
  /**
   * 排序
   */
  sort?: number;
  spinYin?: string;
  /**
   * 更新时间
   */
  updateTime?: string;
  [k: string]: any;
}
export interface GoodsCatePropVO {
  /**
   * 分类id
   */
  cateId?: number;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 是否删除
   * * NO: 否
   * * YES: 是
   */
  delFlag?: '0' | '1';
  /**
   * 商品属性明细
   */
  goodsPropDetails?: GoodsPropDetailVO[];
  /**
   * 默认标识
   * * NO: 否
   * * YES: 是
   */
  indexFlag?: '0' | '1';
  /**
   * 属性明细
   */
  propDetailStr?: string;
  /**
   * 属性id
   */
  propId?: number;
  /**
   * 属性名
   */
  propName?: string;
  /**
   * 排序
   */
  sort?: number;
  /**
   * 更新时间
   */
  updateTime?: string;
  [k: string]: any;
}
export interface GoodsPropDetailVO {
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 是否删除
   * * NO: 否
   * * YES: 是
   */
  delFlag?: '0' | '1';
  /**
   * 详情id
   */
  detailId?: number;
  /**
   * 详情名
   */
  detailName?: string;
  /**
   * 属性id
   */
  propId?: number;
  /**
   * 排序
   */
  sort?: number;
  /**
   * 更新时间
   */
  updateTime?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ContractCateVO".
 */
export interface ContractCateVO1 {
  /**
   * 平台类目id
   */
  cateId?: number;
  /**
   * 平台类目名称
   */
  cateName?: string;
  /**
   * 分类扣率
   */
  cateRate?: number;
  /**
   * 签约分类主键
   */
  contractCateId?: number;
  goodsCate?: GoodsCateVO;
  /**
   * 上级平台类目名称(一级/二级)
   */
  parentGoodCateNames?: string;
  /**
   * 平台扣率
   */
  platformCateRate?: number;
  /**
   * 资质图片路径
   */
  qualificationPics?: string;
  /**
   * 店铺主键
   */
  storeId?: number;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "GoodsCateVO".
 */
export interface GoodsCateVO2 {
  /**
   * 分类层次
   */
  cateGrade?: number;
  /**
   * 分类编号
   */
  cateId?: number;
  /**
   * 分类图片
   */
  cateImg?: string;
  /**
   * 分类名称
   */
  cateName?: string;
  /**
   * 父类编号
   */
  cateParentId?: number;
  /**
   * 分类路径
   */
  catePath?: string;
  /**
   * 分类扣率
   */
  cateRate?: number;
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
   * 一对多关系，子分类
   */
  goodsCateList?: GoodsCateVO1[];
  /**
   * 一对多关系，属性
   */
  goodsProps?: GoodsCatePropVO[];
  /**
   * 成长值获取比例
   */
  growthValueRate?: number;
  /**
   * 默认标记
   * * NO: 否
   * * YES: 是
   */
  isDefault?: '0' | '1';
  /**
   * 是否使用上级类目扣率
   * * NO: 否
   * * YES: 是
   */
  isParentCateRate?: '0' | '1';
  /**
   * 是否使用上级类目成长值获取比例
   * * NO: 否
   * * YES: 是
   */
  isParentGrowthValueRate?: '0' | '1';
  /**
   * 拼音
   */
  pinYin?: string;
  /**
   * 排序
   */
  sort?: number;
  spinYin?: string;
  /**
   * 更新时间
   */
  updateTime?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "GoodsCatePropVO".
 */
export interface GoodsCatePropVO1 {
  /**
   * 分类id
   */
  cateId?: number;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 是否删除
   * * NO: 否
   * * YES: 是
   */
  delFlag?: '0' | '1';
  /**
   * 商品属性明细
   */
  goodsPropDetails?: GoodsPropDetailVO[];
  /**
   * 默认标识
   * * NO: 否
   * * YES: 是
   */
  indexFlag?: '0' | '1';
  /**
   * 属性明细
   */
  propDetailStr?: string;
  /**
   * 属性id
   */
  propId?: number;
  /**
   * 属性名
   */
  propName?: string;
  /**
   * 排序
   */
  sort?: number;
  /**
   * 更新时间
   */
  updateTime?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "GoodsPropDetailVO".
 */
export interface GoodsPropDetailVO1 {
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 是否删除
   * * NO: 否
   * * YES: 是
   */
  delFlag?: '0' | '1';
  /**
   * 详情id
   */
  detailId?: number;
  /**
   * 详情名
   */
  detailName?: string;
  /**
   * 属性id
   */
  propId?: number;
  /**
   * 排序
   */
  sort?: number;
  /**
   * 更新时间
   */
  updateTime?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "BaseResponse«List«GoodsBrandVO»»".
 */
export interface BaseResponseListGoodsBrandVO {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: GoodsBrandVO2[];
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
export interface GoodsBrandVO2 {
  /**
   * 品牌编号
   */
  brandId?: number;
  /**
   * 品牌名称
   */
  brandName?: string;
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
   * 品牌logo
   */
  logo?: string;
  /**
   * 品牌别名
   */
  nickName?: string;
  /**
   * 拼音
   */
  pinYin?: string;
  spinYin?: string;
  /**
   * 店铺id
   */
  storeId?: number;
  /**
   * 更新时间
   */
  updateTime?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "BaseResponse«List«GoodsCateVO»»".
 */
export interface BaseResponseListGoodsCateVO {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: GoodsCateVO3[];
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
export interface GoodsCateVO3 {
  /**
   * 分类层次
   */
  cateGrade?: number;
  /**
   * 分类编号
   */
  cateId?: number;
  /**
   * 分类图片
   */
  cateImg?: string;
  /**
   * 分类名称
   */
  cateName?: string;
  /**
   * 父类编号
   */
  cateParentId?: number;
  /**
   * 分类路径
   */
  catePath?: string;
  /**
   * 分类扣率
   */
  cateRate?: number;
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
   * 一对多关系，子分类
   */
  goodsCateList?: GoodsCateVO1[];
  /**
   * 一对多关系，属性
   */
  goodsProps?: GoodsCatePropVO[];
  /**
   * 成长值获取比例
   */
  growthValueRate?: number;
  /**
   * 默认标记
   * * NO: 否
   * * YES: 是
   */
  isDefault?: '0' | '1';
  /**
   * 是否使用上级类目扣率
   * * NO: 否
   * * YES: 是
   */
  isParentCateRate?: '0' | '1';
  /**
   * 是否使用上级类目成长值获取比例
   * * NO: 否
   * * YES: 是
   */
  isParentGrowthValueRate?: '0' | '1';
  /**
   * 拼音
   */
  pinYin?: string;
  /**
   * 排序
   */
  sort?: number;
  spinYin?: string;
  /**
   * 更新时间
   */
  updateTime?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ContractSaveRequest".
 */
export interface ContractSaveRequest {
  /**
   * 签约品牌
   */
  brandSaveRequests?: ContractBrandSaveDTO[];
  /**
   * 签约分类
   */
  cateSaveRequests?: ContractCateSaveDTO[];
  /**
   * 待删除签约品牌id
   */
  delBrandIds?: number[];
  /**
   * 待删除平台类目id
   */
  delCateIds?: number[];
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
export interface ContractBrandSaveDTO {
  /**
   * 授权图片路径
   */
  authorizePic?: string;
  /**
   * 品牌主键
   */
  brandId?: number;
  /**
   * 待审核品牌主键
   */
  checkBrandId?: number;
  /**
   * 签约品牌分类
   */
  contractBrandId?: number;
  /**
   * 品牌logo
   */
  logo?: string;
  /**
   * 品牌名称
   */
  name?: string;
  /**
   * 品牌别名
   */
  nickName?: string;
  /**
   * 店铺主键
   */
  storeId?: number;
  [k: string]: any;
}
export interface ContractCateSaveDTO {
  /**
   * 商品分类标识
   */
  cateId?: number;
  /**
   * 分类扣率
   */
  cateRate?: number;
  /**
   * 主键
   */
  contractCateId?: number;
  /**
   * 资质图片路径
   */
  qualificationPics?: string;
  /**
   * 店铺主键
   */
  storeId?: number;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ContractBrandSaveDTO".
 */
export interface ContractBrandSaveDTO1 {
  /**
   * 授权图片路径
   */
  authorizePic?: string;
  /**
   * 品牌主键
   */
  brandId?: number;
  /**
   * 待审核品牌主键
   */
  checkBrandId?: number;
  /**
   * 签约品牌分类
   */
  contractBrandId?: number;
  /**
   * 品牌logo
   */
  logo?: string;
  /**
   * 品牌名称
   */
  name?: string;
  /**
   * 品牌别名
   */
  nickName?: string;
  /**
   * 店铺主键
   */
  storeId?: number;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ContractCateSaveDTO".
 */
export interface ContractCateSaveDTO1 {
  /**
   * 商品分类标识
   */
  cateId?: number;
  /**
   * 分类扣率
   */
  cateRate?: number;
  /**
   * 主键
   */
  contractCateId?: number;
  /**
   * 资质图片路径
   */
  qualificationPics?: string;
  /**
   * 店铺主键
   */
  storeId?: number;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IBrandListVerifyUsingGETRes".
 */
export interface IBrandListVerifyUsingGETRes {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: ContractBrandVO[];
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IBrandListUsingGETRes".
 */
export interface IBrandListUsingGETRes {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: ContractBrandVO[];
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IBrandRelevanceUsingGETRes".
 */
export interface IBrandRelevanceUsingGETRes {
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
 * via the `definition` "ICateDelVerifyUsingGETRes".
 */
export interface ICateDelVerifyUsingGETRes {
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
 * via the `definition` "ICateListUsingGETRes".
 */
export interface ICateListUsingGETRes {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: ContractCateVO[];
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IListBrandUsingGETRes".
 */
export interface IListBrandUsingGETRes {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: GoodsBrandVO2[];
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IListCateUsingGETRes".
 */
export interface IListCateUsingGETRes {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context?: GoodsCateVO3[];
  /**
   * 消息内容
   */
  message?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IRenewalAllUsingPOSTContractRequestReq".
 */
export interface IRenewalAllUsingPOSTContractRequestReq {
  /**
   * 签约品牌
   */
  brandSaveRequests?: ContractBrandSaveDTO[];
  /**
   * 签约分类
   */
  cateSaveRequests?: ContractCateSaveDTO[];
  /**
   * 待删除签约品牌id
   */
  delBrandIds?: number[];
  /**
   * 待删除平台类目id
   */
  delCateIds?: number[];
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
 * via the `definition` "IRenewalAllUsingPOSTRes".
 */
export interface IRenewalAllUsingPOSTRes {
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
