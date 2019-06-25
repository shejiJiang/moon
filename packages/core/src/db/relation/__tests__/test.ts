/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/6/25
 **/


import * as fse from 'fs-extra';
import {join} from 'path';
import {generate} from "../index";

(async ()=>{
  let db = fse.readJsonSync(join(__dirname,"./demo.pdman.json"));
  console.log(db);
  await generate(db.modules[0].entities[0],{
    modalSavePath:join(__dirname,"temp"),
  });
})();