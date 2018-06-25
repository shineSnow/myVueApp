import Vue from 'vue/dist/vue'
import VueRouter  from 'vue-router'
import Index from 'VIEW/Index/index.vue'
import Test from 'VIEW/Test/index.vue'
import VueEvent from 'VIEW/VueEvent/index.vue'
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
            path:'/vueevent',
            name: 'vueevent',
            component: VueEvent
        }
    ]
})