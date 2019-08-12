import * as Type from '@/pages/moon/page/typings';
import {IProps} from '@/pages/moon/page/types';
import {InteractConfig} from '@/pages/moon/page/components/features/feature-util';


// 特性相关信息;
export const FeatureInfo = {
  code: 'UI:imgCook',
  name: 'imCook',
  //介绍站点
  descHref:"",
  //示例图片;
  pic:"将imgcook页面信息接入到项目中来",
  target:/taro-redux/
};

//特性需要用户输入数据;
export const InterActData: {
  [key: string]: InteractConfig;
} = {
  "moduleId": {
    "interact": "input",
    "name": "ModuleId",
    "code": "moduleId"
  }
};

//这里正在做...
interface IData {
  [name:string]:any
}

/**
 *
 * */
export async function apply(context: IProps & {data: IData}) {
  let {actions: {action}, main} = context;
  let {targetCompMethod} = context.data;

  // action.commonChange(`main.pageInfo.subComps.${targetCompMethod.compIndex}.methods.${targetCompMethod.methodIndex}.content`
  //   ,main.pageInfo.subComps[targetCompMethod.compIndex].methods[targetCompMethod.methodIndex].content+getContent(context.data.features));

  // await action.componentMethodAdd(targetCompMethod.compIndex,{
  //   name: "",
  //   comment:"",
  //   content:"",
  //   param: ""
  // });
  //
  // await action.actionMethodAdd(0,{
  //   name:"",
  //   comment:"",
  //   content:"",
  //   param:"",
  // });

}