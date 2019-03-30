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
  //TODO action 关联dispatch
  //TODO 命名冲突 的问题 ..  actor名字, props名字会冲突;

  //TODO input 关键字处理..
  //TODO 参数关联一个ts定义的集合..

  let toGenPage=[
    // 'login','register'
    // 'balance/wallet-charge',
    'balance/scan-pay',
    // 'balance/wallet-qrcode',
    // 'balance/wallet-withdraw',
    // 'balance/personal-check',
    // 'balance/pay-password',
    // 'balance/bankcard-add',
    // 'balance/bankcard-info',
  ];

  for(let _key in db){
    if(toGenPage.includes(_key)){
      let pageInfo: IPageDefined = db[_key];
      //TODO buildPage前要较下内容是不是重复了.
      await buildPage({
        projectPath:"/Users/dong/extraIn/RHourseO2O/",
        pageInfo
      });
    }
  }

})()