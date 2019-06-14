/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/5/31
 **/
export interface IMoonConfig{
  // @deprecate 请使用api.swaggerUrl 代替
  target:TargetType;
  swaggerApi: string;
  api: {
    swaggerUrl: string;
    dir:string;
    exclude: string[];
    mock:{
      ignoreApi:{
        [controller: string]: string[];
      };
      mockApi: {
        [controller: string]: string[];
      };
    }
  };
}


export type TargetType="h5-redux"|"taro-redux";