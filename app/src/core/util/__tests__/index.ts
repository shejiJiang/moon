/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/4/2
 **/

import {genTsFromSchema} from '../json-util';



(async()=>{


  let result  =await  genTsFromSchema('test',{
    "description": "OK",
    "schema": {
      "type": "object",
      "required": ["code"],
      "properties": {
        "code": {
          "type": "string",
          "description": "结果码"
        },
        "context": {
          "type": "object",
          "properties": {
            "actualReturnPrice": {
              "type": "number",
              "description": "实退金额"
            },
            "comment": {
              "type": "string",
              "description": "备注"
            },
            "createTime": {
              "type": "string",
              "format": "date-time",
              "description": "退单下单时间"
            },
            "customerAccountName": {
              "type": "string",
              "description": "客户账号"
            },
            "customerId": {
              "type": "string",
              "description": "客户id"
            },
            "customerName": {
              "type": "string",
              "description": "客户名称"
            },
            "offlineAccountId": {
              "type": "integer",
              "format": "int64",
              "description": "线下平台账户"
            },
            "payChannel": {
              "type": "string",
              "description": "收款在线渠道"
            },
            "payChannelId": {
              "type": "integer",
              "format": "int64",
              "description": "收款在线渠道id"
            },
            "payType": {
              "type": "string",
              "description": "支付类型\n* ONLINE: 在线支付\n* OFFLINE: 线下支付",
              "enum": ["0", "1"]
            },
            "refundBillCode": {
              "type": "string",
              "description": "退款流水号"
            },
            "refundBillTime": {
              "type": "string",
              "format": "date-time",
              "description": "退款时间"
            },
            "refundId": {
              "type": "string",
              "description": "退款单id"
            },
            "refundStatus": {
              "type": "string",
              "description": "退款单状态\n* TODO: 待退款\n* REFUSE: 拒绝退款\n* FINISH: 已退款\n* APPLY: 供应商申请退款(待平台退款)",
              "enum": ["0", "1", "2", "3"]
            },
            "refuseReason": {
              "type": "string",
              "description": "拒绝原因"
            },
            "returnAccount": {
              "type": "integer",
              "format": "int64",
              "description": "退款账户"
            },
            "returnAccountName": {
              "type": "string",
              "description": "退款账户"
            },
            "returnOrderCode": {
              "type": "string",
              "description": "退单编号"
            },
            "returnPrice": {
              "type": "number",
              "description": "应退金额"
            },
            "supplierName": {
              "type": "string",
              "description": "供应商名称"
            }
          },
          "title": "RefundOrderResponse"
        },
        "message": {
          "type": "string",
          "description": "消息内容"
        }
      },
      "title": "BaseResponse«RefundOrderResponse»"
    }
  }.schema);

  console.log(result);

})()