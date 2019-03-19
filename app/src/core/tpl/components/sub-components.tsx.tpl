import { ComponentClass } from "react";
import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { ITradeSendProps } from "../types";

import actions from "../action";

@connect(
    ({ tradeSend }) =>
        ({
            tradeSend
        } as any),
    actions
)
class DeliveryCompany extends Component<ITradeSendProps, any> {
    static options = {
        addGlobalClass: true
    };

    static defaultProps = {};

    state = {
        isShow: false,
        dataList: [{ label: "申通快递", value: 0 }, { label: "顺丰快递", value: 1 }, { label: "圆通快递", value: 2 }]
    };

    render() {
        const {} = this.props.tradeSend;
        const { isShow, dataList } = this.state;
        return (
            <View className="deliveryCompany">
                <van-cell title="物流公司" is-link onClick={this.onOpen} />
                <van-popup show={isShow} position="bottom" overlay={true} onClose={this.onClose}>
                    <van-picker
                        show-toolbar
                        columns={dataList.map((item) => item.label)}
                        onCancel={this.onClose}
                        onConfirm={this.props.company}
                    />
                </van-popup>
            </View>
        );
    }

    onClose() {
        this.setState({ isShow: false });
    }

    onOpen() {
        this.setState({ isShow: true });
    }
}

export default DeliveryCompany as ComponentClass<any, any>;
