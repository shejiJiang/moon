/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/3/26
 **/
import { IWebApiContext } from "../../typings/api";
/**
 * 生成webapi相关
 *
 * @param {{webapiGroup: IWebApiGroup; projectPath: string}} param
 * @returns {Promise<void>}
 */
export declare function buildWebApi(context: IWebApiContext): Promise<void>;
