<template>
  <div class="house-list">
    <img class="house-img" :src="houseItem.imgSrc" alt="">
    <div class="content">
      <div class="title">
        <div>{{houseItem.title}}</div>
        <!--<div v-if="houseItem.type==='new'" class="newIcon">新</div>-->
      </div>
      <div class="des">
        <div>
          <span>{{houseItem.city}}</span>-<span>{{houseItem.area}} {{houseItem.name}}</span>
        </div>
        <img class="coupon" src="/static/images/getCoupon.png" alt="">
      </div>
      <div class="price-wrap">
        <div class="price">{{houseItem.price}}<span class="unit">万</span></div>
        <div>{{houseItem.houseDes}}</div>
        <div>{{houseItem.acreage}}m²</div>
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
          name: "汇景湾", // 建筑面积
          houseDes:'3房2厅',
          acreage:'90',
          price: "120", // 单价
          coupon: true,// 优惠券
          labelList: [{ label: "待售", hot: "false" }, { label: "花园洋房", hot: "false" }, { label: "湖景地产", hot: "true" }]
        }
      }
    },
    methods: {}
  };
</script>

<style lang="less" scoped>
  .house-list {
    display: flex;
    padding-top: 19px;
    padding-bottom: 20px;
    border-bottom: 1px solid #f0f1f7;
    width: @theme-content-width;

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
        font-size: @theme-font-title;
        color: #222222;
        width: 200px;
        font-weight: bold;
        padding-bottom: 8px;
        .newIcon {

          background-color: #ff0000;
        }
      }
      .des {
        display: flex;
        justify-content: space-between;
        font-size: @theme-font-mini;
        color: #666666;
        img {
          width: 60px;
          height: 20px;
        }
      }

      .price-wrap {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: @theme-font-mini;
        color: #666666;
        div{
          padding-right: 10px;
        }
        .price {
          font-size: @theme-font;
          color: @theme-font-red-color;
          .unit {
            color: @theme-bg-gray-color2;
            font-size: 12px;
          }
        }
      }
    }
  }
  .house-list:last-child {
    border-bottom: none;
  }
</style>
