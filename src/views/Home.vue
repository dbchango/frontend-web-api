<template>
    <div class="home">
        <div>
            <AppNavigation/>
            <router-view></router-view>
        </div>
        
        
    </div>
</template>

<script>
// @ is an alias to /src
import AppNavigation from '../components/AppNavigation.vue';


export default {
    name: 'Home',
    components: {
        AppNavigation, 
    },
};
</script>
