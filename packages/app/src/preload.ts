/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/6/2
 **/

import  { ipcRenderer }  from 'electron';
console.log(ipcRenderer.sendSync('synchronous-message', 'ping'));
import {genPage} from  'moon-wanmi/lib/page/pc';
import {join} from "path";
import {IPageDefined} from "moon-core/declarations/typings/page";
import * as fse from 'fs-extra';
ipcRenderer.on('asynchronous-reply', (event, arg) => {
  console.log(arg) // prints "pong"
})
ipcRenderer.send('asynchronous-message', 'ping')


process.once('loaded', () => {

  const _setImmediate = setImmediate;
  const _clearImmediate = clearImmediate;

  global.setImmediate = _setImmediate;
  global.clearImmediate = _clearImmediate;

// the host page will have access to `window.readConfig`,
// but not direct access to `readFileSync`
});

//@ts-ignore
window.readConfig = function () {
  ipcRenderer.send('asynchronous-message', 'ping')
}

//@ts-ignore
window.moon = {
  context:{
    pwd:process.cwd()
  },
  /**
   * 仅保存数据定义;
   *
   * @param {string} projectPath
   * @param {IPageDefined} pageInfo
   * @returns {Promise<void>}
   */
  savePageInfo:async(projectPath:string,pageInfo:IPageDefined)=>{
    let _path = join(projectPath,'page-def/db.json');
    let db  = fse.readJSONSync(_path);
    db[pageInfo.pagePath] = pageInfo;
    fse.writeJsonSync(_path,db);
  },
  /**
   * 生成页面, 并保存显示定义;
   *
   * @param {string} projectPath
   * @param {IPageDefined} pageInfo
   * @returns {Promise<void>}
   */
  generate:async (projectPath:string,pageInfo:IPageDefined)=>{
    //@ts-ignore
    await window.moon.savePageInfo(projectPath,pageInfo);
    genPage({pageInfo,projectPath});
  }
}