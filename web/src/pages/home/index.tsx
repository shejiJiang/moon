import * as React from 'react';
import {StoreProvider, Relax} from 'plume2';
import AppStore from './store';
import {Route} from 'react-router';
import Detail from '../detail';
import Login from '../login';
import Ueditor from '../ueditor';
import List from '../list';
import Generate from '../generate';

import Header from  './components/header';
import requireAuthentication from './components/login-validate';
import './index.less';
import Layout from "../layout";

@StoreProvider(AppStore, {debug: __DEV__})
export default class HelloApp extends React.Component<any, any> {

  componentDidMount(){

  }

  render() {
    return (
      <div className="page-wrapper">
        {/*<Header {...this.props} />*/}
        <div className="page-content">
          {/*<Route path="/" exact component={Generate} />*/}
          <Route path="/" exact component={Layout} />
        </div>
      </div>
    );
  }
}
