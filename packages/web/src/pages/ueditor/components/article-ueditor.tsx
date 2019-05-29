/**
 * @author syh[of2387]
 * @date 2019.02
 */

import React from "react";
import { fromJS } from "immutable";
import { Relax, TViewAction } from "plume2";
import { RouteComponentProps } from "react-router-dom";
import { Button, Modal, Upload, Icon, Input, message } from "antd";
import mainAction from "../action/main-action";
import { getHashParam } from "kit/url-helper";
import config from "kit/config";
import api from "webapi/index";

const UE = (window as any).UE;

interface IProps extends RouteComponentProps {
  relaxProps?: {
    title: string;
    showPicUp: boolean;
    showGiveUp: boolean;
    showSaveOk: boolean;
    loading: boolean;
    archiveId: string;
    context: string;
    qrCode: string;
    viewAction: { MainAction: mainAction };
  };
}

interface IImage {
  src: string;
  width: string;
  height: string;
}

@Relax
export default class ArticleUeditor extends React.Component<IProps, {}> {
  ueEditor = {} as any;

  static relaxProps = {
    title: "title",
    showPicUp: "showPicUp",
    showGiveUp: "showGiveUp",
    showSaveOk: "showSaveOk",
    loading: "loading",
    context: "context",
    archiveId: "archiveId",
    qrCode: "qrCode",
    viewAction: "viewAction"
  };

  editorHandle = {
    execCommand: (p1: string, p2: Array<IImage> | string): any => undefined
  };
  archiveId: string;

  constructor(props: any) {
    super(props);
  }

  async componentDidMount() {
    let data = this.props.location.state;
    this.archiveId = getHashParam(this.props.location.search).id;

    if (data) {
      this.archiveId = data.get("archiveId");
      this.init(data);
      return;
    } else if (this.archiveId) {
      let { res } = await api.archive.query({ archiveId: this.archiveId });
      if (res.total === 1) {
        this.init(res.root[0]);
        return;
      }
      throw new Error("未获取到文章信息");
    } else {
      //新建逻辑
      this.init();
    }

    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    // 组件卸载后，清除放入库的id
    // 这里异步去清除，因为放弃编辑路由goback后会触发ueditor的返回滚动事件
    // 然而返回后会先走componentWillUnmount,此时销毁ueditor，再走滚动事件的函数会找不到ueditor的实例了
    setTimeout(() => {
      UE.delEditor("container");
    });
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const {
      title,
      showPicUp,
      showGiveUp,
      showSaveOk,
      qrCode,
      loading
    } = this.props.relaxProps;

    //this.renderUeditorContext();

    let headers = {
      authorization: localStorage.getItem("qm:ticket"),
      platform: "wechat"
    };
    return (
      <div className="article-ueditor">
        <div className="back-btn" onClick={this.backListNum}>
          <span className="back-icon" />
          返回
        </div>
        <Input
          type="text"
          className="input-title"
          placeholder="请输入标题,不超过30字"
          value={title}
          onChange={this.inputTitle}
        />

        <textarea id="container" />
        <div className="footer-btn">
          <Button type="primary" onClick={this.save} disabled={loading}>
            {loading ? "创建中" : "创建"}
          </Button>
          <Button onClick={this.giveUp} disabled={loading}>
            放弃编辑
          </Button>
        </div>

        <Modal
          width={700}
          title="上传图片或视频"
          visible={showPicUp}
          footer={[
            <Button key="submit" type="primary" onClick={this.handleOk}>
              确定
            </Button>
          ]}
          onCancel={this.handleCancel}
          destroyOnClose={true}
        >
          <div>图片支持jpeg、jpg、png、gif</div>
          <div>视频仅支持MP4格式</div>
          <Upload
            multiple
            listType="picture-card"
            accept=".jpeg,.jpg,.png,.gif,.mp4"
            action={`${config.commonServer}/image/upload`}
            headers={headers}
            onChange={this.fileOnChange}
            beforeUpload={this.beforeUpload}
          >
            <div>
              {/* <Icon type={this.state.loading ? 'loading' : 'plus'} /> */}
              <Icon type={"plus"} />
              <div className="ant-upload-text">上传</div>
            </div>
          </Upload>
        </Modal>

        <Modal
          width={700}
          title="放弃编辑"
          visible={showGiveUp}
          footer={null}
          onCancel={this.handleGiveUpCanCel}
        >
          <p
            style={{
              margin: "40px 0",
              textAlign: "center",
              fontSize: "22.5px",
              color: "#4A4A4A"
            }}
          >
            放弃编辑将不会创建这篇文章，确认放弃吗？
          </p>
          <div className="auto-footer">
            <Button
              type="primary"
              onClick={this.handleGiveUpOK}
              style={{ width: 200, height: 56, marginRight: 50 }}
            >
              确定
            </Button>
            <Button
              onClick={this.handleGiveUpCanCel}
              style={{ width: 200, height: 56 }}
            >
              取消
            </Button>
          </div>
        </Modal>

        <Modal
          className="create-success-modal"
          width={384}
          visible={showSaveOk}
          footer={null}
          onCancel={this.handleSaveOKCancel}
          afterClose={this.backList}
          closable={false}
        >
          <h1>创建成功</h1>
          <h3>请用微信扫码直接浏览</h3>
          <div className="qr-code-success">
            <img src={this.handleHttps(qrCode)} />
            <Button
              onClick={this.backList}
              style={{ width: 309, height: 56, fontSize: 20, color: "#201705" }}
            >
              返回列表查看
            </Button>
          </div>
        </Modal>
      </div>
    );
  }

  // 初始化
  init = (data?: any) => {
    let _that = this;
    let { viewAction } = this.props.relaxProps;

    // 选择图片
    UE.registerUI("cardImageDialog", function(editor: any, uiName: string) {
      var btn = new UE.ui.Button({
        name: "dialogbutton" + uiName,
        title: "图片",
        //需要添加的额外样式，指定icon图标，这里默认使用一个重复的icon
        cssRules: "background-position: -726px -77px;",
        onclick: function() {
          viewAction.MainAction.changePicUp(true);
          _that.editorHandle = editor;
        }
      });

      return btn;
    });

    // 初始化配置
    this.ueEditor = UE.getEditor("container", {
      initialFrameWidth: 1058,
      // serverUrl: 'https://upload.1000.com/api/upload/image',
      toolbars: [
        [
          "fullscreen",
          "source",
          "|",
          "undo",
          "redo",
          "|",
          "bold",
          "italic",
          "underline",
          "forecolor",
          "|",
          "fontsize"
        ]
      ],
      zIndex: 10,
      initialFrameHeight: 700,
      autoHeightEnabled: true,
      wordCount: false,
      disabledTableInTable: false,
      enableContextMenu: false,
      customDomain: true,
      elementPathEnabled: false,
      fontsize: [10, 12, 14, 16, 18, 20, 24, 36, 48, 60, 72, 84],
      paragraph: { h1: "", h2: "", h3: "", h4: "", h5: "", h6: "" },
      enableAutoSave: false
    });

    // ueditor加载完成
    this.ueEditor.ready(() => {
      //清空内容
      this.ueEditor.setContent("");

      //插入样式
      this.insertStyle();

      // 编辑内容
      if (data && data.size > 0) {
        viewAction.MainAction.editIn(
          data.get("archiveId"),
          data.get("headline")
        );

        let time = "?" + new Date().getTime();
        window
          .fetch(this.handleHttps(data.get("url")) + time)
          .then(async resp => {
            let htmlUrl = await resp.text();
            this.ueEditor.setContent(htmlUrl);
          });
      }
    });
  };

  // 渲染富文本内容
  renderUeditorContext = () => {
    let { context } = this.props.relaxProps;
    if (context && this.ueEditor.body) {
      this.ueEditor.setContent(context);
    }
  };

  // 输入标题
  inputTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { viewAction } = this.props.relaxProps;
    let context = e.target.value.trim();
    if (context.length <= 30) {
      viewAction.MainAction.setTitle(e.target.value);
    }
  };

  // 保存文章
  save = () => {
    let { title, viewAction, archiveId, loading } = this.props.relaxProps;

    if (loading) {
      return;
    }

    if (!title.trim()) {
      message.error("文章标题不能为空");
      return;
    }

    // 原内容
    let content = UE.getEditor("container").getContent();
    // 纯文本
    let contentTxt = UE.getEditor("container").getContentTxt();
    let reg = new RegExp("不支持video标签", "g");
    contentTxt = contentTxt.replace(reg, "");

    // logo
    var contentImg = "";
    if (this.ueEditor.body.querySelectorAll(".ele-order").length > 0) {
      let node = this.ueEditor.body.querySelectorAll(".ele-order")[0];
      if (node.nodeName == "IMG") {
        contentImg = node.src;
      } else {
        contentImg =
          "https://pic.qianmi.com/qmui/v0.2/img/cards/file-video.png";
      }
    }
    // if (this.ueEditor.body.getElementsByTagName("video").length > 0) {
    //   contentImg = "https://pic.qianmi.com/qmui/v0.2/img/cards/file-video.png";
    // } else if (this.ueEditor.body.getElementsByTagName("img").length > 0) {
    //   contentImg = this.ueEditor.body.getElementsByTagName("img")[0].src;
    // }

    // 纯文本长度
    if (this.ueEditor.getContentLength(true) > 3000) {
      message.warning("文章正文不能超过3000字");
      return;
    }
    // save api TODO

    let params = {
      fileUrl: "",
      optUserName: "",
      headline: title,
      logoUrl: contentImg,
      content: contentTxt,
      htmlContent: content
    };
    console.log("params", params);
    if (archiveId) {
      //更新
      viewAction.MainAction.updateContext({
        ...params,
        archiveId,
        optCId: localStorage.getItem("qm:cardId")
      });
    } else {
      viewAction.MainAction.saveContext(params);
    }
  };

  // 上传弹窗确认
  handleOk = () => {
    let { viewAction } = this.props.relaxProps;
    viewAction.MainAction.changePicUp(false);
  };

  // 上传弹窗关闭
  handleCancel = () => {
    let { viewAction } = this.props.relaxProps;
    viewAction.MainAction.changePicUp(false);
  };

  // 放弃编辑
  giveUp = () => {
    let { viewAction } = this.props.relaxProps;
    viewAction.MainAction.changeGiveUp(true);
  };

  // 放弃编辑确认
  handleGiveUpOK = () => {
    let { viewAction } = this.props.relaxProps;
    viewAction.MainAction.changeGiveUp(false);
    this.backListNum();
  };

  // 放弃编辑取消
  handleGiveUpCanCel = () => {
    let { viewAction } = this.props.relaxProps;
    viewAction.MainAction.changeGiveUp(false);
  };

  // 文件改变
  fileOnChange = (info: any) => {
    if (
      info.file.status == "done" &&
      info.file.response.data &&
      info.file.response.data.length > 0
    ) {
      console.log("上传完成", info);
      let url = `${config.imgApi}${info.file.response.data[0].url}`;
      if (info.file.type.indexOf("image") > -1) {
        let html = `<p style="text-align:center;"><img src="${url}" style="max-width:100%" class="ele-order" ></img></p>`;
        this.editorHandle.execCommand("inserthtml", html);
      } else {
        let html = `<p class="ueditor-video" data-url="${url}" ><video src="${url}" class="ele-order" controls="controls" width="100%" height="250px">不支持video标签</video><span class="span-del"></span></p>`;
        this.editorHandle.execCommand("inserthtml", html);

        //绑定删除按钮
        let delDomArr = this.ueEditor.body.getElementsByClassName("span-del");
        let delDom = "";
        for (var item of delDomArr) {
          if (item.parentNode.attributes["data-url"].value == url) {
            delDom = item;
          }
        }
        UE.dom.domUtils.on(delDom, "click", function(e: any) {
          //绑定删除事件
          e.target.parentNode.parentNode.removeChild(e.target.parentNode);
        });
      }
    }
  };

  // 上传前校验
  beforeUpload = (file: any, fileList: any) => {
    return new Promise((resolve, reject) => {
      // 已上传的图片张数
      let alreadyImgNumber = this.ueEditor.body.getElementsByTagName("img")
        .length;
      // 已上传的视频张数
      let alreadyVideoNumber = this.ueEditor.body.getElementsByTagName("video")
        .length;

      let imgArr = [],
        video = [];
      fileList.map((item: any) => {
        if (item.type.startsWith("image")) {
          imgArr.push(item);
        } else {
          video.push(item);
        }
      });

      // 一次性图片数量不能超过20张
      if (imgArr.length > 20) {
        // 循环到最后一张给提示
        if (file.uid == fileList[fileList.length - 1].uid) {
          message.error("图片数量不能超过20张");
        }
        reject(file);
      }

      // 视频数量不能超过3个
      if (video.length > 3) {
        // 循环到最后一个给提示
        if (file.uid == fileList[fileList.length - 1].uid) {
          message.error("视频数量不能超过3个");
        }
        reject(file);
      }

      //当前张数合并
      let allImg = alreadyImgNumber + imgArr.length;
      let allVideo = alreadyVideoNumber + video.length;

      if (allImg > 20 && imgArr.length < 20) {
        if (file.uid == fileList[fileList.length - 1].uid) {
          message.error("图片数量不能超过20张");
        }
        reject(file);
      }

      if (allVideo > 3 && video.length < 3) {
        // 循环到最后一个给提示
        if (file.uid == fileList[fileList.length - 1].uid) {
          message.error("视频数量不能超过3个");
        }
        reject(file);
      }

      const isImg = file.type.startsWith("image");
      //const isVedio = file.type.startsWith("video");
      if (isImg) {
        const isLt10M = file.size / 1024 / 1024 < 10;
        if (!isLt10M) {
          message.error(`${file.name},图片大小不能超过10M`);
          reject(file);
        }
      } else {
        const isLt100M = file.size / 1024 / 1024 < 100;
        if (!isLt100M) {
          message.error(`${file.name},视频大小不能超过100M`);
          reject(file);
        }
      }
      resolve(file);
    });
  };

  // 返回列表查看
  backList = () => {
    this.props.history.push("/list");
  };

  backListNum = () => {
    let pageNum = getHashParam(this.props.location.search).pageNum;
    if (pageNum) {
      let path = {
        pathname: "./list",
        state: { pageNum }
      };
      this.props.history.push(path);
    } else {
      this.props.history.goBack();
    }
  };

  // 创建成功弹窗关闭
  handleSaveOKCancel = () => {
    let { viewAction } = this.props.relaxProps;
    viewAction.MainAction.changeSaveOk(false);
  };

  // 处理img为https
  handleHttps = (url: string) => {
    if (url.startsWith("https")) {
      return url.replace("https", "http");
    }
    return url;
  };

  //插入样式
  insertStyle = () => {
    let css: any = document.createElement("style");
    css.type = "text/css";
    css.innerHTML =
      ".ueditor-video{position:relative;} .span-del {display:none;position: absolute;top:0;right:0;color: #f00;cursor:pointer;} .span-del:after{content:'删除'} .ueditor-video:hover {outline: 5px solid #5491de;} .ueditor-video:hover span {display:block} ";

    let ueditorEle = UE.getEditor("container").document;
    ueditorEle.getElementsByTagName("head")[0].appendChild(css);
  };

  // 监听滚动
  handleScroll = (_: any) => {
    let toolbox: any = document.getElementsByClassName(
      "edui-editor-toolbarbox"
    )[0];
    if (document.documentElement.scrollTop > 155) {
      toolbox.classList.add("toolbarbox-fixed");
    } else {
      toolbox.classList.remove("toolbarbox-fixed");
    }
  };
}
