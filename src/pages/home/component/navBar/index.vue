<template>
  <div class="nav-warp">
    <div class="nav-content">
      <img src="/static/images/navXinfang.jpg" alt="">
      <div>新房</div>
    </div>
    <div class="nav-content">
      <img src="/static/images/navErshou.jpg" alt="">
      <div>二手房</div>
    </div>
    <div class="nav-content">
      <img src="/static/images/navHuodong.jpg" alt="">
      <div>参加活动</div>
    </div>
    <div class="nav-content">
      <img src="/static/images/navJifen.jpg" alt="">
      <div>积分商城</div>
    </div>
    <div class="nav-content">
      <img src="/static/images/navDaikuang.jpg" alt="">
      <div>算房贷</div>
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
  .nav-warp {
    display: flex;
    justify-content: space-between;

  .nav-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 50px;
    height: 50px;
  }
  }
</style>
