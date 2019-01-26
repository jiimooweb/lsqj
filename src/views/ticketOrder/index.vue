<template>
    <div class="page">
        <div class="package">
            <div class="pimg">
                <img src="https://download.rdoorweb.com/20190125/5307bb9e79737088f91fbc95b97a135e.jpg" alt="" srcset="">
            </div>
            <div class="info">
                <div class="name">
                    烧烤套餐（5-10人）
                </div>
                <div class="remake">适合5-10人选购</div>
                <div class="price">￥100</div>
            </div>
        </div>
        <div class="row">
            <div class="left">数量</div>
            <!-- <div class="right-num">
                <div class="reduce">-</div>
                <span class="num">1</span>
                <div class="add">+</div>
            </div> -->
            <van-stepper v-model="num" />
        </div>
        <div class="line"></div>
        <div class="row">
            <div class="left">小计</div>
            <div class="right" style="color:#F56C6C">￥100</div>
        </div>
        <!-- 先不实现，等以后再说 -->
        <div class="row mtop">
            <div class="left">抵用券</div>
            <div class="right">暂无可用</div>
        </div>
        <div class="line"></div>
        <div class="row">
            <div class="left">实付金额</div>
            <div class="right" style="color:#F56C6C">￥100</div>
        </div>

        <div class="row mtop">
            <div class="left">手机号</div>
            <!-- <div class="right">13450913425</div> -->
            <input class="right-input" type="text" value="13450913425">
        </div>

        <button class="commit">
            提交订单
        </button>
    </div>
</template>

<script>
import { Stepper,Field  } from "vant";
export default {
    data() {
        return {
            num:1,
            phone:'13450913425'
        };
    },
    components: {
        [Stepper.name]: Stepper,
        [Field.name]: Field,
    },
    methods: {},
    mounted() {}
};
</script>

<style scoped>
.page{
    background-color: #f1f1f1;
    position: absolute;
    width: 100%;
    height: calc(100% - 50px);
    top: 0;
    left: 0;
    overflow-x: hidden;
    overflow-y: scroll;
}
.row {
    height: 40px;
    padding: 5px 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    font-size: 14px;
}

.right-num {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 80px;
    height: 100%;
}

.reduce {
    height: 21px;
    width: 21px;
    border-radius: 50%;
    border: 1px solid #67c23a;
    text-align: center;
    font-size: 20px;
    line-height: 20px;
    color: #67c23a;
}

.add {
    height: 22px;
    width: 22px;
    border-radius: 50%;
    background-color: #67c23a;
    text-align: center;
    font-size: 20px;
    line-height: 20px;
    color: #fff;
}

.line {
    height: 1px;
    background-color: #f1f1f1;
    width: 100%;
}

.row .left {
}

.row .right {
    color: #909399;
    font-size: 13px;
}

.mtop {
    margin-top: 10px;
}

.package {
    padding: 10px;
    box-sizing: border-box;
    height: 80px;
    width: 100%;
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    align-items: center;
    border-bottom: 1px solid #f1f1f1;
    background-color: #fff;
}

.package:last-child {
    border-bottom: 0;
}

.package .pimg {
    min-width: 60px;
    width: 60px;
    height: 60px;
    margin-right: 10px;
}

.package .pimg img {
    width: 100%;
    height: 100%;
}

.package .info {
    text-align: left;
    width: calc(100% - 150px);
}

.package .info .name {
    font-size: 14px;
}

.package .info .remake {
    font-size: 12px;
    margin-top: 2px;
    color: #909399;
}

.package .info .price {
    font-size: 15px;
    font-weight: 500;
    margin-top: 2px;
    color: #f56c6c;
}

.commit {
    margin-top: 15px;
    height: 40px;
    width: 90%;
    margin-left: 5%;
    border-radius: 5px;
    font-size: 14px;
    color: #fff;
    background-color: #e6a23c;
    border: 0;
}

.right-input {
    color: #909399;
    border: none;
    font-size: 13px;
    text-align: right;
}
</style>
