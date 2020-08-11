<template>
  <div id="app">    
    <nav>
      <div class="nav-wrapper" id="nav">
        <a href="#" class="brand-logo right"><router-link to="/login" class="out">Log Out</router-link> <i class="large material-icons">pest_control_rodent</i></a>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li><router-link to="/"><i class="large material-icons">house</i></router-link></li>
          <li><router-link to="/login"><i class="large material-icons">account_circle</i></router-link></li>
          
        </ul>
      </div>
    </nav>

    <router-view/> 

  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  }
}
</script>

<style>
#app, html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color:#e0e0e0;
}

#nav{
  background: #ED4264;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to center, #FFEDBC, #ED4264);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to center, #FFEDBC, #ED4264); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
.out{
  font-size: 16px;
}
</style>
