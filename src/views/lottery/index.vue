<template>
    <div>
        <div class="turnPage">
            <img class="turnPic" :src="turn_img">
            <img class="pointPic" :src="pointer_img" @click="getResult()">
        </div>
    </div>
</template>

<script>
import axios from "../../public/axios.js";
import Token from "../../public/util.js";
const token = new Token();
export default {
    data() {
        return {
            turn_img:'',
            pointer_img:'',
            lotteryData:{}
        };
    },
    methods:{
        getLotteryData(){
            axios.request({
                url:'lottery/fan/activity/1',
                method:'get'
            }).then(res=>{
                console.log(res);
                this.lotteryData = res.data
                this.turn_img = this.lotteryData.activity.turn_img
                this.pointer_img = this.lotteryData.activity.pointer_img
            })
        },
        getResult(){
            axios.request({
                url:'lottery/result',
                method:'post',
                data:{
                    id:1
                }
            }).then(res=>{
                console.log(res);
            })
        }
    },
    mounted() {
        token.initToken(this.$route.query.token);
        this.getLotteryData()
    }
};
</script>

<style lang='less'>
.turnPage{
    width: 100%;
    height: 100%;
    position: absolute;
    background: #ffcc00;
    .turnPic{
        width: 80%;
        display: block;
        margin: 30% auto 0;
    }
    .pointPic{
        width: 40%;
        display: block;
        margin: -60% auto 0;
    }
}
</style>