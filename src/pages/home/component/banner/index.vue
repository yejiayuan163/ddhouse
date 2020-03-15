<template>
  <div>
    <swiper :indicator-dots="isShowIndicator" :indicator-color="indicatorColor"
            @change="indexChange"
            :circular="true"
            :indicator-active-color="indicatorActiveColor"
            :autoplay="autoplay" :interval="interval" :duration="duration">
      <div v-for="(item, index) in imgUrls" :key="index">
        <swiper-item>
          <image lazy-load :src="item.pic" class="slide-image"/>
        </swiper-item>
      </div>
    </swiper>
    <div class="bannerDots">
        <div :class="['dot', {active : index1===currentIndex}]" v-for="(item,index1) in imgUrls" :key="index1"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isShowIndicator: false, // 是否显示指示点
        indicatorColor: "rgba(255, 255, 255, 0.6)", // 指示默认颜色
        indicatorActiveColor: "#FFFFFF", // 指示active颜色
        autoplay: true, // 是否自动播放
        interval: 3000, // 多久循环一次
        duration: 500, // 手动切换延迟时间
        currentIndex: 0
      };
    },
    props: {
      imgUrls: {
        type:Array,
        require: true
      }
    },
    methods:{
      link_detail(item) {
        console.log('banner跳转')
      },
      indexChange(val) {
        this.currentIndex = val.target.current
      }
    }
  };
</script>

<style lang="less" scoped>
  image {
    width: 335px !important;
    height: 166px !important;
    border-radius: 6px;
  }

  .slide-image {
    width: 335px !important;
    height: 166px !important;
    border-radius: 6px;
  }

  /deep/ ._swiper {
    height: 166px !important;

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

  .bannerDots{
    position: absolute;
    left: 50%;
    transform: translate(-50%,0);
    margin-top: -15px;
    display: flex;
    align-items: center;
    div {
      width: 9px;
      height: 3px;
      background-color: rgba(255, 255, 255, 0.6);
      border-radius: 1px;
      margin-right: 4px;
    }
    div:last-child{
      margin-right: 0;
    }
    .active{
      background-color: #ffffff;
    }
  }
</style>
