/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/3/27
 **/
import { IWebApiContext } from "../typings/api";
import { IJsonTsGenResult, ITsGenResult } from "../typings/util";
/**
 * 将json转换为ts定义
 *
 * @param value
 * @returns {any}
 */
export declare function genTsFromJSON(name: string, value: any, context?: IWebApiContext): Promise<IJsonTsGenResult>;
/**
 * 将json schema 转换为ts定义
 *
 * @param {string} name
 * @param jsonSchema
 * @returns {Promise<string>}
 */
export declare function genTsFromSchema(name: string, jsonSchema: any, context?: IWebApiContext): Promise<ITsGenResult>;
export declare function genTsFromDefines(definitions: {
    definitions: {
        [key: string]: any;
    };
}, name?: string): Promise<string>;
