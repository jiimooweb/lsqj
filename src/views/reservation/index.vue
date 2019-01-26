<template>
    <div>
        <van-cell-group>
            <div @click="showSelectItem(true,0)">
                <van-field v-model="item" required label="预约项目" placeholder="请选择项目" />
            </div>
        </van-cell-group>
        <van-cell-group>
            <van-field v-model="name" required label="姓名" placeholder="请输入姓名" />
        </van-cell-group>
        <van-cell-group>
            <van-field v-model="phone" required label="手机" placeholder="请输入手机" :error-message="errorPhone" />
        </van-cell-group>
        <van-cell-group>
            <div @click="showSelectItem(true,1)">
                <van-field v-model="time" required label="预约日期" placeholder="请选择日期" />
            </div>
        </van-cell-group>
        <van-cell-group>
            <van-field v-model="moneyText" disabled label="定金"/>
        </van-cell-group>
        <van-button size="large" type="primary" class="creatBtn">创建预约</van-button>
        <div class="page" v-if="seletPage">
            <van-picker v-if="itemType === 0" show-toolbar class="selectItem" :columns="columns" @cancel="onCancel"
                @confirm="onConfirm" />
            <van-datetime-picker class="selectItem" v-if="itemType === 1" v-model="currentDate" type="date" :max-date="maxDate"
                :min-date="minDate" @cancel="onCancelTime" @confirm="onConfirmTime" />
        </div>
    </div>
</template>

<script>
import {
    Button,
    DatetimePicker,
    Icon,
    Cell,
    CellGroup,
    Picker,
    Field
} from "vant";
import axios from "../../public/axios";
export default {
    components: {
        [Button.name]: Button,
        [Icon.name]: Icon,
        [Field.name]: Field,
        [Picker.name]: Picker,
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup,
        [DatetimePicker.name]: DatetimePicker
    },
    data() {
        return {
            currentDate: new Date(),
            minDate: new Date(),
            maxDate: "",
            name: "",
            phone: "",
            errorPhone: "",
            time: "",
            item: "",
            itemId:'',
            money:0.00,
            moneyText:'0 元',
            itemType: 0,//0为项目选择 1为时间选择
            canInput: false,
            // columns: ["烧烤", "钓鱼", "农家乐", "摘菜"],
            columns: [{text:"烧烤",id:0,money:100}, {text:"钓鱼",id:0,money:200}],
            seletPage: false
        };
    },
    watch: {
        money(){
            this.moneyText = this.money + ' 元'
        },
        phone() {
            var myreg = /^[1][0-9][0-9]{9}$/;
            if (!myreg.test(this.phone)) {
                this.errorPhone = "手机号格式错误";
            } else {
                this.errorPhone = "";
            }
        },
        canInput() {
            if (
                this.name === "" ||
                this.phone === "" ||
                this.errorPhone !== "" ||
                this.time === "" ||
                this.item === ""
            ) {
                console.log(1);
            } else {
                console.log(2);
            }
        }
    },
    methods: {
        showSelectItem(i, type) {
            this.seletPage = i;
            this.itemType = type;
        },
        onCancel() {
            this.showSelectItem(false, 0);
        },
        onConfirm(value, index) {
            this.item = value.text;
            this.itemId = value.id
            this.money = value.money
            this.showSelectItem(false, 0);
        },
        //时间选择
        onCancelTime() {
            this.showSelectItem(false, 1);
        },
        onConfirmTime(value) {
            this.time =
                value.getFullYear() +
                "-" +
                (value.getMonth() + 1) +
                "-" +
                value.getDate();
            this.showSelectItem(false, 1);
        }
    },
    mounted() {
        let tData = new Date();
        tData.setFullYear(tData.getFullYear() + 1);
        this.maxDate = tData;
    }
};
</script>

<style lang='less'>
.page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    .selectItem {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        // height: 250px;
    }
}
.creatBtn {
    position: absolute;
    bottom: 100px;
    left: 10%;
    width: 80%;
}
</style>