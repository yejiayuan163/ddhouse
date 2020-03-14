<template>
  <div class="hang-qing">
    <div>
      <div>{{city}}</div>
      <div>房价行情</div>
    </div>
    <div class="hang-qing-data">
      <div>
        <div>{{hangQingData.newHouse.price}}元/m2</div>
        <div>新房
          <img v-if="hangQingData.newHouse.tendency === 'up'" src="/static/images/iconUp.png" />
          <img v-else src="/static/images/iconDown.png" />
          {{hangQingData.newHouse.percent}}%</div>
      </div>
      <div>
        <div>{{hangQingData.secondHand.price}}元/m2</div>
        <div>二手房
          <img v-if="hangQingData.secondHand.tendency === 'up'" src="/static/images/iconUp.png" />
          <img v-else src="/static/images/iconDown.png" />
          {{hangQingData.secondHand.percent}}%</div>
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
      city:{
        type: String,
        require: true
      },
      hangQingData:{
        type: Object,
        require: true
      }
    },
    methods:{
    }
  };
</script>

<style lang="less" scoped>
  .hang-qing {
    display: flex;
    /*background: url("/static/images/hangqingbg.png");*/

    .hang-qing-data {
      display: flex;
      img {
        width: 8px;
        height: 8px;
      }
    }
  }
</style>
