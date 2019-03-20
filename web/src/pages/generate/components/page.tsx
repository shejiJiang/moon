/**
 * Created by Acans angrycans@gmail.com on 2017/3/15
 */
import * as React from 'react';
import { Relax,TViewAction } from 'plume2';
import { Button ,Tabs,Input} from 'antd';

import "./page.less"
import viewAction from "../action";
import {IAction, IActorEvent, IActorItem, ISubComp} from "../../../../../app/src/core/generate";

interface IProps {
  relaxProps?: {
    test?:string;
    pageDefine?:any;
    viewAction?: TViewAction<typeof viewAction>;
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
    pageDefine: 'pageDefine',
    viewAction: 'viewAction'
  };

  render() {

    let {pageDefine} = this.props.relaxProps;
    let actors = pageDefine.get('actors').toJS().map((item:IActorItem,index:number)=>{
      let events =item.events.map((event:IActorEvent)=>{
        return (<div>
          <Input addonBefore="事件名称" id={"13213"} defaultValue={event.name} />
        </div>)
      });

      return (<div>
        <Input addonBefore="actorName:" id={"13213"} defaultValue={item.name} />
        <Button type="primary" data-index={index} onClick={this._addActorEvent}>添加actor方法</Button>
        <div>
          {events}
        </div>
      </div>)
    });

    let actions = pageDefine.get('actions').toJS().map((item:IAction,index:number)=>{
      let methods =item.methods.map((action:IActorEvent)=>{
        return (<div>
          <Input addonBefore="action名称" id={"13213"} defaultValue={action.name} />
        </div>)
      });

      return (<div>
        <Input addonBefore="actionName:" id={"13213"} defaultValue={item.name} />
        <Button type="primary" data-index={index} onClick={this._addActionMethod}>添加action方法</Button>
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
        <Input addonBefore="子组件name:" id={"13213"} defaultValue={item.name} />
        <Button type="primary" onClick={this._addActor}>添加子组件方法</Button>
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
            <Button type="primary" onClick={this._addActor}>添加actor</Button>
          </TabPane>
          <TabPane tab="actions" key="2">
            {actions}
            <Button type="primary" onClick={this._addAction}>添加action</Button>
          </TabPane>
          <TabPane tab="子组件" key="3">
            {subComps}
            <Button type="primary" onClick={this._addComp}>添加子组件定义</Button>
          </TabPane>
        </Tabs>,
      </div>
    );
  }

  _addActor=()=>{
    this.props.relaxProps.viewAction.MainAction.add("actor");
  }

  _addActorEvent=(e)=>{
    // e.currentTarget.dataset.index
    this.props.relaxProps.viewAction.MainAction.addActorEvent(e.currentTarget.dataset.index);
  }

  _addAction=()=>{
    this.props.relaxProps.viewAction.MainAction.add("action");
  }

  _addActionMethod=(e)=>{
    this.props.relaxProps.viewAction.MainAction.addActionMethod(e.currentTarget.dataset.index);
  }

  _addComp=()=>{
    this.props.relaxProps.viewAction.MainAction.add("subComp");
  }

  _changeTab =(key:string)=>{
    this.setState({tabIndex:key});
  }
}
