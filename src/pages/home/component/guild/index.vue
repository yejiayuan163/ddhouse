<template>
  <div class="guild-warp">
    <img src="/static/images/adv_03.png" alt="">
    <img src="/static/images/adv_05.png" alt="">
    <img src="/static/images/adv_07.png" alt="">
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
.guild-warp{
  display: flex;
  justify-content: space-between;
  img{
    width: 106px;
    height: 56px;
    box-shadow: @theme-shadow;
  }
}
</style>
