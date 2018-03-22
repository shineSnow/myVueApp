import 'babel-polyfill'
import Vue from 'vue/dist/vue.js'
import App from './app.vue'
import router from './router'
import iView from 'iview/dist/iview'
import 'iview/dist/styles/iview.css'
import store from './store'

if(module.hot) {
    module.hot.accept();
}

Vue.use(iView);




new Vue({
    el:'#root',
    router,
    store,
    template: '<App/>',
    components: { App }
})