import * as React from "react";
import { StoreProvider, Relax } from "plume2";
import AppStore from "./store";
import { Route } from "react-router";

import Page from './components/page';

import "./index.less";

@StoreProvider(AppStore, { debug: __DEV__ })
export default class ListApp extends React.Component<any, any> {
  render() {
    return (
      <div className="list-data-base">
        <Page></Page>
      </div>
    );
  }
}
