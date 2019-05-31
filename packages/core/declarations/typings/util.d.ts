/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/5/31
 **/
import {IFileSaveOptions} from "../page/old/taro-redux/redux-taro";
import {SchemaProps} from "./api";

interface IHandlePageParam {
  saveFilePath: string;
}

export interface IFileSaveOpt {
  beforeSave?: (options: IFileSaveOptions, context: any) => Promise<IFileSaveOptions>;
  afterSave?: (options: IFileSaveOptions, context: any) => Promise<void>;
}

export interface IHandleFile {
  outDir: string;
  tplBase: string;
  context: IFileSaveOpt;
  prettiesConfig?: object;
}

export interface IInsertOption {
  mark: string;
  isBefore: boolean;
  content: string;
  /**
   *
   * @param content
   * @returns {boolean}   验证是否需要做 true  继续,false 中断
   */
  check: (content, rawContent) => boolean;
}

interface IJsonTsGenResult extends ITsGenResult {
  typeName: string;
  tsContent: string;
  schema: SchemaProps;
}

interface ITsGenResult {
  typeName: string;
  tsContent: string
}