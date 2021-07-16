<template>
    <form>
        <v-text-field
            v-model="user.username"
            label="Correo"
        >
        </v-text-field>
        <VuePassword
            v-model="user.password"
            @input="updatePswdStrength"
            :strength="pswd_strength"
        />
        <VuePassword
            v-model="user.confirmPassword"
            @input="updateCPswdStrength"
            :strength="conf_pswd_strength"
        />
        <v-btn @click="handleRegister">Registrar</v-btn>
        <v-btn @click="handleExitRegister">Entrar</v-btn>
    </form>
</template>
<script>

import VuePassword from 'vue-password';
import User from '../models/user.js';
export default {
    name: 'Register',
    components: {
        VuePassword
    },
    data() {
        return {
            user: new User('', '', ''),
            pswd_strength:0,
            conf_pswd_strength:0,

        }
    },
    methods: {
        handleRegister(){
            if(this.user.username && this.user.password && this.user.confirmPassword){
                this.$store.dispatch('auth/register', this.user).then(
                    data=>{
                        console.log(data)
                        this.$store.dispatch('closeRegisterAction');
                    }, 
                    error =>{
                        console.warn(error.response)
                    }
                )
            }
        },
        handleExitRegister(){
            this.$store.dispatch('closeRegisterAction');
        },
        // password strength
        updatePswdStrength(password){
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

        },
        // confirmation password strength
        updateCPswdStrength(password){
            if(this.user.password!=password) {
                this.conf_pswd_strength = 0
            }else{
                this.conf_pswd_strength = 4
            }

        },
    }
}
</script>