<template>
    <div class="page">
        <div class="store">
            <div class="name">绿水清江休闲农场</div>
            <div class="row">
                <img src="../../assets/time.png">
                <span>营业时间：10:00-19:00</span>
            </div>
            <div
                class="row"
                @click="call()"
            >
                <img src="../../assets/tel.png">
                <span>13702512618</span>
            </div>
            <div
                class="row"
                @click="addess()"
            >
                <img src="../../assets/address.png">
                <span>中山火炬高技术产业开发区绿水清江休闲农业</span>
                <!-- <span>中山市火炬开发区中山港大道绿水清江农场</span> -->
            </div>
            <button
                class="admin"
                @click="intoAdmin()"
                v-if='isAdmin'
            >管理员</button>
        </div>
        <div
            class="packages"
            v-if="ticketList.length>0"
        >
            <div class="title">套餐列表</div>
            <div
                class="package"
                v-for="(item,index) in ticketList"
                :key='index'
                @click="intoDetail(item)"
            >
                <!-- <div v-if='item.is_up === 1'> -->
                <div class="pimg">
                    <img :src="item.cover">
                </div>
                <div class="info">
                    <div class="name">
                        {{item.name}}
                    </div>
                    <div class="remake">{{item.remark}}</div>
                    <div class="num">今日剩余：{{item.daily_inventory}}</div>
                </div>
                <div class="price">￥{{item.price}}</div>
                <!-- <button class="buy" @click="creatOrder(item.id)">购买</button> -->
                <!-- </div> -->
            </div>
        </div>
        <div class="footer">所有解释权归绿水清江农场所有</div>
    </div>
</template>

<script>
import axios from "../../public/axios.js";
export default {
    data() {
        return {
            isAdmin: false,
            currentPage: 1,
            ticketList: [],
            currentData: {}
        };
    },
    components: {},
    methods: {
        addess() {
            location.href =
                "https://uri.amap.com/marker?position=113.452395,22.575444";
        },
        call() {
            location.href = "tel:13702512618";
        },
        intoAdmin() {
            this.$router.push({ path: "/manageTicketOrder" });
        },
        intoDetail(item) {
            //存到本地
            this.currentData = item;
            console.log(this.currentData);

            localStorage.setItem(
                "ticketData",
                JSON.stringify(this.currentData)
            );
            //跳转

            this.$router.push({ path: "ticketDetail" });
        },
        getTicket() {
            axios
                .request({
                    url: "ticket/ticket?page=" + this.currentPage,
                    method: "get"
                })
                .then(res => {
                    this.ticketList = res.data.data;
                });
        },
        getUesr() {
            axios
                .request({
                    url: "user",
                    method: "get",
                    headers: {
                        token:
                            localStorage.getItem("token") ||
                            this.$route.query.token
                    }
                })
                .then(res => {
                    this.isAdmin = res.data.admin === null ? 0 : 1;
                });
        },
        creatOrder(id) {}
    },
    mounted() {
        this.getTicket();
        this.getUesr();
    }
};
</script>

<style scoped>
* {
    text-align: left;
}
.admin {
    position: absolute;
    margin-top: -100px;
    margin-left: 250px;
    font-size: 14px;
    color: #fff;
    background-color: #e6a23c;
    border: 0;
}
.page {
    background-color: #f1f1f1;
    position: absolute;
    width: 100%;
    height: calc(100% - 50px);
    top: 0;
    left: 0;
    overflow-x: hidden;
    overflow-y: scroll;
}
.store {
    padding: 10px;
    box-sizing: border-box;
    background-color: #fff;
}

.store .name {
    font-size: 21px;
    font-weight: 500;
    text-align: left;
    color: #303133;
}

.store .time {
    font-size: 13px;
    margin-top: 5px;
    color: #606266;
}

.store .row {
    font-size: 14px;
    margin-top: 5px;
    color: #606266;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: -3px;
}

.store .row img {
    width: 20px;
    height: 20px;
    margin-right: 5px;
}

.packages {
    padding: 10px 10px 5px 10px;
    box-sizing: border-box;
    background-color: #fff;
    margin-top: 10px;
}

.packages .title {
    font-weight: bold;
    font-size: 16px;
    text-align: left;
}

.packages .package {
    padding: 10px 0;
    box-sizing: border-box;
    height: 100px;
    width: 100%;
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    align-items: center;
    border-bottom: 1px solid #ebeef5;
}

.packages .package:last-child {
    border-bottom: 0;
}

.packages .package .pimg {
    min-width: 80px;
    width: 80px;
    height: 80px;
    margin-right: 10px;
}
.packages .package .price {
    color: #f56c6c;
    text-align: right;
    font-size: 16px;
}
.packages .package .pimg img {
    width: 100%;
    height: 100%;
}

.packages .package .info {
    width: calc(100% - 150px);
}

.packages .package .info .name {
    font-size: 14px;
}

.packages .package .info .remake {
    font-size: 12px;
    margin-top: 2px;
    color: #909399;
}

.packages .package .info .num {
    font-size: 12px;
    margin-top: 2px;
    float: left;
    color: #909399;
}

.packages .package .info .price {
    font-size: 15px;
    font-weight: 500;
    float: right;
    color: #f56c6c;
}

.packages .package .buy {
    font-size: 14px;
    color: #fff;
    background-color: #e6a23c;
    border: 0;
}

.footer {
    margin-top: 20px;
    font-size: 14px;
    width: 100%;
    text-align: center;
    color: #909399;
}
</style>
