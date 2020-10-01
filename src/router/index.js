import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/home'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/fenlei',
    name: 'fenlei',
    component: () => import(/* webpackChunkName: "about" */ '../views/fenlei/fenlei')
  },
  {
    path: '/cat',
    name: 'cat',

    component: () => import(/* webpackChunkName: "about" */ '../views/cat/car')
  },
  {
    path: '/wode',
    name: 'wode',
    component: () => import(/* webpackChunkName: "about" */ '../views/me/wode')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
