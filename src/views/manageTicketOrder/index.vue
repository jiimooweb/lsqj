<template>
    <div class="order">
        <!-- <p class="order-title">
            <span>我的订单</span>
        </p> -->
        <van-tabs v-model="orderType" class="order-tab" @change="changeIndex">
            <van-tab :title="item.label" v-for="(item,index) in orderText" :key='index'></van-tab>
        </van-tabs>
        <van-list v-model="loading" :finished="finished" finished-text="没有更多数据" @load="onLoad" class="order-list">
            <div class="order-list-item" v-for='(item,index) in orderList' :key='index'>
                <div class="order-list-item-conter">
                    <div class="order-list-item-conter-img">
                        <img :src="item.fan_ticket[0].ticket.cover">
                    </div>
                    <div class="order-list-item-conter-text">
                        <p class="order-list-item-conter-text-name">{{item.fan_ticket[0].ticket.name}}</p>
                        <p class="order-list-item-conter-text-price">
                            <span class="order-list-item-conter-text-price-price">姓名：{{item.fan_ticket[0].name}}</span>
                            <span class="order-list-item-conter-text-price-price">电话：{{item.fan_ticket[0].mobile}}</span>
                            <span class="order-list-item-conter-text-price-price">预定日期：{{item.fan_ticket[0].booking_date}}</span>
                            <!-- <span class="order-list-item-conter-text-price-piece">{{orderList[index].order_goods |
                                returnNum}}</span> -->
                        </p>
                    </div>
                </div>
                <div class="order-list-item-click">
                    <!-- <van-button class="order-list-item-click-intoDefail" round type="default" size="small" @click="inOrderDetail(item.id)">订单详情</van-button> -->
                    <!-- <van-button class="order-list-item-click-qrcode" v-if="item.pay_state === 1" round type="default" size="small">核销二维码</van-button> -->
                </div>
            </div>
            <p v-if="orderList.length === 0" class="noData">没有更多数据</p>
        </van-list>
    </div>
</template>

<script>
import { List, Tab, Tabs, Button } from "vant";
import axios from "../../public/axios";

export default {
    components: {
        [Tab.name]: Tab,
        [List.name]: List,
        [Tabs.name]: Tabs,
        [Button.name]: Button
    },
    data() {
        return {
            isLast:false,
            currentIndex:0,
            loading:false,
            finished:false,
            orderType: 0,
            orderText: [
                {
                    label: "全部",
                    key: "-2"
                },
                {
                    label: "未支付",
                    key: "0"
                },
                {
                    label: "已支付",
                    key: "1"
                },
                {
                    label: "已使用",
                    key: "1"
                }
            ],
            orderList: [],
            img:
                "https://camo.githubusercontent.com/8ef9e5d3ef085affbcabf7754b02312a4ea10039/68747470733a2f2f696d672e797a63646e2e636e2f7075626c69635f66696c65732f323031372f31322f31382f66643738636636626235643132653261313139643035373662656466643233302e706e67"
        };
    },
    filters: {
        returnNum: function(ol) {
            let result = 0;
            for (let i = 0; i < ol.length; i++) {
                result += ol[i].num;
            }
            return "合计：" + result + "件";
        }
    },
    methods: {
        onLoad(){
            if(!this.isLast){
                this.currentIndex++
                this.getOrder(0)
            }
            this.finished = this.isLast
            this.loading = false
        },
        inOrderDetail(id) {
            localStorage.setItem('ticketId',id)
            this.$router.push("/ticketOrderDetail");
        },
        changeIndex(index){
            this.isChangeIndex = true
            this.getOrder(index)
        },
        getOrder(index) {
            let pay, use, url;
            if (index === 1) {
                pay = 0;
                use = 0;
            } else if (index === 2) {
                pay = 1;
                use = 0;
            } else if(index === 3) {
                pay = 1;
                use = 1;
            }else{
                pay = '';
                use = '';
            }
            console.log(index);
            
            if (index === 0) {
                //全部
                axios
                    .request({
                        url: "order/tickets?pay_state="+ pay + "&use_state="+ use +"&page=" + this.currentIndex,
                        method: "get",
                    })
                    .then(res => {
                        // console.log(res);
                        
                        if(this.isChangeIndex){
                            this.orderList = [];
                        }
                        
                        for (let i = 0; i < res.data.data.length; i++) {
                            this.orderList.push(res.data.data[i]);
                        }
                        if(res.data.current_page === res.data.last_page){
                            this.isLast = true
                            this.loading = false
                        }
                        this.isChangeIndex = false
                    });
            } else {
                axios
                    .request({
                        url: "tickets/filter?page=" +this.currentIndex,
                        method: "post",
                        data: {
                            type:'ticket',
                            pay_state: pay,
                            use_state: use
                        }
                    })
                    .then(res => {
                        if(this.isChangeIndex){
                            this.orderList = [];
                        }
                        for (let i = 0; i < res.data.data.length; i++) {
                            this.orderList.push(res.data.data[i]);
                        }
                        if(res.data.current_page === res.data.last_page){
                            this.isLast = true
                            this.loading = false
                        }
                        this.isChangeIndex = false
                    });
            }
        }
    },
    mounted() {
        this.orderList = [];
        // this.getOrder(1);
    }
};
</script>

<style lang="less">
.order {
    width: 100%;
    height: 100%;
    overflow: hidden;
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
        margin-top: 0;
        text-align: left;
    }
    &-tab {
        // margin-top: 50px;
    }
    &-list {
        position: absolute;
        width: 100%;
        height: calc(100% - 50px);
        left: 0;
        padding-bottom: 10px;
        overflow-y: scroll;
        overflow-x: hidden;
        margin: 0 auto 0;
        background: #f5f5f5;
        &-item {
            width: 90%;
            height: 150px;
            border-radius: 10px;
            margin: 10px auto 5px;
            background: #fff;
            &-conter {
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
                        height: 20px;
                    }
                    &-price {
                        &-price {
                            color: #aaa;
                            float: left;
                            width: 100%;
                            // padding-left: 10px;
                        }
                        &-piece {
                            color: #aaa;
                            float: left;
                            width: 100%;
                            font-size: 12px;
                            line-height: 22px;
                        }
                    }
                }
            }
            &-click {
                width: 100%;
                height: 40px;
                &-qrcode {
                    float: right;
                    margin-right: 10px;
                }
                &-intoDefail {
                    margin-right: 10px;
                    float: right;
                }
            }
        }
    }
}
.noData{
    font-size: 16px;
}
</style>