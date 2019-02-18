<template>
    <div class="page">
        <div class="title">{{ticketData.name}}</div>
        <div class="content" v-html="ticketData.content">
            <!--放富文本内容 -->
        </div>
        <div class="footer">
            <div class="row">
                <div class="price">￥{{ticketData.price}}</div>
                <div class="num">今日剩余：{{ticketData.daily_inventory}}</div>
            </div>
            <button class="buy" @click="creatOrder()">立即购买</button>
        </div>
    </div>
</template>

<script>
import axios from "../../public/axios.js";
export default {
    data() {
        return {
            ticketData:{}
        };
    },
    components: {},
    methods: {
        getTicket(){
            this.ticketData = JSON.parse(localStorage.getItem('ticketData'))
            axios
                .request({
                    url: "ticket/ticket/"+this.ticketData.id,
                    method: "get"
                })
                .then(res => {
                    this.ticketData = res.data
                });
        },
        creatOrder(){
            if(this.ticketData.daily_inventory === 0){
                // Toast('今日名额');
                return
            }
            this.$router.push({ path: "ticketOrder" });
        }
    },
    mounted() {
        this.getTicket()
    }
};
</script>

<style scoped>
*{
    text-align: left;
}
.page{
    position: absolute;
    width: 100%;
    height: calc(100% - 50px);
    top: 0;
    left: 0;
    overflow-x: hidden;
    overflow-y: scroll;
}
.title {
    font-size: 20px;
    font-weight: 500;
    padding: 10px;
    box-sizing: border-box;
}

.content {
    padding: 10px;
    font-size: 18px;
    box-sizing: border-box;
    margin-bottom: 70px;
}

.footer {
    position: fixed;
    bottom: 50px;
    height: 60px;
    width: 100%;
    background-color: #f2f6fc;
    padding: 5px 10px;
    box-sizing: border-box;
    z-index: 10;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.footer .row .price {
    font-size: 18px;
    font-weight: 500;
    color: #f56c6c;
}
.footer .row .num {
    font-size: 12px;
    margin-top: 2px;
    color: #909399;
}

.footer .buy {
    text-align: center;
    font-size: 14px;
    color: #fff;
    background-color: #e6a23c;
    border: 0;
    border-radius: 20px;
    height: 35px;
    width: 100px;
}
</style>
