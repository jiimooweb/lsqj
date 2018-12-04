<template>
    <div>
        <div class="cart_page">
            <p class="cart_title">
                <span>购物车</span>
            </p>
            <div class="cart_item_page">
                <van-checkbox-group class="card-goods" v-model="checkedGoods">
                    <van-checkbox class="card-goods__item" v-for="item in goods" :key="item.good.id" :name="item.good.id">
                        <!-- <van-card :title="item.good.name" :desc="item.good.name" :num="item.num" :price="formatPrice(item.good.price)" :thumb="item.good.imgs[0]" /> -->
                        <van-card :title="item.good.name" :desc="item.good.name" :num="item.num" :price="formatPrice(item.good.price)" :thumb="item.good.imgs[0].url" />
                    </van-checkbox>
                </van-checkbox-group>
            </div>

            <van-submit-bar :price="totalPrice" :disabled="!checkedGoods.length" :button-text="submitBarText" @submit="onSubmit">
                <van-checkbox class="isAll" v-model="isAll">全选</van-checkbox>
            </van-submit-bar>
        </div>

    </div>
</template>

<script>
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast, Icon } from "vant";

export default {
    components: {
        [Card.name]: Card,
        [Checkbox.name]: Checkbox,
        [SubmitBar.name]: SubmitBar,
        [CheckboxGroup.name]: CheckboxGroup,
        [Icon.name]: Icon
    },

    data() {
        return {
            isAll: false,
            checkedGoods: [],
            goods: []
        };
    },

    computed: {
        submitBarText() {
            const count = this.checkedGoods.length;
            return "结算" + (count ? `(${count})` : "");
        },

        totalPrice() {
            return this.goods.reduce(
                (total, item) => (this.checkedGoods.indexOf(item.good.id) !== -1 ? item.good.price*100*item.num : 0),0
            );
        }
    },

    methods: {
        formatPrice(price) {
            return price.toFixed(2);
        },

        onSubmit() {
            Toast("点击结算");
        },
        getGoodsList(){
            this.goods = JSON.parse(localStorage.getItem('cartList'))
            console.log(this.goods[0].good.price);
        }
    },
    mounted(){
        this.getGoodsList()
    }
};
</script>

<style lang="less">
.cart_page {
    position: absolute;
    width: 100%;
    height: 100%;

    background: #f2f2f2;
    .cart_title {
        position: fixed;
        z-index: 1000;
        overflow: hidden;
        display: block;
        height: 50px;
        width: 100%;
        background: #f44;
        color: #fff;
        font-size: 18px;
        font-weight: bold;
        line-height: 50px;
        padding-left: 20px;
        margin-top: 0;
        text-align: left;
    }
    .cart_item_page {
        width: 100%;
        height: calc(100% - 50px - 50px - 50px);
        overflow-y: scroll;
        overflow-x: hidden;
        margin: 50px auto 0;
        .card-goods {
            width: 90%;
            overflow: hidden;
            margin: 20px auto 20px;
            border-radius: 10px;
            background: #fff;
            &__item {
                margin-bottom: 10px;
                position: relative;
                background-color: #fff;

                .van-checkbox__label {
                    width: 100%;
                    padding: 0 10px 0 15px;
                    box-sizing: border-box;
                }

                .van-checkbox__icon {
                    top: 50%;
                    left: 10px;
                    z-index: 1;
                    position: absolute;
                    margin-top: -10px;
                }
                .van-checkbox__label {
                    .van-card {
                        background-color: #fff;
                    }
                }
                .van-card__price {
                    color: #f44;
                }
            }
        }
    }
    .van-submit-bar {
        bottom: 50px;
    }
    .isAll {
        margin-left: 10px;
    }
}
</style>
