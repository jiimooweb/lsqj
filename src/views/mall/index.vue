<template>
  <div class='mall_page'>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item,index) in arrSwipes" :key='index' @click="to(index)">
        <img :src="item.url" alt="" width='100%' height="auto">
      </van-swipe-item>
    </van-swipe>
    <div class="hot_album">
      <button class="module_title"> 会员专享 </button>
    </div>
    <div class="goods_page">
      <div>
        <van-row justify="space-between">
          <van-col v-for="(item,index) in arrGoods" :key='index' v-if="index>3?false:true" span="10" offset='1'>
            <div class="good_page">
              <img :src="item.url" alt="">
              <p>{{item.title}}</p>
              <p class="good_price">
                <span class='discount'>{{item.discount}}</span>
                <span class='price'>{{item.price}}</span>
              </p>
               <van-goods-action-big-btn text="立即购买" @click="onClickBigBtn" primary />
            </div>

          </van-col>

        </van-row>
      </div>
    </div>
  </div>
</template>
<script>
import {
  Swipe,
  SwipeItem,
  Cell,
  CellGroup,
  Row,
  Col,
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn
} from 'vant';


export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Row.name]: Row,
    [Col.name]: Col,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionBigBtn.name]: GoodsActionBigBtn,
    [GoodsActionMiniBtn.name]: GoodsActionMiniBtn

  },
  data() {
    return {
      arrSwipes: [
        { url: 'https://download.rdoorweb.com/20181121/7ba2c0f39ccf7c136d44152698d4b3db.jpg' },
        { url: 'https://download.rdoorweb.com/20181121/c3b1feec4b38ffa20289de1acd834283.jpg' }
      ],
      arrGoods: [
        {
          url: 'https://download.rdoorweb.com/20181120/b30bd84f4208296befd1a70b0577771d.jpg',
          title: '1测试',
          price: '￥100',
          discount: '￥50'
        },
        {
          url: 'https://download.rdoorweb.com/20181120/b30bd84f4208296befd1a70b0577771d.jpg',
          title: '2测试测试测试测试测试测试测试测试测试测试测',
          price: '￥100',
          discount: '￥50'

        },
        {
          url: 'https://download.rdoorweb.com/20181120/b30bd84f4208296befd1a70b0577771d.jpg',
          title: '3测试测试测试测试测试测试测试测试测试测试测',
          price: '￥100',
          discount: '￥50'

        },
        {
          url: 'https://download.rdoorweb.com/20181120/b30bd84f4208296befd1a70b0577771d.jpg',
          title: '4测试测试测试测试测试测试测试测试测试测试测',
          price: '￥100',
          discount: '￥50'

        },
        {
          url: 'https://download.rdoorweb.com/20181120/b30bd84f4208296befd1a70b0577771d.jpg',
          title: '5测试测试测试测试测试测试测试测试测试测试测',
          price: '￥100',
          discount: '￥50'

        }
      ],
    }
  },
  mounted() { },
  methods: {
    to(index) {

    },
    onClickBigBtn() {

    }
  }
};
</script>

<style lang='less'>
.mall_page {
    padding-bottom: 50px;
}
.goods_page {
    background: #ececec;
}

.hot_album {
    padding: 5px 8px 0 8px;
    margin-bottom: 5px;
    overflow: hidden;
    position: relative;
}
.module_title {
    width: 100%;
    display: block;
    height: 16px;
    position: relative;
    padding-left: 10px;
    font-size: 15px;
    font-weight: 500;
    color: #4c4c4c;
    line-height: 16px;
    background-color: #fff;
    background-image: url(https://minibizhi.313515.com/BiZhiStatic/icon-all-more.svg);
    background-repeat: no-repeat;
    background-position: right center;
    background-size: 40px 18px;
    text-align: left;
}
button {
    border-left: 3px solid #328ef9;
    border-bottom: none;
    border-right: none;
    border-top: none;
    padding: 0;
    margin: 0;
    border-radius: 0;
    display: block;
    box-sizing: border-box;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    overflow: hidden;
}
.good_page {
    margin: 5px;
    width: 100%;
    height: 280px;
    background: #fff;
    border-radius: 5px 5px 5px 5px;
}
.good_page img {
    width: 100%;
    height: 170px;
}
.good_page p {
    margin-top: 0;
    margin-bottom: 0;
    padding: 0 5px;
    font-size: 14px;
    color: #758697;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-align: left;
    line-height: 20px;
    height: 40px;
}
.good_price {
    padding-top: 5px !important;
    height: 20px !important;
}
.discount {
    color: red;
    font-size: 16px !important;
    font-weight: bolder;
}
.price {
    padding-left: 5px;
    color: #758697;
    font-weight: lighter;
    text-decoration: line-through;
}

</style>