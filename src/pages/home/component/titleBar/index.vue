<template>
  <div class="title">
    <img :src="imgSrc" alt="">
    <div>{{text}}  〉</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    props: {
      imgSrc: {
        type: String,
        default: "/static/images/haofangTitle.png"
      },
      text: {
        type: String,
        default: "查看全部"
      }
    },
    methods: {}
  };
</script>

<style lang="less" scoped>
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
    img {
      width: 65px;
      height: 17px;
    }
    div:last-child{
      text-align: center;
      width: 67px;
      height: 20px;
      line-height: 19px;
      border-radius: 10px;
      border: @theme-border;
      color: #888888;
      font-size: @theme-font-mini2;
    }
  }
</style>
