import * as React from 'react';
import {Relax, TViewAction} from 'plume2';
import viewAction from '../action';
import './stage.less';

interface IProps {
  relaxProps?: {
    viewAction?: TViewAction<typeof viewAction>;
    compInfo?: any;
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
    compInfo: 'compInfo',
    viewAction: 'viewAction',
  };

  render() {
    let comps  = this.getComps(this.props.relaxProps.compInfo);
    return <div className="stage" >
      {comps}
    </div>;
  }

  getComps=(compInfo,path=['company'])=>{
    //遍历生成 子组件;; 出来
    //TODO 后面添加编辑等操作.

    let subComps;

    if (compInfo.has('children') && compInfo.get('children').count() > 0) {
      subComps = compInfo.get('children').map((item, index) => {
        return this.getComps(item,path.concat(['children',index]));
      });
    }

    let pathStr = path.join('-');
    return (  <div key={pathStr} style={{
        ...compInfo.get('style').toJS()
      }}>
        sdfsf
        {subComps}
      </div>
    );

  }
}
