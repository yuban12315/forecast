import Vue from 'vue/dist/vue'

import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
//安装额外功能
Vue.use(ElementUI)
Vue.use(VueRouter)

Vue.config.productionTip = false

//  定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
import HelloWorld from './components/HelloWorld'

const User = {
    template: '<div>User</div>'
}

//创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
    routes: [
        // 动态路径参数 以冒号开头
        { path: '/', component: HelloWorld }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {x: 0, y: 0}
        }
    }
})

new Vue({
    router
}).$mount('#app')
