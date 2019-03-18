/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/3/4
 **/

/**
 * 获取阿里云上传policy
 * https://help.aliyun.com/document_detail/31926.html?spm=a2c4g.11186623.6.1142.3d132f08YUeoHm
 * @returns {Promise<Result<IQRData>>}
 */
let contentType = "application/json; charset=utf-8";
let Charset = "utf8";
import config from "kit/config";

export interface IResult<T = object> {
  status: number;
  message: string;
  code?: any;
  detail?: any;
  data: T;
  errorCodes?: any;
  success: boolean;
}

export interface IPolicyData {
  accessId: string;
  policy: string;
  signature: string;
  dir: string;
  host: string;
  expire: string;
}

export async function getOssPolicy(): Promise<IPolicyData> {
  let myHeaders = new Headers({
    platform: "pc",
    Charset,
    "Access-Control-Allow-Origin": "*",
    "Content-Type": contentType,
    Authorization: localStorage.getItem("qm:ticket")
  });

  let res = await window.fetch(`${config.upload}/api/oss/sign`, {
    method: "get",
    headers: myHeaders,
    mode: "cors"
  });

  let result: IResult<IPolicyData> = await res.json();
  return result.data;
}
