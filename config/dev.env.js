var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  PING_FANG_MEDIUM: '"http://www.yjy9527.top/image/PingFangMedium.ttf"' // 苹方字体，需要用https协议访问，否则ios不兼容
})
