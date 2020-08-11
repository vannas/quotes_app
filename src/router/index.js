import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/components/Home.vue';
import LoginRegistro from '@/components/LoginRegistro.vue';
import E404 from '@/components/E404.vue';


Vue.use(VueRouter);

export default new VueRouter ({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/login',
            component: LoginRegistro
        },
        {
            path: '/register',
            component: LoginRegistro
        },
        {
            path: '*',
            component: E404
        }
    ]
})