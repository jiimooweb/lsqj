<template>
    <div
        class="sharePage"
        v-if="pageShow"
    >
    <div class="intoAdmin" v-if="isAdmin !== 0">
        <van-button type="primary" size='small' class="admin-btn" @click="returnAdmin()"></van-button>
    </div>
    <van-popup v-model="noSubscribe" class="subscribeModal" :close-on-click-overlay='false'>
        <p class="qrcodeText">请先关注‘绿水清江’公众号</p>
        <p class="qrcodeText">(关注后请刷新本页面)</p>
        <img src="../../assets/qrcode.jpg" class="qrcode">
    </van-popup>
    <van-popup v-model="overModal" class="subscribeModal" v-if="shareType === 'over'">
        <p class="overText1">姓名：{{shareOver.name}}</p>
        <p class="overText1">联系方式：{{shareOver.contact_way}}</p>
        <p class="overText2">请出示此页面到农场免费采摘一次</p>
    </van-popup>
    <div class="page1">
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
                v-if="shareType === 'over' && !(this.$route.query.id != undefined && this.userData.id != this.$route.query.id)"
                @click="showOver(true)"
            >资料已填写,查看详情</van-button>
            <van-button
                type="warning"
                class="shareBtn"
                size="large"
                v-if="shareType === 'over' && (this.$route.query.id != undefined && this.userData.id != this.$route.query.id)"
                @click="showFix(true)"
            >任务完成,我也要分享</van-button>
        </div>
    </div>
    <div class="page2">
        <div class="shareMember">
            <p class="memberText">助力好友</p>
            <div class="helpList">
                <div
                    class="helpList-item"
                    v-for="(item,index) in helpList"
                    :key="index"
                >
                    <img
                        :src="item.headimgurl"
                        class="helpList-item-img"
                    >
                    <p class="helpList-item-name">{{item.nickname}}</p>
                </div>
                <p
                    class="helpList-p"
                    v-if="helpListLength === 0"
                >暂无好友助力</p>
            </div>
        </div>
    </div>
    <div class="page3">
        <div class="shareText">
            <p>活动细则</p>
            <p>1、每个人只能为每位好友各助力一次</p>
            <p>2、满 {{shareNum}}个好友助力即可获得一次免费采摘机会</p>
            <p>3、自己无法给自己助力</p>
            <p>4、每个人只能完成一次任务</p>
            <p>5、完成分享任务后需填写相关资料，获取采摘机会</p>
            <p>6、分享任务完成并填写资料后，可凭该页面或页面截图到农场免费采摘一次</p>
        </div>
        <p class="shareTip">本活动最终解释权归绿水清江所有</p>
    </div>
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
import { Popup, Field, Dialog, Toast, Button } from "vant";
import Vue from "vue";
Vue.use(Dialog);
import axios from "../../public/axios.js";
import Token from "../../public/util.js";
const token = new Token();

import wxApi from "../../public/wx.js";
const wxa = new wxApi();
export default {
    components: {
        [Button.name]: Button,
        [Toast.name]: Toast,
        [Field.name]: Field,
        [Popup.name]: Popup
    },
    data() {
        return {
            overModal:false,
            noSubscribe:false,
            isAdmin:0,
            isSubscribe:0,
            userDataShow: false,
            userCurrentData: {
                name: "",
                phone: ""
            },
            shareNum: 1,
            shareType: "share", //share 任务未开始 record 任务已完成 over填写完资料
            shareOver:{
                name:'',
                phone:''
            },
            pageShow: false,
            fixDisplay: false,

            configData:{
                img:'',
                introduce:'',
                name:''
            },

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
            ],
            helpListLength:0,
        };
    },
    watch:{
        $route(to,from){
            this.getShowAndBeShow()
        },
        pjtToken(){
            this.getShowAndBeShow()
        },
        helpList(){
            this.helpListLength = this.helpList.length
        }
    },
    methods: {
        showOver(i){
            this.overModal = i
        },
        init() {
            console.log("init");
            token.initToken(this.$route.query.token);
            this.getShowAndBeShow()
        },
        showFix(i) {
            this.fixDisplay = i;
        },
        getShowAndBeShow() {
            if (
                this.$route.query.id != undefined &&
                this.userData.id != this.$route.query.id
            ) {
                //被分享着进入
                axios
                    .request({
                        url: "share/wx/beshow",
                        method: "post",
                        headers: {
                            token: localStorage.getItem("token") || this.$route.query.token
                        },
                        data: {
                            share_id: this.$route.query.id
                        }
                    })
                    .then(res => {
                        this.shareType = res.data.flag;
                        this.shareNum = res.data.task.task_target;
                        this.configData.img = res.data.task.img
                        this.configData.introduce = res.data.task.introduce
                        this.configData.name = res.data.task.name
                        this.indexData.nickname =
                            res.data.share_data.nickname;
                        this.indexData.headimgurl =
                            res.data.share_data.headimgurl;
                        this.indexData.id = res.data.share_data.id;
                        this.indexData.admin = res.data.share_data.admin;
                        this.helpList = [];
                        for (let i = 0; i < res.data.share.length; i++) {
                            this.helpList.push(res.data.share[i].beshare);
                        }
                        this.pageShow = true;
                        this.getUesr();
                    })
                    .catch(err => {
                        token.getToken();
                    });
            } else {
                //分享者进入
                axios
                    .request({
                        url: "share/wx/show",
                        method: "post",
                        headers: {
                            token: localStorage.getItem("token") || this.$route.query.token
                        }
                    })
                    .then(res => {
                        console.log('已执行');
                        this.shareType = res.data.flag;
                        this.shareNum = res.data.task.task_target;
                        this.configData.img = res.data.task.img
                        this.configData.introduce = res.data.task.introduce
                        this.configData.name = res.data.task.name
                        this.indexData.nickname =
                            res.data.share_data.nickname;
                        this.indexData.headimgurl =
                            res.data.share_data.headimgurl;
                        this.indexData.id = res.data.share_data.id;
                        this.indexData.admin = res.data.share_data.admin;
                        this.helpList = [];
                        for (let i = 0; i < res.data.share.length; i++) {
                            this.helpList.push(res.data.share[i].beshare);
                        }
                        this.pageShow = true;
                        this.shareOver = res.data.share_over
                        this.getUesr();
                    })
                    .catch(err => {
                        token.getToken();
                    });
            }
            
        },
        getUesr() {
            axios
                .request({
                    url: "user",
                    method: "get",
                    headers: {
                        token: localStorage.getItem("token") || this.$route.query.token
                    }
                })
                .then(res => {
                    this.isAdmin = (res.data.admin === null?0:1)
                    this.isSubscribe = res.data.subscribe
                    if(this.isSubscribe === 0){
                        this.noSubscribe = true
                    }
                    this.userData.nickname = res.data.nickname;
                    this.userData.headimgurl = res.data.headimgurl;
                    this.userData.id = res.data.id;
                    this.userData.admin = res.data.admin;
                    this.pageShow = true;
                    this.imgShow = true;
                    this.fx(location.href);
                    // console.log('full');
                    // console.log(location.href);
                    
                })
                .catch(res => {
                    token.getToken();
                });
        },
        fx(path) {
            // alert('开始设置config')
            let config = {
                title: this.configData.name, // 分享标题
                desc: this.configData.introduce, // 分享描述
                link: "https://zhlsqj.com/#/share?id=" + this.userData.id, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: this.configData.img, // 分享图标
                success: function() {
                    // 分享成功
                    // Toast.success("分享成功");
                }
            };
            console.log(config);
            
            wxa.wxInit(localStorage.getItem("token"), config,path);
        },
        showUserModal(i) {
            this.userDataShow = i;
        },
        getFollow() {
            if(this.isSubscribe === 0){
                Toast.fail("请先关注‘绿水清江’公众号");
                return
            }
            axios
                .request({
                    url: "share/follow",
                    method: "post",
                    headers: {
                        token: localStorage.getItem("token")
                    },
                    data: {
                        share_id: this.$route.query.id
                    }
                })
                .then(res => {
                    this.getShowAndBeShow();
                    Toast.success("已为他助力");
                });
        },
        inputData() {
            console.log("提交信息");
            if(this.isSubscribe === 0){
                Toast.fail("请先关注‘绿水清江’公众号");
                return
            }
            //提交信息
            if (
                this.userCurrentData.name !== "" &&
                this.userCurrentData.phone !== ""
            ) {
                axios
                    .request({
                        url: "share/over/register",
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
                        this.getShowAndBeShow();
                        Toast.success("已填写资料");
                    });
            } else {
                Toast.fail("资料不完整");
            }
        },
        returnAdmin(){
            this.$router.push({name:'shareManage'})
        }
    },
    mounted() {
        this.pjtToken = this.$route.query.token
        this.init();
    }
};
</script>

<style lang="less">
.subscribeModal{
    width: 80%;
    padding-bottom: 20px;
    border-radius: 15px;
}
.overText1{
    font-size: 16px;
    color: #333;
}
.overText2{
    font-size: 14px;
    color: #999;
}
.qrcodeText{
    text-align: center;
    font-size: 18px;
    color: #333;
}
.qrcode{
    display: block;
    margin: 0 auto;
    width: 80%;
    height: auto;
}
.page1{
    overflow: hidden;
    width: 100%;
    background: url(../../assets/shareBg.jpg) no-repeat center 0;
    background-size: 100% auto;
}
.page2{
    width: 100%;
    background: #fff;
    overflow: hidden;
}
.page3{
    padding-bottom: 70px;
    overflow: hidden;
    width: 100%;
    background: url(../../assets/shareBg.jpg) no-repeat center bottom;
    background-size: 100% auto;
}
.btnPage {
    width: 70%;
    margin: 0 auto;
}
.intoAdmin{
    position: absolute;
    width: 100%;
    .admin-btn{
        display: block;
        // background: #409eff;
        width: 78px;
        height: 42px;
        border: none;
        background: url(../../assets/btnbg.png) no-repeat center;
        background-size: 78px 42px;
        float: right;
        margin-top: 10px;
        margin-right: 10px;
        // border: 1px solid #409eff;
    }
}
.shareFix {
    position: fixed;
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
    // background: url(../../assets/shareBg.jpg) space  center 0;
    // background-size: 100% auto;
}
.userImg {
    overflow: hidden;
    width: 80px;
    height: 80px;
    margin: 0 auto;
    border-radius: 50%;
    margin-top: 260px;
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
    margin: 50px auto 0;
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
    border: 1px solid #ddd;
    padding: 5px 0 5px;
    border-radius: 8px;
    background: #fff;
    margin: 30px auto 20px;
    .memberText {
        font-size: 14px;
    }
    .helpList {
        width: 90%;
        margin: 0 auto;
        overflow: hidden;
        &-p {
            color: #999;
            font-size: 14px;
        }
        &-item {
            width: calc((100% / 4) - 15px);
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