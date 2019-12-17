<template>
    <div class='page'>
        <van-tabs v-model="tabIndex">
            <van-tab title="未使用">
                <p
                    v-if="this.useCouponsList.length===0"
                    style='font-size:14px;color:#999;'
                >暂无卡券</p>
                <div
                    class="listPage"
                    v-else
                >
                    <div
                        class="item"
                        v-for="(item,index) in useCouponsList"
                        :key='index'
                    >
                        <div :class="'itemContent ' + (item.coupon.type === 1?'':'i1')">
                            <p class="itemContent-title">{{item.coupon.name}}</p>
                            <p class="itemContent-time">请在 <span class="time">{{item.end_time}}</span> 前使用</p>
                        </div>
                        <div :class="'itemUse ' + (item.coupon.type === 1?'':'i1')">
                            <van-button
                                round
                                type="danger"
                                size='mini'
                                @click="showManage(index)"
                            >使用</van-button>
                        </div>
                    </div>
                </div>
            </van-tab>
            <van-tab title="已使用">
                <p
                    v-if="this.usedCouponsList.length===0"
                    style='font-size:14px;color:#999;'
                >暂无卡券</p>
                <div
                    class="listPage"
                    v-else
                >
                    <div
                        class="item"
                        v-for="(item,index) in usedCouponsList"
                        :key='index'
                    >
                        <div :class="'itemContent ' + (item.coupon.type === 1?'':'i1')">
                            <p class="itemContent-title">{{item.coupon.name}}</p>
                            <p class="itemContent-time">已在 <span class="time">{{item.use_time}}</span> 使用</p>
                        </div>
                        <div :class="'itemUse ' + (item.coupon.type === 1?'':'i1')">
                            <van-button
                                round
                                type="danger"
                                size='mini'
                                @click="showManage(index)"
                                disabled
                            >使用</van-button>
                        </div>
                    </div>
                </div>
            </van-tab>
        </van-tabs>
        <van-popup
            v-model="QrcodeManage"
            class="subscribeModal"
            v-if="QrcodeManage"
        >
            <p class="qrcodeText">{{currentData.coupon.name}}</p>
            <div
                id="qrcode"
                v-if="QrcodeManage"
                ref="qrcode"
            ></div>
            <p
                class="qrcodeText"
                style="font-size:14px;"
            >请给管理员展示此二维码进行核销</p>
        </van-popup>
    </div>
</template>

<script>
import { Dialog, Tab, Tabs, CouponCell, CouponList, Button, Popup } from "vant";
import Vue from "vue";
// import VueQArt from "vue-qart";
Vue.use(Tab).use(Tabs);
Vue.use(Dialog);
Vue.use(Button);
import QRCode from "qrcodejs2";
import axios from "../../public/axios.js";
import Token from "../../public/util.js";
import baseURL from "../../../config/url";
const token = new Token();
export default {
    components: {
        // VueQArt,
        [Popup.name]: Popup,
        QRCode
    },
    data() {
        return {
            QrcodeManage: false,
            tabIndex: 0,
            currentData: {
                id: "",
                title: "5元优惠券"
            },
            useCouponsList: [],
            usedCouponsList: [],
            currentId: ""
        };
    },
    methods: {
        qrcode(index) {
            this.$nextTick(() => {
                let qrcode = new QRCode("qrcode", {
                    width: 232, // 设置宽度
                    height: 232, // 设置高度
                    text: baseURL + "#/destroyCoupon?id=" + this.currentId
                });
            });
        },
        showManage(index) {
            this.currentId = this.useCouponsList[index].id;
            this.currentData = this.useCouponsList[index];
            this.QrcodeManage = !this.QrcodeManage;
            this.qrcode(index);
        },
        getCouponsList() {
            axios
                .request({
                    url: "coupon/records/get-user-coupons",
                    method: "get"
                })
                .then(res => {
                    this.useCouponsList = res.use;
                    this.usedCouponsList = res.used;
                });
        }
    },
    mounted() {
        token.initToken(this.$route.query.token);
        this.getCouponsList();
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
    img {
        display: block;
        margin: 0 auto;
    }
}
.page {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    overflow-x: hidden;
    overflow-y: scroll;
    background: #f3f3f3;
}
.listPage {
    width: 90%;
    margin: 10px auto 0;
    .item {
        height: 100px;
        margin-top: 35px;
        .itemContent.i1 {
            // background: url('../../assets/left1.png') no-repeat center;
        }
        .itemContent {
            width: calc(80% - 3px);
            float: left;
            height: 100px;
            background: url("../../assets/left.png") no-repeat center;
            background-size: 100% 100%;
            // border-radius: 10px;
            // border: 1px solid #ddd;
            &-title {
                text-align: left;
                font-size: 16px;
                padding: 0 20px;
                line-height: 60px;
                margin: 0;
                color: #fff;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            &-time {
                font-size: 12px;
                color: #fff;
                text-align: left;
                padding: 0 20px;
                line-height: 30px;
                margin: 0;
                .time {
                    font-size: 12px;
                    color: #f44;
                }
            }
        }
        .itemUse.i1 {
            // background: url('../../assets/right1.png') no-repeat center;
        }
        .itemUse {
            width: calc(20% - 1px);
            // border-radius: 10px;
            // border: 1px solid #ddd;
            float: left;
            height: 100px;
            background: url("../../assets/right.png") no-repeat center;
            background-size: 100% 100%;
            font-size: 16px;
            line-height: 100px;
            text-align: center;
            color: red;
        }
    }
}
</style>