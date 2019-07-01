/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/6/29
 **/

import * as React from 'react';
import {Menu, Dropdown, Icon, Input} from 'antd';
import {getChooseableComp, getPropsComp} from '../props-util';

interface ICheckboxPropsP {
  onChange: (
    param: {
      type: string;
      name: string;
      datas: {name: string; value: string}[];
    },
  ) => void;
  [name: string]: any;
}

interface ICheckboxPropsS {
  childrenInteract:any;
  [name: string]: any;
}

export default class ArrayProps extends React.Component<
  ICheckboxPropsP,
  ICheckboxPropsS
> {
  constructor(props) {
    super(props);
    this.state = {
      childrenInteract:{}
    };
    this._notify();
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <div>
          当前子属性为:{JSON.stringify(this.state.childrenInteract,null,2)}
        </div>
        选择子项类型:
        <PropsChoose onOk={(param)=>{

          this.setState({
            childrenInteract:{
              ...this.state.childrenInteract,[param.code]:param
            },
          },this._notify);

        }}></PropsChoose>
      </div>
    );
  }

  _notify = () => {
    this.props.onChange && this.props.onChange({
      interact: 'object',
      childrenInteract: this.state.childrenInteract,
    });
  };
}
