<template>
    <form>
        <v-text-field
            v-model="user.username"
            label="Name"
        ></v-text-field>
        <v-text-field
            v-model="user.password"
            label="Password"
        ></v-text-field>
        <v-btn @click="handleLogin">Submit</v-btn>
    </form>
</template>
<script>
import User from '../models/user';
export default {
    name: 'Login',
    data() {
        return {
            user: new User('', '', ''),
            loading: false,
            message: '',
            name: '',
            email: '',
        }
    },
    mixins: [],
    computed:{
        
    },
    created(){
        if(this.loggedIn){
            this.$router.push('/');
        }    
    },
    methods:{
        handleLogin(){
            this.loading = true;
            if(this.user.username && this.user.password){
            
                this.$store.dispatch('auth/login', this.user).then(
                    ()=>{
                        //this.$router.push('/')

                    },
                    res=>{
                        console.log(res.data)
                    },
                    error => {
                        console.warn(error)
                        this.loading = false;
                        this.message = (error.response && error.response.data)|| error.message || error.toString();
                    }
                )
            }
        }
    }
}
</script>
