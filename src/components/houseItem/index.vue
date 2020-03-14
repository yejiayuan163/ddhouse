<template>
  <div class="label-list">
    <img class="house-img" :src="houseItem.imgSrc" alt="">
    <div class="content">
      <div class="title">
        <div>{{houseItem.title}}</div>
        <!--<div v-if="houseItem.type==='new'" class="newIcon">新</div>-->
      </div>
      <div class="des"><span>{{houseItem.city}}</span><span>{{houseItem.area}}|{{houseItem.acreage}}m²</span></div>
      <div class="price-wrap">
        <div class="price">{{houseItem.price}}m²</div>
        <img class="coupon" src="/static/images/getCoupon.png" alt="">
      </div>
      <label-list :labelList="houseItem.labelList"></label-list>
    </div>
  </div>
</template>

<script>
  import labelList from "../labelList/index.vue";

  export default {
    data() {
      return {};
    },
    components: {
      labelList
    },
    props: {
      houseItem: {
        type: Object,
        default: {
          imgSrc: "/static/images/itemImg1.png", // 图片链接
          type: "new", //楼盘类型：一手、二手
          title: "锦富·汇景湾", // 名称
          city: "台山市", // 市
          area: "台山区", // 区
          acreage: "35-50", // 建筑面积
          price: "13500", // 单价
          coupon: true,// 优惠券
          labelList: [{ label: "待售", hot: "false" }, { label: "花园洋房", hot: "false" }, { label: "湖景地产", hot: "true" }]
        }
      }
    },
    methods: {}
  };
</script>

<style lang="less" scoped>
  .label-list {
    display: flex;
    padding-top: 19px;
    padding-bottom: 20px;
    border-bottom: 1px solid #f0f1f7;

    .house-img {
      width: 132px;
      height: 90px;
      border-radius: 2px;
      padding-right: 14px;
    }

    .content {
      .title {
        display: flex;
        justify-content: space-between;
        font-size: 15px;
        color: #222222;
        .newIcon {

          background-color: #ff0000;
        }
      }

      .price-wrap {
        display: flex;

        img {
          width: 40px;
          height: 10px;
        }
      }
    }
  }
  .label-list:last-child {
    border-bottom: none;
  }
</style>
