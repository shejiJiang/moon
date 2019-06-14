import * as React from 'react';
import {Link, Route} from 'react-router-dom';

import * as T from '../types';
import './left-menu.less';
import actions from '../actions/index';
import {connect} from 'react-redux';
import {store2Props} from '../selectors';
import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Sider } = Layout;

type ILeftMenuProps = T.IProps & T.ILeftMenuProps;

@connect(
  store2Props,
  actions
)
class LeftMenu extends React.Component<ILeftMenuProps, T.ILeftMenuState> {
  constructor(props: ILeftMenuProps) {
    super(props);
    this.state={
      activeIndex:0
    }
  }

  render() {
    let {menuList} =  this.props.main;

    let lv2Menu =(menuList[this.state.activeIndex].sub||[]).map((subMenu,index)=>{
      return  (
          <SubMenu
            key={'001'+index}
            title={
              <div className="leftNavItem">
                <span>{subMenu.menuName}</span>
              </div>
            }
          >
            {
              (subMenu.sub||[]).map((item,index)=><Menu.Item key={index}>
                <Link to={item.url}>{item.menuName}</Link>
              </Menu.Item>)
            }
          </SubMenu>
      )
    });

    return (
      [
        <Sider width={100} key={1}>
          <Menu
            mode="vertical"
            style={{ height: '100%' }}
          >
            {
              menuList.map((item,index)=> <Menu.Item key={index}
              onClick={this._clickMenu}
              >
                <Icon type="pie-chart" />
                <span>{item.menuName}</span>
              </Menu.Item>)
            }
          </Menu>
        </Sider>,
        <Sider width={120} key={2}>
          <Menu
            mode="inline"
            key={"l2Menu"}
            inlineIndent={10}
            style={{ height: '100%' }}
          >
            {lv2Menu}
          </Menu>
        </Sider>
      ]
    );
  }

  _clickMenu=({ item, key, keyPath })=>{
    console.log(item, key, keyPath);
    this.setState({activeIndex:key});
  }
}

export default LeftMenu as any;
