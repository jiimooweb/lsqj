<template>
    <div class="goods_page">
        <div class="goods">
            <van-swipe
                class="goods-swipe"
                :autoplay="3000"
            >
                <van-swipe-item
                    v-for="imgs in goods.imgs"
                    :key="imgs"
                >
                    <img :src="imgs">
                </van-swipe-item>
            </van-swipe>

            <van-cell-group>
                <van-cell>
                    <div class="goods-title">{{ goods.name }}</div>
                    <div class="goods-price">{{ formatPrice(goods.price) }}</div>
                </van-cell>
                <van-cell class="goods-express">
                    <van-col span="8">月销：{{ goods.monthly_sales }}</van-col>
                    <van-col span="8">库存：{{ goods.stock }}</van-col>
                    <van-col span="8">规格: 500g/件</van-col>
                </van-cell>
            </van-cell-group>
            <van-cell-group class="goods-cell-group">
                <van-cell title="查看商品详情" />
                <p>{{goods.content}}</p>
                <img
                    width="100%"
                    src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2555138269,3303889194&fm=27&gp=0.jpg"
                >
            </van-cell-group>
        </div>
        <van-goods-action class="goods-click">
            <van-goods-action-mini-btn
                icon="cart"
                @click="onClickCart"
            >
                购物车
            </van-goods-action-mini-btn>
            <van-goods-action-big-btn @click="sorry">
                加入购物车
            </van-goods-action-big-btn>
            <van-goods-action-big-btn
                primary
                @click="sorry"
                v-if='goodsType === 1'
            >
                立即购买
            </van-goods-action-big-btn>
        </van-goods-action>
    </div>

</template>

<script>
import {
    Tag,
    Col,
    Icon,
    Cell,
    CellGroup,
    Swipe,
    Toast,
    SwipeItem,
    GoodsAction,
    GoodsActionBigBtn,
    GoodsActionMiniBtn
} from "vant";
import axios from "axios";
import Token from "../../public/util.js";
const token = new Token();
export default {
    components: {
        [Tag.name]: Tag,
        [Col.name]: Col,
        [Icon.name]: Icon,
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup,
        [Swipe.name]: Swipe,
        [SwipeItem.name]: SwipeItem,
        [GoodsAction.name]: GoodsAction,
        [GoodsActionBigBtn.name]: GoodsActionBigBtn,
        [GoodsActionMiniBtn.name]: GoodsActionMiniBtn
    },

    data() {
        return {
            goodsId: "4",
            url: "https://zhlsqj.com/",
            goodsType: 0,
            goods: {
                name: "美国伽力果（约680g/3个）",
                price: 2680,
                monthly_sales: "123",
                stock: 19,
                imgs: [
                    "https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg",
                    "https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg"
                ],
                content:''
            }
        };
    },

    methods: {
        formatPrice() {
            return "¥" + this.goods.price;
        },

        onClickCart() {
            this.$router.push("cart");
        },

        sorry() {
            Toast("暂无后续逻辑~");
        },
        getGoodsData() {
            axios
                .request({
                    url:
                        this.url +
                        "mall-goods/" +
                        (this.$route.query.id != undefined
                            ? this.$route.query.id
                            : this.goodsId),
                    method: "get",
                    headers: {
                        token:
                            localStorage.getItem("token") ||
                            this.$route.query.token
                    }
                })
                .then(res => {
                    console.log(res);
                    this.goods = res.data.data[0]
                });
        }
    },
    mounted() {
        token.initToken(this.$route.query.token);
        this.getGoodsData();
    }
};
</script>

<style lang="less">
.goods_page {
    .goods {
        position: absolute;
        padding-bottom: 50px;
        width: 100%;
        height: calc(100% - 50px - 50px);
        overflow-x: hidden;
        overflow-y: scroll;
        &-swipe {
            img {
                width: 100%;
                display: block;
            }
        }

        &-title {
            font-size: 16px;
        }

        &-price {
            color: #f44;
        }

        &-express {
            color: #999;
            font-size: 12px;
            padding: 5px 15px;
        }

        &-cell-group {
            margin: 15px 0;

            .van-cell__value {
                color: #999;
            }
        }

        &-tag {
            margin-left: 5px;
        }
    }
    .goods-click {
        bottom: 50px;
    }
}
</style>
