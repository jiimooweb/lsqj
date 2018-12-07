<template>
    <div class="typePage">
        <div class="typeList">
            <van-badge-group :active-key="activeKey" @change="onChange">
                <van-badge :title="item.name | filterAn" v-if="item.sid !== 0" v-for="(item,index) in typeList" :key='index'/>
            </van-badge-group>
        </div>
        <div class="goodsList">
            <div class="goodsList-item" v-for="(item,index) in goodsList" :key='index' @click="returnDetail(item.id)">
                <div class="goodsList-item-img">
                    <img :src="item.imgs[0].url">
                </div>
                <p>{{item.name}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "../../public/axios";
import { Badge, BadgeGroup } from "vant";
export default {
    components: {
        [Badge.name]: Badge,
        [BadgeGroup.name]: BadgeGroup
    },
    data() {
        return {
            activeKey: 0,
            typeList:[],
            goodsList:[],
            currentId:'',
        };
    },
    filters:{
        filterAn: function(name){
            return name.substring(2)
        }
    },
    methods: {
        //切换列表
        onChange(key) {
            this.activeKey = key;
            this.currentId = this.typeList[key].id
            this.getGoods()
        },
        getType() {
            axios.request({
                url:'mall-navs',
                method:'get'
            }).then(res=>{
                this.typeList = res.data
                this.currentId = this.typeList[0].id
                this.getGoods()
            })
        },
        getGoods(){
            axios.request({
                url:'mall-navs/'+this.currentId,
                method:'get'
            }).then(res=>{
                this.goodsList = []
                // if(){
                    for(let i=0;i<res.data[0].goods.length;i++){
                        this.goodsList.push(res.data[0].goods[i])
                    }
                // }
                
            })
        },
        returnDetail(id){
            this.$router.push({path:'goods?id='+id})
        }
    },
    mounted() {
        this.getType();
    }
};
</script>

<style lang='less'>
.typePage {
    position: absolute;
    width: 100%;
    height: calc(100% - 50px);
    overflow: hidden;
    .typeList {
        float: left;
        width: 25%;
        height: 100%;
        background: #f8f8f8;
        overflow-x: hidden;
        overflow-y: scroll;
        .van-badge{
            padding-left: 2px;
            padding-right: 2px;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
        }
    }
    .goodsList{
        float: left;
        width: 75%;
        height: 100%;
        overflow-x: hidden;
        overflow-y: scroll;
        background: #fff;
        &-item{
            width: 45%;
            margin: 20px 2.5% 0;
            float: left;
            &-img{
                overflow: hidden;
                height: 100px;
                width: 100px;
                margin: 0 auto;
                border-radius: 5px;
                img{
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }
            p{
                font-size: 14px;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
                margin-top: 5px;
            }
        }
    }
}
</style>