<template>
    <div>
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
        >
            <div v-for="(item,index) in list" class="listItem"
                :key="index">
                <p class="listItem-name">{{item.name}}</p>
                <van-button type="primary" size='small' style="listItem-btn" v-if="item.flag!==1" :disabled='item.flag===1'>领取奖励</van-button>
                <van-button type="primary" size='small' style="listItem-btn" v-else :disabled='item.flag===1'>已经领取</van-button>
            </div>
        </van-list>
    </div>
</template>

<script>
import { Cell, CellGroup, List, Button } from "vant";
import axios from "axios";

import Token from "../../public/util.js";
const token = new Token();
export default {
    components: {
        [List.name]: List,
        [Button.name]: Button,
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup
    },
    data() {
        return {
            url:'https://zhlsqj.com/',
            list: [],
            loadingNum:0,
            loadingList:[],
            loading: false,
            finished: false
        };
    },
    methods:{
        onLoad(){
            for(let i=this.loadingNum;i<this.loadingNum + 10;i++){
                this.list.push(this.loadingList[i])
            }
            this.loading = false
        },
        getList(){
            console.log(2);
            
            axios.request({
                url: this.url + 'share/over/show',
                method:'post',
                headers:{
                    token:localStorage.getItem('token')
                },
                data:{
                    
                }
            }).then(res=>{
                this.loadingList = res.data.data
                this.list = []
                this.loadingList = []
                this.loading = true
                this.onLoad()
                console.log(this.loadingList);
                
            })
        }
    },
    mounted(){
        token.initToken(this.$route.query.token);
        this.getList()
    }
};
</script>

<style lang='less'>
    .listItem{
        border-bottom:1px solid #ddd;
        margin: 0 auto;
        width: 90%;
        overflow: hidden;
        &-name{
            font-size: 14px;
            text-align: left;
            float: left;
            line-height: 28px;
            padding: 0 10px;
            display: block;
            width: 50%;
        }
        &-btn{
            float: right;
            display: block;
        }
    }
</style>