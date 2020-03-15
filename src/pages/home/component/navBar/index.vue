<template>
  <div>
    <div class="nav-warp">
      <div class="nav-content">
        <img src="/static/images/nav_03.png" alt="">
        <div>定制找房</div>
      </div>
      <div class="nav-content">
        <img src="/static/images/nav_05.png" alt="">
        <div>团购活动</div>
      </div>
      <div class="nav-content">
        <img src="/static/images/nav_07.png" alt="">
        <div>买新房</div>
      </div>
      <div class="nav-content">
        <img src="/static/images/nav_09.png" alt="">
        <div>买二手房</div>
      </div>
      <div class="nav-content">
        <img src="/static/images/nav_11.png" alt="">
        <div>学校周边</div>
      </div>
    </div>
    <div class="nav-warp">
      <div class="nav-content">
        <img src="/static/images/nav_19.png" alt="">
        <div>买卖流程</div>
      </div>
      <div class="nav-content">
        <img src="/static/images/nav_21.png" alt="">
        <div>楼市智库</div>
      </div>
      <div class="nav-content">
        <img src="/static/images/nav_23.png" alt="">
        <div>VR看房</div>
      </div>
      <div class="nav-content">
        <img src="/static/images/nav_25.png" alt="">
        <div>积分商城</div>
      </div>
      <div class="nav-content">
        <img src="/static/images/nav_27.png" alt="">
        <div>卖房评估</div>
      </div>
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
    padding-bottom: 19px;

  .nav-content {
    font-size: 11px;
    color:#333333;
    display: flex;
    flex-direction: column;
    align-items: center;
    div{
      padding-top: 7px;
    }
  }

  img {
    width: 50px;
    height: 50px;
  }
  }
</style>
