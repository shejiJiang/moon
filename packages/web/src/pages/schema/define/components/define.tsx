import * as React from 'react';
import {Menu, Dropdown, Icon, Input} from 'antd';
import * as T from '../types';
import './define.less';
import actions from '../actions/index';
import {connect} from 'react-redux';
import {store2Props} from '../selectors';
import PropsDefDialog from './props-def/props-def-dialog';
import actionMethod from "./props-def/action-method-props";
import compMethod from "./props-def/comp-method-props";
import checkbox from "./props-def/checkbox-props";
import actor from "./props-def/actor-props";
import apiMethodType from "./props-def/api-method-type-props";
import action from "./props-def/action-props";
import actorData from "./props-def/actor-data-props";
import input from "./props-def/input-props";
import radio from "./props-def/radio-props";
import comp from "./props-def/comp-props";
import boolean from "./props-def/boolean-props";
import actorEvent from "./props-def/actor-event-props";
import apiMethod from "./props-def/api-method-props";
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

    const menu = (
      <Menu onClick={this._handleMenuClick}>
        <Menu.Item key="checkbox">checkbox</Menu.Item>
        <Menu.Item key="boolean">boolean</Menu.Item>
        <Menu.Item key="radio">radio</Menu.Item>
        <Menu.Item key="input">input</Menu.Item>
        <Menu.Item key="action">action</Menu.Item>
        <Menu.Item key="actionMethod">actionMethod</Menu.Item>
        <Menu.Item key="actor">actor</Menu.Item>
        <Menu.Item key="actorEvent">actorEvent</Menu.Item>
        <Menu.Item key="actorData">actorData</Menu.Item>
        <Menu.Item key="comp">comp</Menu.Item>
        <Menu.Item key="compMethod">compMethod</Menu.Item>
        <Menu.Item key="apiMethod">apiMethod</Menu.Item>
        <Menu.Item key="apiMethodType">apiMethodType</Menu.Item>
      </Menu>
    );

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

        <Dropdown
          overlay={menu}
          onVisibleChange={this._handleVisibleChange}
          visible={this.state.visible}
        >
          <a className="ant-dropdown-link" href="javascript:void(0)">
            选择添加属性类型
          </a>
        </Dropdown>
        <div>
          <PropsDefDialog
            type={this.state.propsType}
            onOk={param => {
              this.setState({
                propsType: '',
              });
              action.commonChange('main.schemaProps', {
                ...main.schemaProps,
                [param.code]:param,
              });
            }}
          />
        </div>
      </div>
    );
  }

  _handleMenuClick = e => {
    this.setState({
      visible: false,
      propsType: e.key,
    });
  };

  _handleVisibleChange = flag => {
    this.setState({visible: flag});
  };
}
