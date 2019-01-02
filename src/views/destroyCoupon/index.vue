<template>
    <div class="page">
        <div class="nullAdmin" v-if='isAdmin !== 1'>

        </div>
        <div class="isadmin" v-else>
            <div class="user">
                <img :src="data.fan.headimgurl">
                <p>{{data.fan.nickname}}</p>
            </div>
            <div class="coupon">
                <div class="content">
                    <p class="content-title">{{data.coupon.name}}</p>
                    <p class="content-time"><span class="time">{{data.end_time}}</span> 前可用</p>
                </div>
                <div class="hasUse">
                    <p v-if="data.status === 0">有效</p>
                    <p v-else>已使用</p>
                </div>
            </div>
            <van-button size="large" type="primary" style="width:90%; margin-top:50px;" @click="showDialog()" :disabled='data.status === 1'>确认核销</van-button>
        </div>
    </div>
</template>

<script>
import { Button,Dialog,Toast  } from "vant";
import Vue from "vue";
Vue.use(Dialog);
Vue.use(Button);
Vue.use(Toast);
import axios from "../../public/axios.js";
import Token from "../../public/util.js";
const token = new Token();
export default {
    data() {
        return {
            isAdmin: 0,
            isDestroy: false,
            hasData: false,
            data: {}
        };
    },
    methods: {
        showDialog() {
            Dialog.confirm({
                // title: "核销奖券",
                message: "是否核销这张奖券？"
            })
                .then(() => {
                    this.destroyData()
                    // on confirm
                })
                .catch(() => {
                    // on cancel
                });
        },
        getCUData() {
            axios
                .request({
                    url:
                        "coupon/records/verification?record_id=" +
                        this.$route.query.id,
                    method: "get"
                })
                .then(res => {
                    this.getUesr();
                    this.data = res.record;
                });
        },
        destroyData() {
            axios
                .request({
                    url:
                        "coupon/records/confirm?record_id=" +
                        this.$route.query.id,
                    method: "get"
                })
                .then(res => {
                    this.getCUData()
                    Toast.success('核销成功');
                });
        },
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
                    this.isAdmin = res.data.admin === null ? 0 : 1;
                });
        }
    },
    mounted() {
        token.initToken(this.$route.query.token);
        this.getCUData();
    }
};
</script>

<style lang='less'>
.page {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .user {
        width: 100%;
        height: 120px;
        margin-top: 20px;
        img {
            border-radius: 50%;
            width: 100px;
            height: 100px;
            display: block;
            margin: 0 auto;
        }
        p {
            font-size: 16px;
            line-height: 20px;
        }
    }
    .coupon {
        width: 80%;
        margin: 0 auto;
        height: 100px;
        margin-top: 35px;
        .content {
            width: calc(80% - 3px);
            float: left;
            height: 100px;
            background: url("../../assets/left.png") no-repeat center;
            background-size: 100% 100%;
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
        .hasUse {
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
            p {
                line-height: 100px;
                margin: 0;
                padding: 0;
            }
        }
    }
}
</style>