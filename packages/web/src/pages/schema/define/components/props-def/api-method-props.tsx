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
      interact: string;
    }
  ) => void;
  [name: string]: any;
}

interface ICheckboxPropsS {
  [name: string]: any;
}

export default class ActionProps extends React.Component<
  ICheckboxPropsP,
  ICheckboxPropsS
> {
  constructor(props) {
    super(props);
    this.state = {
    };
    this._notify();
  }

  componentDidMount() {}

  render() {
    return (
      <div>
      </div>
    );
  }

  _notify = () => {
    this.props.onChange({
      interact:'api-method' ,
    });
  };
}
