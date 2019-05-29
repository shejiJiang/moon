/**
 * Created by Acans angrycans@gmail.com on 2017/3/15
 */
import * as React from "react";
import { Relax, TViewAction } from "plume2";
import { Icon, Menu, Dropdown, Modal, message, Button } from "antd";
import "./item.less";

import { viewAction } from "../action";
import Api from "webapi";
import { handleDate } from "kit/common";
import RenameDialog from "components/rename-dialog";

interface IProps {
  item: any;
  index: number;
  history?: any;
  relaxProps?: {
    search?: any;
    viewAction?: TViewAction<typeof viewAction>;
  };
}

@Relax
export default class Item extends React.Component<IProps, any> {
  static relaxProps = {
    search: "search",
    viewAction: "viewAction"
  };

  constructor(props: any) {
    super(props);
    this.state = {
      renameModal: false,
      delModal: false
    };
  }

  render() {
    let item = this.props.item;

    const menu = (
      <Menu>
        {item.get("type") == "FILE" || item.get("type") == "SYS_BC" ? (
          <Menu.Item>
            <div onClick={this.rename}>重命名</div>
          </Menu.Item>
        ) : null}

        {item.get("type") == "FILE" || item.get("type") == "SYS_BC" ? (
          <Menu.Item>
            <div onClick={this._down}>
              <a href={item.get("url")} download style={{ color: "#201705" }}>
                下载
              </a>
            </div>
            {/* 下面这个方法实现了重命名，需要测试 */}
            {/* <div onClick={this.downLoad}>下载</div> */}
          </Menu.Item>
        ) : null}

        {item.get("type") == "ARTICLE" ? (
          <Menu.Item>
            <div onClick={this.goEdit}>编辑</div>
          </Menu.Item>
        ) : null}

        <Menu.Item>
          <div onClick={this.del}>删除</div>
        </Menu.Item>
      </Menu>
    );

    let { actionText, time } = handleDate(item);

    return (
      <div>
        <div className="context-list-item vbox-center" onClick={this.goDetail}>
          <h2 className="headline">{item.get("headline")}</h2>
          <div className="main-body">
            {item.get("logoUrl") ? (
              <div className="artiicle-img">
                <img src={item.get("logoUrl")} />
              </div>
            ) : null}

            {item.get("type") == "FILE" || item.get("type") == "SYS_BC" ? (
              <div className="pdf-img">
                {item.get("fileFmt") == "pdf" ? (
                  <i className="iconfont iconpdf" />
                ) : (
                  <i className="iconfont iconCombinedShape" />
                )}

                <span>{item.get("fileSize")}</span>
              </div>
            ) : null}

            <div className="vbox desc">
              <p className="time">
                {actionText}于 {time}
              </p>
              <p className="content">{item.get("intro")}</p>
              <div className="btns hbox-between">
                <div className="left">
                  <i className="iconfont iconchakanliang" />
                  {item.get("browseCount")}
                  <i className="iconfont iconbaocun" />
                  {item.get("collectCount")}
                </div>
                <div className="right">
                  <div
                    onMouseEnter={this.getQrCode}
                    className="qr-code"
                    onClick={(e: any) => e.stopPropagation()}
                  >
                    <Icon type="qrcode" />
                  </div>

                  <div className="right-qrcode-hover">
                    {item.get("qrCodeUrl") ? (
                      <>
                        <img src={item.get("qrCodeUrl")} alt="" />
                        <p className="tips">用手机浏览效果更佳</p>
                      </>
                    ) : (
                      <p className="loading">加载中...</p>
                    )}
                  </div>
                  <Dropdown overlay={menu}>
                    <div
                      className="more"
                      onClick={(e: any) => e.stopPropagation()}
                    >
                      <Icon type="ellipsis" />
                    </div>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
        </div>

        {this.state.renameModal ? (
          <RenameDialog
            fmt={item.get("fileFmt")}
            name={item.get("headline")}
            onClose={this._handleClose}
            onOK={this._handleOk}
          />
        ) : null}
        <Modal
          title={"删除文章/文件"}
          visible={this.state.delModal}
          onCancel={this._handleDelCancel}
          footer={null}
        >
          <p
            style={{
              margin: "40px 0",
              textAlign: "center",
              fontSize: "22.5px",
              color: "#4A4A4A"
            }}
          >
            你确定要删除此文章/文件吗？
          </p>

          <div className="auto-footer">
            <Button
              type="primary"
              onClick={this._handleDelOk}
              style={{ width: 200, height: 56, marginRight: 50 }}
            >
              确定
            </Button>
            <Button
              onClick={this._handleDelCancel}
              style={{ width: 200, height: 56 }}
            >
              取消
            </Button>
          </div>
        </Modal>
      </div>
    );
  }

  _handleDelClose = () => {
    this.setState({ delModal: false });
  };

  _down = (e: any) => {
    e.stopPropagation();
    Api.archive.down(this.props.item.get("archiveId"));
  };

  _handleClose = () => {
    this.setState({
      renameModal: false
    });
  };

  _handleOk = async (newName: string) => {
    await this.props.relaxProps.viewAction.MainAction.rename(
      this.props.item.get("archiveId"),
      newName,
      this.props.index
    );
    message.success("修改成功");
    this.setState({
      renameModal: false
    });
  };

  goDetail = () => {
    let {
      item,
      relaxProps: { search }
    } = this.props;
    let path = {
      pathname: "./detail",
      search: `?id=${item.get("archiveId")}&pageNum=${search.get("pageNum")}`,
      state: item
    };
    this.props.history.push(path);
  };

  goEdit = (e: any) => {
    e.stopPropagation();
    let {
      item,
      relaxProps: { search }
    } = this.props;
    let path = {
      pathname: "./ueditor",
      search: `?id=${item.get("archiveId")}&pageNum=${search.get("pageNum")}`,
      state: item
    };
    this.props.history.push(path);
  };

  rename = (e: any) => {
    // 阻止冒泡
    e.stopPropagation();

    this.setState({ renameModal: true });
  };

  // 获取小程序码
  getQrCode = () => {
    let {
      item,
      index,
      relaxProps: { viewAction }
    } = this.props;
    if (!item.get("qrCodeUrl")) {
      viewAction.MainAction.getQrcode(item.get("archiveId"), index);
    }
  };

  // 删除
  del = (e: any) => {
    // 阻止冒泡
    e.stopPropagation();

    this.setState({ delModal: true });
  };

  _handleDelOk = async () => {
    let { item } = this.props;
    let { viewAction } = this.props.relaxProps;
    viewAction.MainAction.deleteContext(item.get("archiveId"));
    this.setState({
      delModal: false
    });
  };

  _handleDelCancel = () => {
    this.setState({ delModal: false });
  };

  downLoad = (e: any) => {
    e.stopPropagation();
    let { item } = this.props;
    let url = item.get("url");
    let fmt = item.get("fileFmt");
    let name = item.get("headline").replace("." + fmt, "");

    this.getBlob(url).then((blob: any) => {
      this.saveAs(blob, name);
    });
  };

  /**
   * 获取 blob
   * @param  {String} url 目标文件地址
   * @return {Promise}
   */
  getBlob = (url: any) => {
    return window.fetch(url).then(res => {
      return res.blob();
    });
  };

  /**
   * 保存
   * @param  {Blob} blob
   * @param  {String} filename 想要保存的文件名称
   */
  saveAs = (blob: any, filename: string) => {
    if (window.navigator.msSaveOrOpenBlob) {
      navigator.msSaveBlob(blob, filename);
    } else {
      const link = document.createElement("a");
      const body = document.querySelector("body");

      link.href = window.URL.createObjectURL(blob);
      link.download = filename;

      // fix Firefox
      link.style.display = "none";
      body.appendChild(link);

      link.click();
      body.removeChild(link);

      window.URL.revokeObjectURL(link.href);
    }
  };
}
