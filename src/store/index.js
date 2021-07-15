import Vue from 'vue';
import Vuex from 'vuex';

import { auth } from './auth.module';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        username: '',
        token:''
    },
    mutations: {
        updateToken(state, token){
            state.token = token;
        }
    },
    actions: {
        updateTokenAction(context, token){
            context.commit('updateToken', token);
        }
    },
    modules: {
        auth
    },
    getters: {
        token(state){
            return state.token;
        }
    }
});
