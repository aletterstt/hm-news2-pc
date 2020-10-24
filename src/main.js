import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引入base.less
import './styles/base.less'
//完整引入element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
//引入axios
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'
Vue.prototype.$axios=axios
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
