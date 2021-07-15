<template>
    <v-app>
        <v-main transition="slide-x-transition">
            <div v-if="$store.state.auth.status.loggedIn">
                <router-view></router-view>
            </div>
            <div v-if="!$store.state.auth.status.loggedIn">
                <Login/>
            </div>

        </v-main>
      
    </v-app>
    
</template>
<script>
import Login from './views/Login.vue'
export default {
    data(){
        return {
            
        }
    },
    name: 'App', 
    components: { 
        Login
    }, 
    mounted:function(){
        console.log(this.$store.getters['auth/loggedIn'])
    }
    
}
</script>
