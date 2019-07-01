/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/6/29
 **/

import * as React from 'react';
import PropsChoose from "../props-choose";

interface ICheckboxPropsP {
  onChange: (
    param: {
      type:string,
      name: string; datas: {name: string; value: string}[]},
  ) => void;
  [name: string]: any;
}

interface ICheckboxPropsS {
  [name: string]: any;
}

export default class ArrayProps extends React.Component<
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
        选择子项类型:

        <PropsChoose onOk={(childrenInteract)=>{
          this.setState({childrenInteract},this._notify)
        }}></PropsChoose>
      </div>
    );
  }

  _notify = () => {
    this.props.onChange({
      interact:'array' ,
      childrenInteract:this.state.childrenInteract
    });
  };
}
