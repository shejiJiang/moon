/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/3/4
 **/

import { fetch } from "./fetch";
import { AsyncResult, IEsRes, IPageReq } from "../typings";

export interface IArchiveInfo {
  archiveId?: string;
  cardId?: string;
  fileUrl?: string;
  optUserName?: string;
  fileFmt?: string;
  fileSize?: string;
  source?: string;
  headline?: string;
  logoUrl?: string;
  ticketId?: string;
  content?: string;
  platform?: string;
  htmlContent?: string;
  optCId?: string;
}

export interface IQrCode {
  qrCodeUrl: string;
  archiveId?: string;
}

export interface IUpdateInfo {
  optCId?: string;
  optUserCode?: string;
  intro?: string;
  optUserName?: string;
  headline?: string;
  archiveId?: string;
  logoUrl?: string;
  content?: string;
}

export interface IGetQrCode {
  archiveId: string;
  optCId: string;
}

export interface IThumb {
  id: string;
  thumbUrl: string;
  content?: string;
}

export interface IDynamicImg {
  userLogo: string;
  content: string;
}

export async function add(
  archive: IArchiveInfo
): Promise<AsyncResult<IQrCode>> {
  return fetch<IQrCode>({
    host: "cardApi",
    url: "/api/archive/add",
    method: "POST",
    data: archive,
    contentType: "application/json"
  });
}

export async function update(
  archive: IArchiveInfo
): Promise<AsyncResult<IQrCode>> {
  return fetch<IQrCode>({
    host: "cardApi",
    url: "/api/archive/update",
    method: "POST",
    data: archive,
    contentType: "application/json"
  });
}

export async function down(
  archiveId: string
): Promise<AsyncResult<IArchiveInfo>> {
  return fetch<IArchiveInfo>({
    host: "cardApi",
    url: "/api/archive/download",
    method: "POST",
    data: { archiveId },
    contentType: "application/json"
  });
}

export async function del(
  archiveId: string
): Promise<AsyncResult<IArchiveInfo>> {
  return fetch<IArchiveInfo>({
    host: "cardApi",
    url: "/api/archive/delete",
    method: "POST",
    data: { archiveId },
    contentType: "application/json"
  });
}

export async function rename(
  archiveId: string,
  headline: string
): Promise<AsyncResult<IArchiveInfo>> {
  return fetch<IArchiveInfo>({
    host: "cardApi",
    url: "/api/archive/rename",
    method: "POST",
    data: { archiveId, headline },
    contentType: "application/json"
  });
}

interface IQuery extends IPageReq {
  q?: string;
  type?: ArchiveType;
  source?: "" | "COLLECT" | "UPLOAD,CREATE";
  cardId?: string;
  archiveId?: string;
}

export type ArchiveType = "" | "ARTICLE" | "ATLAS" | "VIDEO";

export type ArchiveSource = "" | "COLLECT" | "UPLOAD,CREATE";

export async function query(
  req: IQuery
): Promise<AsyncResult<IEsRes<IArchiveEsInfo>>> {
  return fetch<IEsRes<IArchiveEsInfo>>({
    host: "cardApi",
    url: "/api/archive/query",
    method: "POST",
    data: req,
    contentType: "application/json"
  });
}

// 主动生成小程序码
export async function getQrCode(
  req: IGetQrCode
): Promise<AsyncResult<IQrCode>> {
  return fetch<IQrCode>({
    host: "cardApi",
    url: "/api/archive/genQrCode",
    method: "POST",
    data: req,
    contentType: "application/json"
  });
}

// 缩略图
export async function saveThumb(req: IThumb): Promise<AsyncResult<string>> {
  return fetch<string>({
    host: "cardApi",
    url: "/api/group/dynamic/thumb",
    method: "POST",
    data: req,
    contentType: "application/json"
  });
}

// 创建缩略图之前需要生产的图片
export async function webshotDynamicImg(
  req: IDynamicImg
): Promise<AsyncResult<string>> {
  return fetch<string>({
    host: "",
    url: "http://commserver.1000.com:8080/image/dynamicToImg",
    method: "POST",
    data: req,
    contentType: "application/json"
  });
}

export interface IArchiveEsInfo {
  status: string;
  uploadTIme?: any;
  sortTime: number;
  collectTime?: any;
  intro: string;
  sharedCount: number;
  thumbUrl?: any;
  source: string;
  headline: string;
  platform: string;
  modifyTime?: any;
  archiveId: string;
  ticketId: string;
  type: string;
  browseCount: number;
  logoUrl?: any;
  qrCodeUrl: string;
  createTime: string;
  url: string;
  publishTime?: any;
  collectCount: number;
  _adminId: string;
  cardId: string;
  downloadCount: number;
}
