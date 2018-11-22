<template>
    <div class="detail-page">
        <p class="detail-page-title">
            <span>订单详情</span>
        </p>
        <div class="detail-page-conter" v-for="(item,index) in 5" :key='index'>
            <div class="detail-page-conter-img">
                <img :src="img">
            </div>
            <div class="detail-page-conter-text">
                <p class="detail-page-conter-text-name">苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果</p>
                <p class="detail-page-conter-text-price">
                    <span class="detail-page-conter-text-price-piece">×2</span>
                    <span class="detail-page-conter-text-price-price">¥12</span>
                </p>
            </div>
        </div>
        <div class="detail-page-click">
            <van-button class="detail-page-click-intoDefail" round type="default" size="small" @click="getOrder()">申请退款</van-button>
            <van-button class="detail-page-click-qrcode" round type="default" size="small">核销二维码</van-button>
        </div>
        <div class="detail-page-detail">
            <p class="detail-page-detail-p">
                <span class="detail-page-detail-p-text">商品总价</span>
                <span class="detail-page-detail-p-price">¥ 52</span>
            </p>
            <p class="detail-page-detail-p">
                <span class="detail-page-detail-p-text">满减</span>
                <span class="detail-page-detail-p-price">¥ 52</span>
            </p>
            <p class="detail-page-detail-p">
                <span class="detail-page-detail-p-text">折扣</span>
                <span class="detail-page-detail-p-price">¥ 52</span>
            </p>
            <p class="detail-page-detail-hen"></p>
            <p class="detail-page-detail-p">
                <span class="detail-page-detail-p-allText">订单总价</span>
                <span class="detail-page-detail-p-allPrice">¥ 52</span>
            </p>
        </div>
    </div>
</template>

<script>
import { Button } from "vant";
export default {
    components: {
        [Button.name]: Button
    },
    data() {
        return {
            img:
                "https://camo.githubusercontent.com/8ef9e5d3ef085affbcabf7754b02312a4ea10039/68747470733a2f2f696d672e797a63646e2e636e2f7075626c69635f66696c65732f323031372f31322f31382f66643738636636626235643132653261313139643035373662656466643233302e706e67"
        };
    }
};
</script>

<style lang='less'>
.detail-page {
    position: absolute;
    width: 100%;
    height: calc(100% - 50px - 50px - 40px);
    border-radius: 10px;
    overflow-x: hidden;
    overflow-y: scroll;
    margin: 50px auto 5px;
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
        border-top:1px solid #f2f2f2;
        border-bottom:1px solid #f2f2f2;
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
        &-p {
            height: 20px;
            margin: 0;
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