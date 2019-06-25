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
  let handlePage = getHandleFile({
    outDir:option.modalSavePath
    ,tplBase:join(__dirname,"tpl"),
    context:option
  });

  let base = {
    modalUCamelName: Util.toUCamelize(table.title) ,
    modalLCamelName: Util.toLCamelize(table.title) ,
    packagePath:getPackageName(join(option.modalSavePath,table.title)),
    Util,
  }

  await handlePage('Modal.java.ejs', async (tplConent: string) => {
    let conent = ejs.render(tplConent, {
      table,
      ...base
    });
    return conent;
  },
    {
      saveFilePath: `${table.title}/${table.title}.java`
    });

  await handlePage('ModalRepository.java.ejs', async (tplConent: string) => {
      let conent = ejs.render(tplConent, {
        table,
        ...base
      });
      return conent;
    },
    {
      saveFilePath: `${table.title}/${table.title}Repository.java`
    });

  await handlePage('ModalService.java.ejs', async (tplConent: string) => {
      let conent = ejs.render(tplConent, {
        table,
        ...base
      });
      return conent;
    },
    {
      saveFilePath: `${table.title}/${table.title}Service.java`
    });
}


/**
 *  a/b/com/a/t/b => com.a.t.b
 * @param {string} filePath
 * @returns {string}
 */
function getPackageName(filePath:string) {
  let packageStr = filePath;
  let begIndex=filePath.indexOf("com");
  if(begIndex>0) {
   return packageStr.substring(begIndex).replace(/\//ig,".");
  }else{
    console.warn(`从路径${filePath}中提取PackageName失败`);
    return "";
  }
}