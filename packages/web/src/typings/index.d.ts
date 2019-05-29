/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/3/5
 **/

export interface AsyncResult<T> {
  res: T;
  err: Error | string;
  status?: any;
  message?: any;
}

export interface IPageReq{
  pageNum?:number;
  pageSize?:number;
}

export interface IEsRes<T>{
  total:number;
  root:T[];
}
