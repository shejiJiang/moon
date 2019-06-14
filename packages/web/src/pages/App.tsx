import React from 'react';
import 'whatwg-fetch';
import {HashRouter as Router, Route, Link, match,Switch} from 'react-router-dom';
import loadable from '@loadable/component'

const MainFrame = loadable(() => import('@/pages/frame'));
const Demo = loadable(() => import('@/pages/demo'));

    const Main = () =>
  <Router>
    <Switch>
      <Route path="/demo" component={Demo} />
      <Route path="/" render={() => <MainFrame>
        {/*mark*/}
      </MainFrame>} />
    </Switch>
  </Router>;

interface ITopicProps {
  topicId: string;
}

interface IProps {
  match: match<ITopicProps>;
}

export default Main;
