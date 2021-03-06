import Vue from 'vue/dist/vue'
import './plugins/axios'

import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import axios from 'axios'
import echarts from 'echarts'
import VueLocalStorage from 'vue-localstorage'


import 'element-ui/lib/theme-chalk/index.css'
import './assets/style.css'
import 'echarts/theme/macarons'

//安装额外功能
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueLocalStorage)
axios.defaults.withCredentials = true;
Vue.prototype.$axios = axios;
Vue.prototype.$echarts=echarts
//Vue.prototype.$localStorage=VueLocalStorage

Vue.config.productionTip = false

//  定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
import MainPage from './components/MainPage'
import SunRise from './components/SunRise'
import CityChoose from './components/CityChoose'
import CitySearch from './components/CitySearch'
//import ThreeWeather from './components/ThreeWeather'
import Test from './components/Test'

//创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
    routes: [
        // 动态路径参数 以冒号开头
        { path: '/', component: MainPage },
        {path:'/sun',component:SunRise},
        {path:'/city',component:CityChoose},
        {path:'/city_s',component:CitySearch},
        {path:'/test',component:Test}
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {x: 0, y: 0}
        }
    }
})


//设置默认显示城市，北京
Vue.localStorage.set('cityName', `["北京"]`)
Vue.localStorage.set('chosen', '北京')

new Vue({
    router
}).$mount('#app')
