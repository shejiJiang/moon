


## 快捷模式;


### 分页问题:
空页面定义
```json
"balance/login":{
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
      },
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
