import * as React from 'react';

import * as T from '../types';
import './define.less';
import actions from '../actions/index';
import {connect} from 'react-redux';
import {store2Props} from '../selectors';

type IDefineProps = T.IProps & T.IDefineProps;

@connect(
  store2Props,
  actions
)
export default class Define extends React.Component<
  Partial<IDefineProps>,
  T.IDefineState
> {
  constructor(props: IDefineProps) {
    super(props);
  }

  /**
    
*/
  render() {
    let {
      actions: {action},
      main,
    } = this.props;

    return (
      <div className="define">
        <div />
      </div>
    );
  }
}
