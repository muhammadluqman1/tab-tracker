 <!-- eslint-disable-next-line -->
 <!-- eslint-disable  -->
<template>
  <v-toolbar fixed class="cyan" dark style="flex:0;">
    <v-toolbar-title>
      <span @click="navigateTo({ name: 'root'})" style="cursor:pointer">
        TabTracker
      </span>
    </v-toolbar-title>
      <v-toolbar-items>
      <v-btn 
        
        dark class="cyan">
        Browse
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn 
        v-if="!$store.state.isUserLoggedIn"
        dark class="cyan"
        @click="navigateTo({ name: 'login'})">
        Login
      </v-btn>
      
      <!-- <router-link to="register"      
        flat 
        dark class="cyan"> -->
      <v-btn 
      v-if="!$store.state.isUserLoggedIn"
      class="cyan" @click="navigateTo({ name: 'register'})">
        Sign Up
      </v-btn>
      <!-- </router-link> -->

      <v-btn 
        
        dark class="cyan"
      >
        Log Out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
export default {
  methods: {
    navigateTo (route){
      this.$router.push(route)
    }
  } 

}
</script>

<style scoped>
.home {
  cursor: pointer;
}
.home:hover {
  color: #E9E;
}
</style>
