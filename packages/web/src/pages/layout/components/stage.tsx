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

  getComps=(compInfo,paths=['compInfo'])=>{
    //遍历生成 子组件;; 出来

    let {choosedPathStr,choosedCompPath}  = this.props.relaxProps;

    let subComps;

    if (compInfo.has('children') && compInfo.get('children').count() > 0) {
      subComps = compInfo.get('children').map((item, index) => {
        return this.getComps(item,paths.concat(['children',index]));
      });
    }

    let pathStr = paths.join('-');

    // let realComp = ();

    if(choosedPathStr === pathStr) {
      //@ts-ignore
      let {bottom,height:h,left,right,top,width:w,x,y} = this.elementRepo[choosedPathStr].getBoundingClientRect();
      let props  ={
        w,
        x,
        y,
        h,
        r:0,
        rotatable:false,
      }


      let style  = compInfo.get('style').toJS();

      delete style.position;
      delete style.left;
      delete style.top;
      //当位置发生变动时, position以absolute为准
      //可移动范围.
      return (
        <DRR key={pathStr}
             {...props}
             //@ts-ignore
             bounds={"parent"}
             onDragStart={({ inst }) => {
               this.setState({ isGuidelineEnable: true, draggingElem: inst });
             }}
             onDragging={({ x, y, w, h, r }) => {
             }}
             onDragEnd={({ x, y, w, h, r }) => {


               let toAddProps={};


               if (props.w!=w||props.h!==h) {
                 toAddProps ={
                   width:w,
                   height:h
                 }
               }
               console.log('drag;;;');
               let {height:parentH,width:parentW} = this.elementRepo[choosedCompPath.slice(0,choosedCompPath.length-2).join("-")].getBoundingClientRect();
               //clientHeight  clientWidth
               // this.elementRepo[choosedPathStr].parentNode.width
               if(props.x !==x ||props.y!==y) {
                 toAddProps ={
                   ...toAddProps,
                   position:"relative",
                   left:(100*(x-props.x)/parentW)+"%",
                   top:(100*(y-props.y)/parentH)+"%",
                 }
               }

               if( Object.keys(toAddProps).length>0){
                 this.props.relaxProps.viewAction.compDefine.update({
                   compPath:choosedCompPath,
                   propPath:choosedCompPath.concat(['style']),
                   props:toAddProps
                 })
               }


               // this.changePos({ x, y, w, h, r });
               // this.setState({
               //   isShowToolbar: true,
               //   isShowPanel: true,
               //   isGuidelineEnable: false,
               //   draggingElem: null
               // });
             }}
        >
         <div ref={(element) => {
            this.elementRepo[pathStr] = element;
          }}
                key={pathStr} style={{
            ...style
          }}>
            sdfsdfsf
            {subComps}
          </div>
        </DRR>
      );
    }else{
      return (<div ref={(element) => {
        this.elementRepo[pathStr] = element;
      }}
                   key={pathStr} style={{
        ...compInfo.get('style').toJS()
      }}>
        sdfsdfsf
        {subComps}
      </div>);
    }
  }
}
