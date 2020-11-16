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
    component:() => import("@/components/Index"),
    meta: {
      title: '首页',

    }
  },
  {
    path: '/details/sum',
    component: () => import("@/views/details/InterSumm"),
    name: 'InterSumm',
    meta:{
      title: "面试总结"
    }
  },
  {
    path: '/details/k8supdate',
    component: () => import("@/views/details/K8sUpdate"),
    name: 'k8supdate',
    meta:{
      title: "k8s升级"
    }
  },
  {
    path: '/details/dockertools',
    component: () => import("@/views/details/DockerTools"),
    name: 'DockerTools',
    meta:{
      title: "docker工具"
    }
  },
  {
    path: '/details/k8sversionupdate',
    component: () => import("@/views/details/K8sVersionUpdate"),
    name: 'K8sVersionUpdate',
    meta:{
      title: "docker工具"
    }
  },
  {
    path: '/details/pyield',
    component: () => import("@/views/details/PythonYield"),
    name: 'pythonYield',
    meta:{
      title: "yield用法"
    }
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
