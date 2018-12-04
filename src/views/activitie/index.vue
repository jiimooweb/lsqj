<template>
  <div>
    <van-nav-bar title="活动列表" />
    <form action="/">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <div>
      <router-link
        v-for="item in activitieCardList"
        :key="item.id"
        to="/"
      >
        <van-card
          :tag="item.sign_price == 0? '免费':''"
          :title="item.name"
          :thumb="item.thumb? item.thumb:imageURL"
        >
          <!-- <div slot="tags">
            {{'报名时间:'+item.sign_start_time +' - '+ item.sign_end_time}}
          </div>
          <div slot="tags">
            {{'活动时间:'+item.start_time +' - '+ item.end_time}}
          </div> -->
          <div slot="footer">
            <van-tag
              round
              :type="item.status === 0? 'success': item.status === 1? 'primary':'danger'"
            >{{item.status === 0? '未开始': item.status === 1? '进行中':'已结束'}}</van-tag>
          </div>
        </van-card>
      </router-link>
      <!-- <router-link to="/">
        <van-card
          tag=""
          title="100条微信文章标题套路 让你轻松做标题党"
          :thumb="imageURL"
        >
          <div slot="tags">
            5月12日下午2点-5点
          </div>
          <div slot="footer">
            <van-tag
              round
              type="primary"
            >未开始</van-tag>
          </div>
        </van-card>
      </router-link>
      <router-link to="/">
        <van-card
          tag="热门"
          title="不是(你学不会写标题)而是你不会用知音体"
          :thumb="imageURL"
        >
          <div slot="footer">
            <van-tag
              round
              type="success"
            >进行中</van-tag>
          </div>
        </van-card>
      </router-link> -->
    </div>
  </div>
</template>

<script>
// import ActivitieCard from '@/components/Activitie-card/index.vue'
import {
  NavBar,
  Search,
  Tag,
  Card
} from 'vant';
export default {
  name: 'activitie',
  components: {
    // ActivitieCard,
    [NavBar.name]: NavBar,
    [Search.name]: Search,
    [Tag.name]: Tag,
    [Card.name]: Card,
  },
  data() {
    return {
      value: '',
      imageURL: 'https://img.alicdn.com/imgextra/i3/2057654037/O1CN01XS584L1fgzOaYkpUh_!!0-item_pic.jpg_430x430q90.jpg',
      activitieCardList: [],
    };
  },
  methods: {
    onSearch() {

    },
    onCancel() {

    },
  },
  // computed: {
  //   status: function (e) {
  //     // 活动状态，0为未开始，1为开始，-1活动结束
  //     return e === 0? '未开始': e === 1? '进行中':'已结束'; 
  //   }
  // },
  mounted() {
    axios.request({
      headers: {
        token: '2123e75ea0ac9797746826fc462cee24'
      },
      url: "/activity/activitys/wx",
      method: "get"
    }).then(res => {
      this.activitieCardList = res.data.data.data;
      // var a = res.data.data.data.map(function (item) {
      //   item.thumb ? item.thumb : 'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg';
      // });
      // console.log(a);
      // console.log(res.data.data.data);
    });
  }
}
</script>

<style>
.van-card {
  color: #333;
  font-size: 16px;
  text-align: left;
}
</style>
