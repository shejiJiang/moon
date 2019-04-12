import * as React from 'react';
import {StoreProvider, Relax} from 'plume2';
import AppStore from './store';

import Outline from './components/outline';

import Properties from './components/properties';

import Stage from './components/stage';

import Toolbar from './components/toolbar';

import Weapon from './components/weapon';

import './index.less.ejs';

@StoreProvider(AppStore, {debug: __DEV__})
export default class Layout extends React.Component<any, any> {
  render() {
    return <div className="layout" />;
  }
}
