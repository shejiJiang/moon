/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/4/2
 **/

import {genTsFromSchema,genTsFromDefines} from '../json-util';



(async()=>{


 let content  =  await genTsFromDefines({definitions:{
      "BaseResponse«WholeMenuInfoResponse»": {
        "type": "object",
        "required": ["code"],
        "properties": {
          "code": {
            "type": "string",
            "description": "结果码"
          },
          "context": {
            "description": "内容",
            "originalRef": "WholeMenuInfoResponse",
            "$ref": "#/definitions/WholeMenuInfoResponse"
          },
          "message": {
            "type": "string",
            "description": "消息内容"
          }
        },
        "title": "BaseResponse«WholeMenuInfoResponse»"
      },
      "WholeMenuInfoResponse": {
        "type": "object",
        "properties": {
          "functionInfoVOList": {
            "type": "array",
            "description": "功能集合",
            "items": {
              "originalRef": "FunctionInfoVO",
              "$ref": "#/definitions/FunctionInfoVO"
            }
          },
          "menuInfoVOList": {
            "type": "array",
            "description": "菜单集合",
            "items": {
              "originalRef": "MenuInfoVO",
              "$ref": "#/definitions/MenuInfoVO"
            }
          }
        },
        "title": "WholeMenuInfoResponse"
      },
      "FunctionInfoVO": {
        "type": "object",
        "properties": {
          "functionId": {
            "type": "string",
            "description": "Id"
          },
          "functionName": {
            "type": "string",
            "description": "功能名称"
          },
          "functionSort": {
            "type": "integer",
            "format": "int32",
            "description": "排序"
          },
          "functionTitle": {
            "type": "string",
            "description": "功能展示名称"
          },
          "menuId": {
            "type": "string",
            "description": "菜单Id"
          },
          "systemType": {
            "type": "integer",
            "format": "int32",
            "description": "系统类别"
          }
        },
        "title": "FunctionInfoVO"
      },
      "MenuInfoVO": {
        "type": "object",
        "properties": {
          "menuGrade": {
            "type": "integer",
            "format": "int32",
            "description": "菜单级别"
          },
          "menuId": {
            "type": "string",
            "description": "Id"
          },
          "menuName": {
            "type": "string",
            "description": "菜单名"
          },
          "menuSort": {
            "type": "integer",
            "format": "int32",
            "description": "排序"
          },
          "parentMenuId": {
            "type": "string",
            "description": "父菜单Id"
          },
          "systemType": {
            "type": "integer",
            "format": "int32",
            "description": "系统类别"
          }
        },
        "title": "MenuInfoVO"
      }
    }});

 console.log('content:::',content);
  //
  // let result  =await  genTsFromSchema('test',{
  //   "description": "OK",
  //   "schema": {
  //     "type": "object",
  //     "required": ["code"],
  //     "properties": {
  //       "code": {
  //         "type": "string",
  //         "description": "结果码"
  //       },
  //       "context": {
  //         "type": "object",
  //         "properties": {
  //           "actualReturnPrice": {
  //             "type": "number",
  //             "description": "实退金额"
  //           },
  //           "comment": {
  //             "type": "string",
  //             "description": "备注"
  //           },
  //           "createTime": {
  //             "type": "string",
  //             "format": "date-time",
  //             "description": "退单下单时间"
  //           },
  //           "customerAccountName": {
  //             "type": "string",
  //             "description": "客户账号"
  //           },
  //           "customerId": {
  //             "type": "string",
  //             "description": "客户id"
  //           },
  //           "customerName": {
  //             "type": "string",
  //             "description": "客户名称"
  //           },
  //           "offlineAccountId": {
  //             "type": "integer",
  //             "format": "int64",
  //             "description": "线下平台账户"
  //           },
  //           "payChannel": {
  //             "type": "string",
  //             "description": "收款在线渠道"
  //           },
  //           "payChannelId": {
  //             "type": "integer",
  //             "format": "int64",
  //             "description": "收款在线渠道id"
  //           },
  //           "payType": {
  //             "type": "string",
  //             "description": "支付类型\n* ONLINE: 在线支付\n* OFFLINE: 线下支付",
  //             "enum": ["0", "1"]
  //           },
  //           "refundBillCode": {
  //             "type": "string",
  //             "description": "退款流水号"
  //           },
  //           "refundBillTime": {
  //             "type": "string",
  //             "format": "date-time",
  //             "description": "退款时间"
  //           },
  //           "refundId": {
  //             "type": "string",
  //             "description": "退款单id"
  //           },
  //           "refundStatus": {
  //             "type": "string",
  //             "description": "退款单状态\n* TODO: 待退款\n* REFUSE: 拒绝退款\n* FINISH: 已退款\n* APPLY: 供应商申请退款(待平台退款)",
  //             "enum": ["0", "1", "2", "3"]
  //           },
  //           "refuseReason": {
  //             "type": "string",
  //             "description": "拒绝原因"
  //           },
  //           "returnAccount": {
  //             "type": "integer",
  //             "format": "int64",
  //             "description": "退款账户"
  //           },
  //           "returnAccountName": {
  //             "type": "string",
  //             "description": "退款账户"
  //           },
  //           "returnOrderCode": {
  //             "type": "string",
  //             "description": "退单编号"
  //           },
  //           "returnPrice": {
  //             "type": "number",
  //             "description": "应退金额"
  //           },
  //           "supplierName": {
  //             "type": "string",
  //             "description": "供应商名称"
  //           }
  //         },
  //         "title": "RefundOrderResponse"
  //       },
  //       "message": {
  //         "type": "string",
  //         "description": "消息内容"
  //       }
  //     },
  //     "title": "BaseResponse«RefundOrderResponse»"
  //   }
  // }.schema);
  //
  // console.log(result);

})()