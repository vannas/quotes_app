import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from 'firebase/app'
import Home from '@/components/Home.vue';
import LoginRegistro from '@/components/LoginRegistro.vue';
import E404 from '@/components/E404.vue';


Vue.use(VueRouter);

let router= new VueRouter ({
    routes: [
        {
            path: '/',
            component: Home,
            meta:{
                requiresAuth: true
            }
        },
        {
            path: '/login',
            component: LoginRegistro
        },
        {
            path: '*',
            component: E404
        }
    ]
})

router.beforeEach((to, from, next) => {
    let currentUser = firebase.auth().currentUser;
    //let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    console.log(to);
    console.log('Usuario actual', currentUser);
    
    //if (requiresAuth && !currentUser) next('/')
    if (to.meta.requiresAuth && currentUser == null){
        next('/login')
    } else {
    next()
    }
})

export default router;