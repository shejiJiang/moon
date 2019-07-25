/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/7/25
 **/

import {join} from 'path';
import * as klaw from 'klaw';
import {readFile} from 'fs-extra';

export interface IResult {
  [path: string]: string;
}

export function readDirFiles(dirPath: string): Promise<IResult> {
  return new Promise((resolve, reject) => {
    let allFilePaths: string[] = [];
    klaw(dirPath)
      .on('data', item => {
        if (item.stats.isFile()) {
          allFilePaths.push(item.path);
        }
      })
      .on('end', async () => {
        let result = {};
        console.log(allFilePaths);

        let contents = await Promise.all(
          allFilePaths.map(filePath => readFile(filePath)),
        );
        for (let i = 0, iLen = allFilePaths.length; i < iLen; i++) {
          let fileName = allFilePaths[i].replace(dirPath, '');
          result[fileName] = contents[i].toString();
        }

        resolve(result);
      });
  });
}

(async () => {
 let result = await readDirFiles(join(__dirname, '..'));

 console.log(result);
})();
