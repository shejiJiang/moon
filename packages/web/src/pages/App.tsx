import React from "react";
import { HashRouter as Router, Route, Link,match } from "react-router-dom";

import Home from './home';

const BasicExample = () => (
  <Router>
      <Route path="/" component={Home} />
  </Router>
);


interface ITopicProps {
  topicId:string;
}

interface IProps{
   match: match<ITopicProps>
}

export default BasicExample;