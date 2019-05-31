/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/4/12
 **/
import { IFileSaveOptions } from "../taro-redux/redux-taro";
import { IPageDefined } from "../../../typings/page";
export interface IContextPlume2 {
    projectPath: string;
    pageInfo: IPageDefined;
    prettiesConfig?: object;
    beforeSave?: (options: IFileSaveOptions, context: IContextPlume2) => Promise<IFileSaveOptions>;
    afterSave?: (options: IFileSaveOptions, context: IContextPlume2) => Promise<void>;
}
