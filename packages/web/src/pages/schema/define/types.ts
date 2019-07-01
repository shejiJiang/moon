import Actions from './actions';

export interface IMainReducer {
  isReady: boolean;
  isLoading?: boolean;

  features: IMainFeaturesSet;
}

export type ActionType = ReturnType<typeof Actions>;
export type IAllReducerProps = {
  main: IMainReducer;

  [name: string]: any;
};

//默认是全部的属性,可以自定义
export type IProps = IAllReducerProps & ActionType;

export type IDefineProps = {};
export type IDefineState = {
  propsType:string;
  schemaProps:object;
};

export type IResultProps = {};
export type IResultState = {};

export type IMainFeaturesSet = IMainFeatures[];

export interface IMainFeatures {
  [k: string]: any;
}
