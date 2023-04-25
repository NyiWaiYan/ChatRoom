<template>
    <h2>Sign Up Form</h2>
    <form action="" @submit.prevent="signUp">
        <input type="text" placeholder="Enter Display Name" v-model="displayname">
        <input type="email" placeholder="Enter Email" v-model="email">
        <input type="password" placeholder="Enter Password" v-model="password">
        <button> Sign Up</button>
    </form>
</template>

<script>
import { ref } from 'vue'
export default {
    setup(){
        let displayname = ref("");
        let email= ref("");
        let password= ref("");
        let signUp=()=>{
            console.log(displayname.value,email.value,password.value)
        }
        
        return {displayname,email,password,signUp}
    }

   
}
</script>

<style>

</style>