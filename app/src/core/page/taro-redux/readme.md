


## 快捷模式;

### 验证码流程:

### 分页问题:
空页面定义
```json
"balance/login":{
     "title":"XX",
    "pagePath": "balance/login",
    "actors": [
      {
        "fileName": "reducer",
        "datas":[{
          "name":"loginType",
          "value":{}
        }],
        "events": [
          {
            "comment":"事件描述",
            "name": "chageLoginType",
            "param": ""
          }
        ]
      }
    ],
    "actions": [
      {
        "fileName": "action",
        "methods": [
          {
           "comment":"方法描述",
            "name": "chageLoginType",
            "param": ""
          }
        ]
      }
    ],
    "subComps": [
      {
        "fileName": "header",
        "methods": []
      }
    ]
    },
```


### 分页问题.

actor数据
```json
{
    "datas":[
    {
        "name":"request",
        "value":{
                      "start":0,
                      "len":10,
               }
    }
    ],
   "events": [
          {
            "name": "modifyRequest",
            "param": ""
          },
          {
            "name": "queryResult",
            "param": ""
          },
        ]
}
```

actions:
```json
    {
    "methods":[
              {
                "name": "modifySearch",
                "param": ""
              },
              {
                "name": "nextPage",
                "param": ""
              },
              {
                "name": "query",
                "param": ""
              }
            ]
    }
```


tab 切换 码要记录下来.  有通过url带tabindex , 直接显示的
