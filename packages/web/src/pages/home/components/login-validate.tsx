import React from 'react';
import {Route, withRouter} from 'react-router-dom';

export default function requireAuthentication(Component: any) {
    // 组件有已登陆的模块 直接返回 (防止从新渲染)
    if (Component.LoginValidate) {
     return Component.LoginValidate
    }

    class LoginValidate extends React.Component<any,any> {
        constructor(props: any) {
            super(props);
            this.state = {
                isAuthenticated: localStorage.getItem("qm:userInfo") ? true: false
            }
        }
    
        componentWillMount() {
            this.checkAuth();
        }
          
        checkAuth() {

            let { isAuthenticated } = this.state;
    
            // 未登陆重定向到登陆页面
            if (!isAuthenticated) {
                this.props.history.replace("/login");
                return;
            }
    
        }
          
        render() {
            if (this.state.isAuthenticated) {
                return <Component {...this.props}/>
            }
            return ''
        }
    }

    Component.LoginValidate = LoginValidate
    return Component.LoginValidate
}


