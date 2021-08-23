const path = require('path')

// 根路径
const resolve = dir => {
  return path.join(__dirname, dir)
}

const TITLE = '前端项目创建工具'

// 项目部署基础
// 默认情况下，我们假设你的应用将被部署在域的根目录下,
// 例如：https://www.my-app.com/
// 默认：'/'
// 如果您的应用程序部署在子路径中，则需要在这指定子路径
// 例如：https://www.foobar.com/my-app/
// 需要将它改为'/my-app/'
// const publicPath = './'

module.exports = {
  // 项目基础路径
  // publicPath,
  // 如果你不需要使用eslint，把lintOnSave设为false即可
  lintOnSave: true,
  chainWebpack: config => {
    // 设置标题名称
    config
      .plugin('html')
      .tap(args => {
        args[0].title = TITLE
        return args
      })

    // 设置路径别名。key,value自行定义，比如.set('@@', resolve('src/components'))
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  // 插件配置
  pluginOptions: {
    // electron打包配置
    electronBuilder: {
      // 在渲染进程中使用node
      nodeIntegration: true,
      // 打包配置
      builderOptions: {
        // 安装文件名称
        productName: TITLE,
        win: {
          icon: './public/app.ico'
        },
        mac: {
          icon: './public/app.icns'
        },
        linux: {
          icon: './public/app.png'
        },
        nsis: {
          // 是否一键安装，默认为true
          oneClick: false,
          // 安装语言，2052对应中文            
          language: '2052',
          // 为当前系统的所有用户安装该应用程序           
          perMachine: true,
          // 允许用户选择安装目录
          allowToChangeInstallationDirectory: true
        }
      }
    }
  },
  // 打包时生成用于调试的.map文件
  productionSourceMap: true,
  // 开发代理服务配置
  devServer: {
    // 端口号
    port: 8888,
    // 后台接口的基础路径，来解决跨域
    // 如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
    proxy: 'http://127.0.0.1:8080/'
  },
  css: {
    loaderOptions: {}
  },
  // webpack.config.js 相关配置 https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  configureWebpack: {
    module: {
      rules: []
    },
    devtool: 'source-map',
    // cacheBusting: false,
    plugins: []
  }
}
