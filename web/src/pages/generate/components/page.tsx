/**
 * Created by Acans angrycans@gmail.com on 2017/3/15
 */
import * as React from 'react';
import { Relax } from 'plume2';
import { Button ,Tabs,Input} from 'antd';

import "./page.less"
import {IAction, IActorEvent, IActorItem, ISubComp} from "../actor/main-actor";

interface IProps {
  relaxProps?: {
    test?:string;
    pageDefine?:any;
  };
}


const TabPane = Tabs.TabPane;


@Relax
export default class Page extends React.Component<IProps, any> {

  constructor(props){
    super(props);
    this.state = {
      tabIndex:1
    }
  }

  static relaxProps = {
    pageDefine: 'pageDefine'
  };

  render() {

    let {pageDefine} = this.props.relaxProps;
    let actors = pageDefine.get('actors').toJS().map((item:IActorItem)=>{
      let events =item.events.map((event:IActorEvent)=>{
        return (<div>
          <Input addonBefore="事件名称" id={"13213"} defaultValue={event.name} />
        </div>)
      });

      return (<div>
        {item.name}
        <div>
          {events}
        </div>
      </div>)
    });

    let actions = pageDefine.get('actions').toJS().map((item:IAction)=>{
      let methods =item.methods.map((action:IActorEvent)=>{
        return (<div>
          <Input addonBefore="action名称" id={"13213"} defaultValue={action.name} />
        </div>)
      });

      return (<div>
        {item.name}
        <div>
          {methods}
        </div>
      </div>)
    });


    let subComps = pageDefine.get('subComps').toJS().map((item:ISubComp)=>{
      let methods =item.methods.map((action:IActorEvent)=>{
        return (<div>
          <Input addonBefore="action名称" id={"13213"} defaultValue={action.name} />
        </div>)
      });
      return (<div>
        {item.name}
        <div>
          {methods}
        </div>
      </div>)
    });

    return (
      <div className="Page vbox-center">
        <Input addonBefore="页面key" defaultValue="order" />
        <Tabs defaultActiveKey={this.state.tabIndex+""} onChange={this._changeTab}>
          <TabPane tab="actors" key="1">
            {actors}
            <Button type="primary" onClick={this._addActor}>添加</Button>
          </TabPane>
          <TabPane tab="actions" key="2">
            {actions}
            <Button type="primary" onClick={this._addAction}>添加</Button>
          </TabPane>
          <TabPane tab="子组件" key="3">
            {subComps}
            <Button type="primary" onClick={this._addComp}>添加</Button>
          </TabPane>
        </Tabs>,
      </div>
    );
  }

  _addActor=()=>{

  }

  _addComp=()=>{

  }

  _addAction=()=>{

  }

  _changeTab =(key:string)=>{
    this.setState({tabIndex:key});
  }
}
