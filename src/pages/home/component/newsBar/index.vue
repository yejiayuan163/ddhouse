<template>
  <div class="news-wrap">
    <img src="/static/images/newsIcon.png" alt="">
    <div class="news-title">{{newsTitle}}</div>
    <div class="news-more">查看更多</div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
      };
    },
    props: {
      newsTitle: {
        type: String,
        default: '楼市深度解读：看懂2003，才有资格 谈2020！'
      }
    },
    methods:{
    }
  };
</script>

<style lang="less" scoped>
  .news-wrap {
    display: flex;
    justify-content: space-between;
    width: 335px;
    height: 67px;
    border-radius: 10px;
    border: 1px solid #f1f1f1;
    /*padding-bottom: 19px;*/

    box-shadow: @theme-shadow;
    .news-title {
      padding-left: 14px;
      border-left: 1px solid #f1f1f1;
      font-size: @theme-font-mini;
      font-weight: bold;
      width: 388px;
    }
    img {
      width: 30px;
      height: 30px;
    }
    .news-more{
      font-size: 9px;
    }
  }
</style>
