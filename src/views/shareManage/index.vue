<template>
    <div class="listPage">
        <van-cell title="任务开关">
            <van-switch
            size='20px'
                v-model="task.status"
                @change="inputTask()"
            />
        </van-cell>
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
        >
            <div
                v-for="(item,index) in list"
                class="listItem"
                :key="index"
            >
                <p class="listItem-name">{{item.name}}</p>
                <p class="listItem-name">{{item.contact_way}}</p>
                <van-button
                    type="primary"
                    size='small'
                    class="listItem-btn"
                    @click='onpenCheck(index)'
                    v-if="item.flag!==1"
                    :disabled='item.flag===1'
                >领取奖励</van-button>
                <van-button
                    type="primary"
                    size='small'
                    class="listItem-btn"
                    v-else
                    :disabled='item.flag===1'
                >已经领取</van-button>
            </div>
        </van-list>
    </div>
</template>

<script>
import { Switch, Toast, Dialog, Cell, CellGroup, List, Button } from "vant";
import axios from "../../public/axios.js";
import Token from "../../public/util.js";
const token = new Token();
export default {
    components: {
        [List.name]: List,
        [Button.name]: Button,
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup,
        [Toast.name]: Toast,
        [Dialog.name]: Dialog,
        [Switch.name]: Switch
    },
    data() {
        return {
            task: {
                status: 0,
                task_target: 0,
                reward: 0
            },
            list: [],
            loadingNum: 0,
            loadingList: [],
            loading: false,
            finished: false
        };
    },
    methods: {
        onLoad() {
            setTimeout(() => {
                let num = this.loadingNum;
                for (let i = num; i < num + 10; i++) {
                    if (this.loadingNum >= this.loadingList.length) {
                        this.finished = true;
                        this.loading = false;
                        return;
                    }
                    this.list.push(this.loadingList[i]);
                    this.loadingNum += 1;
                }
                // 加载状态结束
                this.loading = false;

                // 数据全部加载完成
            }, 1500);
        },
        getTask() {
            axios
                .request({
                    url: "share/tasks",
                    method: "get",
                    headers: {
                        token: localStorage.getItem("token")
                    }
                })
                .then(res => {
                    if (res.data.status === 1) {
                        this.task.status = true;
                    } else {
                        this.task.status = false;
                    }
                    this.task.task_target = res.data.task_target;
                    this.task.reward = res.data.reward;
                });
        },
        inputTask() {
            axios
                .request({
                    url: "share/tasks/1",
                    method: "put",
                    headers: {
                        token: localStorage.getItem("token")
                    },
                    data: {
                        reward: this.task.reward,
                        status: this.task.status? 1 : 0,
                        task_target: this.task.task_target
                    }
                })
                .then(res => {
                    Toast.success("修改成功");
                });
        },
        getList() {
            axios
                .request({
                    url: "share/over/show",
                    method: "post",
                    headers: {
                        token: localStorage.getItem("token")
                    },
                    data: {}
                })
                .then(res => {
                    this.list = [];
                    this.loadingList = [];
                    this.loadingList = res.data;
                    this.loading = true;
                    this.onLoad();
                });
        },
        onpenCheck(index) {
            Dialog.confirm({
                title: "核销",
                message: "是否确认-" + this.list[index].name + "-使用奖励"
            })
                .then(() => {
                    this.check(index);
                })
                .catch(() => {
                    // on cancel
                });
        },
        check(index) {
            axios
                .request({
                    url: "share/over/check-register",
                    method: "post",
                    headers: {
                        token: localStorage.getItem("token")
                    },
                    data: {
                        fan_id: this.list[index].fan_id
                    }
                })
                .then(res => {
                    this.list[index].flag = 1;
                    Toast.success("成功核销");
                });
        }
    },
    mounted() {
        token.initToken(this.$route.query.token);
        this.getList();
        this.getTask();
    }
};
</script>

<style lang='less'>
.van-cell__title{
    text-align: left;
}
.listPage {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow-x: hidden;
    overflow-y: scroll;
}
.listItem {
    border-bottom: 1px solid #ddd;
    margin: 0 auto;
    width: 90%;
    overflow: hidden;
    &-name {
        overflow: hidden; //超出的文本隐藏
        text-overflow: ellipsis; //溢出用省略号显示
        white-space: nowrap; //溢出不换行
        font-size: 14px;
        text-align: left;
        float: left;
        line-height: 28px;
        display: block;
        width: 30%;
    }
    &-btn {
        width: 30%;
        margin-top: 12.5px;
        float: right;
        display: block;
    }
}
</style>