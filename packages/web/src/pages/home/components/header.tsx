import React from 'react';
import './header.less';
import { msg } from 'plume2';

interface IState {
  userInfo: any;
}

interface IProps {
  history?: any;
  location?: any;
}

export default class Header extends React.Component<IProps, IState> {

  constructor(props: any) {
    super(props);
    let userInfo = localStorage.getItem('qm:userInfo') ? JSON.parse(localStorage.getItem('qm:userInfo')) : "";
    this.state = {
      userInfo: userInfo
    }
  }

  componentDidMount() {
    msg.on('loginSuccess', this.handleUserInfo);
  }

  componentWillMount() {
    msg.off('loginSuccess', this.handleUserInfo);
  }

  render() {

    console.log('userInfo', this.state.userInfo)

    return <div className="page-nav">
      <div className="page-nav-content">
        <div className="logo">
          <img src={"/image/qmlogo.png"} />
          <div className={"qmQR"}>
            <img src={"/image/qm-qr.jpg"} />
          </div>

          <span>千米-资料库</span>
        </div>
        {
          this.state.userInfo && this.props.location.pathname != '/' ?
            <div className="page-nav-header">
              <span className="quit" onClick={this.exit}>退出</span>
              <span className="name">{this.state.userInfo.cardName}</span>
              <img src={this.state.userInfo.userLogo} />
            </div>
            : null
        }

      </div>

    </div>
  }

  handleUserInfo = () => {
    let userInfo = JSON.parse(localStorage.getItem('qm:userInfo'));
    this.setState({
      userInfo
    })
  }

  exit = () => {
    localStorage.removeItem('qm:userInfo');
    localStorage.removeItem('qm:ticketId');
    localStorage.removeItem('qm:cardId');
    this.setState({
      userInfo: ''
    })
    this.props.history.push("/");
  }
}