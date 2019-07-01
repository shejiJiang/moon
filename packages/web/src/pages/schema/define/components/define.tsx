import * as React from 'react';
import {Menu, Dropdown, Icon, Input} from 'antd';
import * as T from '../types';
import './define.less';
import actions from '../actions/index';
import {connect} from 'react-redux';
import {store2Props} from '../selectors';
import PropsChoose from "./props-choose";
import action from "./props-def/action-props";
type IDefineProps = T.IProps & T.IDefineProps;


@connect(store2Props, actions)
export default class Define extends React.Component<
  Partial<IDefineProps>,
  T.IDefineState
> {
  constructor(props: IDefineProps) {
    super(props);
    this.state = {
      visible: false,
      propsType: '',
      schemaProps: {},
    };
  }

  /**
   *
   *
   */
  render() {
    let {actions: {action}, main} = this.props;


    return (
      <div className="define">
        <Input
          addonBefore="code:"
          value={main.schemaInfo.code}
          data-paths={'main.schemaInfo.code'}
          onChange={action.commonChange}
        />
        <Input
          addonBefore="name:"
          value={main.schemaInfo.name}
          data-paths={'main.schemaInfo.name'}
          onChange={action.commonChange}
        />
        <Input
          addonBefore="详细详述:"
          value={main.schemaInfo.descHref}
          data-paths={'main.schemaInfo.descHref'}
          onChange={action.commonChange}
        />
        <Input
          addonBefore="简图:"
          value={main.schemaInfo.pic}
          data-paths={'main.schemaInfo.pic'}
          onChange={action.commonChange}
        />
        <Input
          addonBefore="target:"
          placeholder={'eg: /h5-redux/  (正则: ${targetType}-${项目名})'}
          value={main.schemaInfo.target}
          data-paths={'main.schemaInfo.target'}
          onChange={action.commonChange}
        />
        <PropsChoose onOk={(param)=>{
          action.commonChange('main.schemaProps', {
            ...main.schemaProps,
            [param.code]:param,
          });

        }}></PropsChoose>
      </div>
    );
  }

}
