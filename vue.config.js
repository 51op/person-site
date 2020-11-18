const  TIMESTAMP = Date.parse(new Date())
const  path = require('path')
module.exports = {
    //部署应用包时的基本url，默认/
    publicPath: '/',
    outputDir: 'dist',
    //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    // assetsDir:'static/'+TIMESTAMP + '/',
    indexPath: 'index.html',
    // devServer:{
        // proxy:{
        //     '/api':{
        //         target: 'http://localhost:3000',
        //         secure:false
        //         },
        //     },
        // }

    configureWebpack:{
      resolve:{
          alias:{
              //在html中<img src="@/assets/img/kube04.png"/>
              'assets':path.resolve(__dirname,"assets"),

              'components':path.resolve(__dirname,"components"),
              '@':path.resolve(__dirname,'src')
          }
      },
    },
    chainWebpack: config => {
        config.module.rule('md')
            .test(/\.md/)
            .use('vue-loader')
            .loader('vue-loader')
            .end()
            .use('vue-markdown-loader')
            .loader('vue-markdown-loader/lib/markdown-compiler')
            .options({
                raw: true
            })
    }
}
