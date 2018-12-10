<template>
    <div>
        <div class="cart_page">
            <!-- <p class="cart_title">
                <span>购物车</span>
            </p> -->
            <div class="cart_item_page">
                <p v-if="!hasCart" class="tip">购物车暂无商品</p>
                <van-checkbox-group
                    class="card-goods"
                    v-model="checkedGoods"
                    v-else
                >
                    <van-checkbox
                        class="card-goods__item"
                        :disabled='item.good.error !== 0'
                        v-for="(item,index) in goods"
                        :key="item.good.id"
                        :name="item.good.id"
                        @change='returnCheckedGoods()'
                    >
                        <!-- <van-card :title="item.good.name" :num="item.num" :price="formatPrice((item.good.type === 'discount' || item.good.type === 'member')?item.good.discount:item.good.price)" :thumb="item.good.imgs[0].url" /> -->
                        <div class="card-item">
                            <van-icon name="close" class="deleteItem" @click.stop="deleteItem(index)" color='#999' size='20px'/>
                            <div class="card-item-img">
                                <img :src="item.good.imgs[0].url">
                            </div>
                            <div class="card-item-text">
                                <p class="card-item-text-title">
                                    <a class="card-item-text-title-a">{{item.good.name}}</a>
                                </p>
                                <div class="card-item-text-price">
                                    <!-- 编辑商品错误 -->
                                    <p class="card-item-text-price-error" v-if='item.good.error !== 0'>
                                        {{item.good.error === 1?'非会员无法购买会员专属商品':
                                        (item.good.error === 2?'商品数量超出购买上限':
                                            (item.good.error === 3?'商品购买数量超出库存':
                                                (item.good.error === 4?'商品已售罄':
                                                    (item.good.error === 5?'商品已下架':'')
                                                )
                                            )
                                        )
                                        
                                        }}
                                    </p>
                                    <span class="card-item-text-price-new">¥{{item.good.endPrice}}</span>
                                    <!-- <span class="card-item-text-price-old">20元</span> -->
                                    <span class="card-item-text-price-changeNum" @click.stop="">
                                        <van-stepper
                                        :disabled='item.good.error !== 0'
                                            v-model="item.num"
                                            integer
                                            :min="0"
                                            :max="item.good.limit"
                                            :step="1"
                                            @minus='isZero(item.num,index)'
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </van-checkbox>
                </van-checkbox-group>
            </div>
            
            <van-submit-bar
                :price="totalPrice"
                :disabled="!checkedGoods.length"
                :button-text="submitBarText"
                @submit="onSubmit"
            >
                <van-checkbox
                    class="isAll"
                    v-model="isAll"
                    @change="allCheck()"
                >全选</van-checkbox>
            </van-submit-bar>
        </div>

    </div>
</template>

<script>
import {
    Stepper,
    Checkbox,
    CheckboxGroup,
    Card,
    SubmitBar,
    Toast,
    Icon,
    Dialog
} from "vant";
import axios from "../../public/axios";

export default {
    components: {
        [Card.name]: Card,
        [Checkbox.name]: Checkbox,
        [SubmitBar.name]: SubmitBar,
        [CheckboxGroup.name]: CheckboxGroup,
        [Icon.name]: Icon,
        [Stepper.name]: Stepper,
        [Dialog.name]: Dialog
    },

    data() {
        return {
            hasCart:false,
            isAll: false,
            checkedGoods: [],
            goods: []
        };
    },

    computed: {
        submitBarText() {
            let count = 0;
            for (let item in this.goods) {
                if (
                    this.checkedGoods.indexOf(this.goods[item].good.id) !== -1
                ) {
                    count += this.goods[item].num;
                }
            }
            return "结算" + (count ? `(${count})` : "");
        },

        totalPrice() {
            let total = 0;
            for (let item in this.goods) {
                if (
                    this.checkedGoods.indexOf(this.goods[item].good.id) !== -1
                ) {
                    total +=
                        this.goods[item].good.endPrice *
                        100 *
                        this.goods[item].num;
                    // console.log(this.goods[item]);
                }
            }
            return total;
        }
    },

    methods: {
        //删除产品
        deleteItem(index){
            Dialog.confirm({
                    title: '确认删除',
                    message: '是否从购物车删除该商品?'
                }).then(() => {
                // on confirm
                    this.goods.splice(index,1)
                    localStorage.setItem('cartList',this.goods)
                    if(this.goods.length === 0){
                        this.hasCart = false
                    }
                }).catch(() => {
                // on cancel
                    
                });
        },
        //判断数量是否为0
        isZero(num,index) {
            if ((num-1) === 0) {
                Dialog.confirm({
                    title: '确认删除',
                    message: '是否从购物车删除该商品?'
                }).then(() => {
                // on confirm
                    this.goods.splice(index,1)
                    localStorage.setItem('cartList',this.goods)
                    if(this.goods.length === 0){
                        this.hasCart = false
                    }
                }).catch(() => {
                // on cancel
                    this.goods[index].num++
                });
            }
            localStorage.setItem('cartList',JSON.stringify(this.goods))
        },
        returnCheckedGoods() {
            console.log(this.checkedGoods);
        },
        formatPrice(price) {
            return price.toFixed(2);
        },

        onSubmit() {
            let submitList = []
            let indexList = []
            this.goods.some((item,index) =>{
                for(let i=0;i<this.checkedGoods.length;i++){
                    if(item.good.id === this.checkedGoods[i]){
                        submitList.push({id:item.good.id,num:item.num})
                        indexList.push(index)
                    }
                }
            })
            //提交订单
            axios.request({
                url:'order/orders',
                method:'post',
                data:{
                    type:"mall",
                    goods:submitList,
                    ps:''
                }
            }).then(res=>{
                if(res.status === 1){
                    Toast("订单创建成功");
                    for(let i=0;i<indexList.length;i++){
                        this.goods.splice(indexList[i],1)
                    }
                    localStorage.setItem('cartList',JSON.stringify(this.goods))
                    this.$router.push({path:'orderDetail/id=' + res.id})
                }else{
                    Toast("订单创建失败");
                    this.verificationCart()
                }
            })
        },
        //全选购物车
        allCheck() {
            if (this.isAll) {
                for (let item in this.goods) {
                    if(this.goods[item].good.error === 0){
                        this.checkedGoods.push(this.goods[item].good.id);
                    }
                }
            } else {
                this.checkedGoods = [];
            }
        },

        getGoodsList() {
            this.goods = JSON.parse(localStorage.getItem("cartList"));
            if(this.goods){
                this.verificationCart();
            }
        },
        //验证购物车商品
        verificationCart() {
            let iCart = [];
            for (let i = 0; i < this.goods.length; i++) {
                iCart.push({
                    id: this.goods[i].good.id,
                    num: this.goods[i].num
                });
            }
            if (iCart.length > 0) {
                this.hasCart = true
                axios
                    .request({
                        url: "mall/cart",
                        method: "post",
                        headers: {
                            token: localStorage.getItem("token")
                        },
                        data: {
                            goods: iCart
                        }
                    })
                    .then(res => {
                        for (let i = 0; i < this.goods.length; i++) {
                            this.goods[i].good = res.data[i];
                        }
                    });
            }
        }
    },
    mounted() {
        this.getGoodsList();
    }
};
</script>

<style lang="less">
.cart_page {
    position: absolute;
    width: 100%;
    height: 100%;

    background: #f2f2f2;
    .deleteItem{
        position: absolute;
        right: 6%;
        z-index: 10000;
        display: block;
        overflow: hidden;
    }
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
        height: calc(100% - 50px - 50px);
        overflow-y: scroll;
        overflow-x: hidden;
        margin: 0px auto 0;
        .tip{
            font-size: 20px;
            color: #999;
        }
        .card-goods {
            width: 90%;
            overflow: hidden;
            margin: 20px auto 20px;
            border-radius: 10px;
            background: #fff;
            &__item {
                margin-top: 10px;
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
            .card-item {
                width: 95%;
                height: 100px;
                margin: 10px auto;
                &-img {
                    width: 100px;
                    height: 100px;
                    float: left;
                    overflow: hidden;
                    border-radius: 5px;
                    img {
                        display: block;
                        width: 100px;
                    }
                }
                &-text {
                    float: right;
                    width: calc(100% - 100px - 15px);
                    height: 100px;
                    &-title {
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
                        &-tag {
                            margin-right: 5px;
                        }
                        &-a {
                            color: #111;
                        }
                    }
                    &-price {
                        font-size: 14px;
                        margin: 20px 0 0;
                        padding: 0 5px;
                        &-error{
                            font-size: 12px;
                            color: red;
                            margin: -25px 0 0;
                            padding: 0;
                        }
                        &-new {
                            font-size: 15px;
                            color: #ed4014;
                            line-height: 30px;
                            float: left;
                        }
                        &-changeNum {
                            float: left;
                            margin-left: 15px;
                        }
                    }
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
