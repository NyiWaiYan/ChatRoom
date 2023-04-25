<template>
    <h2>Login Form</h2>
    <form action="" @submit.prevent="Login">
     
        <input type="email" placeholder="Enter Email" v-model="email">
        <input type="password" placeholder="Enter Password" v-model="password">
        <button> Log In</button>
    </form>
</template>

<script>
import { ref } from 'vue'
export default {
    setup(){
        let email= ref("");
        let password= ref("");
        let Login=()=>{
            console.log(email.value,password.value)
        }
        
        return {email,password,Login}
    }

   
}
</script>

<style>

</style>