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



describe('数据库生成', () => {
  it('dbman解析生成实例;', async () => {
    let db = fse.readJsonSync(join(__dirname,"./demo.pdman.json"));
    await generate(db.modules[0].entities[0],{
      modalSavePath:join(__dirname,"temp","com/a/modal/"),
    });

    //TODO 文件夹内容对比
  });
});