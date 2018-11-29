<template>
    <div
        class="sharePage"
        v-if="pageShow"
    >
        <div class="userImg">
            <img
                :src="indexData.headimgurl"
                v-if="imgShow"
            >
        </div>
        <div class="btnPage">
            <van-button
                type="warning"
                class="shareBtn"
                size="large"
                v-if="shareType === 'share' || userData.id == this.$route.query.id"
                @click="showFix(true)"
            >分享给别人</van-button>
            <van-button
                type="warning"
                class="shareBtn"
                size="large"
                v-if="shareType === 'beshare' && userData.id != this.$route.query.id"
                @click="getFollow()"
            >为他助力</van-button>
            <van-button
                type="warning"
                class="shareBtn"
                size="large"
                v-if="shareType === 'have'"
                @click="showFix(true)"
            >已助力，我也要分享</van-button>
            <van-button
                type="warning"
                class="shareBtn"
                size="large"
                v-if="shareType === 'record'"
                @click="userDataShow = true"
            >活动任务已完成,填写资料领取</van-button>
            <van-button
                type="warning"
                class="shareBtn"
                size="large"
                v-if="shareType === 'over'"
            >资料已填写</van-button>
        </div>
        <div class="shareMember">
            <p class="memberText">助力好友</p>
            <div class="helpList">
                <div
                    class="helpList-item"
                    v-for="(item,index) in helpList"
                    :key="index" v-if="helpList.length > 0"
                >
                    <img
                        :src="item.headimgurl"
                        class="helpList-item-img"
                    >
                    <p class="helpList-item-name">{{item.nickname}}</p>
                </div>
                <p class="helpList-p" v-else>暂无好友助力</p>
            </div>
        </div>
        <div class="shareText">
            <p>活动细则</p>
            <p>1、每个人只能为每位好友各助力一次</p>
            <p>2、满 {{shareNum}}个好友助力即可获得一次免费采摘机会</p>
            <p>3、自己无法给自己助力</p>
            <p>4、每个人只能完成一次任务</p>
            <p>5、完成分享任务后需填写相关资料，获取采摘机会</p>
            <p>6、到店时与店员确认使用该次机会</p>
        </div>
        <p class="shareTip">本活动最终解释权归绿水清江所有</p>
        <div
            class="shareFix"
            v-if="fixDisplay"
            @click="showFix(false)"
        >
            <p>点击右上角 ... 发送给朋友</p>
        </div>
        <van-dialog
            v-model="userDataShow"
            show-cancel-button
            @confirm="inputData()"
        >
            <van-field
                v-model="userCurrentData.name"
                label="姓名"
                placeholder="请输入姓名"
            />
            <van-field
                v-model="userCurrentData.phone"
                label="联系方式"
                placeholder="请输入联系方式"
            />
        </van-dialog>
    </div>
</template>

<script>
import { Field, Dialog, Toast, Button } from "vant";
import Vue from "vue";
Vue.use(Dialog);
import axios from "axios";
import Token from "../../public/util.js";
const token = new Token();

import wxApi from "../../public/wx.js";
const wxa = new wxApi();
export default {
    components: {
        [Button.name]: Button,
        [Toast.name]: Toast,
        [Field.name]: Field
    },
    data() {
        return {
            userDataShow: false,
            userCurrentData: {
                name: "",
                phone: ""
            },
            shareNum:1,
            url: "https://zhlsqj.com/",
            shareType: "share", //share 任务未开始 record 任务已完成 over填写完资料
            pageShow: false,
            fixDisplay: false,

            imgShow: false,
            indexData: {
                nickname: "",
                headimgurl: "",
                id: "",
                admin: ""
            },
            userData: {
                nickname: "",
                headimgurl: "",
                id: "",
                admin: ""
            },
            helpList: [
                {
                    name: 1,
                    url: ""
                }
            ]
        };
    },
    methods: {
        init() {
            console.log('init');
            
            token.initToken(this.$route.query.token);
            this.getShowAndBeShow();
        },
        showFix(i) {
            this.fixDisplay = i;
        },
        getShowAndBeShow() {
            console.log('getShowAndBeShow');
            
            if (
                this.$route.query.id != undefined &&
                this.userData.id != this.$route.query.id
            ) {
                //被分享着进入
                console.log('被分享');
                
                axios
                    .request({
                        url: this.url + "share/wx/beshow",
                        method: "post",
                        headers: {
                            token: localStorage.getItem("token")
                        },
                        data: {
                            share_id: this.$route.query.id
                        }
                    })
                    .then(res => {
                        this.shareType = res.data.data.flag;
                        this.shareNum = res.data.data.task_target
                        this.indexData.nickname =
                            res.data.data.share_data.nickname;
                        this.indexData.headimgurl =
                            res.data.data.share_data.headimgurl;
                        this.indexData.id = res.data.data.share_data.id;
                        this.indexData.admin = res.data.data.share_data.admin;
                        console.log(1);
                        this.getUesr();
                        this.helpList = [];
                        for (let i = 0; i < res.data.data.share.length; i++) {
                            this.helpList.push(res.data.data.share[i].beshare);
                        }
                        this.pageShow = true;
                    })
                    .catch(err => {
                        console.log(err);
                        token.getToken();
                    });
            } else {
                //分享者进入
                console.log('分享');
                axios
                    .request({
                        url: this.url + "share/wx/show",
                        method: "post",
                        headers: {
                            token: localStorage.getItem("token")
                        }
                    })
                    .then(res => {
                        this.shareType = res.data.data.flag;
                        this.shareNum = res.data.data.task_target

                        this.indexData.nickname =
                            res.data.data.share_data.nickname;
                        this.indexData.headimgurl =
                            res.data.data.share_data.headimgurl;
                        this.indexData.id = res.data.data.share_data.id;
                        this.indexData.admin = res.data.data.share_data.admin;
                        console.log(2);
                        
                        this.getUesr();
                        this.helpList = [];
                        for (let i = 0; i < res.data.data.share.length; i++) {
                            this.helpList.push(res.data.data.share[i].beshare);
                        }
                        this.pageShow = true;
                    })
                    .catch(err => {
                        console.log(err);
                        
                        token.getToken();
                    });
            }
        },
        getUesr() {
            axios
                .request({
                    url: this.url + "user",
                    method: "get",
                    headers: {
                        token: localStorage.getItem("token")
                    }
                })
                .then(res => {
                    console.log('getUser success');
                    this.userData.nickname = res.data.data.nickname;
                    this.userData.headimgurl = res.data.data.headimgurl;
                    this.userData.id = res.data.data.id;
                    this.userData.admin = res.data.data.admin;
                    // console.log(userData.id);
                    // console.log(this.$route.query.id);
                    // console.log(userData.id === this.$route.query.id);
                    
                    this.imgShow = true;
                    this.fx();
                })
                .catch(res => {
                    token.getToken();
                });
        },
        fx() {
            let config = {
                title: "绿水清江免费采摘活动", // 分享标题
                desc: "帮我助力获取免费一次采摘名额", // 分享描述
                link: "https://zhlsqj.com/#/share?id=" + this.userData.id, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl:
                    "//img.yzcdn.cn/public_files/2017/12/18/fd78cf6bb5d12e2a119d0576bedfd230.png", // 分享图标
                success: function() {
                    // 设置成功
                    console.log("设置成功");
                }
            };
            wxa.wxInit(localStorage.getItem("token"), config);
        },
        showUserModal(i) {
            this.userDataShow = i;
        },
        getFollow() {
            axios
                .request({
                    url: this.url + "share/follow",
                    method: "post",
                    headers: {
                        token: localStorage.getItem("token")
                    },
                    data: {
                        share_id: this.$route.query.id
                    }
                })
                .then(res => {
                    this.getShowAndBeShow()
                    Toast.success("已为他助力");
                });
        },
        inputData() {
            console.log('提交信息');
            //提交信息
            if(this.userCurrentData.name !== '' && this.userCurrentData.phone !== ''){
                axios
                .request({
                    url: this.url + "share/over/register",
                    method: "post",
                    headers: {
                        token: localStorage.getItem("token")
                    },
                    data: {
                        name: this.userCurrentData.name,
                        contact_way: this.userCurrentData.phone
                    }
                })
                .then(res => {
                    this.getShowAndBeShow()
                    Toast.success("已为填写资料");
                });
            }else{
                Toast.fail("资料不完整");
            }
        }
    },
    mounted() {
        this.init();
    }
};
</script>

<style lang="less">
.btnPage {
    width: 70%;
    margin: 0 auto;
}
.shareFix {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    z-index: 1000000;
    p {
        color: #fff;
        font-size: 25px;
        padding: 0 20px;
    }
}
.sharePage {
    width: 100%;
    min-height: 100%;
    position: absolute;
    background: url(../../assets/shareBg.jpg) no-repeat center 0 #00963d;
    background-size: 100% auto;
}
.userImg {
    overflow: hidden;
    width: 80px;
    height: 80px;
    margin: 0 auto;
    border-radius: 50%;
    margin-top: 230px;
    border: 1px solid #fff;
    background: #fff;
}
.userImg img {
    display: block;
    width: 100%;
    height: 100%;
}
.shareBtn {
    background: #409eff;
    border: none;
    border-radius: 10px;
    margin-top: 20px;
    margin-bottom: 30px;
}
.shareText {
    width: 80%;
    padding: 5px 0 5px;
    margin: 0 auto;
    border-radius: 8px;
    background: #fff;
}
.shareText p:first-child {
    text-align: center;
    font-size: 14px;
}
.shareText p:nth-child(n + 2) {
    font-size: 12px;
    padding: 0 10px;
    text-align: left;
}
.shareTip {
    color: #fff;
    font-size: 12px;
}
.shareMember {
    width: 80%;
    padding: 5px 0 5px;
    margin: 0 auto;
    border-radius: 8px;
    background: #fff;
    margin: 0 auto 20px;
    .memberText {
        font-size: 14px;
    }
    .helpList {
        width: 90%;
        margin: 0 auto;
        overflow: hidden;
        &-p{
            color: #999;
            font-size: 14px;
        }
        &-item {
            width: calc((100% / 3) - 15px);
            float: left;
            margin: 0 5px 0 10px;
            &-img {
                display: block;
                border-radius: 50%;
                // border: 1px solid #999;
                width: 60px;
                height: 60px;
                margin: 0 auto;
            }
            &-name {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 12px;
            }
        }
    }
}
</style>