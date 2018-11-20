<template>
  <div>

    <van-card tag="" title="半程马拉松比赛既全民健跑活动" :thumb="imageURL">
      <div slot="tags">
        12312312312312312312
      </div>
      <div slot="footer">
        <van-tag round type="danger">暂停</van-tag>
      </div>
    </van-card>
    <van-card tag="" title="100条微信文章标题套路 让你轻松做标题党" :thumb="imageURL">
      <div slot="tags">
                5月12日下午2点-5点
      </div>
      <div slot="footer">
        <van-tag round type="primary">未开始</van-tag>
      </div>
    </van-card>
    <van-card tag="热门" title="不是(你学不会写标题)而是你不会用知音体" :thumb="imageURL">
      <div slot="footer">
        <van-tag round type="success">进行中</van-tag>
      </div>
    </van-card>
  </div>
</template>

<script>
import {
  Tag,
  Card
} from 'vant';
export default {
   components: {
    [Tag.name]: Tag,
    [Card.name]: Card,
  },
  data() {
    return {
      value: '',
      imageURL: 'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg'
    };
  },
  methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    },
    onSearch() {

    },
    onCancel() {

    }
  }
}
</script>
<style>
.van-card {
  /* color: #333; */
  font-size: 16px;
  /* text-align:left */
}

</style>


