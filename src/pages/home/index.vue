<template>
  <div class="wrap">
    <!--<head-bar></head-bar>-->
    <!--<img class="bg-img" src="/static/images/headerBg.png" alt="背景">-->
    <!--搜索栏-->
    <div class="search-wrap">
      <div class="search">
        <div class="now-site"><img class="site-icon" src="/static/images/dingweiIcon.png" alt="">{{city}}</div>
        <div class="icon-search">
          <img src="/static/images/iconSearch.png" alt="search" />
        </div>
        <van-field
          :value="buildName"
          placeholder="请输入楼盘名"
          :border="false"
          bind:change="buildNameChange"
        />
      </div>
      <div class="map-btn"><img class="map-icon" src="/static/images/mapBtn.png" alt="地图找房"></div>
    </div>
    <!--轮播图-->
    <div class="banner-wrap">
      <banner :imgUrls="imgUrls"></banner>
    </div>
    <!--导航栏-->
    <div class="nav-bar-wrap">
      <nav-bar></nav-bar>
    </div>
    <!--新闻-->
    <news-bar :news-title="newsTitle"></news-bar>
    <!--指引-->
    <guild></guild>
    <!--&lt;!&ndash;行情&ndash;&gt;-->
    <!--<hang-qing :city="city" :hangQingData="hangQingData"></hang-qing>-->
    <!--叮叮好房-->
    <div class="hao-fang">
      <!--<title-bar text="查看全部" img-src="/static/images/haofangTitle.png"></title-bar>-->
      <!--&lt;!&ndash;轮播图&ndash;&gt;-->
      <!--<house-banner :houseImgUrls="houseImgUrls"></house-banner>-->
      <van-tabs :active="houseListTab" :change="onTabChange">
        <van-tab title="新房">
          <div class="house-list">
            <house-item v-for="(item,index) in houseList" :house-item="item" :key="index"></house-item>
          </div>
        </van-tab>
        <van-tab title="二手房">
          <div class="house-list">
            <house-item v-for="(item,index) in houseList" :house-item="item" :key="index"></house-item>
          </div>
        </van-tab>
        <van-tab title="特价房">
          <div class="house-list">
            <house-item v-for="(item,index) in houseList" :house-item="item" :key="index"></house-item>
          </div>
        </van-tab>
        <van-tab title="看房日记">
          <div class="house-list">
            <house-item v-for="(item,index) in houseList" :house-item="item" :key="index"></house-item>
          </div>
        </van-tab>
      </van-tabs>

    </div>
    <!--热门活动-->
    <div class="activity">
      <title-bar text="查看全部" img-src="/static/images/huodongTitle.png"></title-bar>
      <div class="activity-content">
        <activity-item :activitylist="activitylist"></activity-item>
      </div>
    </div>
    <div class="fix-wrap">
      <fix-tool></fix-tool>
    </div>
    <!--&lt;!&ndash;叮叮头条&ndash;&gt;-->
    <!--<div class="news">-->
      <!--<title-bar text="查看全部" img-src="/static/images/toutiaoTitle.png"></title-bar>-->
      <!--<div class="activity-content">-->
        <!--<news-list :newsList="newsList"></news-list>-->
      <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script>
  import headBar from "../../components/headerBar/index.vue";
  import banner from "./component/banner/index.vue";
  import houseBanner from "./component/houseBanner/index.vue";
  import navBar from "./component/navBar/index.vue";
  import advBar from "./component/advBar/index.vue";
  import newsBar from "./component/newsBar/index.vue";
  import guild from "./component/guild/index.vue";
  import hangQing from "./component/hangQing/index.vue";
  import titleBar from "./component/titleBar/index.vue";
  import houseItem from "../../components/houseItem/index.vue";
  import activityItem from "../../components/activityItem/index.vue";
  import newsList from "../../components/newsList/index.vue";
  import fixTool from "../../components/fixTool/index.vue";

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
        newsTitle: '楼市深度解读：看懂2003，才有资格 谈2020！',
        houseImgUrls: [
          {
            pic: "/static/images/haofangItem1.png",
            title: "越秀 滨江。盛悦",
            des: "新春优惠95折",
            labelList: [{ label: "待售", hot: "true" }, { label: "花园洋房", hot: "false" }, { label: "湖景地产", hot: "false" }]
          }, {
            pic: "/static/images/haofangItem1.png",
            title: "越秀 滨江。盛悦",
            des: "新春优惠95折",
            labelList: [{ label: "待售", hot: "false" }, { label: "花园洋房", hot: "false" }, { label: "湖景地产", hot: "true" }]
          }, {
            pic: "/static/images/haofangItem1.png",
            title: "越秀 滨江。盛悦",
            des: "新春优惠95折",
            labelList: [{ label: "待售", hot: "true" }, { label: "花园洋房", hot: "false" }, { label: "湖景地产", hot: "true" }]
          }], // 楼盘轮播数据
        houseListTab:0,
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
        houseList: [
          {
            imgSrc: "/static/images/itemImg1.png", // 图片链接
            type: "new", //楼盘类型：一手、二手
            title: "锦富·汇景湾", // 名称
            city: "台山市", // 市
            area: "台山区", // 区
            name: "汇景湾",
            houseDes:'3房2厅',
            acreage:'90',
            price: "13500", // 单价
            coupon: true,// 优惠券
            labelList: [{ label: "待售", hot: "false" }, { label: "花园洋房", hot: "false" }, { label: "湖景地产", hot: "true" }]
          }, {
            imgSrc: "/static/images/itemImg2.png", // 图片链接
            type: "second", //楼盘类型：一手、二手
            title: "锦富·汇景湾", // 名称
            city: "台山市", // 市
            area: "台山区", // 区
            name: "汇景湾",
            houseDes:'3房2厅',
            acreage:'90',
            price: "13500", // 单价
            coupon: true,// 优惠券
            labelList: [{ label: "待售", hot: "false" }, { label: "花园洋房", hot: "false" }, { label: "湖景地产", hot: "true" }]
          }, {
            imgSrc: "/static/images/itemImg3.png", // 图片链接
            type: "second", //楼盘类型：一手、二手
            title: "锦富·汇景湾", // 名称
            city: "台山市", // 市
            area: "台山区", // 区
            name: "汇景湾",
            houseDes:'3房2厅',
            acreage:'90',
            price: "13500", // 单价
            coupon: true,// 优惠券
            labelList: [{ label: "待售", hot: "false" }, { label: "花园洋房", hot: "false" }, { label: "湖景地产", hot: "true" }]
          }, {
            imgSrc: "/static/images/itemImg4.png", // 图片链接
            type: "new", //楼盘类型：一手、二手
            title: "锦富·汇景湾", // 名称
            city: "台山市", // 市
            area: "台山区", // 区
            name: "汇景湾",
            houseDes:'3房2厅',
            acreage:'90',
            price: "13500", // 单价
            coupon: true,// 优惠券
            labelList: [{ label: "待售", hot: "false" }, { label: "花园洋房", hot: "false" }, { label: "湖景地产", hot: "true" }]
          }], // 好房列表
        activitylist: [
          {
            imgSrc: "/static/images/actImg1.png", // 图片链接
            title: "叮叮新春嘉年华", // 名称
            time: "2020/01/11-2020/01/13" // 时间

          }, {
            imgSrc: "/static/images/actImg2.png", // 图片链接
            title: "叮叮新春嘉年华", // 名称
            time: "2020/01/11-2020/01/12" // 时间

          },
          {
            imgSrc: "/static/images/actImg1.png", // 图片链接
            title: "叮叮新春嘉年华", // 名称
            time: "2020/01/11-2020/01/12" // 时间

          }
        ], // 活动列表
        newsList: [
          {
            imgSrc: "/static/images/toutiaoImg1.png", // 图片链接
            title: "多地复工复产 做到防控生产两不误", // 名称
            read: "2706"
          }, {
            imgSrc: "/static/images/toutiaoImg2.png", // 图片链接
            title: "央行：2019年房地产贷款增幅平稳", // 名称
            read: "2705"
          }] // 头条列表

      };
    },
    created() {

    },
    components: {
      headBar,
      banner,
      houseBanner,
      navBar,
      advBar,
      newsBar,
      guild,
      hangQing,
      titleBar,
      houseItem,
      activityItem,
      newsList,
      fixTool
    },

    methods: {
      onTabChange(val){
        console.log('当前列表tab：', val)
      },
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
    /*position: relative;*/
    padding: 0 20px;
    background-color: #ffffff;

    .bg-img {
      position: absolute;
      z-index: -1;
      width: 375px;
    }
  }

  .search-wrap {
    display: flex;
    align-items: center;
    justify-content:space-between;
    padding-bottom: 10px;
    color: #333333;

    .search {
      width: 486rpx;
      height: 62rpx;
      background-color: #f1f1f1;
      border-radius: 15rpx;
      display: flex;
      .now-site {
        line-height: 30px;
        font-size: 14px;
        width: 74px;
        padding-left: 15px;
        white-space: nowrap;
        color: #333333;
        /*border-right: 1px solid #b0b0b2;*/
        .site-icon {
          width: 12px;
          height: 13px;
          padding-right: 6px;
        }
      }
      /deep/ .van-cell {
        padding: 3px;
        width: 130px;
        font-size: 14px;
        background-color: #f1f1f1;
      }
      .icon-search {
        height: 30px;
        line-height: 34px;
        img {
          display: inline-block;
          padding-left: 8px;
          padding-right: 6px;
          border-left: 1px solid #b0b0b2;
          width:15px;
          height: 15px;
        }
      }

    }

    .map-btn {
      line-height: 14px;
      .map-icon {
        width: 170rpx;
        height: 62rpx;
      }
    }
  }

  .nav-bar-wrap {
    padding-top: 17px;
  }


  .hao-fang {
    padding-top: 16px;

    /deep/ .van-tabs__nav {
      /*background-color: transparent;*/

    }
    /deep/ .van-tabs__line {
      width:74px !important;
      margin-left: -15px !important;
    }

    /deep/ .van-hairline--top-bottom:after {
      border: none;
    }
  }

  .activity{
    padding-bottom: 20px;
  }

  .fix-wrap{
    position: fixed;
    right: 10px;
    bottom: 120px;
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
