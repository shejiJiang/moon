import * as React from 'react';
import {StoreProvider, Relax} from 'plume2';
import AppStore from './store';
import {Route} from 'react-router';
import Detail from '../detail';
import Login from '../login';
import Ueditor from '../ueditor';
import List from '../list';

import Header from  './components/header';
import requireAuthentication from './components/login-validate';
import './index.less';

@StoreProvider(AppStore, {debug: __DEV__})
export default class HelloApp extends React.Component<any, any> {

  componentDidMount(){

  }

  render() {
    return (
      <div className="page-wrapper">
        <Header {...this.props} />
        <div className="page-content">
          <Route path="/" exact component={Login} />
          <Route path="/detail" component={requireAuthentication(Detail)} />
          <Route path="/list" component={requireAuthentication(List)} />
          <Route path="/login" component={Login} />
          <Route path="/ueditor" component={requireAuthentication(Ueditor)} />
        </div>
      </div>
    );
  }
}
