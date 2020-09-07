<template>
  <div id="app">    
    <nav>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><router-link to="/"><i class="large material-icons">house</i></router-link></li>
        <li v-if="$route.path != '/login'"><router-link to="/login" @click="logout">Exit</router-link></li> 
      </ul>
      
    </nav>

    <router-view/> 

  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'


export default {
  name: 'App',
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    logout(){
      firebase.auth().signOut();
    },
  },
}
</script>

<style>
#app, html {
  font-family: 'Montserrat', Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color:#e0e0e0;
}

nav {
  background-color:rgb(19, 17, 17);
}

nav li .out{
  display: inline-block;
  margin-right:0.5em;
}
</style>
