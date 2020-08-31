// Imports
import Vue from 'vue'
import { store } from '../store'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    // base: process.env.BASE_URL,
    // scrollBehavior: (to, from, savedPosition) => {
    //     if (to.hash) return { selector: to.hash }
    //     if (savedPosition) return savedPosition

    //     return { x: 0, y: 0 }
    // },
    routes: [
        // {
        //     path: '/',
        //     component: () => import('@/layouts/home/Index.vue'),
        //     children: [
        {
            path: '/',
            name: 'Home',
            component: () => import('@/pages/Web/home/Index.vue'),
            meta: {
                layout: 'web',
                auth: undefined
            }
        },
        // {
        //     path: '/can-tampil',
        //     name: 'can tampil',
        //     component: () => import('@/pages/Home/Index.vue'),
        //     // beforeEnter (to, from, next) {
        //     //     if (!can('disposisasdasda')) {
        //     //         next('/404');
        //     //     } else {
        //     //         next();
        //     //     }
        //     // },
        //     meta: {
        //         layout: 'web',
        //         auth: undefined
        //     }
        // },
        {
            path: '/layanan',
            name: 'Daftar Layanan',
            component: () => import('@/pages/Web/layanan/Index.vue'),
            children: [
                // {
                //     path: '/',
                // },
                {
                    path: 'daftar',
                    name: 'Daftar orderan',
                    component: () => import('@/pages/Web/layanan/permohonan.vue'),
                    meta: {
                        auth: true,
                        layout: 'admin',
                        // breadCrumb: 'Beranda'
                    }
                },
            ]
            // meta: {
            //     src: require('@/assets/about.jpg'),
            //     layout: 'web',
            //     auth: undefined
            // },
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('@/pages/Register.vue'),
            meta: {
                layout: 'auth',
                auth: false
            }
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/pages/Login.vue'),
            meta: {
                layout: 'auth',
                auth: false
            }
        },
        {
            path: '/dashboard',
            component: () => import('@/pages/Dashboard/Index.vue'),
            meta: { breadCrumb: 'Dashboard' },
            children: [
                {
                    path: '/',
                    redirect: 'beranda'
                },
                {
                    path: 'beranda',
                    name: 'dashboard.home',
                    component: () => import('@/pages/Dashboard/Home.vue'),
                    meta: {
                        auth: true,
                        layout: 'admin',
                        breadCrumb: 'Beranda'
                    }
                },
                {
                    path: 'orderan',
                    name: 'dashboard.orderan',
                    meta: { breadCrumb: 'Orderan' },
                    component: () => import('@/pages/Dashboard/orderan/Index.vue'),
                    children: [
                        {
                            path: '/',
                            redirect: 'list'
                        },
                        {
                            path: 'list',
                            name: 'dashboard.orderan.list',
                            component: () => import('@/pages/Dashboard/orderan/List.vue'),
                            meta: {
                                layout: 'admin',
                                auth: true,
                                breadCrumb: 'List'
                            }
                        },
                        {
                            path: 'tambah',
                            name: 'dashboard.orderan.tambah',
                            component: () => import('@/pages/Dashboard/orderan/FormAdd.vue'),
                            meta: {
                                layout: 'admin',
                                auth: true,
                                breadCrumb: 'List'
                            }
                        },
                        {
                            path: ':id/edit',
                            name: 'dashboard.orderan.edit',
                            component: () => import('@/pages/Dashboard/orderan/FormEdit.vue'),
                            meta: {
                                layout: 'admin',
                                auth: true,
                                breadCrumb: 'Edit'
                            }
                        },
                    ]
                },
                {
                    path: 'layanan',
                    name: 'dashboard.layanan',
                    meta: { breadCrumb: 'Layanan' },
                    component: () => import('@/pages/Dashboard/layanan/Index.vue'),
                    children: [
                        {
                            path: '/',
                            redirect: 'list'
                        },
                        {                           
                            path: 'list',
                            name: 'dashboard.layanan.list',
                            component: () => import('@/pages/Dashboard/layanan/List.vue'),
                            meta: {
                                layout: 'admin',
                                auth: true,
                                breadCrumb: 'List'
                            }
                        },
                        {
                            path: 'tambah',
                            name: 'dashboard.layanan.tambah',
                            component: () => import('@/pages/Dashboard/layanan/FormAdd.vue'),
                            meta: {
                                layout: 'admin',
                                auth: true,
                                breadCrumb: 'Tambah'
                            }
                        },
                        {
                            path: ':id/edit',
                            name: 'dashboard.layanan.edit',
                            component: () => import('@/pages/Dashboard/layanan/FormEdit.vue'),
                            meta: {
                                layout: 'admin',
                                auth: true,
                                breadCrumb: 'Edit'
                            }
                        },
                    ]
                },
            ]
        },
        {
            path: '/*',
            name: 'FourOhFour',
            component: () => import('@/pages/Web/404/Index.vue'),
            meta: {
                layout: 'web',
                auth: undefined
            }
        },
    ],
    // },

    // ],
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