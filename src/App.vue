<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */

    let logs
    if (mpvuePlatform === 'my') {
      logs = mpvue.getStorageSync({key: 'logs'}).data || []
      logs.unshift(Date.now())
      mpvue.setStorageSync({
        key: 'logs',
        data: logs
      })
    } else {
      logs = mpvue.getStorageSync('logs') || []
      logs.unshift(Date.now())
      mpvue.setStorageSync('logs', logs)
    }
    console.log('iiiiiiiiiiiiiiiiiii')
    // 加载苹方字体
    wx.loadFontFace ({
      family: 'PingFangSC-Medium',
      source: `url("${process.env.PING_FANG_MEDIUM}")`,
      success: function(){console.log('load font success')}
    })

    wx.getSystemInfo({
      success: res => {
        //导航高度
        this.$navHeight = res.statusBarHeight + 46;
        console.log('this.$navHeight:', this.$navHeight)
      }, fail(err) {
        console.log(err);
      }
    })
  },
  onLaunch() {

  },
  log () {
    console.log(`log at:${Date.now()}`)
  }

}
</script>

<style lang="less">
  @import './assets/css/reset.less';
  @import './assets/css/common.less';
  @import './assets/css/icon.less';
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
