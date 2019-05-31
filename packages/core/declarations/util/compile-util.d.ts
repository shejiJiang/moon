import { IHandleFile, IHandlePageParam, IInsertOption } from "../typings/util";
/**
 * 获取处理页面内容;;
 * 处理文件 的公共逻辑; 从模板中取出内容,渲染出来, 然后保存;
 * @param {string} outDir projectPath 项目根目录
 * @param {string} outDir 输出文件目录
 * @param {string} tplDir 模板文件目录
 *
 * @returns {(filePath: string, dealCal: (tplContent: string) => Promise<string>, param?: IHandlePageParam) => Promise<void>}
 */
export declare function getHandleFile({ outDir, tplBase, context, prettiesConfig, }: IHandleFile): (tplPath: string, dealCal: (tplContent: string) => Promise<string>, param?: IHandlePageParam) => Promise<void>;
/**
 * 向内容中间插入数据;
 *
 * @param {string} rawContent
 * @param {IInsertOption[]} inserts
 * @returns {string}
 */
export declare function insertContent(rawContent: string, inserts: IInsertOption[]): string;
/**
 *
 * 向文件内容中间插入数据; 插入后再保存数据;
 * @param {string} filepath
 * @param {IInsertOption[]} inserts
 * @returns {Promise<void>}
 */
export declare function insertFile(filepath: string, inserts: IInsertOption[]): Promise<void>;
