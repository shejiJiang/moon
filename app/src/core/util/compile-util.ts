/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/3/26
 **/
import {join, parse} from 'path';
import * as fse from 'fs-extra';

interface IHandlePageParam {
  saveFilePath: string;
}

export interface IHandleFile {
  outDir: string;
  tplBase: string;
}

interface IInsertOption {
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

/**
 * 获取处理页面内容;;
 * 处理文件 的公共逻辑; 从模板中取出内容,渲染出来, 然后保存;
 * @param {string} outDir 输出文件目录
 * @param {string} tplDir 模板文件目录
 *
 * @returns {(filePath: string, dealCal: (tplContent: string) => Promise<string>, param?: IHandlePageParam) => Promise<void>}
 */
export function getHandleFile({outDir, tplBase}: IHandleFile) {
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

export async function insertContent(
  filepath: string,
  inserts: IInsertOption[],
) {
  let rawContent = await readFile(filepath);
  let content = rawContent;
  for (let i = 0, ilen = inserts.length; i < ilen; i++) {
    let item: IInsertOption = inserts[i];
    if (item.check(content, rawContent)) {
      let index = content.indexOf(item.mark);

      if (!item.isBefore) {
        index = index + item.mark.length;
      }

      content = `${content.substring(0, index)}
    ${item.content} 
    ${content.substring(index)}
    `;
    }
  }

  await fse.writeFile(filepath, content);
}

async function readFile(filePath: string): Promise<string> {
  let _tplContent = await fse.readFile(filePath);
  return _tplContent.toString();
}
