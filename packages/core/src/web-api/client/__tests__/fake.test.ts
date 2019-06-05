import * as fse from "fs-extra";
import {genrateFakeData} from "../fake-gen";
import {join} from "path";

/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/6/5
 **/



(async ()=>{
  let apiSchema  =  fse.readJSONSync(join(__dirname,'api.json'));
  let targetResponse= {...apiSchema.definitions['BaseResponse«BusinessConfigRopResponse»']};


  targetResponse.definitions =apiSchema.definitions;
  console.log(JSON.stringify(targetResponse,null,2));


  fse.writeFileSync(join(__dirname,'api.result.json'),JSON.stringify(genrateFakeData(targetResponse,apiSchema.definitions), null, 2))

})();