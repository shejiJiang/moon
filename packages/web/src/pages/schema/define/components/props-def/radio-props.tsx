/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/6/29
 **/

import * as React from 'react';
import {Input} from 'antd';
import {EInterActType} from "../../../../moon/page/typings";

interface ICheckboxPropsP {
  onChange: (
    param: {
      interact:string,
      datas: {name: string; value: string}[]},
  ) => void;
  [name: string]: any;
}

interface ICheckboxPropsS {
  values: string;
  [name: string]: any;
}

export default class CheckboxProps extends React.Component<
  ICheckboxPropsP,
  ICheckboxPropsS
> {
  constructor(props) {
    super(props);
    this.state = {
      values: '',
    };
    this._notify();
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <Input
          data-key={'values'}
          onChange={this._change}
          placeholder="format: key:value,key2:value or key1,key2"
        />
      </div>
    );
  }

  _change = e => {
    this.setState(
      {
        [e.target.dataset.key]: e.target.value,
      },
      this._notify,
    );
  };

  _notify = () => {
    let {values} = this.state;
    let datas = values.split(',').map(item => {
      let datas = item.trim().split(':');
      return {
        name: datas[0],
        value: datas[1] || datas[0],
      };
    });

    this.props.onChange({
      interact:'radio' ,//EInterActType.checkboxChoose,
      datas,
    });
  };
}
