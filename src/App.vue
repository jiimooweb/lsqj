<template>
    <div id="app">

        <router-view />
        <!-- tabbar -->
        <van-tabbar v-model="active" class="tabbarPage" v-if="isShowTabbar">
            <van-tabbar-item icon="shop" to='/mallIndex'>首页</van-tabbar-item>
            <van-tabbar-item icon="more-o" to='/goodsType'>分类</van-tabbar-item>
            <van-tabbar-item icon="cart" to='/cart'>购物车</van-tabbar-item>
            <van-tabbar-item icon="pending-orders" to='/order'>订单</van-tabbar-item>
        </van-tabbar>

    </div>
</template>
<script>
import { Tabbar, TabbarItem } from "vant";
import Token from "./public/util.js";
const token = new Token();

export default {
    components: {
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem
    },
    data() {
        return {
            active: 0,
            isShowTabbar: true,
            tabList:['mallIndex','goodsType','cart','order'],
            //不需要添加tabbar的路由name
            showItem: ['goods',"share", "shareManage", "goodsList","lottery","coupons","destroyCoupon","reservation","paySuccess"]
        };
    },
    watch: {
        $route(to, from) {
            this.returnShowTabbar();
        }
    },
    mounted() {
        this.returnShowTabbar();
        // console.log(this.$router.history.current);
        
        // for(let i=0;i<this.tabList.length;i++){
        //     // console.log(typeof(this.$router.history.current.name));
        //     // console.log(typeof(this.tabList[i]));

        //     console.log(this.$router.history.current.name + ' == ' + this.tabList[i]);
        //     console.log(this.$router.history.current.name == this.tabList[i]);
            
        //     if(this.$router.history.current.name == this.tabList[i]){
        //         console.log(i);
        //         this.active = i
        //     }
        // }
        if(this.$router.history.current.query.token !== ''){
            localStorage.setItem('token',this.$router.history.current.query.token)
        }
    },
    methods: {
        returnShowTabbar() {
            for (let i = 0; i < this.showItem.length; i++) {
                if (this.showItem[i] === this.$router.history.current.name) {
                    this.isShowTabbar = false;
                    return;
                }
                if (i === this.showItem.length - 1) {
                    this.isShowTabbar = true;
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
