<template>
    <div class="detail-page" v-if="show">
        <!-- <p class="detail-page-title">
            <span>订单详情</span>
        </p> -->
        <!-- <div class="detail-page-conter" v-for="(item,index) in orderData.order_goods" :key='index'> -->
        <div class="detail-page-conter-img">
            <img :src="orderData.fan_ticket[0].ticket.cover">
        </div>
        <div class="detail-page-conter-text">
            <p class="detail-page-conter-text-name">{{orderData.fan_ticket[0].ticket.name}}</p>
            <p class="detail-page-conter-text-remark">{{orderData.fan_ticket[0].ticket.remark}}</p>
            <p class="detail-page-conter-text-price">
                <span class="detail-page-conter-text-price-piece">×{{orderData.order_goods[0].num}}</span>
                <span class="detail-page-conter-text-price-price">¥{{orderData.order_goods[0].price}}</span>
            </p>
        </div>
        <!-- </div> -->
        <div class="detail-page-click">
            <p class="detail-page-click-p">
                <span class="detail-page-click-p-allText">订单总价</span>
                <span class="detail-page-click-p-allPrice">¥ {{orderData.order_goods[0].price * orderData.order_goods[0].num}}</span>
            </p>
            <van-button v-if="orderData.pay_state === 0" class="detail-page-click-intoDefail" round type="danger" size="small"
                @click="payOrder()">支付</van-button>
            <van-button v-if="orderData.pay_state === 1 && orderData.use_state === 0 && hasRefun" class="detail-page-click-intoDefail"
                round type="warning" size="small" @click="returnOrder()">申请退款</van-button>
            <van-button v-if="orderData.pay_state === 1 && orderData.use_state === 0" class="detail-page-click-qrcode"
                round type="primary" size="small" @click="showQrcode()">核销二维码</van-button>
            <van-button v-if="orderData.pay_state === 0" class="detail-page-click-intoDefail" round type="warning" size="small"
                @click="cancelOrder()">取消订单</van-button>

        </div>
        <!-- <p class="detail-page-detail-hen"></p> -->
        <div class="detail-page-detail">
            <!-- discount_type 0 无 -->
            <p class="detail-page-detail-p">
                <span class="detail-page-detail-p-text">姓名</span>
                <span class="detail-page-detail-p-price">{{orderData.fan_ticket[0].name}}</span>
            </p>
            <p class="detail-page-detail-p">
                <span class="detail-page-detail-p-text">电话</span>
                <span class="detail-page-detail-p-price">{{orderData.fan_ticket[0].mobile}}</span>
            </p>
            <p class="detail-page-detail-p">
                <span class="detail-page-detail-p-text">预定日期</span>
                <span class="detail-page-detail-p-price">{{orderData.fan_ticket[0].booking_date}}</span>
            </p>
        </div>
        <van-popup v-model="QrcodeManage" class="subscribeModal" v-if="QrcodeManage">
            <p class="qrcodeText">{{orderData.fan_ticket[0].ticket.name}}</p>
            <div id="qrcode" v-if="QrcodeManage" ref="qrcode"></div>
            <p class="qrcodeText" style="font-size:14px;">请给店员展示此二维码进行使用</p>
        </van-popup>
    </div>
</template>

<script>
import { Button, Toast, Popup } from "vant";
import axios from "../../public/axios";
import wxApi from "../../public/wx.js";
import QRCode from "qrcodejs2";
const wxa = new wxApi();
export default {
    components: {
        [Button.name]: Button,
        [Toast.name]: Toast,
        [Popup.name]: Popup,
        QRCode
    },
    data() {
        return {
            QrcodeManage:false,
            show: false,
            orderData: "",
            config: "",
            hasRefun:false,
            hasDestroy:false,
        };
    },
    methods: {
        qrcode() {
            this.$nextTick (() => {
                let qrcode = new QRCode("qrcode", {
                    width: 232, // 设置宽度
                    height: 232, // 设置高度
                    text: "https://zhlsqj.com/#/destroyTicket?id="+ this.orderData.id
                });
            })
        },
        showQrcode() {
            if(!this.hasDestroy){
                Toast("请于预约日期当天使用");
                return
            }
            this.QrcodeManage = !this.QrcodeManage;
            this.qrcode()
        },
        getOrderData() {
            axios
                .request({
                    url: "order/orders/" + localStorage.getItem("ticketId"),
                    method: "post",
                    data: {
                        type: "ticket"
                    }
                })
                .then(res => {
                    this.orderData = res.data[0];
                    this.show = true;
                    if((new Date(this.orderData.fan_ticket[0].booking_date).getTime() > new Date().getTime()) && this.use_state > -1){
                        this.hasRefun = true
                    }
                    if((new Date(this.orderData.fan_ticket[0].booking_date).getDate() === new Date().getDate())){
                        this.hasDestroy = true
                    }
                    // console.log(new Date(this.orderData.fan_ticket[0].booking_date));
                    // console.log((new Date(this.orderData.fan_ticket[0].booking_date).getDate()));
                    // console.log((new Date().getDate()));
                    // console.log(new Date(new Date().getTime()+86400000));
                    
                });
        },
        payOrder() {
            axios
                .request({
                    url: "wechat/unify",
                    method: "post",
                    data: {
                        id: this.orderData.id
                    }
                })
                .then(res => {
                    this.config = res.payment;
                    this.onBridgeReady();
                });
        },
        //请求支付
        onBridgeReady() {
            var that = this
            
            WeixinJSBridge.invoke("getBrandWCPayRequest", this.config, function(
                res
            ) {
                if (res.err_msg == "get_brand_wcpay_request:ok") {
                    Toast("支付成功");
                    that.$router.push("/ticketOrderList");
                    // that.getOrderData()
                    // console.log('返回了ok提示：');
                    // console.log(res);

                    // 使用以上方式判断前端返回,微信团队郑重提示：
                    //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
                } else {
                    // console.log('失败');
                    Toast("支付失败,请重试！");
                    // that.$router.push("/ticketOrderList");
                    // console.log(res);
                }
            });
            if (typeof WeixinJSBridge == "undefined") {
                if (document.addEventListener) {
                    document.addEventListener(
                        "WeixinJSBridgeReady",
                        onBridgeReady,
                        false
                    );
                } else if (document.attachEvent) {
                    document.attachEvent("WeixinJSBridgeReady", onBridgeReady);
                    document.attachEvent(
                        "onWeixinJSBridgeReady",
                        onBridgeReady
                    );
                }
            } else {
                onBridgeReady();
            }
        },

        cancelOrder() {
            axios
                .request({
                    url: "order/cancel/" + localStorage.getItem("ticketId"),
                    method: "get"
                })
                .then(res => {
                    console.log(res);
                    Toast("取消订单成功");
                    this.intoOrderList();
                });
        },
        returnOrder() {
            if(this.orderData.fan_ticket[0].booking_date){

            }
            axios
                .request({
                    url: "order/refund/" + localStorage.getItem("ticketId"),
                    method: "get"
                })
                .then(res => {
                    Toast("已提交退款申请");
                });
        },

        //回到订单列表
        intoOrderList() {
            this.$router.push({ path: "/ticketOrderList" });
        }
    },
    mounted() {
        
        this.getOrderData();
        
    }
};
</script>

<style lang='less'>
.subscribeModal {
    width: 80%;
    padding-bottom: 20px;
    border-radius: 15px;
}
.qrcodeText {
    text-align: center;
    font-size: 18px;
    color: #333;
}
#qrcode {
    display: block;
    margin: 0 auto;
    // width: 80%;
    // height: auto;
    img{
        display: block;
        margin: 0 auto;
    }
}
.detail-page {
    position: absolute;
    width: 100%;
    height: calc(100% - 50px - 40px);
    border-radius: 10px;
    overflow-x: hidden;
    overflow-y: scroll;
    margin: 0px auto 5px;
    background: #fff;
    &-title {
        position: fixed;
        z-index: 1000;
        overflow: hidden;
        display: block;
        height: 50px;
        width: 100%;
        background: #f44;
        color: #fff;
        font-size: 18px;
        // font-weight: bold;
        line-height: 50px;
        padding-left: 20px;
        top: 0;
        margin-top: 0;
        margin-bottom: 0;
        text-align: left;
    }
    &-conter {
        margin-top: 10px;
        width: 95%;
        height: 110px;
        overflow: hidden;
        &-img {
            margin: 10px 10px 0 10px;
            width: 100px;
            height: 100px;
            border-radius: 5px;
            float: left;
            overflow: hidden;
            img {
                width: 100px;
                height: 100px;
            }
        }
        &-text {
            float: right;
            font-size: 14px;
            line-height: 20px;
            text-align: left;
            width: calc(100% - 100px - 20px);
            height: 90px;
            p {
                padding-left: 10px;
            }
            &-name {
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                height: 20px;
                margin: 10px 0;
            }
            &-remark {
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                color: #aaa;
                margin: 0 0;
                height: 20px;
            }
            &-price {
                &-price {
                    color: #f44;
                    float: right;
                }
                &-piece {
                    padding-left: 10px;
                    padding-right: 10px;
                    color: #aaa;
                    float: right;
                    font-size: 12px;
                    line-height: 22px;
                }
            }
        }
    }
    &-click {
        width: 100%;
        height: 40px;
        position: fixed;
        background: #fff;
        bottom: 50px;
        border-top: 1px solid #f2f2f2;
        border-bottom: 1px solid #f2f2f2;
        &-p {
            display: block;
            width: 40%;
            float: left;
            height: 40px;
            margin-top: 0;
            line-height: 40px;
            &-allText {
                float: left;
                font-size: 14px;
                color: #666;
                margin-left: 10px;
            }
            &-allPrice {
                float: left;
                margin-left: 10px;
                margin-right: 10px;
                font-size: 14px;
                color: #f44;
            }
        }
        &-qrcode {
            float: right;
            margin-right: 10px;
            margin-top: 5px;
        }
        &-intoDefail {
            margin-right: 10px;
            float: right;
            margin-top: 5px;
        }
    }
    &-detail {
        width: 100%;
        padding-bottom: 10px;
        overflow: hidden;
        margin-top: 10px;
        &-p {
            height: 20px;
            margin: 5px 0;
            &-text {
                float: left;
                font-size: 14px;
                color: #aaa;
                margin-left: 10px;
            }
            &-price {
                float: right;
                margin-right: 10px;
                font-size: 14px;
                color: #aaa;
            }
            &-allText {
                float: left;
                font-size: 14px;
                color: #666;
                margin-left: 10px;
            }
            &-allPrice {
                float: right;
                margin-right: 10px;
                font-size: 14px;
                color: #f44;
            }
        }
        &-hen {
            border-bottom: 1px solid #ddd;
            border-top: none;
            display: block;
            width: 95%;
            margin: 10px auto;
        }
    }
}
</style>