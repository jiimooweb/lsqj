<template>
  <div class="sharePage">
    <div class="btnPage">
      <van-button
        type="warning"
        class="shareBtn"
        size="large"
        v-if="shareType === 0"
      >我也要参加</van-button>
      <van-button
        type="warning"
        class="shareBtn"
        size="large"
        v-if="shareType === 1"
      >我要继续分享</van-button>
      <van-button
        type="warning"
        class="shareBtn"
        size="large"
        v-else
        disabled 
      >活动任务已完成</van-button>
    </div>
    <div class="shareMember" v-if="shareType === 1 || shareType === 2">
      <p class="memberText">助力好友</p>
      <div class="helpList">
        <div
          class="helpList-item"
          v-for="(item,index) in 10"
          :key='index'
        >
          <img
            src="//img.yzcdn.cn/public_files/2017/12/18/fd78cf6bb5d12e2a119d0576bedfd230.png"
            class="helpList-item-img"
          >
          <p class="helpList-item-name">abcefghijkllnmopq</p>
        </div>
      </div>
    </div>
    <div class="shareText">
      <p>活动细则</p>
      <p>1、活动细则活动细则活动细则活动细则活动细则活动细则活动细则</p>
      <p>1、活动细则活动细则活动细则活动细则活动细则活动细则活动细则</p>
      <p>1、活动细则活动细则活动细则活动细则活动细则活动细则活动细则</p>
      <p>1、活动细则活动细则活动细则活动细则活动细则活动细则活动细则</p>
      <p>1、活动细则活动细则活动细则活动细则活动细则活动细则活动细则</p>
      <p>1、活动细则活动细则活动细则活动细则活动细则活动细则活动细则</p>
      <p>1、活动细则活动细则活动细则活动细则活动细则活动细则活动细则</p>
      <p>1、活动细则活动细则活动细则活动细则活动细则活动细则活动细则</p>
    </div>
    <p class="shareTip">本活动最终解释权归绿水清江所有</p>
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
      shareType: 1,//0 任务未开始  1 任务进行中  2 任务已完成
      helpList: [
        {
          name: 1,
          url: ""
        }
      ]
    };
  },
  methods:{
      init(){
          
      }
  },
  mounted(){
      this.init()
  }

};
</script>

<style lang="less">
.btnPage {
  width: 70%;
  margin: 0 auto;
}
.sharePage {
  width: 100%;
  min-height: 100%;
  position: absolute;
  background: url(../../assets/shareBg.jpg) no-repeat center 0 #00963d;
  background-size: 100% auto;
}
.shareBtn {
  background: #409eff;
  border: none;
  border-radius: 10px;
  margin-top: 230px;
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