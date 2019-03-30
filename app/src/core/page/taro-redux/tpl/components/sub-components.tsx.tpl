import { ComponentClass } from "react";
import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { I<%=Util.toUCamelize(subComp.fileName)%>Props, I<%=Util.toUCamelize(subComp.fileName)%>State } from "../types";
import './<%=subComp.fileName%>.less';
import actions from "../action";

@connect(
    ({ <%=Util.toLCamelize(instanceName)%> }) =>
        ({
            <%=Util.toLCamelize(instanceName)%>
        } as any),
    actions
)
class <%=Util.toLCamelize(subComp.fileName)%> extends Component<I<%=Util.toUCamelize(subComp.fileName)%>Props, I<%=Util.toUCamelize(subComp.fileName)%>State> {
    static options = {
        addGlobalClass: true
    };

    static defaultProps = {};

    state = {};

    render() {
        const {} = this.props.<%=Util.toLCamelize(instanceName)%>;
        return (
            <View className="<%=Util.toLCamelize(subComp.fileName)%>">
                <View/>
            </View>
        );
    }
}

export default <%=Util.toLCamelize(subComp.fileName)%> as ComponentClass<any, any>;
