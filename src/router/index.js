import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录',
    },
    component: () => import(/* webpackChunkName: "login" */'../views/Login/Login'),
  },
  {
    path: '/',
    redirect: "/form",
    name: 'Home',
    component: Home,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta: {
      title: 'Home',
      requireAuth: false,
      sideBar: true,
    },
    children: [
      {
        path: '/form',
        name: 'form',
        meta: {
          title: 'Home',
          requireAuth: false,
          sideBar: true,
        },
        component: () => import(/* webpackChunkName: "form" */ '../views/Form/Form')
      }
    ]
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router