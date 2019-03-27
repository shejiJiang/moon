/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/3/26
 **/





type JsonSchema=object;

interface IParamShape {
  type:"json"|"string"|"number"|"date";
  name:string;
  comment:string;
  jsonSchema:JsonSchema;
  defaultValue:any;
};


/**
 * 对于接口的定义
 */
interface IWebApiDefinded {
  url:string;
  name:string;
  comment:string;
  requestParam:JsonSchema[];
  responseParam:JsonSchema[];
}


interface IWebApiGroup {
  name:string;
  apis:IWebApiDefinded[];
}


(async()=>{
  let a :IWebApiDefinded = {

  };

  console.log(a);

})();