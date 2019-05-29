/**
 * Created by Acans angrycans@gmail.com on 2017/3/15
 */
import * as React from "react";
import { Link } from "react-router-dom";
import { Relax, TViewAction } from "plume2";
import { Input, Button, Icon } from "antd";

import "./header.less";
import { viewAction } from "../action";
interface IProps {
  relaxProps?: {
    test?: string;
    viewAction?: TViewAction<typeof viewAction>;
  };
}

@Relax
export default class Header extends React.Component<IProps, any> {
  static relaxProps = {
    test: "test",
    viewAction: "viewAction"
  };

  render() {
    const { test, viewAction } = this.props.relaxProps;
    return (
      <div className="header">
        <Input
          placeholder="请输入文章标题、文件名称搜索"
          prefix={
            <Icon
              type="search"
              style={{ color: "rgba(0,0,0,.25)", fontSize: 18 }}
            />
          }
          onPressEnter={this.search}
          className="search-header"
        />
        <Link to="./ueditor">
          <Button type="primary" icon="file-text" className="addContext">
            新建文章
          </Button>
        </Link>
        <Button
          type="primary"
          onClick={this._upload}
          icon="upload"
          className="uploadFile"
        >
          上传文件
        </Button>
      </div>
    );
  }

  _upload = () => {
    const { test, viewAction } = this.props.relaxProps;
    viewAction.MainAction.showOrHideUpload();
  };

  search = (e: any) => {
    const { viewAction } = this.props.relaxProps;
    viewAction.MainAction.chageQ(e.target.value);
  };
}
