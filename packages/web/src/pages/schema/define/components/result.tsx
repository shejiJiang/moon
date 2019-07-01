import * as React from 'react';

import * as T from '../types';
import './result.less';
import actions from '../actions/index';
import {connect} from 'react-redux';
import {store2Props} from '../selectors';
import {Input} from  'antd';

type IResultProps = T.IProps & T.IResultProps;

@connect<Partial<IResultProps>,any>(
  store2Props,
  actions
)
export default class Result extends React.Component<
  Partial<IResultProps>,
  T.IResultState
> {
  constructor(props: IResultProps) {
    super(props);
  }

  /**
    
*/
  render() {
    let {
      actions: {action},
      main,
    } = this.props;

    return (
      <div className="result">
        <Input.TextArea disabled value={this.getContent()} autosize={true} />
      </div>
    );
  }

  getContent =()=>{

    let {
      main,
    } = this.props;



    return `
import * as Type from '@/pages/moon/page/typings';
import {IProps} from '@/pages/moon/page/types';
import {InteractConfig} from '@/pages/moon/page/components/features/feature-util';

// 特性相关信息;
export const FeatureInfo = {
  code: '${main.schemaInfo.code}',
  name: '${main.schemaInfo.name}',
  //介绍站点
  descHref:"${main.schemaInfo.pic}",
  //示例图片;
  pic:"${main.schemaInfo.descHref}",
  target:${main.schemaInfo.target}
};

//特性需要用户输入数据;
export const InterActData: {
  [key: string]: InteractConfig;
} = ${transferConfig2CodeStr(main.schemaProps)};

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
  
  // action.commonChange(\`main.pageInfo.subComps.\${targetCompMethod.compIndex}.methods.\${targetCompMethod.methodIndex}.content\`
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

}`
  }
}

function transferConfig2CodeStr(config):string {

  //把type的处理添加起来...
  let result:string = JSON.stringify(config,null,2);
  // return result.replace(//ig,"")
  return result;
}