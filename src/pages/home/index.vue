<template>
  <div class="wrap">
    <!--搜索栏-->
    <div class="search-wrap">
      <div class="search">
        <div class="now-site"><img class="site-icon" src="/static/images/dingweiIcon.png" alt="">{{city}}</div>
        <van-field
          :value="buildName"
          placeholder="请输入楼盘名"
          :border="false"
          bind:change="buildNameChange"
        />
      </div>
      <div class="map-btn"><img class="map-icon" src="/static/images/mapIcon.png" alt="">地图找房</div>
    </div>
    <!--轮播图-->
    <div class="banner-wrap">
      <banner :imgUrls="imgUrls"></banner>
    </div>
    <!--导航栏-->
    <nav-bar></nav-bar>
    <!--购房优惠-->
    <adv-bar></adv-bar>
    <!--行情-->
    <hang-qing :city="city" :hangQingData="hangQingData"></hang-qing>
    <!--叮叮好房-->
    <div class="hao-fang">
      <div class="title">
        <img src="/static/images/haofangTitle.png" alt="">
        <div>查看全部></div>
      </div>
      <!--轮播图-->
      <house-banner :houseImgUrls="houseImgUrls"></house-banner>
    </div>
  </div>
</template>

<script>
  import banner from "./component/banner/index.vue";
  import houseBanner from "./component/houseBanner/index.vue";
  import navBar from "./component/navBar/index.vue";
  import advBar from "./component/advBar/index.vue";
  import hangQing from "./component/hangQing/index.vue";

  export default {
    data() {
      return {
        city: "江门", // 定位数据
        buildName: "", // 楼盘名称
        imgUrls: [
          {
            pic: "/static/images/banner1.png"
          }, {
            pic: "/static/images/banner1.png"
          }, {
            pic: "/static/images/banner1.png"
          }], // banner数据
        houseImgUrls: [
          {
            pic: "/static/images/haofangItem1.png",
            title: "越秀 滨江。盛悦",
            des: "新春优惠95折",
            lab: ["待售", "花园洋房", "湖景地产"]
          }, {
            pic: "/static/images/haofangItem1.png",
            title: "越秀 滨江。盛悦",
            des: "新春优惠95折",
            lab: ["待售", "花园洋房", "湖景地产"]
          }, {
            pic: "/static/images/haofangItem1.png",
            title: "越秀 滨江。盛悦",
            des: "新春优惠95折",
            lab: ["待售", "花园洋房", "湖景地产"]
          }], // 楼盘轮播数据
        hangQingData: {
          newHouse: {
            price: 8094,// 单价
            percent: "3.34",//百分比
            tendency: "up"//上涨
          },
          secondHand: {
            price: 28094,// 单价
            percent: "3.35",//百分比
            tendency: "down"//下跌
          }
        } // 行情数据

      };
    },

    components: {
      banner,
      houseBanner,
      navBar,
      advBar,
      hangQing
    },

    methods: {
      bindViewTap() {
        const url = "../logs/main";
        if (mpvuePlatform === "wx") {
          mpvue.switchTab({ url });
        } else {
          mpvue.navigateTo({ url });
        }
      },
      clickHandle(ev) {
        console.log("clickHandle:", ev);
        // throw {message: 'custom test'}
      },
      buildNameChange(val) {
        console.log("输入楼盘名称:", val);
      }
    },
    created() {
      // let app = getApp()
    }
  }
  ;
</script>

<style lang="less" scoped>
  .wrap {
    padding: 10px;
  }

  .search-wrap {
    display: flex;
    align-items: center;
  }

  .search {
    display: flex;
    border-radius: 4px;
  }

  .now-site {
    width: 100px;
  }

  .site-icon {
    width: 22px;
    height: 25px;
  }

  .map-btn {
    background-color: #ff2f2c;
  }

  .map-icon {
    width: 27px;
    height: 28px;
  }

  /*.hang-qing {*/
  /*display: flex;*/
  /*!*background: url("/static/images/hangqingbg.png");*!*/

  /*.hang-qing-data {*/
  /*display: flex;*/
  /*}*/
  /*}*/

  .hao-fang {
    .title {
      display: flex;
      justify-content: space-between;

      img {
        width: 80px;
        height: auto;
      }
    }
  }

  /*.banner-wrap2 {*/
  /*/deep/ ._swiper {*/
  /*height: 300px !important;*/

  /*.slide-image {*/
  /*width: 355px !important;*/
  /*height: 160px !important;*/
  /*border-radius: 6px 6px 0 0;*/
  /*}*/
  /*}*/
  /*}*/

  /*/deep/ ._swiper {*/
  /*height: 160px !important;*/

  /*}*/

  /*width: 100vw;*/
  button.catchBtn {
    border: none;
    text-align: inherit;
    padding: 0;
    margin: 0;
    line-height: inherit;
    background: transparent;
    color: inherit;
    border-radius: 0;
    font-size: inherit;
    display: block;
  }

  button.catchBtn::after {
    border: none;
  }
</style>
