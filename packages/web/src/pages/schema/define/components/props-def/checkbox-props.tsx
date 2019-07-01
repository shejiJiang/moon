/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/6/29
 **/

import * as React from 'react';
import PropTypes from 'prop-types';
import {Modal, Button, Input} from 'antd';

interface ICheckboxPropsP {
  onOk: (param: {name: string; datas: {name: string; value: string}[]}) => void;
  [name: string]: any;
}

interface ICheckboxPropsS {
  name: string;
  value:string;
  visible:boolean;
  [name: string]: any;
}

export default class CheckboxProps extends React.Component<
  ICheckboxPropsP,
  ICheckboxPropsS
> {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      values: '',
      visible:true,
    };
  }

  componentDidMount() {}

  render() {
    return (
      <Modal
        title="Modal"
        visible={this.state.visible}
        onOk={this._onOk}
        onCancel={this.hideModal}
        okText="确认"
        cancelText="取消"
      >
        <Input data-key={'name'} onChange={this._change} placeholder="变量名称" />
        <Input
          data-key={'values'}
          onChange={this._change}
          placeholder="format: key:value,key2:value or key1,key2"
        />
      </Modal>
    );
  }

  _change = e => {
    this.setState({
      [e.target.dataset.key]: e.target.value,
    });
  };

  _onOk = () => {
    this.setState({
      visible:false
    },()=>{
      let  {values,name}=   this.state;
      let datas = values.split(",").map(item=>{
        let datas  = item.trim().split(":");
        return  {
          name:datas[0],
          value:datas[1]||datas[0]
        }
      });

      this.props.onOk({
        name,datas
      });
    })
  };
}
