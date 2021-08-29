<template>
  <div class="home">  
    <navbar class="home-navbar"><div slot="center">购物车</div></navbar>
      <HomeSwiper :banner="banner"/>
      <discount :recommend="recommend"/>
      <h2>我是Home</h2>
  </div>
</template>

<script>
import navbar from 'components/common/navbar/NavBar.vue'

import {getHomeMultidata} from 'network/home.js'

import HomeSwiper from './childComps/HomeSwiper.vue'
import discount from './childComps/discount.vue'

export default {
  name: 'Home',
  data(){
    return{
      banner:[],
      recommend:[]
    }
  },
  components:{
    navbar,
    HomeSwiper,
    discount
  },
  created(){
    getHomeMultidata().then(res =>{
    
      this.banner = res.data.banner.list
      this.recommend =res.data.recommend.list  
      console.log(res)
    })
  }
}
</script>
<style>
.home-navbar{
   background-color:#12335b;
}
</style>