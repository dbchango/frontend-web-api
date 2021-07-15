<template>
    <form>
        <v-text-field
            v-model="user.username"
            label="Nombre de usuario"
        >
        </v-text-field>
        <v-text-field
            v-model="user.password"
            label="Contraseña"
        >
        </v-text-field>
        <v-text-field
            v-model="user.confirmPassword"
            label="Confirmar contraseña"
        >
        </v-text-field>
        <v-btn @click="handleRegister">Registrar</v-btn>
        <v-btn @click="handleExitRegister">Entrar</v-btn>
    </form>
</template>
<script>
import User from '../models/user.js';
export default {
    name: 'Register',
    data() {
        return {
            user: new User('', '', ''),
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
        }    
    }
}
</script>