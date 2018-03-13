import Vue from 'vue/dist/vue'
import Router from 'vue-router'
import Index from '../views/Index'
import Test from '../views/Test'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'app',
            component: require('../app.vue')
        },
        {
            path: '/index',
            name: 'index',
            component: Index
        },
        {
            path: '/test',
            name: 'test',
            component: Test
        }
    ]
})