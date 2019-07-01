/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/7/1
 **/


import  * as React from 'react';
export type PropsType  ="checkbox"|"boolean";
import {Modal, Button, Input} from 'antd';
interface IPropsDefDialogP{
  type?:PropsType;
  onOk: (param: any) => void;
  [name:string]:any;
}

interface IPropsDefDialogS{
  type:PropsType;
  param:object;
  [name:string]:any;
}


import checkbox from  './checkbox-props';
//TODO 这块如果是动态加载就可更好了了.. 但没有调通
let PropsRepo={
  checkbox,
}


export default class PropsDefDialog extends React.Component<IPropsDefDialogP,IPropsDefDialogS> {
  static defaultProps = {
  };
 
  constructor(props:IPropsDefDialogP){
    super(props);
    this.state = {
      type:props.type
    };
  }

  componentWillReceiveProps(nextProps:IPropsDefDialogP){
    if(nextProps.type !==this.state.type){
      this.setState({
        type:nextProps.type
      })
    }

  }

  componentDidMount() {
  }
  
  render() {
    debugger
    let Comp = PropsRepo[this.props.type] || "div";
    debugger

    return (<Modal
        title="Modal"
        visible={!!this.props.type}
        onOk={this._onOk}
        onCancel={this._hideModal}
        okText="确认"
        cancelText="取消"
      >
        <Comp onChange={this._onChange}></Comp>
      </Modal>
    );
  }


  _onChange=(param)=>{
    debugger;
    this.setState({param});
  }

  _onOk = ()=>{
    debugger;
    this.props.onOk(this.state.param);
  }

  _hideModal=(e) => {
    this.setState({
      type:""
    });
  }
}

 