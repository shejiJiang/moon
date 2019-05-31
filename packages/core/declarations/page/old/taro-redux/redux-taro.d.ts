import { IPageDefined } from "../../../typings/page";
import { IFileSaveOpt } from "../../../typings/util";
export declare function generate(context: IContext): Promise<void>;
export interface IFileSaveOptions {
    projectOutDir: string;
    tplPath: string;
    toSaveFilePath: string;
    content: string;
}
/**
 *
 * @param {string} filePath
 * @param {(tplContent: string) => Promise<string>} dealCal
 * @returns {Promise<void>}
 */
export interface IContext extends IFileSaveOpt {
    projectPath: string;
    pageInfo: IPageDefined;
    prettiesConfig?: object;
}
export declare function buildPage(context: IContext): Promise<void>;
