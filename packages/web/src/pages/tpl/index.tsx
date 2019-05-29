import * as React from 'react';
import { StoreProvider ,Relax} from 'plume2';
import AppStore from './store';
import {Route} from "react-router";
import Detail from '../detail';

import Header from  './components/header';

@StoreProvider(AppStore, { debug: __DEV__ })
export default class HelloApp extends React.Component<any, any> {

  render() {

    return (<div>
      {/*<Route path="/detail" component={Detail} />*/}
    </div>);
  }
}
