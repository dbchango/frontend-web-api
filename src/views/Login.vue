<template>
    <form>
        <v-text-field
            v-model="user.username"
            label="Correo"
        ></v-text-field>
        <VuePassword
            v-model="user.password"
            @input="updateStrength"
            :strength="pswd_strength"
        />
        <v-btn @click="handleLogin">Entrar</v-btn>
        <v-btn @click="handleEnterRegister">Registrarse</v-btn>
    </form>
</template>
<script>
import User from '../models/user';
import VuePassword from 'vue-password';
export default {
    name: 'Login',
    components: {
        VuePassword
    },
    data() {
        return {
            user: new User('', '', ''),
            loading: false,
            message: '',
            name: '',
            email: '',
            pswd_strength: 0,
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
        },
        handleEnterRegister(){
            this.$store.dispatch('openRegisterAction');
        },
        updateStrength(password){
            const containsUppercase = /[A-Z]/.test(password)
            const containsLowercase = /[a-z]/.test(password)
            const containsNumber = /[0-9]/.test(password)
            const containsSpecial = /[#?!@$%^&*-]/.test(password)
            const containsLenght = password.length>10?true:false;
            if(password.length == 0 ) this.pswd_strength = 0;
            if(containsUppercase||containsLowercase||containsNumber) this.pswd_strength = 1;
            if((containsUppercase||containsLowercase||containsNumber)&&containsLenght) this.pswd_strength = 2;
            if(containsNumber&&containsUppercase&&containsLowercase) this.pswd_strength = 3;
            if(containsNumber&&containsUppercase&&containsLowercase&&containsSpecial&&containsLenght) this.pswd_strength = 4;

        }
    }
}
</script>
