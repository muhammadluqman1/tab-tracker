<template>
 <!-- eslint-disable-next-line -->
 <!-- eslint-disable  -->
<v-layout column>
  <v-flex xs6 offset-xs3>
    <div class="white elevation-2">
      <v-toolbar flat dense class="cyan" dark>
        <v-toolbar-title>Register</v-toolbar-title>
      </v-toolbar>
      <div class="pa-6 pr-4 pt-2 pb-2">
        <input type="email" v-model="email" placeholder="Enter Email" name="email" id="email" required>
        <br>
        <input type="password" v-model="password" placeholder="Enter Password" name="psw" id="psw" required>
        <br>
        <div class="error" v-html="error"></div>
        <br>
        <v-btn class="cyan" @click="register" type="submit">Register</v-btn>
      </div>
    </div>
  </v-flex>
</v-layout>
  
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return{
        email: '',
        password: '',
        error: null
    }
  },
//   watch: {
//       email(value){
//           console.log("Email has changed", value);
//       }
//   },
  methods:{
    async register () {
      try{
        const response = await AuthenticationService.register({
            email: this.email,
            password: this.password
        })
      } catch (error){
        this.error = error.response.data.error
      }
        
    }
  },
  mounted() {
    //   setTimeout( ()=>{
    //       this.email = "Hello World"
    //   }, 2000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error{
  color: red;
}
</style>
