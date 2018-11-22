<template>
    <div>
        <div class="cart_page">
            <p class="cart_title">
                <span>购物车</span>
            </p>
            <div class="cart_item_page">
                <van-checkbox-group class="card-goods" v-model="checkedGoods">
                    <van-checkbox class="card-goods__item" v-for="item in goods" :key="item.id" :name="item.id">
                        <van-card :title="item.title" :desc="item.desc" :num="item.num" :price="formatPrice(item.price)" :thumb="item.thumb" />
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
            checkedGoods: ["1", "2", "3", "5"],
            goods: [
                {
                    id: "1",
                    title: "进口香蕉",
                    desc: "约250g，2根",
                    price: 200,
                    num: 1,
                    thumb:
                        "https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg"
                },
                {
                    id: "2",
                    title: "陕西蜜梨",
                    desc: "约600g",
                    price: 690,
                    num: 1,
                    thumb:
                        "https://img.yzcdn.cn/public_files/2017/10/24/f6aabd6ac5521195e01e8e89ee9fc63f.jpeg"
                },
                {
                    id: "3",
                    title: "美国伽力果",
                    desc: "约680g/3个",
                    price: 2680,
                    num: 1,
                    thumb:
                        "https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg"
                },
                {
                    id: "4",
                    title: "青菜",
                    desc: "约680g/3个",
                    price: 2680,
                    num: 1,
                    thumb:
                        "https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg"
                },
                {
                    id: "5",
                    title: "番茄",
                    desc: "约680g/3个",
                    price: 2680,
                    num: 1,
                    thumb:
                        "https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg"
                },
                {
                    id: "6",
                    title: "茄子",
                    desc: "约680g/3个",
                    price: 2680,
                    num: 1,
                    thumb:
                        "https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg"
                }
            ]
        };
    },

    computed: {
        submitBarText() {
            const count = this.checkedGoods.length;
            return "结算" + (count ? `(${count})` : "");
        },

        totalPrice() {
            return this.goods.reduce(
                (total, item) =>
                    total +
                    (this.checkedGoods.indexOf(item.id) !== -1
                        ? item.price
                        : 0),
                0
            );
        }
    },

    methods: {
        formatPrice(price) {
            return (price / 100).toFixed(2);
        },

        onSubmit() {
            Toast("点击结算");
        }
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
        // padding: 10px 10px 10px 5px;
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
