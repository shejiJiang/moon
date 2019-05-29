import { AsyncResult } from "../typings";
import "whatwg-fetch";
import { message } from "antd";
import config, { IApi } from "kit/config";
// const config: {
//   qm_host: { [name: string]: string };
//   [name: string]: any;
// } = {
//   qm_host: {
//     test4: "http://card-api.1000.com:8080"
//   }
// };

/**
 * 是否是字符串
 * @param param
 */
function isString(param: any) {
  return Object.prototype.toString.call(param) === "[object String]";
}

/**
 * 拼装完整host
 * @param host
 * @param input
 */
function prefixHost(host: string, input: string): string {
  if (isString(input)) {
    const hasPrefix = /^https?:\/\//.test(input as string);
    return hasPrefix ? input : config[host as IApi] + input;
  } else {
    console.error("host,url错误");
  }
}

interface IFetch {
  host: string;
  url: string;
  method?: string;
  data?: Object;
  contentType?: string;
}

async function Common<T = object>(params: IFetch): Promise<AsyncResult<T>> {
  let { host, url, data, method } = params;
  let methodUrl = prefixHost(host, url);
  let contentType = "application/json; charset=utf-8";
  let session = localStorage.getItem("qm:ticket");

  let Charset = "utf8";
  const headers = {
    platform: "wechat",
    Charset,
    "Content-Type": contentType,
    "Access-Control-Allow-Origin": "*",
    Authorization: session //SSO登录信息校验，必传
  };
  url = methodUrl;
  try {
    let res: any = await window.fetch(url, {
      body: JSON.stringify({
        ...data,
        cardId: localStorage.getItem("qm:cardId"),
        ticketId: localStorage.getItem("qm:ticketId")
      }),
      headers,
      method,
      mode: "cors",
      credentials: "include"
    });

    if (res.status >= 200 && res.status < 300) {
      const json = await res.json();
      let { status, message, err } = json;

      if (status && status == "1") {
        return {
          res: json.data,
          err: ""
        };
      } else {
        Raven &&
          Raven.captureException(json, {
            fingerprint: ["url", url],
            extra: params
          });
        return { res: null, err };
      }
    } else if (res.status == 401) {
      // 跳转登录页
      localStorage.removeItem("qm:userInfo");
      location.href = "#/login";
      message.warning("登录超时，请重新登录");
      return { res: null, err: new Error("未登录") };
    } else {
      return { res: null, err: new Error("网络请求失败,请检查网络") };
    }
  } catch (e) {
    Raven && Raven.captureException(e);
    throw e;
  }
}

export function fetch<T = object>(params: IFetch): Promise<AsyncResult<T>> {
  return Common<T>(params);
}

// export default { fetch };
