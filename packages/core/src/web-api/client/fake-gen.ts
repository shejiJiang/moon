/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/6/5
 **/

import * as jsf from 'json-schema-faker';
import * as fse from 'fs-extra';

import {join} from "path";


// 1.0 - first, we need a working (and valid) `schema`
const schema = {
  type: 'string',
};

// 1.1 - optionally, you can provide used `refs`
const refs = [
  {
    id: 'Test',
    type: 'boolean',
  }
];

// 1.2 - additionally, you can provide a `cwd` for local references
const cwd = `${__dirname}/schema`;


(async ()=>{

  let apiSchema  =  fse.readJSONSync(join(__dirname,'api.json'));

  let targetResponse= apiSchema.definitions['BaseResponse«BusinessConfigRopResponse»'];
  // let targetResponse= apiSchema.definitions['BusinessConfigRopResponseFake'];

  if(targetResponse.properties){
    let required  = [];
    for (let propertiesKey in targetResponse.properties) {
      required.push(propertiesKey);
    }
    targetResponse.required=required;
  }

  let definitions = {
  };
  targetResponse.definitions = {
    "BusinessConfigRopResponse":apiSchema.definitions['BusinessConfigRopResponse']
  };




  console.log(JSON.stringify(targetResponse,null,2));



  fse.writeFileSync(join(__dirname,'api.result.json'),JSON.stringify(jsf.generate(targetResponse), null, 2))

  // fse.writeFileSync(join(__dirname,'api.result.json'),JSON.stringify(jsf.generate({
  //   "type": "object",
  //   "properties": {
  //     "user": {
  //       "type": "object",
  //       "properties": {
  //         "id": {
  //           "$ref": "#/definitions/positiveInt"
  //         },
  //         "name": {
  //           "type": "string",
  //           "faker": "name.findName"
  //         },
  //         "birthday": {
  //           "type": "string",
  //           "chance": {
  //             "birthday": {
  //               "string": true
  //             }
  //           }
  //         },
  //         "email": {
  //           "type": "string",
  //           "format": "email",
  //           "faker": "internet.email"
  //         }
  //       },
  //       "required": [
  //         "id",
  //         "name",
  //         "birthday",
  //         "email"
  //       ]
  //     }
  //   },
  //   "required": [
  //     "user"
  //   ],
  //   "definitions": {
  //     "positiveInt": {
  //       "type": "integer",
  //       "minimum": 0,
  //       "minimumExclusive": true
  //     }
  //   }
  // }), null, 2))

})();