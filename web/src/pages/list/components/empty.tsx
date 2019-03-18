/**
 * Created by Acans angrycans@gmail.com on 2017/3/15
 */
import * as React from 'react';
import { Relax } from 'plume2';
import { Button } from 'antd';
import "./empty.less"

interface IProps {
  relaxProps?: {
    test?:string;
  };
}

@Relax
export default class Empty extends React.Component<IProps, any> {
  static relaxProps = {
    test: 'test'
  };

  render() {
    const { test } = this.props.relaxProps;
    return (
      <div className="empty vbox-center">
          <img src="http://q.qlogo.cn/qqapp/208656/DFD51829B81F7AF4586BC2F244D238E9/100"/>
          <text>您的资料库空空如也</text>
        <div className="hbox-around">
          <Button type="primary" icon="search">新建文章</Button>
          <Button type="primary" icon="search">上传文件</Button>
        </div>

      </div>
    );
  }
}
