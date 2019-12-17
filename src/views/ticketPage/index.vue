<template>
    <div>
        <router-view />
        <van-tabbar v-model="active" class="tabbarPage">
            <van-tabbar-item icon="shop" to='/ticketList'>主页</van-tabbar-item>
            <!-- <van-tabbar-item icon="more-o" to='/ticketDetail'>详情</van-tabbar-item> -->
            <van-tabbar-item icon="cart" to='/ticketOrderList'>订单</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
import Token from "../../public/util.js";
import wxApi from "../../public/wx.js";
const wxa = new wxApi();
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
    watch: {
        $route(to, from) {
            this.returnShowTabbar(to);
        }
    },
    methods:{
        returnShowTabbar(to){
            console.log(to);
            if(to.fullPath === '/ticketOrderList'){
                this.active = 1
            }else{
                this.active = 0
            }
        },
        fx(path) {
            // alert('开始设置config')
            let config = {
                title: '绿水清江农场套餐', // 分享标题
                desc: '绿水清江农场套餐预定购买', // 分享描述
                link: "https://zhlsqj.com/#/ticketList", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: 'https://zhlsqj.com/backend/img/logo33.2de4409c.png', // 分享图标
                success: function() {
                    // 分享成功
                    // Toast.success("分享成功");
                }
            };
            wxa.wxInit(localStorage.getItem("token"), config, path);
        },
    },
    mounted(){
        this.fx(location.href)
    }
};
</script>

<style>
/* *{
    text-align: left;
} */
</style>
