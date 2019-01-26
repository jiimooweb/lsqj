<template>
    <div>
        <div class="icon-page">
            <van-icon class="iconC" name="success" size='60px' color='#fff'/>
        </div>
        <p class="payText">支付成功</p>
        <p class="payMoney">¥ 128.99</p>
        <van-button type="primary" class="payBtn" @click="returnAll()">完成</van-button>
        <p class="payTime">支付时间： 2019-01-05</p>
    </div>
</template>

<script>
import { Icon } from 'vant';
import { Button } from 'vant';
import wx from 'weixin-js-sdk'
    export default {
        components: {
            [Icon.name]: Icon,
            [Button.name]: Button
        },
        data(){
            return{

            }
        },
        methods:{
            returnAll(){
                wx.closeWindow();
            }
        },
        mounted(){

        }
    }
</script>

<style scoped lang='less'>
.icon-page{
    width: 120px;
    height: 120px;
    margin: 80px auto 0;
    border-radius: 50%;
    background: #2F9833;
    .iconC{
        margin: 30px auto;
    }
}
.payText{
    font-size: 18px;
    line-height: 50px;
    margin: 0;
}
.payMoney{
    line-height: 30px;
    margin: 0;
}
.payTime{
    position: absolute;
    width: 100%;
    bottom: 10px;
    font-size: 16px;
    text-align: center;
    color: #aaa;
}
.payBtn{
    position: absolute;
    bottom: 80px;
    width: 50%;
    left: 25%;
}
</style>