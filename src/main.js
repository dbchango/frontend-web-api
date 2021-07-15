import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vuelidate from 'vuelidate';
import '@babel/polyfill';
Vue.use(Vuelidate);
axios.interceptors.request.use(function(config){
    console.log(config)
    return config
}, function(err){
    return Promise.reject(err)
})
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
}).$mount('#app');
