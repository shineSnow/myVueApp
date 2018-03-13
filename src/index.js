import Vue from 'vue/dist/vue'
import App from './app.vue'
import router from './router'
import 'babel-polyfill'

if(module.hot) {
    module.hot.accept();
}

new Vue({
    el:'#root',
    router,
    template: '<App/>',
    components: { App }
})