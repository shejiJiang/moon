/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/4/3
 **/

import * as fse from 'fs-extra';
import * as klaw from 'klaw';
import {join} from 'path';

async function readFile(filePath: string): Promise<string> {
  let _tplContent = await fse.readFile(filePath);
  return _tplContent.toString();
}

(async()=>{

  let resultContent  = [];

  // let path  =join(__dirname,);
  let path  ="/Users/dong/extraIn/RHourseO2O/src";
  const filePaths = [] // files, directories, symlinks, etc
  klaw(path)
    .on('data', item => {
      if(item.stats.isFile()) {
        filePaths.push(item.path);
      }
    })
    .on('end', async () => {
      console.dir(filePaths);
      console.log(111);


      for (let i = 0, ilen = filePaths.length; i < ilen; i++) {
        let filePath = filePaths[i];
        let content  = await readFile(filePath);

        let res  = /\/\/TODO([^\n]*)/;

        // console.log(333)
        let results  = res.exec(content);

        if(results){
          // console.log(results);
          resultContent.push(`${results[0]}: in ${filePath}`);
          // for (let j = 0, jlen = results.index; j < jlen; j++) {
          //   // console.log(555);
          // }
        }
      }
      console.log(resultContent.join('\n'));
    })



})();

