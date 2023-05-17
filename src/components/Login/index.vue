<template>
    <v-card>
        <v-card-title>
            Выполните вход в учетку
        </v-card-title>
        <v-form @submit.prevent="onLogin">
            <v-card-text>
                <LoginInput v-model="login" label="Логин" placeholder="Логин"/>
                <LoginInput v-model="password" label="Пароль" type="password"/>
            </v-card-text>
            <v-card-actions>
                <v-btn type="submit" color="primary" width="100%">Войти</v-btn>
            </v-card-actions>
        </v-form>
    </v-card>
</template>

<script>
import LoginInput from './LoginInput.vue';
import { mapActions } from 'vuex'

export default{
    data:()=>({
        login: '',
        password: ''
    }),
    computed:{
        credential(){
            return {
                login: this.login,
                password: this.password
            }
        }
    },
    methods:{
        ...mapActions(["logIn","showToast"]),
        async onLogin(){
            try{
                await this.logIn(this.credential)
            }
            catch(err){
                this.showToast({
                    message: "Неправильный логин или пароль",
                    color: "red",
                    timeout: 3000
                })
            }
        }

    },
    components: { LoginInput }
}
</script>