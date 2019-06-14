import * as React from 'react';
import {connect} from 'react-redux';
import './index.less';
import * as T from './types';
import actions from './actions';
import {store2Props} from './selectors';

import LeftMenu from './components/left-menu';
import { Layout, Menu, Dropdown, Icon } from 'antd';
const { Header, Content } = Layout;

@connect(
  store2Props,
  actions
)
class Frame extends React.Component<T.IProps, any> {

  render() {
    return (
      <Layout className="frame">
        <Header className="frame-header">
          Header
        </Header>
        <Layout hasSider>
          <LeftMenu />
          <Content className="page-container">
            <div className="container">
              {this.props.children}
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Frame as any ;