import * as React from "react";
import { Relax, TViewAction } from "plume2";
import { Button, Icon, Modal, Upload, message } from "antd";
import "./upload.less";
import { viewAction } from "../action";
import api from "webapi";
import { IPolicyData } from "webapi/oss";
import config from "kit/config";

interface IProps {
  relaxProps?: {
    test?: string;
    uploadVisible?: boolean;
    viewAction?: TViewAction<typeof viewAction>;
  };
}

const ONEM = 1024 * 1024;
interface IState {
  ossPolicy: IPolicyData | null;
}

class SingleBridge<T = any> {
  constructor() {}

  _quene: T[] = [];

  add(item: T): void {
    console.log("添加一个ts");
    this._quene.push(item);
  }

  get size(): number {
    return this._quene.length;
  }

  getNext(): T | undefined {
    let item = this._quene.shift();
    console.log("消耗一个");
    return item;
  }
}

interface ILazyInfo {
  resolve: Function;
  file: File;
}

@Relax
export default class UploadComp extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      ossPolicy: null
    };
  }

  static relaxProps = {
    test: "test",
    viewAction: "viewAction",
    uploadVisible: "uploadVisible"
  };

  isUploading: boolean = false;

  singleBridge: SingleBridge<ILazyInfo>;

  async componentDidMount() {
    // let policy = await api.oss.getOssPolicy();
    // console.log(policy);
    this.singleBridge = new SingleBridge<ILazyInfo>();
  }

  render() {
    const { test, viewAction, uploadVisible } = this.props.relaxProps;

    const props = {
      name: "file",
      accept: ".ppt,.pptx,.pdf",
      headers: {
        platform: "wechat",
        authorization: localStorage.getItem("qm:ticket")
      },
      multiple: true,
      action: `${config.commonServer}/image/upload`,

      beforeUpload: (file: any, fileList: any[]) => {
        console.log("upload::", file.uid);
        return new Promise((resolve, reject) => {
          if (fileList.length > 20) {
            if (file.uid == fileList[fileList.length - 1].uid) {
              message.warning("一次上传文件数量超过20个限制");
            }
            reject(file);
          }

          if (fileList.length <= 20 && file.size / ONEM > 100) {
            fileList = fileList.filter(
              (fileItem: any) => fileItem.uid != file.uid
            );
            message.warning(`${file.name},单个文件最大100M`);
            reject(file);
          }

          this.singleBridge.add({
            resolve: resolve,
            file
          });

          if (!this.isUploading) {
            this.isUploading = true;
            //第一个上传
            let { resolve, file } = this.singleBridge.getNext();
            resolve(file);
          }
        });
      },

      onChange: (info: any) => {
        console.log("onChange", info);
        const { status, name, size, type } = info.file;
        if (status !== "uploading") {
          console.log(info.file, info.fileList);
        }

        if (status === "done") {
          let _item = this.singleBridge.getNext();
          _item && _item.resolve(_item.file);
          let url = `${config.imgApi}${info.file.response.data[0].url}`;
          let params = {
            fileUrl: url,
            headline: name,
            logoUrl: "",
            unit: "B",
            fileFmt: getFileExt(name),
            fileSize: size,
            source: "UPLOAD",
            content: "",
            htmlContent: ""
          };
          api.archive.add(params).then(() => {
            message.success(`文件［${info.file.name}］上传成功．`);
            this.isUploading = false;
          });
        } else if (status === "error") {
          this.isUploading = false;
          message.error(`文件［${info.file.name} ］上传失败．`);
        }
      }
    };

    return (
      <div className="item vbox-center">
        {this.props.relaxProps.uploadVisible ? (
          <Modal
            visible={uploadVisible}
            cancelText="取消"
            centered={true}
            width={"850px"}
            okText={"确认"}
            onOk={this._ok}
            onCancel={this._cancel}
            closable={false}
          >
            <Upload.Dragger {...props}>
              <div className="uploadContainer vbox-center">
                <h2>拖拽文件到此框内即可上传</h2>
                <p>支持 .ppt/.pptx/.pdf格式</p>
                <p>大小不超过100M，数量不超过20个</p>
              </div>
            </Upload.Dragger>
          </Modal>
        ) : null}
      </div>
    );
  }

  _ok = () => {
    const { test, viewAction, uploadVisible } = this.props.relaxProps;
    viewAction.MainAction.showOrHideUpload();
    viewAction.MainAction.query();
  };

  _cancel = () => {
    const { test, viewAction, uploadVisible } = this.props.relaxProps;
    viewAction.MainAction.showOrHideUpload();
    viewAction.MainAction.query();
  };
}

function getFileExt(fileName: string) {
  return fileName.substr(fileName.lastIndexOf(".") + 1);
}

interface IUploadStatus {
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  originFileObj: File;
  percent: number;
  response: string;
  size: number;
  status: string;
  type: string;
  uid: string;
}
