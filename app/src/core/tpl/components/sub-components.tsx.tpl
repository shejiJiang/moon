import { ComponentClass } from "react";
import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { I<%=Util.toUCamelize(subComp.name)%>Props, I<%=Util.toUCamelize(subComp.name)%>State } from "../types";

import actions from "../action";

@connect(
    ({ <%=Util.toLCamelize(instanceName)%> }) =>
        ({
            <%=Util.toLCamelize(instanceName)%>
        } as any),
    actions
)
class <%=Util.toLCamelize(subComp.name)%> extends Component<I<%=Util.toUCamelize(subComp.name)%>Props, I<%=Util.toUCamelize(subComp.name)%>State> {
    static options = {
        addGlobalClass: true
    };

    static defaultProps = {};

    state = {};

    render() {
        const {} = this.props.<%=Util.toLCamelize(instanceName)%>;
        return (
            <View className="<%=Util.toLCamelize(subComp.name)%>">
            </View>
        );
    }
}

export default <%=Util.toLCamelize(subComp.name)%> as ComponentClass<any, any>;
