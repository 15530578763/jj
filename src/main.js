import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'
import axios from 'axios';
Vue.prototype.$axios = axios;

// 引入element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//  引入第三方js
import bus from '@/assets/js/common/bus'
Vue.prototype.$bus = bus;


//  引入mock.js
import '@/mock.js'


Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
