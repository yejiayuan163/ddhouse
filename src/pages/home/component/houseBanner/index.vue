<template>
  <div class="banner-wrap2">
    <swiper :indicator-dots="isShowIndicator" :indicator-color="indicatorColor"
            :indicator-active-color="indicatorActiveColor"
            :autoplay="autoplay" :interval="interval" :duration="duration">
      <div v-for="(item, index) in houseImgUrls" :key="index">
        <swiper-item>
          <div>
            <image lazy-load :src="item.pic" class="slide-image"/>
            <div>{{item.title}}</div>
            <div>{{item.des}}</div>
            <label-list :labelList="item.labelList"></label-list>
          </div>
        </swiper-item>
      </div>
    </swiper>
  </div>
</template>

<script>
  import labelList from '@/components/labelList/index.vue'
  export default {
    data() {
      return {
        isShowIndicator: true, // 是否显示指示点
        indicatorColor: "rgba(255, 255, 255, 0.6)", // 指示默认颜色
        indicatorActiveColor: "#FFDA8D", // 指示active颜色
        autoplay: true, // 是否自动播放
        interval: 3000, // 多久循环一次
        duration: 500 // 手动切换延迟时间
      };
    },
    props: {
      houseImgUrls: {
        type: Array,
        require: true
      }
    },
    components: {
      labelList
    },
    methods: {
      link_detail(item) {
        console.log("banner跳转");
      }
    }
  };
</script>

<style lang="less" scoped>
  .banner-wrap2 {
    /deep/ ._swiper {
      height: 300px !important; //轮播区域大小

      .slide-image {
        width: 355px !important;
        height: 160px !important;
        border-radius: 6px 6px 0 0;
      }
    }
  }

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
