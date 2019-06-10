import * as fse from "fs-extra";
import {genrateFakeData,cancelCircularRef} from "../fake-gen";
import {join} from "path";


import * as jsf from 'json-schema-faker';
import * as $RefParser from 'json-schema-ref-parser';


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
  // let apiSchema  =  fse.readJSONSync(join(__dirname,'mock-errCompanyInfoController-update.json'));
  let apiSchema  =  fse.readJSONSync(join(__dirname,'simple-circularref.json'));
  // let targetResponse= {...apiSchema.definitions['BaseResponse«BusinessConfigRopResponse»']};

  let definitions = apiSchema.definitions;
  delete apiSchema.definitions;

  cancelCircularRef(apiSchema,definitions);

  console.log(JSON.stringify(apiSchema,null,2))

  let result = await genrateFakeData(apiSchema,definitions);
  console.log(JSON.stringify(result,null,2));

  //
  // var parser = new $RefParser();
  // let schema = await parser.dereference(apiSchema,{dereference:{circular:"ignore"}});
  //
  // console.log(JSON.stringify(schema,null,2));
  // console.log(parser.$refs['_root$Ref']);
  // fse.writeFileSync(join(__dirname,'mock-errCompanyInfoController-update-Ok.json'),JSON.stringify(schema,null,2));
  // let result =  await jsf.resolve(apiSchema);

  // console.log(result);
  //
  //
  // targetResponse.definitions =apiSchema.definitions;
  // console.log(JSON.stringify(targetResponse,null,2));
  //
  //
  // fse.writeFileSync(join(__dirname,'api.result.json'),JSON.stringify(genrateFakeData(targetResponse,apiSchema.definitions), null, 2))

})();