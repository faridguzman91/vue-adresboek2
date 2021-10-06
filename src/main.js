import Vue from 'vue'
import App from './App.vue'

//importeer veevalidate
import VeeValidate from 'vee-validate';

Vue.config.productionTip = false

import router from "./router";
import store from "./store";

Vue.use(VeeValidate);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')