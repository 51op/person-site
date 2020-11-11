import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from "../components/Index";
import TikuList from "../components/TikuList";
import test from "../components/test/Test"
Vue.use(VueRouter)

const routes = [

  {
    path:'/',
    redirect:'/index'
  },

  {
    path: '/test',
    name: 'test',
    component: test,
    meta: {
      title: 'test'
    }
  },
  {
    path: '/tikulist',
    name: 'TikuList',
    component: TikuList,
    meta: {
      title: '题库'
    }
  },
  {
    path: '/index',
    name: 'Index',
    component:Index,
    meta: {
      title: '首页',

    }
  },
  {
    path: '/details/sum',
    component: () => import("@/views/details/InterSumm"),
    name: 'details',
    meta:{
      title: "题库"
    }
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
