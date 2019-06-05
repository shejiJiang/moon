import * as fse from "fs-extra";
import {genrateFakeData} from "../fake-gen";
import {join} from "path";


import * as jsf from 'json-schema-faker';


jsf.option('alwaysFakeOptionals',true);
jsf.option('ignoreMissingRefs',true);
jsf.option('failOnInvalidTypes',false);
jsf.option('failOnInvalidFormat',false);

/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/6/5
 **/



(async ()=>{
  let apiSchema  =  fse.readJSONSync(join(__dirname,'mock-errCompanyInfoController.json'));
  // let targetResponse= {...apiSchema.definitions['BaseResponse«BusinessConfigRopResponse»']};
  let result =  await jsf.generate(apiSchema);

  console.log(result);
  //
  //
  // targetResponse.definitions =apiSchema.definitions;
  // console.log(JSON.stringify(targetResponse,null,2));
  //
  //
  // fse.writeFileSync(join(__dirname,'api.result.json'),JSON.stringify(genrateFakeData(targetResponse,apiSchema.definitions), null, 2))

})();