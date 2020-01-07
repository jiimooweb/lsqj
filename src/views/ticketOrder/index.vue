<template>
    <div class="page">
        <div class="package">
            <div class="pimg">
                <img :src="ticketData.cover">
            </div>
            <div class="info">
                <div class="name">
                    {{ticketData.name}}
                </div>
                <div class="remake">{{ticketData.remark}}</div>
                <div class="price">￥{{ticketData.price}}</div>
            </div>
        </div>
        <div class="row">
            <div class="left">数量</div>
            <van-stepper
                v-model="num"
                :max="ticketData.daily_inventory"
            />
        </div>
        <div class="line"></div>
        <div class="row">
            <div class="left">小计</div>
            <div
                class="right"
                style="color:#F56C6C"
            >￥{{num * ticketData.price}}</div>
        </div>
        <!-- 先不实现，等以后再说 -->
        <div class="row mtop">
            <div class="left">抵用券</div>
            <div class="right">暂无可用</div>
        </div>
        <div class="line"></div>
        <div class="row">
            <div class="left">实付金额</div>
            <div
                class="right"
                style="color:#F56C6C"
            >￥{{num * ticketData.price}}</div>
        </div>
        <div class="row mtop">
            <div class="left">姓名</div>
            <input
                class="right-input"
                type="text"
                v-model="name"
            >
        </div>
        <div class="line"></div>
        <div class="row">
            <div class="left">手机号</div>
            <input
                class="right-input"
                type="text"
                v-model="phone"
            >
        </div>
        <div class="line"></div>
        <div
            class="row"
            @click="selectShow(true)"
        >
            <div class="left">预定日期</div>
            <p
                class="right-input"
                style='background:#fff;'
            >{{date}}</p>
        </div>

        <button
            class="commit"
            @click="creatOrder()"
        >
            提交订单
        </button>
        <div
            class="selectTime"
            v-if="showSelect"
        >
            <van-datetime-picker
                class="time"
                @confirm='confirm'
                @cancel='cancel'
                v-model="date"
                type="date"
                :min-date="minDate"
                :max-date="maxDate"
            />
        </div>
        <div
            class='loadingPage'
            v-show='isLoading'
        >
            <van-loading
                color="#fff"
                size="35px"
                vertical
            >加载中...</van-loading>
        </div>
    </div>
</template>

<script>
import { Stepper, Toast, Field, DatetimePicker, Loading } from "vant";
import axios from "../../public/axios.js";
import Vue from "vue";
Vue.use(Loading);
export default {
    data() {
        return {
            showSelect: false,
            minDate: new Date(),
            maxDate: new Date(),
            num: 1,
            name: "",
            phone: "",
            date: "",
            ticketData: {},
            isLoading: false
        };
    },
    components: {
        [Stepper.name]: Stepper,
        [Toast.name]: Toast,
        [DatetimePicker.name]: DatetimePicker,
        [Field.name]: Field,
        Loading
    },
    methods: {
        confirm(a) {
            this.selectShow(false);
            this.date =
                a.getFullYear() + "-" + (a.getMonth() + 1) + "-" + a.getDate();
        },
        cancel() {
            this.selectShow(false);
        },
        selectShow(i) {
            this.showSelect = i;
        },
        getTicketData() {
            this.ticketData = JSON.parse(localStorage.getItem("ticketData"));
            this.maxDate = new Date();
            this.maxDate.setDate(
                new Date().getDate() + this.ticketData.from_now
            );
        },
        creatOrder() {
            if (this.name === "") {
                Toast("姓名不能为空");
                return;
            } else if (this.phone === "") {
                Toast("手机不能为空");
                return;
            } else if (this.date === "") {
                Toast("日期不能为空");
                return;
            }
            axios
                .request({
                    url: "order/orders",
                    method: "post",
                    data: {
                        type: "ticket",
                        ticket_id: this.ticketData.id,
                        name: this.name,
                        mobile: this.phone,
                        purchase_quantity: this.num,
                        booking_date: this.date
                    }
                })
                .then(res => {
                    if (res.status === 1) {
                        localStorage.setItem("ticketId", res.id);
                        this.$router.push({ path: "/ticketOrderDetail" });
                    } else {
                        Toast("下单失败，请稍后重试");
                    }
                });
        }
    },
    mounted() {
        this.getTicketData();
    }
};
</script>

<style scoped>
.loadingPage {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
.page {
    text-align: left;
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
    text-align: center;
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

.selectTime {
    z-index: 10000;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
}
.time {
    text-align: center;
    position: absolute;
    bottom: 0;
    width: 100%;
}
.time li {
    text-align: center;
}
</style>
