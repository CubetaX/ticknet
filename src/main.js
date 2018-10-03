import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueRouter)
Vue.use(VueAwesomeSwiper)
//need init before mount
Vue.config.productionTip = false
import 'swiper/dist/css/swiper.min.css'
new Vue({
  render: h => h(App)
}).$mount('#app')

