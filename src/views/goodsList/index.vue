<template>
    <div>
        <van-list
            v-model="loading"
            :finished="finished"
            :finished-text="finishedText"
            @load="onLoad"
        >
            <div class="goodsPage">
                <div class="goodItem" v-for="(item,index) in 4" :key='index' @click="returnDetail(4)">
                    <div class="goodImg">
                        <img src="http://download.rdoorweb.com/20181204/bbc1fdc5e7a882da726f95bcf1881786.jpg">
                    </div>
                    <div class="goodText">
                        <p class="goodText-title">
                            <van-tag type="danger" class="goodText-title-tag">VIP</van-tag>
                            <a class="goodText-title-a">这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题</a>
                        </p>
                        <p class="goodText-price">
                            <span class="goodText-price-new">¥18元</span>
                            <span class="goodText-price-old">20元</span>
                        </p>
                    </div>
                </div>
            </div>
        </van-list>
    </div>
</template>

<script>
import { Tag, List } from "vant";
export default {
    components: {
        [List.name]: List,
        [Tag.name]: Tag
    },
    data() {
        return {
            finishedText:'没有更多了',
            loading:false,
            finished:true,
            goodsType: "",
            goodsList: []
        };
    },
    methods: {
        onLoad() {
            this.loading = false;
            this.finished = true;
            return
            // 异步更新数据
            // setTimeout(() => {
            //     for (let i = 0; i < 10; i++) {
            //         this.list.push(this.list.length + 1);
            //     }
            //     // 加载状态结束
            //     this.loading = false;

            //     // 数据全部加载完成
            //     if (this.list.length >= 40) {
            //         this.finished = true;
            //     }
            // }, 500);
        },
        returnDetail(id){
            // console.log(id);
            this.$router.push({path:'goods?id='+id})
        }
    },
    mounted() {}
};
</script>

<style lang='less'>
.goodsPage{
    position: absolute;
    width: 100%;
    height: 100%;
    .goodItem{
        width: 95%;
        height: 100px;
        margin: 10px auto;
        .goodImg{
            width: 100px;
            height: 100px;
            float: left;
            overflow: hidden;
            border-radius: 5px;
            img{
                display: block;
                width: 100px;
            }
        }
        .goodText{
            float: right;
            width: calc(100% - 100px - 15px);
            height: 100px;
            &-title{
                margin-top: 5px;
                padding: 0 5px;
                font-size: 15px;
                color: #111;
                text-align: left;
                line-height: 25px;
                height: 50px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                &-tag{
                    margin-right: 5px;
                }
                &-a{
                    color: #111;
                }
            }
            &-price{
                font-size: 14px;
                margin: 20px 0 0;
                padding: 0 5px;
                &-new{
                    font-size: 15px;
                    color: #ed4014;
                    float: left;
                }
                &-old{
                    color:#aaa;
                    float: left;
                    line-height: 25px;
                    margin-left: 5px;
                    text-decoration:line-through;
                }
            }
        }
    }
}

</style>