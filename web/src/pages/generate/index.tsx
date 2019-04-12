import * as React from "react";
import { StoreProvider, Relax } from "plume2";
import AppStore from "./store";
import { Route } from "react-router";
import Page from './components/page';

import "./index.less";


//@ts-ignore
if(window.require){
//@ts-ignore
  let Elec = window.require('electron');

  console.log(Elec.ipcRenderer.sendSync('synchronous-message', 'ping')) // prints "pong"

  Elec.ipcRenderer.on('asynchronous-reply', (event, arg) => {
    console.log(arg) // prints "pong"
  })
  Elec.ipcRenderer.send('asynchronous-message', 'ping');
}

@StoreProvider(AppStore, { debug: __DEV__ })
export default class ListApp extends React.Component<any, any> {
  render() {
    return (
      <div className="list-data-base">
        {/*<Page></Page>*/}
      </div>
    );
  }
}
