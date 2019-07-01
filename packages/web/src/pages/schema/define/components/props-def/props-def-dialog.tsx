/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/7/1
 **/

import * as React from 'react';
export type PropsType = 'checkbox' | 'boolean';
import {Modal, Button, Input} from 'antd';
interface IPropsDefDialogP {
  type?: PropsType;
  onOk: (param: any) => void;
  [name: string]: any;
}

interface IPropsDefDialogS {
  type: PropsType;
  param: object;
  [name: string]: any;
}

import checkbox from './checkbox-props';
import action from './action-props';
import actionMethod from './action-method-props';
import actorData from './actor-data-props';
import actor from './actor-props';
import actorEvent from './actor-event-props';
import compMethod from './comp-method-props';
import comp from './comp-props';
import input from './input-props';
import apiMethod from './api-method-props';
import apiMethodType from './api-method-type-props';
import boolean from './boolean-props';
import array from './array-props';
import radio from './radio-props';
import {getPropsComp} from "../props-util";
//TODO 这块如果是动态加载就可更好了了.. 但没有调通
let PropsRepo = {
  boolean,
  array,
  checkbox,
  action,
  actionMethod,
  input,
  actorData,
  actor,
  actorEvent,
  compMethod,
  comp,
  boolean,
  radio,
  apiMethod,
  apiMethodType,
};

export default class PropsDefDialog extends React.Component<
  IPropsDefDialogP,
  IPropsDefDialogS
> {
  static defaultProps = {};

  constructor(props: IPropsDefDialogP) {
    super(props);
    this.state = {
      param: {},
      type: props.type,
    };
  }

  componentWillReceiveProps(nextProps: IPropsDefDialogP) {
    if (nextProps.type !== this.state.type) {
      this.setState({
        type: nextProps.type,
      });
    }
  }

  componentDidMount() {}

  render() {
    let Comp = getPropsComp(this.props.type);

    return (
      <Modal
        title="Modal"
        visible={!!this.props.type}
        onOk={this._onOk}
        onCancel={this._hideModal}
        okText="确认"
        cancelText="取消"
      >
        <Input
          data-key={'name'}
          value={this.state.param.name}
          onChange={this._change}
          placeholder="变量名称"
        />
        <Input
          data-key={'code'}
          value={this.state.param.code}
          onChange={this._change}
          placeholder="变量编码"
        />
        <Comp onChange={this._onChange} />
      </Modal>
    );
  }

  _change = e => {
    debugger;
    this.setState({
      param: {...this.state.param, [e.target.dataset.key]: e.target.value},
    });
  };

  _onChange = param => {
    this.setState({param: {...this.state.param, ...param}});
  };

  _onOk = () => {
    debugger;
    this.props.onOk(this.state.param);
  };

  _hideModal = e => {
    this.setState({
      type: '',
    });
  };
}
