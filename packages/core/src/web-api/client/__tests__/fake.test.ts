import * as fse from "fs-extra";
import {genrateFakeData} from "../fake-gen";
import {join} from "path";


import * as jsf from 'json-schema-faker';
import * as $RefParser from 'json-schema-ref-parser';


// jsf.option('alwaysFakeOptionals',true);
// jsf.option('ignoreMissingRefs',true);
// jsf.option('failOnInvalidTypes',false);
// jsf.option('failOnInvalidFormat',false);

/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/6/5
 **/



(async ()=>{
  let apiSchema  =  fse.readJSONSync(join(__dirname,'mock-errCompanyInfoController-update.json'));
  // let targetResponse= {...apiSchema.definitions['BaseResponse«BusinessConfigRopResponse»']};
  let schema = await $RefParser.dereference(apiSchema,{dereference:{circular:true}});

  // fse.writeFileSync(join(__dirname,'mock-errCompanyInfoController-update-Ok.json'),JSON.stringify(schema,null,2));
  let result =  await jsf.generate(schema);

  console.log(result);
  //
  //
  // targetResponse.definitions =apiSchema.definitions;
  // console.log(JSON.stringify(targetResponse,null,2));
  //
  //
  // fse.writeFileSync(join(__dirname,'api.result.json'),JSON.stringify(genrateFakeData(targetResponse,apiSchema.definitions), null, 2))

})();