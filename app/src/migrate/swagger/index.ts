/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/4/2
 **/

import * as request from 'request';
import  * as fse  from 'fs-extra';
import {join} from 'path';

function loadJson() {

  return new Promise((resolve,reject)=>{

    request("http://118.31.238.229:8390/v2/api-docs",function (error, response, body) {

      if(error){
        reject(error);
      }else{
        resolve(JSON.parse(body));
      }
      //
      // console.log('error:', error); // Print the error if one occurred
      // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      // console.log('body:', body); // Print the HTML for the Google homepage.
    });
  });

}


(async()=>{

  let apiJson  = await loadJson();

  console.log(apiJson);

  await fse.writeJSON(join(__dirname,"api.json"), apiJson);

})();