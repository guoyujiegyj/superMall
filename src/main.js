import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 轮播组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

// 导入移动端适配文件
import '@/assets/js/flexible.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
