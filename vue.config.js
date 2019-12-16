
// const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
 
    
  lintOnSave: false,
  chainWebpack: config => {
    config.module.rules.delete('eslint');

  },
  // configureWebpack: {
  //   plugins: [
  //     new VueLoaderPlugin()
  //   ]
  // },
  css: {
    loaderOptions: {
      css: {
        // 这里的选项会传递给 css-loader
        data: `
          @import "@/../src/assets/res/layui/css/layui.css";
          @import "@/../src/assets/res/static/css/main.css"
        `
        
        
      },
      postcss: {
        // 这里的选项会传递给 postcss-loader
      }
    
    }
  },

  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000/api', //设置你调用的接口域名
        changeOrigin: true,
        pathRewrite: {
          '^/api/': ''
        }
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? 'http://120.78.14.107/' : '/',
  assetsDir: process.env.NODE_ENV === 'production' ? 'statics' : '',
}