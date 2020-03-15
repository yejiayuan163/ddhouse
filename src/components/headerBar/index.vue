<template>
  <div class="header" :style="{height: scrollerHeight,'line-height':scrollerHeight}">
    叮叮看房
  </div>
</template>

<script>
  export default {
    data() {
      return {
        titleHeight: 120
      };
    },
    computed: {
      // 滚动区高度
      // (业务需求：手机屏幕高度减去头部标题和底部tabbar的高度，当然这2个高度也是可以动态获取的)
      scrollerHeight: function() {
        return this.titleHeight + 'px';
      }
    },
    created() {
      let that = this
      wx.getSystemInfo({
        success: res => {
          //导航高度
          that.titleHeight = res.statusBarHeight + 46;
          console.log('iiiiiiiii', that.titleHeight)
        }, fail(err) {
          console.log(err);
        }
      })
    },
    props: {
    },
    methods: {
      headerStyle () {
        return `height:${this.titleHeight}px;line-height:${this.titleHeight}px`
      }
    }
  };
</script>

<style lang="less" scoped>
  .header {
    text-align: center;
    /*height: 46px;*/
    /*line-height: 46px;*/
    font-size: 16px;
  }
</style>
