<template>
    <div>
        <router-view />
        <van-tabbar v-model="active" class="tabbarPage">
            <van-tabbar-item icon="shop" to='/ticketList'>主页</van-tabbar-item>
            <van-tabbar-item icon="more-o" to='/ticketDetail'>详情</van-tabbar-item>
            <van-tabbar-item icon="cart" to='/ticketOrder'>订单</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
import Token from "../../public/util.js";
const token = new Token();
export default {
    components: {
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem
    },
    data() {
        return {
            active: 0,
        };
    },
    methods:{

    },
    mounted(){
        // if(this.$router.history.current.query.token !== ''){
        //     localStorage.setItem('token',this.$router.history.current.query.token)
        // }
    }
};
</script>

<style>
*{
    text-align: left;
}
</style>
