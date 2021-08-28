<template>
  <div class="home">  
      <h2>我是Home</h2>
  </div>
</template>

<script>
import {getHomeMultidata} from 'network/home.js'

export default {
  name: 'Home',
  components:{
     
  },
  created(){
    getHomeMultidata().then(res =>{
      console.log(res)
      console.log("sdsd");
    })
  }
}
</script>
