# moon
代号月球, 做一些辅助工作,  (月球)

## 发布
lerna publish

## TODO

- [x] api自动生成;
- [ ] 可视化操作生成页面结构;
- [ ] 把electron调起来;
- [ ] 页面单元概念;
- [ ] 服务端项目起一个出来;
- [ ] 可视化生成布局信息代码;
- [ ] 服务化功能组件使用;
    - [ ]建站;
    - [ ]用户管理;

##应用场景

### 场景1: api自动生成;
根据yapi  swagger中api的定义生成客户端可以调用的api,并且把mock数据等流程嵌入进来;

eg:
swagger中api定义如下.
![](./doc/images/swagger-api.png);

经过moon工具生成代码结构如下:
```shell
.
├── AuthorizeController.ts
├── CouponCodeBaseController.ts
├── CouponInfoController.ts
├── CustomerBaseController.ts
├── PetCouponInfoController.ts
├── StoreCustomerController.ts
├── _api-info.json
├── fetch.ts
├── index.ts
├── mock
│   ├── AuthorizeController.json
│   ├── CouponCodeBaseController.json
│   ├── CouponInfoController.json
│   ├── CustomerBaseController.json
│   ├── PetCouponInfoController.json
│   └── StoreCustomerController.json
└── mock-util.ts

```

对应单个controller如下图所示,

![](./doc/images/api-example.png);


#### 总结

    moon中api生成工具可以代替人力出色生成调用代码,不但包括mock数据,bean对应的ts结构,还包括备注信息;而且日后的同步工作也省了;


## 场景1: 生成taro页面skeleton

参考代码:/Users/dong/Falcon/moon/app/src/core/page/taro-redux/index.ts

## 场景3: 定义modal,自动生成服务端, 及客户端代码;


## 开发流程

1. 按页面类型来做页面. 列表 表单, 展示;

2.


## 相关资料;

[模式定义及添加](./模式定义及添加.md);
## FAQ

### api生成相关问题

#### 生成的api是否可以跨端适用(RN H5 小程序)?
   可以的,我们生成的代码只是定义了入参及出参, 而发送http请求时,是用的外部的方法.如下图的例子;

   ```typescript
   import * as sdk from './fetch';

   import isMock from './mock-util';
   const controllerName = 'AuthorizeController';

   /**
    *
    * 授权登录
    *
    */
   async function authorize(
     wechatAuthRequest: IAuthorizeWechatAuthRequestReq,
   ): Promise<ThirdLoginResponse> {
     if (__DEV__) {
       if (isMock('AuthorizeController', 'authorize')) {
         return Promise.resolve(
           require('./mock/AuthorizeController.json').ThirdLoginResponse || {},
         );
       }
     }

     let result = await sdk.post<ThirdLoginResponse>(
       '/pet/authorize/authorize',

       {
         ...wechatAuthRequest,
       },
     );
     return result.context;
   }



   ```


   sdk 实现了标准的get post 待http方法接口, 所以相关的token信息, 包括请求拦截可以放在fetch中;
   不周平台的请求在fetch.ts文件中实现即可..

   我们没有用一套方法适配多端, 而是分离开来, 这样更具灵活性;


#### 调用http权限认证信息eg:JWT,如何添加到http请求中?
可以参见上个例子. 在fetch.ts中实现;


### 页面生成相关问题