/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/3/4
 **/

import config from "kit/config";

export interface IQRData {
  key: string;
  token: string;
}

export interface Result<T> {
  data: T;
  msg: string;
  rescode: number;
  result: string;
  status: number;
}

export const ConstKey = "qm:login:key";
const ConstToken = "qm:login:token";

export async function getQrUrl(): Promise<Result<IQRData>> {
  let myHeaders = new Headers({
    platform: "wechat",
    Charset,
    "Access-Control-Allow-Origin": "*",
    "Content-Type": contentType
  });
  let res = await window.fetch(`${config.loginServer}/wechat/app/qr/url.php`, {
    method: "get",
    headers: myHeaders,
    mode: "cors"
  });

  const json: Result<IQRData> = await res.json();

  localStorage.setItem(ConstKey, json.data.key);
  localStorage.setItem(ConstToken, json.data.token);
  return json;
}

export function getSSOToken(): string {
  return localStorage.getItem(ConstToken);
}

export function getQmImageUrl(): string {
  return (
    `${config.loginServer}/wechat/app/qr/code?t=` +
    localStorage.getItem(ConstKey)
  );
}

let contentType = "application/json; charset=utf-8";
let Charset = "utf8";

export async function getQrCode(
  t = localStorage.getItem(ConstKey)
): Promise<object> {
  let myHeaders = new Headers({
    platform: "wechat",
    Charset,
    "Access-Control-Allow-Origin": "*",
    "Content-Type": contentType
  });

  let res = await window.fetch(
    `${config.loginServer}/wechat/app/qr/code?t=` + t,
    {
      method: "get",
      headers: myHeaders,
      mode: "cors"
    }
  );

  return res;
}

export async function login(
  t = localStorage.getItem(ConstKey)
): Promise<object> {
  let res = await window.fetch(
    `${config.loginServer}/wechat/app/qr/login.php?t=` + t,
    {
      method: "get"
    }
  );

  return res;
}

export async function loginShortCut(
  t = localStorage.getItem(ConstKey)
): Promise<object> {
  let res = await window.fetch(
    `${config.loginServer}/wechat/app/shortcut/login.php?t=` + t,
    {
      method: "post"
    }
  );

  return res;
}

export async function getCardInfo(): Promise<object> {
  let res = await window.fetch(`${config.memberApi}/crm/biz/card/getInfo`, {
    method: "post",
    headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization: localStorage.getItem("qm:ticket")
    }
  });

  return res;
}
