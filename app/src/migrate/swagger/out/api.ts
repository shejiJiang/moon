import sdk from '@api/sdk';
import {IResult} from '@/types';

/**
 *
 * 魔方查询图片分类
 *
 */
async function listUsingGET_13(): Promise<IListUsingGET_13Res> {
  let result = await sdk.get<IListUsingGET_13Res>(
    '/api/gallery/cate/list',

    {},
  );
  return result.data;
}

/**
 *
 * 保存图片信息
 *
 */
async function saveImgUsingPOST(
  imgRequest: ISaveImgUsingPOSTImgRequestReq,
): Promise<ISaveImgUsingPOSTRes> {
  let result = await sdk.post<ISaveImgUsingPOSTRes>(
    '/api/gallery/image/save',

    {},
  );
  return result.data;
}

/**
 *
 * 魔方分页图片
 *
 */
async function pageUsingPOST_13(
  imgPageReq: IPageUsingPOST_13ImgPageReqReq,
): Promise<IPageUsingPOST_13Res> {
  let result = await sdk.post<IPageUsingPOST_13Res>(
    '/api/gallery/item/list',

    {},
  );
  return result.data;
}

/**
 *
 * 上传图片
 *
 */
async function uploadFileUsingPOST_2(
  file: IUploadFileUsingPOST_2FileReq,
): Promise<IUploadFileUsingPOST_2Res> {
  let result = await sdk.post<IUploadFileUsingPOST_2Res>(
    '/api/upload/image',

    {},
  );
  return result.data;
}

/**
 *
 * 根据网络地址拉网络图片
 *
 */
async function netImgUsingGET(
  url: INetImgUsingGETUrlReq,
): Promise<INetImgUsingGETRes> {
  let result = await sdk.get<INetImgUsingGETRes>(
    '/api/upload/image/net',

    {},
  );
  return result.data;
}

export default {
  listUsingGET_13,

  saveImgUsingPOST,

  pageUsingPOST_13,

  uploadFileUsingPOST_2,

  netImgUsingGET,
};

/**
 * url
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "INetImgUsingGETUrlReq".
 */
export type INetImgUsingGETUrlReq = string;

export interface IgnoreType {
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ImgRequest".
 */
export interface ImgRequest {
  /**
   * 分类
   */
  cateId?: string;
  /**
   * 图片列表
   */
  imageForms?: ImageForms[];
  [k: string]: any;
}
export interface ImageForms {
  /**
   * 魔方建站参数
   */
  advice?: string;
  /**
   * 文件
   */
  duration?: string;
  /**
   * 文件类型
   */
  fileType?: string;
  /**
   * 魔方建站参数
   */
  height?: number;
  /**
   * 文件名
   */
  name?: string;
  /**
   * 魔方建站参数
   */
  scene?: string;
  /**
   * 魔方建站参数
   */
  size?: number;
  /**
   * 魔方建站参数
   */
  url?: string;
  /**
   * 魔方建站参数
   */
  width?: number;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ImageForms".
 */
export interface ImageForms1 {
  /**
   * 魔方建站参数
   */
  advice?: string;
  /**
   * 文件
   */
  duration?: string;
  /**
   * 文件类型
   */
  fileType?: string;
  /**
   * 魔方建站参数
   */
  height?: number;
  /**
   * 文件名
   */
  name?: string;
  /**
   * 魔方建站参数
   */
  scene?: string;
  /**
   * 魔方建站参数
   */
  size?: number;
  /**
   * 魔方建站参数
   */
  url?: string;
  /**
   * 魔方建站参数
   */
  width?: number;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ImgPageReq".
 */
export interface ImgPageReq {
  /**
   * 分类
   */
  cateId?: number;
  /**
   * 名称
   */
  name?: string;
  /**
   * 第几页
   */
  pageNo?: number;
  /**
   * 每页显示多少条
   */
  pageSize?: number;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IListUsingGET_13Res".
 */
export interface IListUsingGET_13Res {
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ISaveImgUsingPOSTImgRequestReq".
 */
export interface ISaveImgUsingPOSTImgRequestReq {
  /**
   * 分类
   */
  cateId?: string;
  /**
   * 图片列表
   */
  imageForms?: ImageForms[];
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "ISaveImgUsingPOSTRes".
 */
export interface ISaveImgUsingPOSTRes {
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IPageUsingPOST_13ImgPageReqReq".
 */
export interface IPageUsingPOST_13ImgPageReqReq {
  /**
   * 分类
   */
  cateId?: number;
  /**
   * 名称
   */
  name?: string;
  /**
   * 第几页
   */
  pageNo?: number;
  /**
   * 每页显示多少条
   */
  pageSize?: number;
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IPageUsingPOST_13Res".
 */
export interface IPageUsingPOST_13Res {
  [k: string]: any;
}
/**
 * file
 *
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IUploadFileUsingPOST_2FileReq".
 */
export interface IUploadFileUsingPOST_2FileReq {
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "IUploadFileUsingPOST_2Res".
 */
export interface IUploadFileUsingPOST_2Res {
  [k: string]: any;
}
/**
 * This interface was referenced by `IgnoreType`'s JSON-Schema
 * via the `definition` "INetImgUsingGETRes".
 */
export interface INetImgUsingGETRes {
  [k: string]: any;
}
