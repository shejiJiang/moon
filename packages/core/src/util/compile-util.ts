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
import {IFileSaveOptions} from "../page/old/taro-redux/redux-taro";
import {IHandleFile, IHandlePageParam, IInsertOption} from "../typings/util";
import debug from  'debug';

const log  = debug('moon:core:compile-util');
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
  //TODO 格式化的操作提取出去.
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
    let _param = {saveFilePath: tplPath.replace('.tpl', '').replace('.ejs', ''), ...param};
    let _tplFilePath = join(tplBase, tplPath);

    let _tplContent = await fse.readFile(_tplFilePath);
    log('开始处理模板: ', _tplFilePath);
    let content = await dealCal(_tplContent.toString());

    let saveOptions:IFileSaveOptions = {
      projectOutDir:"",
      tplPath,
      toSaveFilePath:join(outDir, _param.saveFilePath),
      param,
      content
    };


    //自定义前后都格式化下.避免多种判断问题...
    try {
      saveOptions.content = prettier.format(saveOptions.content, prettiesConfig);
    } catch (err) {
      if(tplPath.endsWith(".ts.ejs")) {
         console.warn(err);
      }
    }


    if(context.beforeSave) {
      saveOptions= await context.beforeSave(saveOptions,context);
    }

    await fse.ensureDir(parse(saveOptions.toSaveFilePath).dir);

    try {
      saveOptions.content = prettier.format(saveOptions.content, prettiesConfig);
    } catch (err) {}
    log('output filePath: ', saveOptions.toSaveFilePath);
    fse.writeFileSync(saveOptions.toSaveFilePath, saveOptions.content);
    if(context.afterSave) {
      await  context.afterSave(saveOptions,context);
    }
  };
}

/**
 * 向内容中间插入数据;
 *
 * @param {string} rawContent
 * @param {IInsertOption[]} inserts
 * @returns {string}
 */
export function insertContent(rawContent:string,inserts: IInsertOption[]) {

  let content  = rawContent;
  for (let i = 0, ilen = inserts.length; i < ilen; i++) {
    let item: IInsertOption = inserts[i];
    if (item.check(content, rawContent)) {
      let index = content.indexOf(item.mark);
      if (!item.isBefore) {
        index = index + item.mark.length;
      }
      content = `${content.substring(0, index)}
    ${item.content} 
    ${content.substring(index)}`;
    }
  }
  return content;
}


/**
 *
 * 向文件内容中间插入数据; 插入后再保存数据;
 * @param {string} filepath
 * @param {IInsertOption[]} inserts
 * @returns {Promise<void>}
 */
export async function insertFile(
  filepath: string,
  inserts: IInsertOption[],
) {
  let rawContent = await readFile(filepath);
  let content = insertContent(rawContent,inserts);
  await fse.writeFile(filepath, content);
}

async function readFile(filePath: string): Promise<string> {
  let _tplContent = await fse.readFile(filePath);
  return _tplContent.toString();
}
