import * as React from "react";
import { StoreProvider, Relax } from "plume2";
import AppStore from "./store";
import { Route } from "react-router";
import Detail from "../detail";

import Empty from "./components/empty";
import List from "./components/list";
import Upload from "./components/upload";

import "./index.less";

@StoreProvider(AppStore, { debug: __DEV__ })
export default class ListApp extends React.Component<any, any> {
  render() {
    return (
      <div className="list-data-base">
        {/*<Empty></Empty>*/}
        <List {...this.props} />
        <Upload />
      </div>
    );
  }
}
