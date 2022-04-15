import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () => import("views/home/home")
  const detail =() => import("views/home/detail")
const order = () => import("views/order/order")   //我的订单
const lineItem =() => import("views/order/lineItem")
const invite = () => import("views/invite/invite")   //邀请

const profile = () => import("views/profile/profile")
  const message =() => import("views/profile/message")
  const buylist =() => import("views/profile/buylist")
  const goldlog =() => import("views/profile/buylist")
  const Info =() => import("views/profile/Info")
  const pointlist =() => import("views/profile/pointlist")
  const realname =() => import("views/profile/realname")
  const security =() => import("views/profile/security")
  const withdraw =() => import("views/profile/withdraw")
  const withdrawlist =() => import("views/profile/withdrawlist")

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
  },
  {
      path:'/order/lineItem/:id',
      component:lineItem,
      meta:{
        close_shoowTab:true
      }
  },
  {
    path:'/order',
    component:order
  },
  {
    path:'/profile',
    component:profile
  },{
      path:'/profile/buylist',
      component:buylist,
      meta:{
        close_shoowTab:true
      }
  },{
    path:'/profile/goldlog',
    component:goldlog,
    meta:{
      close_shoowTab:true
    }
  },{
    path:'/profile/Info',
    component:Info,
    meta:{
      close_shoowTab:true
    }
  },{
    path:'/profile/message',
    component:message,
    meta:{
      close_shoowTab:true
    }
  },{
    path:'/profile/pointlist',
    component:pointlist,
    meta:{
      close_shoowTab:true
    }
  },{
    path:'/profile/realname',
    component:realname,
    meta:{
      close_shoowTab:true
    }
  },{
    path:'/profile/security',
    component:security,
    meta:{
      close_shoowTab:true
    }
  },{
    path:'/profile/withdraw',
    component:withdraw,
    meta:{
      close_shoowTab:true
    }
  },{
    path:'/profile/withdrawlist',
    component:withdrawlist,
    meta:{
      close_shoowTab:true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
