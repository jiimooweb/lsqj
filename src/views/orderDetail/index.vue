<template>
    <div class="detail-page">
        <!-- <p class="detail-page-title">
            <span>订单详情</span>
        </p> -->
        <div
            class="detail-page-conter"
            v-for="(item,index) in orderData.order_goods"
            :key='index'
        >
            <div class="detail-page-conter-img">
                <img :src="orderData.goods[index].imgs[0].url">
            </div>
            <div class="detail-page-conter-text">
                <p class="detail-page-conter-text-name">{{orderData.goods[index].name}}</p>
                <p class="detail-page-conter-text-price">
                    <span class="detail-page-conter-text-price-piece">×{{item.num}}</span>
                    <span class="detail-page-conter-text-price-price">¥{{item.price}}</span>
                </p>
            </div>
        </div>
        <div class="detail-page-click">
            <p
                class="timeOut"
                v-if='isShowTime'
            >注意：订单支付后剩余可使用时间：{{time}}</p>
            <p
                class="timeOut"
                v-if='isTime'
            >注意：该订单已不可使用</p>
            <p class="detail-page-click-p">
                <span class="detail-page-click-p-allText">订单总价</span>
                <span class="detail-page-click-p-allPrice">¥ {{this.orderData.price}}</span>
            </p>
            <van-button
                v-if="orderData.pay_state === 0 && !isTime"
                class="detail-page-click-intoDefail"
                round
                type="danger"
                size="small"
                @click="payOrder()"
            >支付</van-button>
            <van-button
                v-if="orderData.pay_state === 1 && orderData.use_state === 0"
                class="detail-page-click-intoDefail"
                round
                type="warning"
                size="small"
                @click="returnOrder()"
            >申请退款</van-button>
            <van-button
                v-if="orderData.pay_state === 1 && orderData.use_state === 0 && !isTime"
                class="detail-page-click-qrcode"
                round
                type="primary"
                size="small"
            >核销二维码</van-button>
            <van-button
                v-if="orderData.pay_state === 0"
                class="detail-page-click-intoDefail"
                round
                type="warning"
                size="small"
                @click="cancelOrder()"
            >取消订单</van-button>
        </div>
        <p class="detail-page-detail-hen"></p>
        <div class="detail-page-detail">
            <!-- discount_type 0 无 -->
            <p class="detail-page-detail-p">
                <span class="detail-page-detail-p-text">商品总价</span>
                <span class="detail-page-detail-p-price">¥ {{orderData.price}}</span>
            </p>
            <!-- discount_type 1 满减 -->
            <p class="detail-page-detail-p">
                <span class="detail-page-detail-p-text">满减</span>
                <span class="detail-page-detail-p-price">- ¥ {{orderData.discount}}</span>
            </p>
            <!-- discount_type 2 折扣 -->
            <p class="detail-page-detail-p">
                <span class="detail-page-detail-p-text">折扣</span>
                <span class="detail-page-detail-p-price">- ¥ {{orderData.discount}}</span>
            </p>
            <!-- <p class="detail-page-detail-hen"></p> -->
            <!-- <p class="detail-page-detail-p">
                <span class="detail-page-detail-p-allText">订单总价</span>
                <span class="detail-page-detail-p-allPrice">¥ {{this.orderData.price}}</span>
            </p> -->
        </div>
    </div>
</template>

<script>
import { Button, Toast, Dialog } from "vant";
import axios from "../../public/axios";
import wxApi from "../../public/wx.js";
const wxa = new wxApi();
export default {
    components: {
        [Button.name]: Button,
        [Toast.name]: Toast,
        [Dialog.name]: Dialog
    },
    data() {
        return {
            time: "0 天 0 小时 0 分钟 0 秒 ",
            isTime: false,
            isShowTime: false,
            orderData: "",
            config: ""
        };
    },
    methods: {
        returnTime(t) {
            let mss = new Date(t).getTime() - new Date().getTime();
            if (mss < 0) {
                this.isTime = true;
                return;
            }
            var days = parseInt(mss / (1000 * 60 * 60 * 24));
            var hours = parseInt(
                (mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            var minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = parseInt((mss % (1000 * 60)) / 1000);
            this.time =
                days +
                " 天 " +
                hours +
                " 小时 " +
                minutes +
                " 分钟 " +
                seconds +
                " 秒 ";
        },
        getOrderData() {
            axios
                .request({
                    url: "order/orders/" + this.$route.query.id,
                    method: "post",
                    data: {
                        type: "mall"
                    }
                })
                .then(res => {
                    this.orderData = res.data[0];
                    console.log(this.orderData);
                });
            axios
                .request({
                    url: "order/deadlines/new",
                    method: "get"
                })
                .then(res => {
                    console.log(res);
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
                    // wxa.wxInit(localStorage.getItem("token"), this.config, location.href);
                    this.onBridgeReady();
                });
        },
        //请求支付
        onBridgeReady() {
            var that = this;
            WeixinJSBridge.invoke("getBrandWCPayRequest", this.config, function(
                res
            ) {
                if (res.err_msg == "get_brand_wcpay_request:ok") {
                    Toast("成功~");
                    // console.log('返回了ok提示：');
                    // console.log(res);
                    that.getOrderData();
                    // 使用以上方式判断前端返回,微信团队郑重提示：
                    //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
                } else {
                    // console.log('失败');
                    Toast("失败~");
                    // console.log(res);
                }
            });
            // if (typeof WeixinJSBridge == "undefined") {
            //     if (document.addEventListener) {
            //         document.addEventListener(
            //             "WeixinJSBridgeReady",
            //             onBridgeReady,
            //             false
            //         );
            //     } else if (document.attachEvent) {
            //         document.attachEvent("WeixinJSBridgeReady", onBridgeReady);
            //         document.attachEvent(
            //             "onWeixinJSBridgeReady",
            //             onBridgeReady
            //         );
            //     }
            // } else {
            //     onBridgeReady();
            // }
        },
        // 获取当前订单是否有付款期限
        getOrderTime() {
            axios
                .request({
                    url: "order/deadlines/new",
                    method: "get"
                })
                .then(res => {
                    if (res.data.type === "date") {
                        this.isShowTime = true;
                        let t = res.data.date;
                        this.returnTime(t);
                        setInterval(() => {
                            this.returnTime(t);
                        }, 1000);
                    } else {
                        this.isShowTime = false;
                    }
                });
        },
        cancelOrder() {
            Dialog.confirm({
                title: "确认",
                message: "是否确认取消当前订单?"
            })
                .then(() => {
                    axios
                        .request({
                            url: "order/cancel/" + this.orderData.id,
                            method: "get"
                        })
                        .then(res => {
                            Toast("取消成功");
                            this.$router.push({ name: "order" });
                        });
                })
                .catch(() => {
                    // on cancel
                });
        },
        // 申请退款
        returnOrder() {}
    },
    mounted() {
        this.getOrderData();
        this.getOrderTime();
    }
};
</script>

<style lang='less'>
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
                height: 40px;
            }
            &-price {
                &-price {
                    color: #f44;
                    float: right;
                }
                &-piece {
                    padding-left: 10px;
                    color: #aaa;
                    float: right;
                    font-size: 12px;
                    line-height: 22px;
                }
            }
        }
    }
    .timeOut {
        height: 30px;
        background: #f44;
        font-size: 12px;
        position: fixed;
        width: 100%;
        color: #fff;
        line-height: 30px;
        bottom: 90px;
        margin: 0;
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