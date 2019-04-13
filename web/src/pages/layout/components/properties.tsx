import * as React from 'react';
import {Relax, TViewAction} from 'plume2';
import viewAction from '../action';
import './properties.less';
import {Input, Select, Icon} from 'antd';
import {render} from 'react-dom';
import {choosedCompProps} from '../ql';
import {ICompDef} from '../types';

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
    choosedCompProps: choosedCompProps,
    choosedCompPath: ['uiInfo', 'choosedCompPath'],
  };

  render() {
    let {choosedCompProps, choosedCompPath} = this.props.relaxProps;

    if (!choosedCompProps) {
      return <div />;
    }

    //验证规则对的情况下才去同步
    return (
      <div key={choosedCompPath.join('-')} className="properties">
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
          defaultValue={choosedCompProps.style.width}
        />
        <Input
          addonBefore="高度"
          data-type="style"
          data-name="height"
          onChange={this._onChangeValue}
          defaultValue={choosedCompProps.style.height}
        />
        <Input
          addonBefore="高度"
          data-type="style"
          data-name="height"
          onChange={this._onChangeValue}
          defaultValue={choosedCompProps.style.height}
        />
        <Input
          addonBefore="position"
          data-type="style"
          data-name="position"
          onChange={this._onChangeValue}
          value={choosedCompProps.style.position}
        />
        <Input
          addonBefore="顺序"
          
          data-type="style"
          data-name="order"
          onChange={this._onChangeValue}
          defaultValue={choosedCompProps.style.order}
        />
        <Input
          addonBefore="放大比例"
          data-type="style"
          data-name="flexGrow"
          onChange={this._onChangeValue}
          defaultValue={choosedCompProps.style.flexGrow}
        /> <Input
          addonBefore="缩小比例"
          
          data-type="style"
          data-name="flexShrink"
          onChange={this._onChangeValue}
          defaultValue={choosedCompProps.style.flexShrink}
        />
        <div className="hbox ">
          <span>主轴对齐</span>
          <div>
           <Icon type="home"
                 onClick={this._onChooseItem}
                 data-type="style"
                 data-name="justifyContent"
                 data-value="flex-start"
           />
            <Icon type="home"
                  onClick={this._onChooseItem}
                  data-type="style"
                  data-name="justifyContent"
                  data-value="flex-end"/>
            <Icon type="home"
                  onClick={this._onChooseItem}
                  data-type="style"
                  data-name="justifyContent"
                  data-value="center"/>
            <Icon type="home"
                  onClick={this._onChooseItem}
                  data-type="style"
                  data-name="justifyContent"
                  data-value="space-between"/>
            <Icon type="home"
                  onClick={this._onChooseItem}
                  data-type="style"
                  data-name="justifyContent"
                  data-value="space-around"/>
          </div>
        </div>
        <div className="hbox ">
          <span>主轴方向</span>
          <div>
            <Icon type="home"
                  onClick={this._onChooseItem}
                  data-type="style"
                  data-name="flexDirection"
                  data-value="row-reverse"
            />
            <Icon type="home"
                  onClick={this._onChooseItem}
                  data-type="style"
                  data-name="flexDirection"
                  data-value="row"
            />
            <Icon type="home"
                  onClick={this._onChooseItem}
                  data-type="style"
                  data-name="flexDirection"
                  data-value="column"
            />
            <Icon type="home"
                  onClick={this._onChooseItem}
                  data-type="style"
                  data-name="flexDirection"
                  data-value="column-reverse"
            />
          </div>
        </div>

        <div className="hbox ">
          <span>换行</span>
          <div>
            <Icon type="home"
                  onClick={this._onChooseItem}
                  data-type="style"
                  data-name="flexWrap"
                  data-value="nowrap"
            />
            <Icon type="home"
                  onClick={this._onChooseItem}
                  data-type="style"
                  data-name="flexWrap"
                  data-value="wrap"
            />
            <Icon type="home"
                  onClick={this._onChooseItem}
                  data-type="style"
                  data-name="flexWrap"
                  data-value="wrap-reverse"
            />
          </div>
        </div>
        <div className="hbox ">
          <span>交叉轴对象</span>
          <div>
            <Icon type="home"
                  onClick={this._onChooseItem}
                  data-type="style"
                  data-name="alignItems"
                  data-value="flex-start"
            />
            <Icon type="home"
                  onClick={this._onChooseItem}
                  data-type="style"
                  data-name="alignItems"
                  data-value="flex-end"
            />
            <Icon type="home"
                  onClick={this._onChooseItem}
                  data-type="style"
                  data-name="alignItems"
                  data-value="center"
            />
            <Icon type="home"
                  onClick={this._onChooseItem}
                  data-type="style"
                  data-name="alignItems"
                  data-value="baseline"
            />
            <Icon type="home"
                  onClick={this._onChooseItem}
                  data-type="style"
                  data-name="alignItems"
                  data-value="stretch"
            />
          </div>
        </div>

        <div className="hbox ">
          <span>align-content对象</span>
          <div>
            <Icon type="home"
                  onClick={this._onChooseItem}
                  data-type="style"
                  data-name="alignContent"
                  data-value="flex-start"
            />
            <Icon type="home"
                  onClick={this._onChooseItem}
                  data-type="style"
                  data-name="alignContent"
                  data-value="flex-end"
            />
            <Icon type="home"
                  onClick={this._onChooseItem}
                  data-type="style"
                  data-name="alignContent"
                  data-value="center"
            />
            <Icon type="home"
                  onClick={this._onChooseItem}
                  data-type="style"
                  data-name="alignContent"
                  data-value="space-between"
            />
            <Icon type="home"
                  onClick={this._onChooseItem}
                  data-type="style"
                  data-name="alignContent"
                  data-value="space-around"
            />
            <Icon type="home"
                  onClick={this._onChooseItem}
                  data-type="style"
                  data-name="alignContent"
                  data-value="stretch"
            />
          </div>
        </div>



      </div>
    );
  }

  _onChooseItem=(event)=>{
    let {viewAction, choosedCompPath} = this.props.relaxProps;
    let  {name,type,value} = event.currentTarget.dataset;

    viewAction.compDefine.update({
      compPath: choosedCompPath,
      propPath: choosedCompPath.concat([type]),
      props:{
        [name]:value
      },
    });
}

  /**
   * 在类value值的改变. 通过type来确定是叙属性
   *
   * @param event
   * @private
   */
  _onChangeValue = event => {
    // currentTarget.dataset.type  value
    let {dataset: {type, name}, value} = event.currentTarget;
    let {viewAction, choosedCompPath} = this.props.relaxProps;

    viewAction.compDefine.update({
      compPath: choosedCompPath,
      propPath: choosedCompPath.concat([type]),
      props:{
        [name]:value
      },
    });
  };
}
