<template>
  <div id="app">
   
    <router-view/>
    <MainTabBar  v-if="!$route.meta.close_shoowTab" />
  </div> 
</template>
<script>
import MainTabBar from 'components/content/tabbar/MainTabBar'

export default {
  name: 'app',
  components: {
    MainTabBar
  }
}
</script>

<style>
@import "assets/css/base.css";
li{
  list-style: none;
}
</style>
