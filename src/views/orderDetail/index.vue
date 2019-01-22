<template>
    <div class="detail-page">
        <!-- <p class="detail-page-title">
            <span>订单详情</span>
        </p> -->
        <div class="detail-page-conter" v-for="(item,index) in orderData.order_goods" :key='index'>
            <div class="detail-page-conter-img">
                <img :src="orderData.goods[index].imgs[0].url">
            </div>
            <div class="detail-page-conter-text">
                <p class="detail-page-conter-text-name">{{orderData.goods[index].name}}</p>
                <p class="detail-page-conter-text-price">
                    <span class="detail-page-conter-text-price-piece">×{{item.num}}</span>
                    <span class="detail-page-conter-text-price-price">¥{{item.discount}}</span>
                </p>
            </div>
        </div>
        <div class="detail-page-click">
            <p class="detail-page-click-p">
                <span class="detail-page-click-p-allText">订单总价</span>
                <span class="detail-page-click-p-allPrice">¥ {{this.orderData.price}}</span>
            </p>
            <van-button v-if="orderData.pay_state === 0" class="detail-page-click-intoDefail" round type="danger" size="small" @click="getOrder()">支付</van-button>
            <van-button v-if="orderData.pay_state === 1 && use_state === 0" class="detail-page-click-qrcode" round type="primary" size="small">核销二维码</van-button>
            <van-button v-if="orderData.pay_state === 0" class="detail-page-click-intoDefail" round type="warning" size="small" @click="getOrder()">取消订单</van-button>
            <van-button v-if="orderData.pay_state === 1 && use_state === 0" class="detail-page-click-intoDefail" round type="warning" size="small" @click="getOrder()">申请退款</van-button>
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
import { Button } from "vant";
import axios from "../../public/axios";
export default {
    components: {
        [Button.name]: Button
    },
    data() {
        return {
            orderData: ""
        };
    },
    methods: {
        getOrderData() {
            axios
                .request({
                    url: "order/orders/" + this.$route.query.id,
                    method: "get"
                })
                .then(res => {
                    this.orderData = res.data[0];
                });
        }
    },
    mounted() {
        this.getOrderData();
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
            height:40px;
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