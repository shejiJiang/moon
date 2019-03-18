/**
 * Created by Acans angrycans@gmail.com on 2017/3/15
 */
import * as React from 'react';
import { Relax } from 'plume2';

/**
 *react-toolbox 的listview组件演示
 */
interface ListType {
  author?: {
    avatar_url: string;
    loginname: string;
  };
  author_id?: string;
  content?: string;
  create_at: string;
  good?: boolean;
  id?: string;
  last_reply_at?: string;
  reply_count?: number;
  tab?: string;
  title?: string;
  top?: boolean;
  visit_count?: number;
}

interface IProps {
  relaxProps?: {
    test?:string;
  };
}

@Relax
export default class ListView extends React.Component<IProps, any> {
  static relaxProps = {
    test: 'test'
  };

  render() {
    const { test } = this.props.relaxProps;
    return (
      <div>
        header,{test}
      </div>
    );
  }
}
