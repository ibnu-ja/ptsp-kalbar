// Imports
import Vue from 'vue'
import { store } from '../store'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior: (to, from, savedPosition) => {
        if (to.hash) return { selector: to.hash }
        if (savedPosition) return savedPosition

        return { x: 0, y: 0 }
    },
    routes: [
        {
            path: '/',
            component: () => import('@/layouts/home/Index.vue'),
            children: [
                {
                    path: '',
                    name: 'Home',
                    component: () => import('@/pages/Web/home/Index.vue'),
                    meta: {
                        layout: 'web',
                        auth: undefined
                    }
                },
                {
                    path: 'perizinan',
                    name: 'Perizinan',
                    component: () => import('@/pages/Web/perizinan/Index.vue'),
                    meta: {
                        src: require('@/assets/about.jpg'),
                        layout: 'web',
                        auth: undefined
                    },
                },
                {
                    path: 'contact-us',
                    name: 'Contact',
                    component: () => import('@/pages/Web/contact-us/Index.vue'),
                    meta: {
                        src: require('@/assets/contact.jpg'),
                        layout: 'web',
                        auth: undefined
                    },
                },
                {
                    path: 'pro',
                    name: 'Pro',
                    component: () => import('@/pages/Web/pro/Index.vue'),
                    meta: {
                        src: require('@/assets/pro.jpg'),
                        layout: 'web',
                        auth: undefined
                    },
                },
                {
                    path: '*',
                    name: 'FourOhFour',
                    component: () => import('@/pages/Web/404/Index.vue'),
                    meta: {
                        layout: 'web',
                        auth: undefined
                    }
                },
            ],
        },

    ],
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