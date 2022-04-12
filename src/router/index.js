import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () => import("views/home/home")
  const detail =() => import("views/home/detail")
const order = () => import("views/order/order")   //我的订单
const invite = () => import("views/invite/invite")   //邀请


const profile = () => import("views/profile/profile")



Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home'
    
  },{
    path:'/home',
    component:home,
  },
  {
    path:'/home/detail/:id',
   component:detail
  },
  {
      path:'/invite',
      component:invite
  },{
      path:'/order',
      component:order
  },
  {
    path:'/profile',
    component:profile
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
