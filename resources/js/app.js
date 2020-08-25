import 'es6-promise/auto'
import './bootstrap'
import Vue from 'vue'
import vuetify from './plugins/vuetify'
import { store } from './store'

import VueRouter from 'vue-router'
import router from './router'
import './plugins'

import VueAuth from '@websanova/vue-auth'
import auth from './plugins/auth'
import App from './App.vue'

Vue.router = router
Vue.use(VueRouter)
Vue.use(VueAuth, auth)

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App),
}).$mount('#app')
