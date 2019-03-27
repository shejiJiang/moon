import {IPageDefined} from "./generate";
import {buildPage} from "./redux-taro";
import * as fse from  'fs-extra';
import {join} from "path";

/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/3/20
 **/
(async()=>{

  let db  = await fse.readJSON(join(__dirname,'db.json'));

  let pageInfo: IPageDefined = db['shop-set/shop-position'];
  // pageInfo=db['shop-set/print'];
  //TODO buildPage前要较下内容是不是重复了.
  await buildPage({
    projectPath:"/Users/dong/extraIn/RHourseO2O/",
     pageInfo
  });
})()