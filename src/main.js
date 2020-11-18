import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/reset.css'

//引入element-ui组件
import  ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//引入bootstrap组件
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
Vue.use(BootstrapVue)


//引入高亮组件
// import Prism from 'prismjs';
// Vue.use(Prism)
//
// highlight.js代码高亮插件
import Highlight from './highlight'; // 这里是你项目highlight.js所在路径
Vue.use(Highlight);

Vue.config.productionTip = false



// import showdown from 'showdown'
// Vue.prototype.md2html = (md)=> {
//   let converter = new showdown.Converter()
//   let text = md.toString()
//   let html = converter.makeHtml(text)
//   return html
// }


router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

