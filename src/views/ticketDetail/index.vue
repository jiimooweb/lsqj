<template>
    <div class="page">
        <div class="title">烧烤套餐（5-10人）</div>
        <div class="content">
            <!--放富文本内容 -->
        </div>
        <div class="footer">
            <div class="row">
                <div class="price">￥100</div>
                <div class="num">今日剩余：5</div>
            </div>
            <button class="buy">立即购买</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    components: {},
    methods: {},
    mounted() {}
};
</script>

<style scoped>
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
