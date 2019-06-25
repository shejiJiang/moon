/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/6/24
 **/

import * as ejs from 'ejs';
import {join} from 'path';
import {getHandleFile} from "../../util/compile-util";
import * as stringUitl from '../../util/string-util';

import {Field, Table} from "../../typings/db-rel";
import {IFileSaveOpt} from "../../typings/util";

const Util  = {
  getJavaType:(field:Field):string=>{
    return "string";
  },
  ...stringUitl
}


/**
 * 根据数据库配置信息生成相关的代码;;
 *
 *
 * @returns {Promise<void>}
 */
export async function generate(table:Table,option:{
  modalSavePath: string;
} & IFileSaveOpt) {

  let handlePage = getHandleFile({outDir:join(option.modalSavePath, table.title)
    ,tplBase:join(__dirname,"tpl"),
    context:option
  });

  await handlePage('Modal.java.ejs', async (tplConent: string) => {
    let conent = ejs.render(tplConent, {
      table,
      Util
    });
    return conent;
  },
    {
      saveFilePath: `${table.title}/${table.title}.java`
    });

  await handlePage('ModalRepository.java.ejs', async (tplConent: string) => {
      let conent = ejs.render(tplConent, {
        table,
        Util
      });
      return conent;
    },
    {
      saveFilePath: `${table.title}/${table.title}Repository.java`
    });

  await handlePage('ModalService.java.ejs', async (tplConent: string) => {
      let conent = ejs.render(tplConent, {
        table,
        Util
      });
      return conent;
    },
    {
      saveFilePath: `${table.title}/${table.title}Service.java`
    });
}