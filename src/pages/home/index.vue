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
      <title-bar text="查看全部" img-src="/static/images/haofangTitle.png"></title-bar>
      <!--轮播图-->
      <house-banner :houseImgUrls="houseImgUrls"></house-banner>
      <div class="house-list">
        <house-item  v-for="(item,index) in houseList" :house-item="item" :key="index"></house-item>
      </div>
    </div>
    <!--热门活动-->
    <div class="activity">
      <title-bar text="查看全部" img-src="/static/images/huodongTitle.png"></title-bar>
      <div class="activity-content">
        <activity-item></activity-item>
        <activity-item></activity-item>
      </div>
    </div>
  </div>
</template>

<script>
  import banner from "./component/banner/index.vue";
  import houseBanner from "./component/houseBanner/index.vue";
  import navBar from "./component/navBar/index.vue";
  import advBar from "./component/advBar/index.vue";
  import hangQing from "./component/hangQing/index.vue";
  import titleBar from './component/titleBar/index.vue'
  import houseItem from '../../components/houseItem/index.vue'
  import activityItem from '../../components/activityItem/index.vue'

  export default {
    data() {
      return {
        city: "江门2", // 定位数据
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
            labelList: [{label:"待售",hot:'true'}, {label:"花园洋房",hot:'false'}, {label:"湖景地产",hot:'false'}]
          }, {
            pic: "/static/images/haofangItem1.png",
            title: "越秀 滨江。盛悦",
            des: "新春优惠95折",
            labelList: [{label:"待售",hot:'false'}, {label:"花园洋房",hot:'false'}, {label:"湖景地产",hot:'true'}]
          }, {
            pic: "/static/images/haofangItem1.png",
            title: "越秀 滨江。盛悦",
            des: "新春优惠95折",
            labelList: [{label:"待售",hot:'true'}, {label:"花园洋房",hot:'false'}, {label:"湖景地产",hot:'true'}]
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
        }, // 行情数据
        houseList:[{
          imgSrc: "/static/images/itemImg1.png", // 图片链接
          type: "new", //楼盘类型：一手、二手
          title: "锦富·汇景湾", // 名称
          city: "台山市", // 市
          area: "台山区", // 区
          acreage: "35-50", // 建筑面积
          price: "13500", // 单价
          coupon: true,// 优惠券
          labelList: [{ label: "待售", hot: "false" }, { label: "花园洋房", hot: "false" }, { label: "湖景地产", hot: "true" }]
        },{
          imgSrc: "/static/images/itemImg2.png", // 图片链接
          type: "second", //楼盘类型：一手、二手
          title: "锦富·汇景湾", // 名称
          city: "台山市", // 市
          area: "台山区", // 区
          acreage: "35-50", // 建筑面积
          price: "13500", // 单价
          coupon: true,// 优惠券
          labelList: [{ label: "待售", hot: "false" }, { label: "花园洋房", hot: "false" }, { label: "湖景地产", hot: "true" }]
        },{
          imgSrc: "/static/images/itemImg3.png", // 图片链接
          type: "second", //楼盘类型：一手、二手
          title: "锦富·汇景湾", // 名称
          city: "台山市", // 市
          area: "台山区", // 区
          acreage: "35-50", // 建筑面积
          price: "13500", // 单价
          coupon: true,// 优惠券
          labelList: [{ label: "待售", hot: "false" }, { label: "花园洋房", hot: "false" }, { label: "湖景地产", hot: "true" }]
        },{
          imgSrc: "/static/images/itemImg4.png", // 图片链接
          type: "new", //楼盘类型：一手、二手
          title: "锦富·汇景湾", // 名称
          city: "台山市", // 市
          area: "台山区", // 区
          acreage: "35-50", // 建筑面积
          price: "13500", // 单价
          coupon: true,// 优惠券
          labelList: [{ label: "待售", hot: "false" }, { label: "花园洋房", hot: "false" }, { label: "湖景地产", hot: "true" }]
        }] // 好房列表

      };
    },

    components: {
      banner,
      houseBanner,
      navBar,
      advBar,
      hangQing,
      titleBar,
      houseItem,
      activityItem
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


  .hao-fang {
  }

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
