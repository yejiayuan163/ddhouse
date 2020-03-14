<template>
  <div class="toutiao-list">
    <div class="toutiao-item" v-for="(item,index) in newsList" :key="index">
      <div>
        <div>{{item.title}}</div>
        <div>{{item.read}}阅读</div>
      </div>
      <img :src="item.imgSrc" alt="">
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {};
    },
    components: {
    },
    props: {
      newsList: {
        type: Array,
        default: [{
          imgSrc: "/static/images/toutiaoImg1.png", // 图片链接
          title: "多地复工复产 做到防控生产两不误", // 名称
          read: '2705'
        },{
          imgSrc: "/static/images/toutiaoImg2.png", // 图片链接
          title: "央行：2019年房地产贷款增幅平稳", // 名称
          read: '2705'
        }]
      }
    },
    methods: {}
  };
</script>

<style lang="less" scoped>
  .toutiao-item{
    display: flex;
    justify-content: space-between;
    img{
      width: 120px;
      height: 80px;
    }
  }
</style>
