/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/6/14
 **/


import  * as React from 'react';
import PropTypes from 'prop-types';


interface IDemoP{
  [name:string]:any;
}

interface IDemoS{
  [name:string]:any;
}

export default class Demo extends React.Component<IDemoP,IDemoS> {
  static defaultProps = {

  };

  constructor(props){
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>demo</div>
    );
  }
}

