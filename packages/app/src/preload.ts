/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/6/2
 **/

import {ipcRenderer} from 'electron';
console.log(ipcRenderer.sendSync('synchronous-message', 'ping'));
import {genPage} from 'moon-wanmi/lib/page/pc';
import {genTaroPage} from 'moon-wanmi/lib/page/taro';
import {genRnPage} from 'moon-wanmi/lib/page/rn';
import {join} from 'path';
import {IPageDefined} from 'moon-core/declarations/typings/page';
import * as fse from 'fs-extra';
import {IMoonConfig} from 'moon-core/declarations/typings/config';
import imgcook from 'taro-imgcook';
import {ICompData, IParseResult} from 'taro-imgcook/src/typings';

ipcRenderer.on('asynchronous-reply', (event, arg) => {
  console.log(arg); // prints "pong"
});
ipcRenderer.send('asynchronous-message', 'ping');

process.once('loaded', () => {
  const _setImmediate = setImmediate;
  const _clearImmediate = clearImmediate;

  global.setImmediate = _setImmediate;
  global.clearImmediate = _clearImmediate;

  // the host page will have access to `window.readConfig`,
  // but not direct access to `readFileSync`
});

//@ts-ignore
window.readConfig = function() {
  ipcRenderer.send('asynchronous-message', 'ping');
};

let defaulltMoonConfig: IMoonConfig;

let projectPath = process.cwd();
let configFilePath = join(projectPath, '.moon.json');
try {
  console.log('读取项目配置文件', configFilePath);
  if (fse.pathExistsSync(configFilePath)) {
    defaulltMoonConfig = fse.readJSONSync(configFilePath);
  } else {
    throw new Error('配置不存在:' + configFilePath);
  }
} catch (err) {
  throw new Error('配置读取失败:' + configFilePath);
}

let apiIndex = {};

try {
  apiIndex = fse.readJsonSync(
    join(projectPath, defaulltMoonConfig.api.dir, '_api-info.json'),
  );
} catch (err) {
  console.warn('读取api索引出错', err);
}

let pageDb = {};

try {
  pageDb = fse.readJsonSync(join(projectPath, 'page-def/db.json'));
} catch (err) {
  console.warn('读取api索引出错', err);
}

//@ts-ignore
window.moon = {
  context: {
    apiIndex,
    pageDb: pageDb,
    moonConfig: defaulltMoonConfig,
    pwd: process.cwd(),
    projectName:"",// TODO 添加 这个信息;
  },
  /**
   * 仅保存数据定义;
   *
   * @param {string} projectPath
   * @param {IPageDefined} pageInfo
   * @returns {Promise<void>}
   */
  savePageInfo: async (projectPath: string, pageInfo: IPageDefined) => {
    let _path = join(projectPath, 'page-def/db.json');
    let db = fse.readJSONSync(_path);
    db[pageInfo.pagePath] = pageInfo;
    fse.writeJsonSync(_path, db);
  },
  /**
   * 生成页面, 并保存显示定义;
   *
   * @param {string} projectPath
   * @param {IPageDefined} pageInfo
   * @returns {Promise<void>}
   */
  generate: async (projectPath: string, pageInfo: IPageDefined) => {
    //@ts-ignore
    await window.moon.savePageInfo(projectPath, pageInfo);

    if (defaulltMoonConfig.ui) {
      // 填充主页面
      const uiRes: IParseResult = await imgcook({
        moduleId: defaulltMoonConfig.moduleId,
        pagePath: pageInfo.pagePath
      });
      pageInfo.mainComp.methods = [{
        name: 'render',
        param: '',
        content: uiRes.mainComp.vdom,
        style: uiRes.mainComp.style,
        imports: uiRes.mainComp.imports
      }];

      // 填充组件页面
      pageInfo.subComps.forEach((subComp) => {
        const method = subComp.methods.filter(item => item.name == "render")[0];
        // TODO 考虑xx-xx
        const uiComp = uiRes.subComps.find((item: ICompData) => item.componentName === subComp.fileName);
        if (method && uiComp) {
          method.content = uiComp.vdom;
          method.style = uiComp.style;
          method.imports = uiComp.imports;
        }
      });
    }

    if (defaulltMoonConfig.type === 'taro-redux') {
      genTaroPage({pageInfo, projectPath});
    } else if (defaulltMoonConfig.type === 'h5-redux') {
      genPage({pageInfo, projectPath});
    } else if (defaulltMoonConfig.type === 'rn-redux') {
      genRnPage({pageInfo, projectPath});
    }
  },
};
