import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vuelidate from 'vuelidate';
import '@babel/polyfill';
import {BootstrapVue,IconsPlugin} from 'bootstrap-vue'

Vue.use(Vuelidate);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
}).$mount('#app');
