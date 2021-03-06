// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './layout'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css'; // 使用 CSS
import axios from 'axios'
import store from './store'

Vue.prototype.axios = axios;

Vue.use(iView);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    axios,
    store,
    template: '<Layout/>',
    components: { Layout }
})