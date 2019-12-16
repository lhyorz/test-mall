import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import './assets/res/layui/css/layui.mobile.css'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  el:"#app",
  router,
  render: h => h(App),
}).$mount('#app')
