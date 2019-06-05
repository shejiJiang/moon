/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/6/5
 **/

import * as jsf from 'json-schema-faker';

//参考文档:
//https://json-schema-faker.js.org/#gist/d9e27543d84157c1672f87e93ac250cc
//https://github.com/json-schema-faker/json-schema-faker/tree/master/docs


jsf.option('alwaysFakeOptionals',true);
jsf.option('ignoreMissingRefs',true);
jsf.option('failOnInvalidTypes',false);
jsf.option('failOnInvalidFormat',false);

/**
 示例数据:
 {
    "type": "object",
    "properties": {
      "user": {
        "type": "object",
        "properties": {
          "id": {
            "$ref": "#/definitions/positiveInt"
          },
          "name": {
            "type": "string",
            "faker": "name.findName"
          },
          "birthday": {
            "type": "string",
            "chance": {
              "birthday": {
                "string": true
              }
            }
          },
          "email": {
            "type": "string",
            "format": "email",
            "faker": "internet.email"
          }
        },
        "required": [
          "id",
          "name",
          "birthday",
          "email"
        ]
      }
    },
    "required": [
      "user"
    ],
    "definitions": {
      "positiveInt": {
        "type": "integer",
        "minimum": 0,
        "minimumExclusive": true
      }
    }
  }
 * @param jsonSchema
 * @param {{}} definitions
 */
export function genrateFakeData(jsonSchema:any,definitions={}):object{
  //避免循环引用; jsonSchema 出现在 definitions 中的情况;
  return jsf.generate({...jsonSchema,definitions});
}