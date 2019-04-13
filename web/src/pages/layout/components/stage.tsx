import * as React from 'react';
import {Relax, TViewAction} from 'plume2';
import viewAction from '../action';
import './stage.less';
import DRR from "components/resize-drag-rotate";
import {choosedPathStr} from "../ql";

interface IProps {
  relaxProps?: {
    viewAction?: TViewAction<typeof viewAction>;
    compInfo?: any;
    choosedCompPath?: string[];
    choosedPathStr?: string;
  };
  [key: string]: any;
}

interface IState {
  [key: string]: any;
}

@Relax
export default class Stage extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
  }

  static relaxProps = {
    choosedPathStr:choosedPathStr,
    compInfo: 'compInfo',
    viewAction: 'viewAction',
    choosedCompPath: ['uiInfo', 'choosedCompPath'],
  };

  private elementRepo:{[elePathKey:string]:HTMLElement}={};

  render() {
    let comps  = this.getComps(this.props.relaxProps.compInfo);
    return <div className="stage" >
      {comps}
    </div>;
  }

  getComps=(compInfo,path=['compInfo'])=>{
    //遍历生成 子组件;; 出来

    let {choosedPathStr}  = this.props.relaxProps;

    let subComps;

    if (compInfo.has('children') && compInfo.get('children').count() > 0) {
      subComps = compInfo.get('children').map((item, index) => {
        return this.getComps(item,path.concat(['children',index]));
      });
    }

    let pathStr = path.join('-');

    let realComp = (<div ref={(element) => {
      console.log(element);
        this.elementRepo[pathStr] = element;
      }}
      key={pathStr} style={{
      ...compInfo.get('style').toJS()
    }}>
      sdfsdfsf
      {subComps}
    </div>);

    if(choosedPathStr === pathStr){

      // bottom: 366.9921875
      // height: 291.9921875
      // left: 829.6875
      // right: 887.2265625
      // top: 75
      // width: 57.5390625
      // x: 829.6875
      // y: 75

      //@ts-ignore
      let {bottom,height:h,left,right,top,width:w,x,y} = this.elementRepo[choosedPathStr].getBoundingClientRect();

      let props  ={
        w,
        x,
        y,
        h,
        r:0
      }
      return (
        <DRR key={pathStr}
             {...props}
        >
          {realComp}
        </DRR>
      );
    }else{
      return realComp;
    }
  }
}
