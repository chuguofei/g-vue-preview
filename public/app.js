import Vue from 'vue';
import App from './app.vue';
import GVuePreView from '@/main'

// Vue.component(GVuePreView);
Vue.use(GVuePreView)

new Vue({
    el: "#app",
    render: h => h(App)
})