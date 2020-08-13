import 'es6-promise/auto'
import './bootstrap'
import Vue from 'vue'
import vuetify from './plugins/vuetify'
import { store } from './store'
import router from './router'
import './plugins'

import App from './App.vue'

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App),
}).$mount('#app')
