<template>
  <div class="title">
    <img :src="imgSrc" alt="">
    <div>{{text}}></div>
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
    img {
      width: 80px;
      height: auto;
    }
  }
</style>
