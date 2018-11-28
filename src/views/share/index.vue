<template>
  <div
    class="sharePage"
    v-if="pageShow"
  >
    <div class="userImg">
      <img :src="userData.headimgurl">
    </div>
    <div class="btnPage">
      <van-button
        type="warning"
        class="shareBtn"
        size="large"
        v-if="shareType === 'share'"
        @click="showFix(true)"
      >分享给别人</van-button>
      <van-button
        type="warning"
        class="shareBtn"
        size="large"
        v-if="shareType === 1"
        @click="showFix(true)"
      >我也要分享</van-button>
      <van-button
        type="warning"
        class="shareBtn"
        size="large"
        v-if="shareType === 'record'"
        disabled
      >活动任务已完成</van-button>
    </div>
    <div
      class="shareMember"
      v-if="shareType === 'share'"
    >
      <p class="memberText">助力好友</p>
      <div class="helpList">
        <div
          class="helpList-item"
          v-for="(item,index) in helpList"
          :key='index'
        >
          <img
            :src="item.headimgurl"
            class="helpList-item-img"
          >
          <p class="helpList-item-name">{{item.nickname}}</p>
        </div>
      </div>
    </div>
    <div class="shareText">
      <p>活动细则</p>
      <p>1、每个人只能为每位好友各助力一次</p>
      <p>2、自己无法给自己助力</p>
      <p>3、每个人只能完成一次任务</p>
      <p>4、完成分享任务后需填写相关资料，获取采摘机会</p>
      <p>5、到店时与店员确认使用该次机会</p>
    </div>
    <p class="shareTip">本活动最终解释权归绿水清江所有</p>
    <div
      class="shareFix"
      v-if="fixDisplay"
      @click="showFix(false)"
    >
      <p>点击右上角 ... 发送给朋友</p>
    </div>
  </div>
</template>

<script>
import { Button } from "vant";
import axios from "axios";
import Token from "../../public/util.js";
const token = new Token();

import wxApi from "../../public/wx.js";
const wxa = new wxApi();
export default {
  components: {
    [Button.name]: Button
  },
  data() {
    return {
      url: "https://www.rdoorweb.com/lvshui/public/",
      shareType: "share", //share 任务未开始 record 任务已完成 over填写完资料
      pageShow: false,
      fixDisplay: false,
      userData: {},
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
      token.initToken(this.$route.query.token);
      this.getShowAndBeShow();
    },
    showFix(i) {
      this.fixDisplay = i;
    },
    getShowAndBeShow() {
      if (this.$route.query.id != undefined) {
        //被分享着进入
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
            this.getUesr();
            this.helpList = [];
            for (let i = 0; i < res.data.data.share.length; i++) {
              this.helpList.push(res.data.data.share[i].beshare);
            }
            this.pageShow = true;
            this.fx();
          });
      } else {
        //分享者进入
        axios
          .request({
            url: this.url + "share/wx/show",
            method: "post",
            headers: {
              token: localStorage.getItem("token")
            }
          })
          .then(res => {
            this.getUesr();
            this.helpList = [];
            for (let i = 0; i < res.data.data.share.length; i++) {
              this.helpList.push(res.data.data.share[i].beshare);
            }
            this.pageShow = true;
            this.fx();
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
          this.userData = res.data.data;
        });
    },
    fx() {
      wxa.wxInit(localStorage.getItem("token"));
      wxa.share({
        title: "绿水清江免费采摘活动", // 分享标题
        desc: "帮我助力获取免费一次采摘名额", // 分享描述
        link: "http://localhost:8081/#/share?id=" + this.userData.id, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl:
          "//img.yzcdn.cn/public_files/2017/12/18/fd78cf6bb5d12e2a119d0576bedfd230.png", // 分享图标
        success: function() {
          // 设置成功
          console.log(123);
        }
      });
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
  width: 100px;
  height: 100px;
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