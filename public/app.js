import Vue from 'vue';
import App from './app.vue';
import GVuePreView from '../src/index.js'

Vue.use(GVuePreView)

new Vue({
    el: "#app",
    render: h => h(App)
})