 <!-- eslint-disable-next-line -->
 <!-- eslint-disable  -->
<template>
  <v-toolbar fixed class="cyan" dark style="flex:0;">
    <v-toolbar-title>
      <router-link
       tag="span"
       :to="{
         name: 'songs'
         }"
       style="cursor:pointer">
        TabTracker
      </router-link>
    </v-toolbar-title>
      <v-toolbar-items>
        <v-btn 
      
      class="cyan" @click="navigateTo({ name: 'songs'})">
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
      v-if="$store.state.isUserLoggedIn"
      class="cyan" @click="logout">
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
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'songs'
      })
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
