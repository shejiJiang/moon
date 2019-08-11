/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/5/31
 **/
export interface IMoonConfig{
  type:TargetType;
  ui?: boolean;
  moduleId?: string;
  swaggerApi: string;
  api: {
    swaggerUrl: string;
    dir:string;
    exclude?: string[];
    include?: string[];
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
