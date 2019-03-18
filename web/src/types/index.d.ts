/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/3/5
 **/

//https://docs.sentry.io/clients/javascript/usage/#raven-js-reporting-errors

interface IRavenOption{
  fingerprint?:string[];
  logger?:string;
  extra:{
    [key:string]:any;
  };
}
interface IContextOption{
  email: string;
  id: string;
  [name:string]:string;
}

interface IMessageOption{
  level:"info"|"warning"|"error";
}

interface IParam{
  [name:string]:string;
}

interface IBreadcrumb{
  message:string;
  category:string;
}

//https://docs.sentry.io/clients/javascript/usage/#raven-js-reporting-errors
interface IRaven {
  captureException:(err:any,option?:IRavenOption)=>void;
  captureBreadcrumb:(param:IBreadcrumb)=>void;
  setUserContext:(option:IContextOption)=>void;
  setExtraContext:(option:IParam)=>void;
  setTagsContext:(tagsContext?:IParam)=>void;
  lastEventId:()=>string;
  showReportDialog:()=>void;
  captureMessage:(message:string,option?:IMessageOption)=>void;
}

//定义全局的__DEV__
declare const __DEV__: boolean;

declare const WxLogin:any;

declare const SockJS:any;

declare const Raven:IRaven;

declare const Stomp:any;