
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import { store } from '../store'
import Home from '../pages/Home'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import DashboardHome from '../pages/Dashboard/Home'

// Routes
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            layout: 'web',
            auth: undefined
        }
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: {
            layout: 'auth',
            auth: false
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            layout: 'auth',
            auth: false
        }
    },
    {
        path: '/dashboard',
        component: Dashboard,
        meta: { breadCrumb: 'Dashboard' },
        children: [
            {
                path: '/',
                redirect: 'beranda'
            },
            {
                path: 'beranda',
                name: 'dashboard.home',
                component: DashboardHome,
                meta: {
                    auth: true,
                    layout: 'admin',
                    breadCrumb: 'Beranda'
                }
            },            
        ]
    },
]

const router = new VueRouter({
    history: true,
    mode: 'history',
    routes,
})

router.beforeEach((to, from, next) => {
    store.commit('showLoader');
    next();
});

router.afterEach((to, from) => {
    setTimeout(() => {
        store.commit('hideLoader');
    }, 1000);
});

export default router