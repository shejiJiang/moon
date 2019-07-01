import * as React from 'react';
import {connect} from 'react-redux';
import './index.less';
import * as T from './types';
import actions from './actions';
import {store2Props} from './selectors';

import Define from './components/define';
import Result from './components/result';

@connect(
  store2Props,
  actions
)
export default class FeatureDefine extends React.Component<
  Partial<T.IProps>,
  any
> {
  componentDidMount() {
    this.props.actions.init();
  }

  componentWillUnmount() {
    this.props.actions.clean();
  }

  render() {
    let {
      actions: {action},
      main,
    } = this.props;

    return (
      <div className="featureDefine">
        <Define/>
        <div />
      </div>
    );
  }
}
