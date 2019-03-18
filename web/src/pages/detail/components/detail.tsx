/**
 * Created by Acans angrycans@gmail.com on 2017/3/15
 */
import * as React from "react";
import { Relax, TViewAction } from "plume2";
import { Link } from "react-router-dom";
import { Button, Modal, Icon } from "antd";
import mainAction from "../action/main-action";
import RenameDialog from "components/rename-dialog";
import { handleHttps, handleDate } from "../../../kit/common";
import api from "webapi";
import { getHashParam } from "kit/url-helper";
interface IProps {
  relaxProps?: {
    detail: any;
    delModal: boolean;
    delSuccess: boolean;
    viewAction: { MainAction: mainAction };
  };
  location?: any;
  history?: any;
}

@Relax
export default class ListView extends React.Component<IProps, any> {
  static relaxProps = {
    detail: "detail",
    delModal: "delModal",
    delSuccess: "delSuccess",
    viewAction: "viewAction"
  };
  archiveId: string;

  constructor(props: any) {
    super(props);
    this.state = {
      isRenameModal: false
    };
  }

  async componentDidMount() {
    let { viewAction } = this.props.relaxProps;
    let data = this.props.location.state;
    if (data) {
      this.archiveId = data.get("archiveId");
      await viewAction.MainAction.init(data);
      return;
    } else {
      this.archiveId = getHashParam(this.props.location.search).id;

      if (this.archiveId) {
        let { res } = await api.archive.query({ archiveId: this.archiveId });

        if (res.total === 1) {
          await viewAction.MainAction.init(res.root[0]);
          return;
        }
      }
    }
    throw new Error("未获取到文章信息");
  }

  render() {
    let { detail, delModal } = this.props.relaxProps;
    let path = {
      pathname: "./ueditor",
      search: "?id=" + this.archiveId,
      state: detail
    };

    let { actionText, time } = handleDate(detail);

    return (
      <div className="page-detail">
        <div className="back-btn" onClick={this.backList}>
          <span className="back-icon" />
          返回
        </div>

        <div className="page-top">
          {detail.get("type") == "FILE" || detail.get("type") == "SYS_BC" ? (
            <div className="page-top-file-bg">
              {detail.get("fileFmt") == "pdf" ? (
                <i className="iconfont iconpdf" />
              ) : (
                <i className="iconfont iconCombinedShape" />
              )}
              <span>{detail.get("fileSize")}</span>
            </div>
          ) : null}

          <div className="page-top-right">
            <p className="headline">{detail.get("headline")}</p>

            <div className="time-line">
              <p>
                {actionText}于{time}
              </p>
              <div>
                <i className="iconfont iconchakanliang" />
                {detail.get("browseCount")}
                <i className="iconfont iconbaocun" />
                {detail.get("collectCount")}
              </div>
            </div>

            <div className="tools">
              {detail.get("type") == "FILE" ||
              detail.get("type") == "SYS_BC" ? (
                <Button
                  type="primary"
                  onClick={this._rename}
                  className="tools-btn"
                >
                  <Icon type="edit" />
                  重命名
                </Button>
              ) : (
                <>
                  <Link to={path}>
                    <Button
                      type="primary"
                      className="tools-btn"
                      style={{ marginRight: 20 }}
                    >
                      <Icon type="edit" />
                      编辑
                    </Button>
                  </Link>
                  <Button type="primary" className="tools-btn">
                    <Icon type="qrcode" />
                    二维码
                    <div className="qr-code-hover">
                      <img src={detail.get("qrCodeUrl")} alt="" />
                      <p className="tips">用手机浏览效果更佳</p>
                    </div>
                  </Button>
                </>
              )}

              <Button
                onClick={this.deleteSure}
                className="tools-btn delete-btn"
              >
                删除
              </Button>
            </div>
          </div>
        </div>

        {detail.get("type") == "ARTICLE" ? (
          <div className="html-context">
            <div dangerouslySetInnerHTML={{ __html: detail.get("htmlText") }} />
          </div>
        ) : null}

        {detail.get("type") == "FILE" || detail.get("type") == "SYS_BC" ? (
          <div className="qr-code-show">
            <img src={detail.get("qrCodeUrl")} alt="" />
          </div>
        ) : null}

        <Modal
          title={"删除文章/文件"}
          visible={delModal}
          footer={null}
          onCancel={this.handleCancel}
          afterClose={this.afterClose}
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
              onClick={this.handleOk}
              style={{ width: 200, height: 56, marginRight: 50 }}
            >
              确定
            </Button>
            <Button
              onClick={this.handleCancel}
              style={{ width: 200, height: 56 }}
            >
              取消
            </Button>
          </div>
        </Modal>
        {this.state.isRenameModal ? (
          <RenameDialog
            fmt={detail.get("fileFmt")}
            name={detail.get("headline")}
            onOK={this.handleRename}
            onClose={this.handleClose}
          />
        ) : null}
      </div>
    );
  }

  _rename = () => {
    this.setState({ isRenameModal: true });
  };

  handleRename = (name: string) => {
    this.props.relaxProps.viewAction.MainAction.rename(this.archiveId, name);
    this.setState({ isRenameModal: false });
  };

  handleClose = () => {
    this.setState({ isRenameModal: false });
  };

  deleteSure = () => {
    let { viewAction } = this.props.relaxProps;
    viewAction.MainAction.deleteSure(true);
  };

  handleOk = () => {
    let { viewAction, detail } = this.props.relaxProps;
    viewAction.MainAction.deleteContext(detail.get("archiveId"));
  };

  handleCancel = () => {
    let { viewAction } = this.props.relaxProps;
    viewAction.MainAction.deleteSure(false);
  };

  afterClose = () => {
    let { delSuccess } = this.props.relaxProps;
    if (delSuccess) {
      setTimeout(() => {
        this.props.history.goBack();
      }, 1000);
    }
  };

  // 返回列表查看
  backList = () => {
    let pageNum = getHashParam(this.props.location.search).pageNum;
    let path = {
      pathname: "./list",
      state: { pageNum }
    };
    this.props.history.push(path);
  };
}
