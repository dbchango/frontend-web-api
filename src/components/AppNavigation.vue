<template>

    <v-navigation-drawer clipped app>
        <v-list>
            <v-list-item class="px-2">
                <v-list-item-avatar>
                    <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title class="text-h7">{{ $store.state.auth.user.userName }}</v-list-item-title>
                    <v-list-item-subtitle class="text-h9">Email</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
         
        </v-list>
        <v-divider></v-divider>
        <v-list nav dense>
            <v-list-item link>
                <router-link :to="{name: 'products-list'}">
                    <v-list-item-icon>
                        <v-icon>mdi-abjad-arabic</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Files</v-list-item-title>
                </router-link>
                
            </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <template v-slot:append>
            <div class="pa-2">
                <v-btn @click="handleLogOut" block>
                    Salir
                </v-btn>
            </div>
        </template>

    </v-navigation-drawer>
    
</template>
<script>
export default {
    name: 'AppNavigation',
    data(){
        return {
            loggedIn:false
        }
    },
    mounted: function () {
        this.loggedIn = this.$store.state.auth.status.loggedIn
        this.loggedIn?console.log('ok'):console.log('no ok')
    },
    methods: {
        handleLogOut(){
            if(this.loggedIn){
                this.$store.dispatch('auth/logout').then(
                    ()=>{
                        console.log('logout')
                    }
                )
            }
        }
    }
}
</script>
<style scoped>

</style>