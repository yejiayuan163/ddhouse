<template>
  <div class="dav-wrap">
    <div class="adv">
      <div class="adv-content">
        <div>购房优惠</div>
        <div>省钱必看</div>
      </div>
      <img class="adv-img" src="/static/images/youhui.png" alt="">
    </div>
    <div class="adv">
      <div class="adv-content">
        <div>看房专车</div>
        <div>免费接送</div>
      </div>
      <img class="adv-img" src="/static/images/zhuanche.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      };
    },
    props: {
    },
    methods:{
    }
  };
</script>

<style lang="less" scoped>
  .dav-wrap {
    display: flex;
    justify-content: space-around;
    .adv {
      display: flex;
      .adv-img {
        width: 50px;
        height: 60px;
      }
    }
  }
</style>
