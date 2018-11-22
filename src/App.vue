<template>
    <div id="app">
        
        <router-view />
        <!-- tabbar -->
        <van-tabbar v-model="active">
            <van-tabbar-item icon="shop">首页</van-tabbar-item>
            <van-tabbar-item icon="more-o">标签</van-tabbar-item>
            <van-tabbar-item icon="cart">购物车</van-tabbar-item>
            <van-tabbar-item icon="pending-orders">订单</van-tabbar-item>
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
    data() { },
    mounted() { },
    methods: {}
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
