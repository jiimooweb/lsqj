<template>
    <div class="goods_page">
        <div
            class="goods"
            v-if="goodsShow"
        >
            <van-swipe
                class="goods-swipe"
                :autoplay="3000"
            >
                <van-swipe-item
                    v-for="imgs in goods.imgs"
                    :key="imgs.id"
                >
                    <img
                        :src="imgs.url"
                        class="goods-swipe-img"
                    >
                </van-swipe-item>
            </van-swipe>

            <van-cell-group>
                <van-cell>
                    <div class="goods-title">{{ goods.name }}</div>
                    <div class="goods-price">{{ formatPrice(goods.price) }}</div>
                </van-cell>
                <van-cell class="goods-express">
                    <van-col span="12">销量：{{ goods.monthly_sales }}</van-col>
                    <van-col span="12">库存：{{ goods.stock }}</van-col>
                    <!-- <van-col span="8">规格: 500g/件</van-col> -->
                </van-cell>
            </van-cell-group>
            <van-cell-group class="goods-cell-group">
                <van-cell title="查看商品详情" />
                <div
                    v-html="goods.content"
                    class="goods-cell-group-content"
                ></div>
            </van-cell-group>
        </div>
        <van-sku
            v-model="showParams"
            :sku="sku"
            :goods="goods_params"
            :goods-id="goodsId"
            :quota="0"
            :quota-used="0"
            :hide-stock="sku.hide_stock"
            :message-config="messageConfig"
            @buy-clicked="onBuyClicked"
            @add-cart="onAddCartClicked"
        />
        <van-goods-action class="goods-click">
            <van-goods-action-mini-btn
                icon="wap-home"
                @click="returnHome"
            >
                首页
            </van-goods-action-mini-btn>
            <van-goods-action-mini-btn
                icon="cart"
                @click="onClickCart"
                :info="cartLength"
                v-if='goodsType !== "group"'
            >
                购物车
            </van-goods-action-mini-btn>
            <van-goods-action-big-btn @click="addCart()">
                加入购物车
            </van-goods-action-big-btn>
            <van-goods-action-big-btn
                primary
                @click="openParams"
                v-if='goodsType !== "group"'
            >
                立即购买
            </van-goods-action-big-btn>
            <van-goods-action-big-btn
                primary
                @click="sorry"
                v-if='goodsType === "group"'
            >
                加入团购
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
    GoodsActionMiniBtn,
    Sku
} from "vant";
// import axios from "axios";
import axios from "../../public/axios.js";
import Token from "../../public/util.js";
import env from "../../../config/env";
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
        [GoodsActionMiniBtn.name]: GoodsActionMiniBtn,
        [Toast.name]: Toast,
        [Sku.name]: Sku
    },

    data() {
        return {
            cartLength: 0,
            goodsShow: false,
            goodsId: "10",
            goodsType: 0,
            goods: {
                // name: "美国伽力果（约680g/3个）",
                // price: 2680,
                // monthly_sales: "123",
                // stock: 19,
                // imgs: [
                //     "https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg",
                //     "https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg"
                // ],
                // content: ""
            },

            showParams: false,
            sku: {
                // 数据结构见下方文档
                tree: [],
                list: [],
                price: 123,
                stock_num: 123,
                hide_stock: false
            },
            goods_params: {
                // 数据结构见下方文档
                title: "",
                picture: ""
            },
            messageConfig: {
                // 数据结构见下方文档
            }
        };
    },

    methods: {
        returnHome() {
            this.$router.push({ path: "/mallIndex" });
        },
        formatPrice() {
            return "¥" + this.goods.price;
        },

        onClickCart() {
            this.$router.push("cart");
        },

        sorry() {
            Toast("暂无后续逻辑~");
        },
        openParams() {
            this.showParams = true;
        },
        onBuyClicked(data) {
            let goods = [
                {
                    id: data.goodsId,
                    num: data.selectedNum
                }
            ];
            this.inputOrder(goods);
        },
        onAddCartClicked(data) {
            this.addCart(data.selectedNum);
            Toast("添加购物车成功");
            this.showParams = false;
        },
        // 下单
        inputOrder(submitList) {
            //提交订单
            axios
                .request({
                    url: "order/orders",
                    method: "post",
                    data: {
                        type: "mall",
                        goods: submitList,
                        ps: ""
                    }
                })
                .then(res => {
                    if (res.status === 1) {
                        Toast("订单创建成功");
                        // for (let i = 0; i < indexList.length; i++) {
                        //     this.goods.splice(indexList[i], 1);
                        // }
                        localStorage.setItem(
                            "cartList",
                            JSON.stringify(this.goods)
                        );
                        this.$router.push({
                            path: "/orderDetail?id=" + res.id
                        });
                    } else {
                        Toast("订单创建失败,请刷新重试");
                    }
                });
        },
        getGoodsData() {
            axios
                .request({
                    url:
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
                    this.goods = res.data[0];
                    this.goodsId = this.goods.id;
                    this.goodsShow = true;
                    this.goods_params.title = this.goods.name;
                    this.goods_params.picture = this.goods.imgs[0].url;
                });
        },
        addCart(num = 1) {
            //存入缓存购物车
            let cartList = [];
            cartList = this.returnCart(this.goods, num);
            this.cartLength = 0;
            for (let i = 0; i < cartList.length; i++) {
                this.cartLength += cartList[i].num;
            }
            localStorage.setItem("cartList", JSON.stringify(cartList));
            // console.log(JSON.parse(localStorage.getItem("cartList")));
        },
        initCart() {
            if (localStorage.getItem("cartList")) {
                for (
                    let i = 0;
                    i < JSON.parse(localStorage.getItem("cartList")).length;
                    i++
                ) {
                    this.cartLength += JSON.parse(
                        localStorage.getItem("cartList")
                    )[i].num;
                }
            }
        },
        //处理购物车数据
        returnCart(good, num = 1) {
            console.log("购物车处理数据", good);

            /**
             * 格式
             * [
             *      {
             *          good:{
             *               ...
             *          },
             *          num:'1'
             *      }
             * ]
             */
            let cartList = [];
            if (localStorage.getItem("cartList")) {
                cartList = JSON.parse(localStorage.getItem("cartList"));
            }
            if (cartList.length > 0) {
                for (let i = 0; i < cartList.length; i++) {
                    if (cartList[i].good.id === good.id) {
                        if (cartList[i].num < cartList[i].good.limit) {
                            cartList[i].num++;
                            console.log("++");
                        } else {
                            Toast("此商品已超过购买数量");
                        }
                        return cartList;
                    } else if (i === cartList.length - 1) {
                        cartList.push({
                            good: good,
                            num: num
                        });
                        console.log("++");
                        return cartList;
                    }
                }
            } else {
                cartList.push({
                    good: good,
                    num: num
                });
                console.log("++");
            }
            return cartList;
        }
    },
    mounted() {
        token.initToken(this.$route.query.token);
        this.getGoodsData();
        this.initCart();
    }
};
</script>

<style lang="less">
.goods_page {
    .goods {
        position: absolute;
        padding-bottom: 50px;
        width: 100%;
        height: calc(100% - 50px);
        overflow-x: hidden;
        overflow-y: scroll;
        &-swipe {
            // max-height: 300px;
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
            &-content {
                padding: 0 15px;
            }
            .van-cell__value {
                color: #999;
            }
        }

        &-tag {
            margin-left: 5px;
        }
    }
    .goods-click {
        bottom: 0px;
    }
}
</style>
