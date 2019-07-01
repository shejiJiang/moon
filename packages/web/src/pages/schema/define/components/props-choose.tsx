/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/7/1
 **/

import  * as React from 'react';
import {Menu, Dropdown, Icon, Input} from 'antd';
import PropsDefDialog from './props-def/props-def-dialog';
import {getChooseableComp} from "./props-util";

interface IPropsChooseP{
  onOk: (param: any) => void;
  [name:string]:any;
}

interface IPropsChooseS{
  propsType:string;
  [name:string]:any;
}


/**
 * 选择一个属性构造内容;
 */
export default class PropsChoose extends React.Component<IPropsChooseP,IPropsChooseS> {
  static defaultProps = {

  };
 
  constructor(props){
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }
  
  render() {
    const menu = (
      <Menu onClick={this._handleMenuClick}>
        {
          getChooseableComp().map(item=> <Menu.Item key={item}>{item}</Menu.Item>)
        }
      </Menu>
    );

    return (
      <>
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
              this.props.onOk(param);
            }}
          />
        </div>
      </>
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

 