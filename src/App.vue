<template>
  <div id="app">

    <router-view />
    <!-- tabbar -->
    <van-tabbar
      v-model="active"
      class="tabbarPage"
      v-if="isShowTabbar"
    >
      <van-tabbar-item
        icon="shop"
        to='/mall'
      >首页</van-tabbar-item>
      <van-tabbar-item icon="more-o">分类</van-tabbar-item>
      <van-tabbar-item
        icon="cart"
        to='/cart'
      >购物车</van-tabbar-item>
      <van-tabbar-item
        icon="pending-orders"
        to='/order'
      >订单</van-tabbar-item>
      <van-tabbar-item
        icon="pending-orders"
        to='/share'
      >分享</van-tabbar-item>
    </van-tabbar>

  </div>
</template>
<script>
import { Tabbar, TabbarItem } from "vant";

export default {
    components: {
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem
    },
    data() {
        return {
            active: 0,
            isShowTabbar:true,

            //不需要添加tabbar的路由name
            showItem:[
                'share'
            ]
        }
    },
    watch:{
        $route(to,from){
            this.returnShowTabbar()
        }
    },
    mounted() { 
        this.returnShowTabbar()
        // console.log(this.$router);
        
    },
    methods: {
        returnShowTabbar(){
            for(let i=0;i<this.showItem.length;i++){
                if(this.showItem[i] === this.$router.history.current.name){
                    this.isShowTabbar = false
                    return
                }
                if(i===this.showItem.length-1){
                    this.isShowTabbar = true
                }
            }
        }
    }
};
</script>
<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 60px; */
}
</style>
