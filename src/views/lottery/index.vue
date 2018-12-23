<template>
    <div>
        <div class="turnPage">
            <div class="btnPage">
                <p class='rule' @click="showRule">抽奖规则</p>
                <p class="prize" @click="showPrize">奖品池</p>
            </div>
            <img class="turnPic" :src="turn_img">
            <img :class="'pointPic ' + (rotateClass?'rotate':'')" :style="'transform: rotate('+this.deg+'deg)'" :src="pointer_img"
                @click="getResult()">
            <p class="clickTip" v-show='!isTurn' @click="getResult()">GO!</p>
            <p class="number" v-if="lotteryData !== ''">所剩积分：{{lotteryData.fan_data.number}}</p>
        </div>
        <van-dialog v-model="ruleDialog" class="rulePage">
            <p class="title">抽奖规则</p>
            <div class="ruleText">
                <p>1.xxxxxxxxxxxxxxxxxxxxx</p>
                <p>2.xxxxxxxxxxxxxxxxxxxxx</p>
                <p>3.xxxxxxxxxxxxxxxxxxxxx</p>
                <p>4.xxxxxxxxxxxxxxxxxxxxx</p>
                <p>5.xxxxxxxxxxxxxxxxxxxxx</p>
            </div>
        </van-dialog>
        <van-dialog v-model="prizeDialog" class="rulePage">
            <p class="title">奖品池</p>
            <div class="ruleText">
                <p v-for="(item,index) in lotteryData.prizes" v-if="item.coupon_id !== 0" :key='index'>第{{index+1}}等奖：{{item.coupon.name}}</p>
            </div>
        </van-dialog>
    </div>
</template>

<script>
import { Dialog } from "vant";
import Vue from "vue";
Vue.use(Dialog);
import axios from "../../public/axios.js";
import Token from "../../public/util.js";
const token = new Token();
import wxApi from "../../public/wx.js";
const wxa = new wxApi();
export default {
    components: {
        // [Dialog.name]: Dialog
    },
    data() {
        return {
            turn_img: "",
            pointer_img: "",
            lotteryData: '',
            rotateClass: false,
            deg: 0,
            isTurn: false,
            hasNum: false,
            number: 0,
            ruleDialog:false,
            prizeDialog:false,
            userData:{}
        };
    },
    watch: {
        number() {
            this.number > 0 ? (this.hasNum = true) : (this.hasNum = false);
        }
    },
    methods: {
        //获取用户资料
        getUesr() {
            axios
                .request({
                    url: "user",
                    method: "get",
                    headers: {
                        token:
                            localStorage.getItem("token") ||
                            this.$route.query.token
                    }
                })
                .then(res => {
                    this.userData.nickname = res.data.nickname;
                    this.userData.headimgurl = res.data.headimgurl;
                    this.userData.id = res.data.id;
                    this.userData.admin = res.data.admin;
                    this.pageShow = true;
                    this.imgShow = true;
                    this.fx(location.href);
                })
        },
        fx(path) {
            // alert('开始设置config')
            let config = {
                title: lotteryData.activity.name, // 分享标题
                desc: lotteryData.activity.introduce, // 分享描述
                link: "https://zhlsqj.com/#/lottery", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: lotteryData.activity.img, // 分享图标
                success: function() {
                    // 分享成功
                    // Toast.success("分享成功");
                }
            };
            wxa.wxInit(localStorage.getItem("token"), config, path);
        },
        //显示规则
        showRule() {
            this.ruleDialog = true
        },
        //显示奖品
        showPrize() {
            this.prizeDialog = true
        },
        getLotteryData() {
            axios
                .request({
                    url: "lottery/fan/activity/1",
                    method: "get"
                })
                .then(res => {
                    this.lotteryData = res.data;
                    this.turn_img = this.lotteryData.activity.turn_img;
                    this.pointer_img = this.lotteryData.activity.pointer_img;
                });
        },
        getResult() {
            if (!this.hasNum && !this.isTurn) {
                Dialog.alert({
                    message: "积分不足，无法抽奖"
                }).then(() => {
                    // on close
                });
                return false;
            }
            if (this.isTurn) {
                return false;
            }
            this.isTurn = true;
            this.rotateClass = false;
            if(this.deg !== 0){
                this.deg = this.deg - 360 * 30;
            }
            console.log(this.deg);
            
            axios
                .request({
                    url: "lottery/result",
                    method: "post",
                    data: {
                        activity_id: 1
                    }
                })
                .then(res => {
                    this.rotateClass = true;
                    this.deg = res.data.result_prize.result_angle + 360 * 30;
                    setTimeout(() => {
                        Dialog.alert({
                            // message: res.data.result_prize.coupon_id === 0?"很遗憾没有中奖":"恭喜你获得 ’" +res.data.result_prize.coupon + "‘"
                            message: res.data.result_prize.coupon_id === 0?"很遗憾没有中奖":"恭喜你获得 ’" +res.data.result_prize.coupon.name + "‘"
                        }).then(() => {
                            // on close
                        });
                        this.isTurn = false;
                        console.log(this.isTurn);
                        
                    }, 4000);
                    this.getLotteryData();
                });
        }
    },
    mounted() {
        token.initToken(this.$route.query.token);
        this.getLotteryData();
        this.getUesr()
    }
};
</script>

<style lang='less'>
.rulePage{
    .title{
        font-size: 15px;
    }
    .ruleText{
        p{
            font-size: 14px;
            text-align: left;
            padding: 0 20px;
        }
    }
}
.turnPage {
    width: 100%;
    height: 100%;
    position: absolute;
    background: url("../../assets/lotteryBg.jpg") no-repeat center 0 #fe2045;
    background-size: 100% auto;
    .btnPage {
        position: absolute;
        width: 100%;
        top: 0;
        .rule {
            padding: 5px 10px;
            border: 1px solid #fff;
            border-radius: 5px;
            color: #fff;
            float: left;
            margin-left: 10px;
            font-size: 14px;
        }
        .prize {
            padding: 5px 10px;
            border: 1px solid #fff;
            border-radius: 5px;
            color: #fff;
            float: right;
            font-size: 14px;
            margin-right: 10px;
        }
    }
    .turnPic {
        width: 80%;
        display: block;
        margin: 55% auto 0;
    }
    .pointPic {
        width: 40%;
        display: block;
        margin: -60% auto 0;
    }
    .clickTip{
        margin-top: -22%;
        position: absolute;
        width: 100%;
        font-size: 20px;
        color:#000;
        font-weight: bold;
    }
    .number {
        position: fixed;
        font-size: 14px;
        bottom: 0;
        width: 100%;
        text-align: center;
        color: #fff;
    }
}
.rotate {
    transition: all 4s;
}
.van-dialog__message {
    text-align: center;
}
</style>