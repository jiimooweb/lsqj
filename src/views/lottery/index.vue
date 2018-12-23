<template>
    <div>
        <div class="turnPage">
            <img class="turnPic" :src="turn_img">
            <img :class="'pointPic ' + (rotateClass?'rotate':'')" :style="'transform: rotate('+this.deg+'deg)'" :src="pointer_img" @click="getResult()">
        </div>
    </div>
</template>

<script>
import {Dialog} from "vant";
import axios from "../../public/axios.js";
import Token from "../../public/util.js";
const token = new Token();
export default {
    components: {
        [Dialog.name]: Dialog,
    },
    data() {
        return {
            turn_img:'',
            pointer_img:'',
            lotteryData:{},
            rotateClass:false,
            deg:0,
            isTurn:false,
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
            if(this.isTurn){
                return false
            }
            this.isTurn = true
            this.rotateClass = false
            this.deg = this.deg - 360*10
            // if(!this.rotateClass){
                axios.request({
                    url:'lottery/result',
                    method:'post',
                    data:{
                        activity_id:1
                    }
                }).then(res=>{
                    this.rotateClass = true
                    this.deg = res.data.result_prize.result_angle + 360*10
                    setTimeout(()=>{
                        Dialog.alert({
                            message: "恭喜获得’"+res.data.result_prize.coupon.name+"‘"
                        }).then(() => {
                            // on close
                        });
                        this.isTurn = false
                    },3000)
                })
            // }
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
    background: url('../../assets/lotteryBg.jpg') no-repeat center 0 #fe2045;
    background-size: 100% auto;
    .turnPic{
        width: 80%;
        display: block;
        margin: 55% auto 0;
    }
    .pointPic{
        width: 40%;
        display: block;
        margin: -60% auto 0;
    }
}
.rotate{
    transition: all 3s;
    // animation:rotatePic 2s linear 0.2s infinite;
}
.van-dialog__message{
    text-align: center;
}
@keyframes rotatePic{
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(2880deg);
    }
}

</style>