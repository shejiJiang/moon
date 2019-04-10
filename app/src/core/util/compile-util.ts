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
import * as prettier from 'prettier';
import {IContext, IFileSaveOptions} from "../page/taro-redux/redux-taro";

interface IHandlePageParam {
  saveFilePath: string;
}

export interface IHandleFile {
  outDir: string;
  tplBase: string;
  context: IContext;
  prettiesConfig?: object;
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
 * @param {string} outDir projectPath 项目根目录
 * @param {string} outDir 输出文件目录
 * @param {string} tplDir 模板文件目录
 *
 * @returns {(filePath: string, dealCal: (tplContent: string) => Promise<string>, param?: IHandlePageParam) => Promise<void>}
 */
export function getHandleFile({
  outDir,
  tplBase,
  context,
  prettiesConfig = {},
}: IHandleFile) {
  prettiesConfig = {
    semi: true,
    bracketSpacing: false,
    singleQuote: true,
    trailingComma: 'all',
    parser: 'typescript',
    ...prettiesConfig,
  };

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

    let saveOptions:IFileSaveOptions = {
      projectOutDir:"",
      toSaveFilePath:_param.saveFilePath
    };

    if(context.beforeSave) {
      saveOptions= await context.beforeSave(saveOptions,context);
    }

    await fse.ensureDir(join(outDir, parse(saveOptions.toSaveFilePath).dir));

    try {
      //TODO 最好的方法是, 判断后缀决定是否格式化;
      content = prettier.format(content, prettiesConfig);
    } catch (err) {}

    let outputFilePath = join(outDir, saveOptions.toSaveFilePath);
    console.log('output filePath: ', outputFilePath);
    await fse.writeFile(outputFilePath, content);
    if(context.afterSave) {
      await   context.afterSave(saveOptions,context);
    }
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
