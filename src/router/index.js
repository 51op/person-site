import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from "../components/Index";
import Tiku from "../components/Tiku";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    meta: {
      title: '首页',

    }
  },
  {
    path: '/tiku',
    name: 'Tiku',
    component: Tiku,
    meta: {
      title: '题库'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
