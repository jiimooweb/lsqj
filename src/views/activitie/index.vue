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
    <ActivitieCard />
  </div>
</template>

<script>
import ActivitieCard from '@/components/Activitie-card/index.vue'
import {
  NavBar,
  Search
} from 'vant';
export default {
  name: 'activitie',
  components: {
    ActivitieCard,
    [NavBar.name]: NavBar,
    [Search.name]: Search,
  },
  data() {
    return {
      value: ''
    };
  },
  methods: {
    onSearch() {

    },
    onCancel() {

    },
  },
  mounted() {
      axios.request({
        url: "/activity/activitys/wx",
        method: "get"
      }).then(res => {
        console.log(res);
      });
  }
}
</script>
