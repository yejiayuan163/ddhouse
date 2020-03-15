<template>
  <div class="news-wrap">
    <img src="/static/images/newsIcon.png" alt="">
    <div class="news-title" >
      <swiper :indicator-dots="false"
              :vertical="true"
              :circular="true"
              :autoplay="autoplay" :interval="interval" :duration="duration">
      <div v-for="(item, index) in newsList" :key="index">
        <swiper-item>
          <div>{{item}}</div>
        </swiper-item>
      </div>
    </swiper>
    </div>
    <div class="news-more">查看更多</div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        autoplay: true, // 是否自动播放
        interval: 3000, // 多久循环一次
        duration: 500, // 手动切换延迟时间
      };
    },
    props: {
      newsList: {
        type: Array,
        default: ["楼市深度解读：看懂2003，才有资格 谈2020！", "楼市深度解读：看懂2003，才有资格 谈2020！", "楼市深度解读：看懂2003，才有资格 谈2020！"]
      }
    },
    methods: {}
  };
</script>

<style lang="less" scoped>
  .news-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 335px;
    height: 67px;
    border-radius: 10px;
    border: @theme-border;
    margin-bottom: 17px;
    box-shadow: @theme-shadow;
    /deep/ ._swiper {
      height: 30px !important;

    }
    /deep/ ._swiper-item{
      /*height: 30px !important;*/
    }

    .news-title {
      position: relative;
      padding-left: 14px;
      border-left: @theme-border;
      font-size: @theme-font-mini;
      font-weight: bold;
      width: 200px;
      height: 30px;
      flex: 2;
    }

    img {
      padding: 15px;
      width: 30px;
      height: 30px;
    }

    .news-more {
      font-size: 9px;
      color: @theme-bg-gray-color;
      white-space: nowrap;
      padding-right: 9px;

    }
  }
</style>
