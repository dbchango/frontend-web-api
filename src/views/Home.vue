<template>
    <div class="home">
        <div>
            <AppNavigation/>
            
        </div>
        <div>
            <v-main>
            <img alt="Vue logo" src="../assets/logo.png" />
            </v-main>
        </div>
        
    </div>
</template>

<script>
// @ is an alias to /src
import AppNavigation from '../components/AppNavigation.vue';

export default {
    name: 'Home',
    components: {
        AppNavigation
    },
};
</script>
