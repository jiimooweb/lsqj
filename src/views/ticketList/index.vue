<template>
    <div class="page">
        <div class="store">
            <div class="name">绿水清江休闲农场</div>
            <div class="row">
                <img src="../../assets/time.png" alt="" srcset="">
                <span>营业时间：10:00-19:00</span>
            </div>
            <div class="row">
                <img src="../../assets/tel.png" alt="" srcset="">
                <span>137 0251 2618</span>
            </div>
            <div class="row">
                <img src="../../assets/address.png" alt="" srcset="">
                <span>中山市火炬开发区中山港大道</span>
            </div>

        </div>
        <div class="packages" @click="intoDetail()">
            <div class="title">套餐列表</div>
            <div class="package">
                <div class="pimg">
                    <img src="https://download.rdoorweb.com/20190125/5307bb9e79737088f91fbc95b97a135e.jpg" alt=""
                        srcset="">
                </div>
                <div class="info">
                    <div class="name">
                        烧烤套餐（5-10人）
                    </div>
                    <div class="remake">适合5-10人选购</div>
                    <div class="num">今日剩余：5</div>
                    <div class="price">￥100</div>
                </div>
                <button class="buy">购买</button>
            </div>
        </div>
        <div class="footer">所有解释权归绿水清江农场所有</div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    components: {},
    methods: {
        intoDetail(){
            this.$router.push({path:'ticketDetail'})
        }
    },
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
    color: #909399;
}

.packages .package .info .price {
    font-size: 15px;
    font-weight: 500;
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
