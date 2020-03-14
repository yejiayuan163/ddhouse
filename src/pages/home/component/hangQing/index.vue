<template>
  <div class="hang-qing" style="background-image: url('/static/images/hangqingbg.png'); background-size: cover">
    <div class="city-wrap">
      <div class="city">{{city}}</div>
      <div class="des">房价行情</div>
    </div>
    <div class="hang-qing-data">
      <div class="data-wrap">
        <div>{{hangQingData.newHouse.price}}<span class="unit">元/m²</span></div>
        <div>新房
          <img v-if="hangQingData.newHouse.tendency === 'up'" src="/static/images/iconUp.png" />
          <img v-else src="/static/images/iconDown.png" />
          <span class="up">{{hangQingData.newHouse.percent}}%</span></div>
      </div>
      <div class="data-wrap">
        <div>{{hangQingData.secondHand.price}}<span class="unit">元/m²</span></div>
        <div>二手房
          <img v-if="hangQingData.secondHand.tendency === 'up'" src="/static/images/iconUp.png" />
          <img v-else src="/static/images/iconDown.png" />
          <span class="down">{{hangQingData.secondHand.percent}}%</span></div>
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
    align-items: center;
    width: 337px;
    height: 55px;
    padding-top: 15px;
    .city-wrap{
      padding-left: 18px;
      padding-right: 40px;
      .city{
        font-weight: bold;
        font-size: 16px;
        color: #050505;
      }
      .des {
        font-size: 11px;
        color: #222222;
      }
    }
    .hang-qing-data {
      display: flex;
      justify-content: space-around;
      .data-wrap div:first-child {
        font-size: 18px;
        font-weight: bold;
        color: #f54343;
        .unit {
          font-size: 12px;
          color: #444444;
          font-weight: normal;
        }

      }
      .data-wrap div:last-child {
        font-size: 11px;
        color: #222222;
        .down{
          color: #378140;
          font-size: 11px;
        }
        .up {
          font-size: 11px;
          color: #f54343;
        }
      }
      img {
        width: 8px;
        height: 8px;
      }
    }
  }
</style>
