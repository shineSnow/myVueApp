import Vue from 'vue/dist/vue'
import VueRouter  from 'vue-router'
import Index from '../views/Index/index.vue'
import Test from '../views/Test/index.vue'
import BtnDemo from '../views/BtnDemo/index.vue'
import IconDemo from '../views/IconDemo/index.vue'
import IptDemo from '../views/IptDemo/index.vue'
Vue.use(VueRouter)

export default new VueRouter ({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/test',
            name: 'test',
            component: Test
        },
        {
            path: '/button',
            name: 'button',
            component: BtnDemo
        },
        {
            path: '/icon',
            name: 'icon',
            component: IconDemo
        },
        {
            path: '/ipt',
            name: 'ipt',
            component: IptDemo
        }
    ]
})