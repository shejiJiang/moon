import * as React from 'react';

import * as T from '../types';
import './result.less';
import actions from '../actions/index';
import {connect} from 'react-redux';
import {store2Props} from '../selectors';

type IResultProps = T.IProps & T.IResultProps;

@connect(
  store2Props,
  actions
)
export default class Result extends React.Component<
  Partial<IResultProps>,
  T.IResultState
> {
  constructor(props: IResultProps) {
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
      <div className="result">
        <div />
      </div>
    );
  }
}
