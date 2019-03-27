/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/3/26
 **/
import {join, parse} from "path";
import * as fse from "fs-extra";

interface IHandlePageParam {
  saveFilePath: string;
}




export interface IHandleFile{
  outDir: string;
  tplBase:string;
}


/**
 * 获取处理页面内容;;
 * 处理文件 的公共逻辑; 从模板中取出内容,渲染出来, 然后保存;
 * @param {string} outDir 输出文件目录
 * @param {string} tplDir 模板文件目录
 *
 * @returns {(filePath: string, dealCal: (tplContent: string) => Promise<string>, param?: IHandlePageParam) => Promise<void>}
 */
export function getHandleFile({outDir,tplBase}:IHandleFile) {
  return async function handlePage(
    tplPath: string,
    dealCal: (tplContent: string) => Promise<string>,
    param?: IHandlePageParam,
  ) {
    let _param = {saveFilePath: tplPath.replace('.tpl', ''), ...param};
    let _tplFilePath = join(tplBase, tplPath);

    let _tplContent = await fse.readFile(_tplFilePath);
    console.log('开始处理模板: ', _tplFilePath);
    let content = await dealCal(_tplContent.toString());
    await fse.ensureDir(join(outDir, parse(_param.saveFilePath).dir));
    await fse.writeFile(join(outDir, _param.saveFilePath), content);
  };
}