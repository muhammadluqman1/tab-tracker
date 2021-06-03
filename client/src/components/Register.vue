<template>
  <div class="hello">
      <h1>Register</h1>
      <input type="email" v-model="email" placeholder="Enter Email" name="email" id="email" required>
      <br>
      <input type="password" v-model="password" placeholder="Enter Password" name="psw" id="psw" required>
      <br>
      <button @click="register" type="submit" class="registerbtn">Register</button>
  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return{
        email: '',
        password: ''
    }
  },
//   watch: {
//       email(value){
//           console.log("Email has changed", value);
//       }
//   },
  methods:{
    async register () {
        const response = await AuthenticationService.register({
            email: this.email,
            password: this.password
        })
        console.log(response.data);
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
</style>
