import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//element UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 自定义
import './assets/css/free.css'
import './assets/css/common.css'


Vue.use(ElementUI)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
