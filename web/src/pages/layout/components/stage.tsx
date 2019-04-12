import * as React from 'react';
import {Relax, TViewAction} from 'plume2';
import viewAction from '../action';
import './stage.less';

interface IProps {
  relaxProps?: {
    viewAction?: TViewAction<typeof viewAction>;
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
    viewAction: 'viewAction',
  };

  render() {
    return <div className="stage" />;
  }
}
