<template>
    <div class='page'>
        <van-tabs v-model="tabIndex" style="margin-top:10px;">
            <van-tab title="未使用">
                <div class="listPage">
                    <div class="item">
                        <div class="itemContent">
                            <p class="itemContent-title">5元优惠使用券</p>
                            <p class="itemContent-time">请在 <span class="time">2019-1-1</span> 前使用</p>
                        </div>
                        <div class="itemUse">
                            兑
                        </div>      
                    </div>
                </div>
            </van-tab>
            <van-tab title="已使用">
                
            </van-tab>
            <van-tab title="已过期">
                
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import { Dialog, Tab, Tabs, CouponCell, CouponList  } from "vant";
import Vue from "vue";
Vue.use(Tab).use(Tabs);
Vue.use(Dialog);
import axios from "../../public/axios.js";
import Token from "../../public/util.js";
const token = new Token();
    export default {
        data(){
            return{
                tabIndex:0,
            }
        },
        methods:{
            getCouponsList(){
                axios.request({
                    url:'coupon/records/get-user-coupons',
                    method:'get'
                }).then(res=>{
                    console.log(res);
                })
            }
        },
        mounted(){
            token.initToken(this.$route.query.token);
            this.getCouponsList()
        }
    }
</script>

<style lang='less'>
.page{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    overflow-x: hidden;
    overflow-y: scroll;
    background: #f3f3f3;
}
.listPage{
    width: 90%;
    margin: 10px auto 0;
    .item{
        height: 100px;
        .itemContent{
            width: calc(80% - 1px);
            float: left;
            border-radius: 10px;
            background: #fff;
            height: 100px;
            &-title{
                text-align: left;
                font-size: 16px;
                padding: 0 20px;
                line-height: 50px;
                margin: 0;
            }
            &-time{
                font-size: 12px;
                color: #666;
                text-align: left;
                padding: 0 20px;
                line-height: 50px;
                margin: 0;
                .time{
                    font-size: 12px;
                    color: red;
                }
            }
        }
        .itemUse{
            width: calc(20% - 1px);
            border-radius: 10px;
            border-left:1px dashed #fff;
            float: right;
            height: 100px;
            background: #fff;
            font-size: 16px;
            line-height: 100px;
            text-align: center;
            color: red;
        }
    }
}
</style>