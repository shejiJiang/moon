/**
 * Created by Acans angrycans@gmail.com on 2017/3/15
 */
import * as React from "react";
import { Relax, msg } from "plume2";
import api from "webapi";
import { message } from "antd";
import "./login.less";
import SocketClient from "kit/sockjs";
import config from "kit/config";
import { withRouter } from "react-router";

interface IProps {
  match?: any;
  location?: any;
  history?: any;
  relaxProps?: {
    test?: string;
  };
}

@Relax
class Login extends React.Component<IProps, any> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  static relaxProps = {
    test: "test"
  };

  async componentDidMount() {
    await api.login.getQrUrl();
    this.setState({ isReady: true });

    const client = new SocketClient()
      .subscribe("/user/queue/login", async (data: any) => {
        if (data.ticket && data.ticket != -1) {
          let res: any = await api.login.loginShortCut(data.ticket);
          let json = await res.json();
          localStorage.setItem("qm:ticket", json.data.token);

          let card: any = await api.login.getCardInfo();
          let cardJson = await card.json();
          if (cardJson.data && cardJson.data.cardId) {
            localStorage.setItem("qm:cardId", cardJson.data.cardId);
            localStorage.setItem("qm:ticketId", cardJson.data.ticketId);
            localStorage.setItem("qm:userInfo", JSON.stringify(cardJson.data));
            msg.emit("loginSuccess");
            this.props.history.push("/list");
          } else {
            message.warning("登录失败,请重试", () => {
              location.reload();
            });
          }
        } else {
          Raven.captureException("socket返回值异常," + JSON.stringify(data));
          message.warning("登录失败,请重试", () => {
            location.reload();
          });
        }
      })
      .connect(`${config.socket}/registry`, function() {}, {
        authorization: api.login.getSSOToken()
      });
  }

  render() {
    return (
      <div className="vbox-center box-center">
        <div className="vbox-center loginContainer">
          <h1>一张名片 一个生意圈</h1>
          <h4>可运营的专属社区</h4>
          {this.state.isReady ? <img src={api.login.getQmImageUrl()} /> : null}
          <p>微信扫码登录千米资料库</p>
        </div>
      </div>
    );
  }
}

//@ts-ignore
export default withRouter<Login>(Login);
