import * as React from 'react';
import { StoreProvider } from 'plume2';
import AppStore from './store';
import './index.less';

import Detail from  './components/detail';
@StoreProvider(AppStore, { debug: __DEV__ })
export default class HelloApp extends React.Component<any, any> {
  render() {
    return (
      <Detail {...this.props}></Detail>
    );
  }
}
