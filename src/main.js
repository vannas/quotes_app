import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'
import 'firebase/auth'
import './firebase.js'

import VueFirestore from 'vue-firestore';
import router from "@/router"
import App from './App.vue'

Vue.use(Vuex);
Vue.use(VueFirestore, {key: 'id'});

Vue.config.productionTip = false

const store = new Vuex.Store ({
  state: {
    user: null,
    error: null
  },
  mutations: {
    //mutación para cambiar estado user
    set_user(state, new_user){
      state.user = new_user;
    },

    //mutación para cambiar estado error
    set_error(state, new_error){
      state.error = new_error;
    },
  },
  actions: {
    
    async login(context, datos){
      firebase.auth().signInWithEmailAndPassword(datos.email, datos.password)
      .then(function (response){
        console.log(response);
        context.commit('set_error', null);
        context.commit('set_user', datos.email);
        router.push('/');
      })
      .catch(function(error){
        context.commit('set_error', error.message);
        context.commit('set_user', null);
      })
    },

    async register(context, datos){
      firebase.auth().createUserWithEmailAndPassword(datos.email, datos.password)
      .then(function (response){
        console.log(response);
        context.commit('set_error', null);
        context.commit('set_user', datos.email);
        router.push('/');
      })
      .catch(function (error){
        context.commit('set_error', error.message);
        context.commit('set_user', null);
      })
    }
  }

})

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
