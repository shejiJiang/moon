import * as React from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import * as T from '../types';
import './define.less';
import actions from '../actions/index';
import {connect} from 'react-redux';
import {store2Props} from '../selectors';
// import CheckboxProps from './props-def/checkbox-props';
import PropsDefDialog from  './props-def/props-def-dialog';
type IDefineProps = T.IProps & T.IDefineProps;

// let PropsMap = {
//   checkbox:CheckboxProps,
// }

@connect(
  store2Props,
  actions
)
export default class Define extends React.Component<
  Partial<IDefineProps>,
  T.IDefineState
> {
  constructor(props: IDefineProps) {
    super(props);
    this.state={
      visible:false,
      propsType:"",
      schemaProps:{}
    }
  }

  /**
   *
   *
   */
  render() {
    let {
      actions: {action},
      main,
    } = this.props;

    const menu = (
      <Menu onClick={this._handleMenuClick}>
        <Menu.Item key="checkbox">添加checkbox</Menu.Item>
      </Menu>
    );

    // let PropsTypeComp = PropsMap[this.state.propsType];

    return (
      <div className="define">
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
          <PropsDefDialog type={this.state.propsType} onOk={(param)=>{
            this.setState({
              propsType:""
            });
            action.commonChange('main.schemaProps',[...main.schemaProps,param])
          }
          }>
          </PropsDefDialog>
        </div>
      </div>
    );
  }

  _handleMenuClick = e => {
    this.setState({ visible: false ,
      propsType:e.key
    });
  };

  _handleVisibleChange = flag => {
    this.setState({ visible: flag });
  };
}
