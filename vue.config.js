const  TIMESTAMP = Date.parse(new Date())
const  path = require('path')
module.exports = {
    //部署应用包时的基本url，默认/
    publicPath: '/',
    outputDir: 'dist',
    //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    assetsDir:'static/'+TIMESTAMP + '/',
    indexPath: 'index.html',
    // devServer:{
        // proxy:{
        //     '/api':{
        //         target: 'http://localhost:3000',
        //         secure:false
        //         },
        //     },
        // }
}
