import Vue from 'vue'
import VueRouter from 'vue-router'

//项目中use
Vue.use(VueRouter)
//创建 路由实例
const router = new VueRouter([
  {path:'/',redirect:'/login'},
  {path:'/login',component: Login},
  {path:'/home',component:Home}
])
//导出
export default router