import { ComponentClass } from "react";
import Taro, { Component, Config } from "@tarojs/taro";
import { View, Text, Image, Button } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { AtIcon } from "taro-ui";
import Api from '@api/'
import Util from '@/util/';

import "./<%=pageInfo.key%>.less.tpl";
import { I<%=className%>Props } from "./types";
import actions from "./action.ts";

 <% pageInfo.subComps.forEach(item=>{ %>
import <%=Util.toUCamelize(item.name)%> from "./components/<%=item.name%>"; %>
 <% }) %>

@connect(
    ({ <%=instanceName%> }) =>
        ({
            <%=instanceName%>
        } as any),
    actions
)
class <%=className%> extends Component<I<%=className%>Props, any> {
    config: Config = {
        navigationBarTitleText: "<%=className%>"
    };

    componentDidMount() {
        this.props.init();
    }

    componentWillUnmount() {
        this.props.clean();
    }

    render() {
        return (<View className="<%=instanceName%>"></View>
    );
    }
}

export default <%=className%> as ComponentClass<any, any>;
