<template>
  <div class="activity-item-wrap">
    <div class="item" v-for="(item,index) in activitylist" :key="index">
      <img :src="item.imgSrc" alt="">
      <div class="title">{{item.title}}</div>
      <div class="time">时间:{{item.time}}</div>
    </div>
  </div>
</template>

<script>
  import labelList from "../labelList/index.vue";

  export default {
    data() {
      return {};
    },
    components: {
      labelList
    },
    props: {
      activitylist: {
        type: Array,
        default: [{
          imgSrc: "/static/images/actImg1.png", // 图片链接
          title: "叮叮新春嘉年华", // 名称
          time: "2020/01/11-2020/01/12" // 时间

        },{
          imgSrc: "/static/images/actImg1.png", // 图片链接
          title: "叮叮新春嘉年华", // 名称
          time: "2020/01/11-2020/01/12" // 时间

        },{
          imgSrc: "/static/images/actImg1.png", // 图片链接
          title: "叮叮新春嘉年华", // 名称
          time: "2020/01/11-2020/01/12" // 时间

        },{
          imgSrc: "/static/images/actImg1.png", // 图片链接
          title: "叮叮新春嘉年华", // 名称
          time: "2020/01/11-2020/01/12" // 时间

        }]
      }
    },
    methods: {}
  };
</script>

<style lang="less" scoped>
  .activity-item-wrap{
    display: flex;
    flex-wrap: nowrap;
    width: @theme-content-width;
    overflow: scroll;
    .item{
      border-radius: 5px;
      margin-right: 10px;
      font-size: @theme-font-mini;
      .title{
        padding-top: 10px;
        padding-bottom: 30px;
        color: #050505;
      }
      .time{
        color: #666666;
      }
    }
    .item:last-child{
      padding-right: 0;
    }
    img {
      width: 194px;
      height: 100px;
    }
  }
</style>
