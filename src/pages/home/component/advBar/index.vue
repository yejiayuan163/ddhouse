<template>
  <div class="dav-wrap">
    <div class="adv">
      <div class="adv-content">
        <div>购房优惠</div>
        <div>省钱必看</div>
      </div>
      <img class="adv-img adv-img1" src="/static/images/youhui.png" alt="">
    </div>
    <div class="adv">
      <div class="adv-content">
        <div>看房专车</div>
        <div>免费接送</div>
      </div>
      <img class="adv-img2" src="/static/images/zhuanche.png" alt="">
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
    padding-top: 18px;
    justify-content: space-around;
    .adv {
      width: 162px;
      height: 55px;
      padding-bottom: 1px;
      display: flex;
      align-items: flex-end;
      border-radius: 10px;
      box-shadow: rgba(0, 0, 0, 0.11) 0 6px 7px;
      justify-content: space-around;
      .adv-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-bottom: 8px;
      }
      .adv-content div:first-child{
        font-family: "Adobe Fan Heiti Std B" ,"Microsoft YaHei UI";
        color: #222;
        font-size: 14px;
      }
      .adv-content div:last-child{
        font-family: "Adobe Fan Heiti Std B" ,"Microsoft YaHei UI";
        color: #f54343;
        font-size: 12px;
      }
      .adv-img1 {
        width: 49px;
        height: 44px;
      }
      .adv-img2 {
        width: 60px;
        height: 36px;
      }
    }
  }
</style>
