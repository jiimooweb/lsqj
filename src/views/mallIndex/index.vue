<template>
    <div class="indexPage">
        <div
            class="loading"
            v-if="loading"
        >
            <van-loading
                class="loading-in"
                size='30px'
            />
        </div>
        <div class="swipePage">
            <van-swipe
                :autoplay="3000"
                indicator-color="white"
            >
                <van-swipe-item
                    v-for="(item,index) in swipeList"
                    :key="index"
                >
                    <img :src="item.image">
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="nav">
            <div class="nav-item">
                <img src="../../assets/vip.png">
                <p>会员专享</p>
            </div>
            <div class="nav-item">
                <img src="../../assets/active.png">
                <p>优惠商品</p>
            </div>
            <div class="nav-item" @click="$router.push({path:'/ticketList'})">
                <img src="../../assets/active.png">
                <p>门票购买</p>
            </div>
        </div>
        <div class="type">
            <div
                class="type1"
                v-if="general.length > 0"
            >
                <van-cell
                    title="热卖商品"
                    is-link
                    :border='false'
                    to='/goodsList?id=generals'
                />
                <div class="type1List">
                    <div
                        class="type1List-item"
                        v-for="(item,index) in general"
                        :key='index'
                        @click="returnDetail(item.id)"
                    >
                        <div class="type1List-item-img">
                            <img :src="item.imgs[0].url">
                        </div>
                        <p class="type1List-item-text">
                            {{item.name}}
                        </p>
                        <p class="type1List-item-price">
                            ¥{{item.price}}
                        </p>
                    </div>
                </div>
            </div>
            <div
                class="type2"
                v-if="discount.length > 0"
            >
                <van-cell
                    title="优惠推荐"
                    is-link
                    :border='false'
                    to='/goodsList?id=discounts'
                />
                <div class="type1List">
                    <div
                        class="type1List-item"
                        v-for="(item,index) in discount"
                        :key='index'
                        @click="returnDetail(item.id)"
                    >
                        <div class="type1List-item-img">
                            <img :src="item.imgs[0].url">
                        </div>
                        <p class="type1List-item-text">
                            {{item.name}}
                        </p>
                        <p class="type1List-item-price">
                            <span class="type1List-item-price-new">
                                ¥{{item.discount}}<br />
                                <span class="type1List-item-price-new-dec">优惠价</span>
                            </span>
                            <span class="type1List-item-price-old">
                                ¥{{item.price}}<br />
                                <span class="type1List-item-price-old-dec">原价</span>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div
                class="type1"
                v-if="member.length > 0"
            >
                <van-cell
                    title="会员专享"
                    is-link
                    :border='false'
                    to='/goodsList?id=members'
                />
                <div class="type1List">
                    <div
                        class="type1List-item"
                        v-for="(item,index) in member"
                        :key='index'
                        @click="returnDetail(item.id)"
                    >
                        <div class="type1List-item-img">
                            <img :src="item.imgs[0].url">
                        </div>
                        <p class="type1List-item-text">
                            {{item.name}}
                        </p>
                        <p class="type1List-item-price">
                            ¥{{item.price}}
                        </p>
                    </div>
                </div>
            </div>
            <div
                class="type2"
                v-if="group.length > 0"
            >
                <van-cell
                    title="团购商品"
                    is-link
                    :border='false'
                    to='/goodsList?id=groups'
                />
                <div class="type1List">
                    <div
                        class="type1List-item"
                        v-for="(item,index) in group"
                        :key='index'
                        @click="returnDetail(item.id)"
                    >
                        <div class="type1List-item-img">
                            <img :src="item.imgs[0].url">
                        </div>
                        <p class="type1List-item-text">
                            {{item.name}}
                        </p>
                        <p class="type1List-item-price">
                            <span class="type1List-item-price-new">
                                ¥{{item.discount}}<br />
                                <span class="type1List-item-price-new-dec">优惠价</span>
                            </span>
                            <span class="type1List-item-price-old">
                                ¥{{item.price}}<br />
                                <span class="type1List-item-price-old-dec">原价</span>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Icon, Loading, Cell, CellGroup, Swipe, SwipeItem } from "vant";
import axios from "../../public/axios";
export default {
    components: {
        [Swipe.name]: Swipe,
        [SwipeItem.name]: SwipeItem,
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup,
        [Loading.name]: Loading,
        [Icon.name]: Icon
    },
    data() {
        return {
            loading: true,
            swipeList: [],
            type1List: [],
            discount: [],
            general: [],
            group: [],
            member: []
        };
    },
    methods: {
        //获取swipe
        getAllSwipe() {
            axios
                .request({
                    url: "mall-groups",
                    method: "get"
                })
                .then(res => {
                    let disId = 0;
                    for (let i = 0; i < res.data.length; i++) {
                        if (res.data[i].display === 1) {
                            disId = res.data[i].id;
                        }
                    }
                    axios
                        .request({
                            url: "mall-groups/" + disId,
                            method: "get"
                        })
                        .then(res => {
                            this.swipeList = res.data[0].swipers;
                        });
                });
        },
        getGoods() {
            axios
                .request({
                    url: "mall/hots",
                    // url:'mall/generals',
                    method: "get"
                })
                .then(res => {
                    this.discount = res.discount;
                    this.general = res.general;
                    this.group = res.group;
                    this.member = res.member;
                    this.loading = false;
                });
        },
        returnDetail(id) {
            // console.log(id);
            this.$router.push({ path: "goods?id=" + id });
        }
    },
    mounted() {
        this.getAllSwipe();
        this.getGoods();
    }
};
</script>

<style lang='less'>
.indexPage {
    background: #eee;
    position: absolute;
    width: 100%;
    height: calc(100% - 50px);
    overflow-x: hidden;
    overflow-y: scroll;
    .loading {
        width: 100%;
        height: calc(100% - 50px);
        position: fixed;
        z-index: 10000000;
        background: #eee;
        &-in {
            margin: 50% auto 0;
        }
    }
    .swipePage {
        background: #fff;
    }
    .nav {
        width: 100%;
        overflow: hidden;
        background: #fff;
        padding-bottom: 10px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        &-item {
            width: 20%;
            height: 50px;
            img {
                width: 30px;
                height: 30px;
                display: block;
                margin: 0 auto;
            }
            p {
                font-size: 14px;
                line-height: 20px;
                margin: 0;
            }
        }
    }
    img {
        width: 100%;
    }
    .type1 {
        margin-top: 10px;
        overflow: hidden;
        background: #fff;
        .van-cell {
            width: 90%;
            padding: 10px 0;
            margin: 0 auto;
            border-bottom: 1px solid #eee;
            .van-cell__title {
                span {
                    float: left;
                }
            }
        }
        .type1List {
            width: 95%;
            margin: 10px auto 0;
            overflow: hidden;
            &-item:nth-child(2n) {
                margin-left: 2%;
            }
            &-item {
                width: 49%;
                float: left;
                margin-bottom: 20px;
                overflow: hidden;
                &-img {
                    position: relative;
                    width: 100%;
                    height: 0px;
                    padding-bottom: 100%;
                    img {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        margin-left: -50%;
                        border-radius: 5px;
                    }
                }
                &-text {
                    font-size: 16px;
                    line-height: 35px;
                    text-align: left;
                    margin: 0;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                &-price {
                    font-size: 14px;
                    color: red;
                    text-align: left;
                    margin: 0;
                }
            }
        }
    }
    .type2 {
        margin-top: 10px;
        overflow: hidden;
        background: #fff;
        .van-cell {
            width: 90%;
            padding: 10px 0;
            margin: 0 auto;
            border-bottom: 1px solid #eee;
            .van-cell__title {
                span {
                    float: left;
                }
            }
        }
        .type1List {
            width: 95%;
            margin: 10px auto 0;
            overflow: hidden;
            &-item {
                width: 100%;
                float: left;
                margin-bottom: 20px;
                overflow: hidden;
                padding-bottom: 10px;
                border-bottom: 1px solid #eee;
                &-img {
                    float: left;
                    width: 100px;
                    height: 100px;
                    img {
                        width: 100%;
                        height: 100%;
                        border-radius: 5px;
                    }
                }
                &-text {
                    float: right;
                    width: calc(100% - 100px - 10px);
                    font-size: 16px;
                    line-height: 35px;
                    text-align: left;
                    margin: 0;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                &-price {
                    float: right;
                    width: calc(100% - 100px - 10px);
                    color: red;
                    text-align: left;
                    font-size: 14px;
                    margin: 30px 0 0;
                    &-new {
                        float: left;
                        margin-right: 30px;
                        &-dec {
                            color: #666;
                        }
                    }
                    &-old {
                        float: left;
                        margin-left: 50px;
                        color: #aaa;
                        &-dec {
                            color: #aaa;
                        }
                    }
                }
            }
        }
    }
}
</style>