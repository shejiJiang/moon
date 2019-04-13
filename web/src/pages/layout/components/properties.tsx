import * as React from 'react';
import {Relax, TViewAction} from 'plume2';
import viewAction from '../action';
import './properties.less';
import {Input, Select, Icon} from 'antd';
import {render} from "react-dom";
import {choosedCompProps} from "../ql";
import {ICompDef} from "../types";

interface IProps {
  relaxProps?: {
    viewAction?: TViewAction<typeof viewAction>;
    choosedCompPath?: string[];
    choosedCompProps?: ICompDef;
  };
  [key: string]: any;
}

interface IState {
  [key: string]: any;
}

@Relax
export default class Properties extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
  }

  static relaxProps = {
    viewAction: 'viewAction',
    choosedCompProps:choosedCompProps,
    choosedCompPath: ['uiInfo', 'choosedCompPath'],
  };

  render() {
    let  {choosedCompProps,choosedCompPath}  = this.props.relaxProps;


    if(!choosedCompProps){
      return <div></div>
    }

    //验证规则对的情况下才去同步
    return (
      <div key={choosedCompPath.join("-")} className="properties">
        <Input
          addonBefore="display"
          readOnly
          onChange={this._onChangeValue}
          defaultValue="flex"
        />
        <Input
          addonBefore="背景"
          type="color"
          data-type="style"
          data-name="backgroundColor"
          onChange={this._onChangeValue}
          defaultValue={choosedCompProps.style.backgroundColor}
        />
        <Input
          addonBefore="宽度"
          data-type="style"
          data-name="width"
          onChange={this._onChangeValue}
          defaultValue=""
        />
        <Input
          addonBefore="高度"
          data-type="style"
          data-name="height"
          onChange={this._onChangeValue}
          defaultValue=""
        />
        <Input
          addonBefore="高度"
          data-type="style"
          data-name="height"
          onChange={this._onChangeValue}
          defaultValue=""
        />
        <div className="hbox ">
          <span>主轴</span>
          <div> <Icon type="home" /> <Icon type="home" /> <Icon type="home" /> <Icon type="home" /></div>
        </div>
      </div>
    );
  }

  /**
   * 在类value值的改变. 通过type来确定是叙属性
   *
   * @param event
   * @private
   */
  _onChangeValue = event => {
    // currentTarget.dataset.type  value
    let {dataset:{type,name},value} = event.currentTarget;
    let {viewAction, choosedCompPath} = this.props.relaxProps;

    viewAction.compDefine.update({
      compPath:choosedCompPath,
      propPath: choosedCompPath.concat([type,name]),
      value,
    });
  };
}
