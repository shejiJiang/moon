import { ComponentClass } from "react";
import Taro, { Component, Config } from "@tarojs/taro";
import { View, Text, Image, Button } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { ITradeSendProps } from "./types";
import actions from "./action.ts";

import "./index.less.tpl";
import { SubmitPanel, ReceiveInfo, ColorLine, Blank } from "@/components";
import { AtIcon } from "taro-ui";
import Api from '@api/'
import tradeUtil from '@/util/trade';

import DeliveryType from "./components/delivery.type";
import DeliveryCompany from "./components/sub-components.tsx.tpl";

@connect(
    ({ tradeSend }) =>
        ({
            tradeSend
        } as any),
    actions
)
class TradeSend extends Component<ITradeSendProps, any> {
    config: Config = {
        navigationBarTitleText: "订单发货"
    };

    componentDidMount() {
        this.props.init(this.$router.params.tradeid);
    }

    componentWillUnmount() {
        this.props.clean();
    }

    render() {
      // console.log('tradeSend==<',this.props.tradeSend);
      const { info } = this.props.tradeSend;

      let {receiver,receiverMobile,addressContent} = tradeUtil.extraAddress(info);


        return (
            <SubmitPanel onSave={this.props.save}>
                <View className={"tradeSend"}>
                    <View className={"line"}>
                        <View className={"vbox"}>
                            <View className="hbox hbox-center hbox-between">
                                <AtIcon className="icon-dibiao" prefixClass="icon" size="10" />
                                <Text className="fs-12 flex-1 receive">收货人: {receiver}</Text>
                                <Text className="fs-12">{receiverMobile}</Text>
                            </View>
                            <Text className="fs-12 color-gray address">收货地址: {addressContent}</Text>
                        </View>
                    </View>

                    <Image src="/assets/image/border_dashed.jpg" className="border-dashed" />

                    <View className="remark line bottomborder vbox">
                        <View className="bottomborder">
                            <View>
                                <AtIcon className="icon-beizhu" prefixClass="icon" size="10" />
                                <Text className="fs-14">备注信息</Text>
                            </View>
                            <Text className="fs-12 color-gray">{info.bdesc}</Text>
                        </View>

                        <View className="seller vbox">
                            <View className="fs-14">商家</View>
                            <Text className="fs-12 color-gray">{info.odesc}</Text>
                        </View>
                    </View>

                    <Blank type={"gray"} />

                    <DeliveryType />
                    <DeliveryCompany />
                    <van-cell title="运单号码" value="内容" is-link />
                </View>
            </SubmitPanel>
        );
    }
}

export default TradeSend as ComponentClass<any, any>;
