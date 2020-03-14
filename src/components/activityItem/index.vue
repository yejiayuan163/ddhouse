<template>
  <div class="activity-item-wrap">
    <div>
      <img :src="activityItem1.imgSrc" alt="">
      <div class="title">{{activityItem1.title}}</div>
      <div class="time">时间:{{activityItem1.time}}</div>
    </div>
    <div>
      <img :src="activityItem2.imgSrc" alt="">
      <div class="title">{{activityItem2.title}}</div>
      <div class="time">时间:{{activityItem2.time}}</div>
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
      activityItem1: {
        type: Object,
        default: {
          imgSrc: "/static/images/actImg1.png", // 图片链接
          title: "叮叮新春嘉年华", // 名称
          time: "2020/01/11-2020/01/12" // 时间

        }
      },
      activityItem2: {
        type: Object,
        default: {
          imgSrc: "/static/images/actImg2.png", // 图片链接
          title: "叮叮集体去春游", // 名称
          time: "2020/01/11-2020/01/12" // 时间
        }
      }
    },
    methods: {}
  };
</script>

<style lang="less" scoped>
  .activity-item-wrap{
    display: flex;
    img {
      width: 150px;
      height: 80px;
    }
  }
</style>
