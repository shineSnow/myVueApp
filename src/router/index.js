import Vue from 'vue/dist/vue'
import VueRouter  from 'vue-router'
import Index from 'VIEW/Index/index.vue'
import Test from 'VIEW/Test/index.vue'
import BtnDemo from 'VIEW/BtnDemo/index.vue'
import IconDemo from 'VIEW/IconDemo/index.vue'
import IptDemo from 'VIEW/IptDemo/index.vue'
import TableDemo from 'VIEW/TableDemo/index.vue'
import TimeDemo from 'VIEW/Time/index.vue'
import Date from 'VIEW/Date/index.vue'
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
        },
        {
            path: '/table',
            name: 'table',
            component: TableDemo
        },
        {
            path: '/time',
            name: 'time',
            component: TimeDemo
        },
        {
            path: '/date',
            name: 'date',
            component: Date
        }
    ]
})