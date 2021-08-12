import GVuePreView from './index.vue';
import Vue from 'vue';
// GVuePreView.install = Vue => Vue.component(GVuePreView.name, GVuePreView); //注册组件

Vue.component('g-vue-preview', GVuePreView)


export default GVuePreView;