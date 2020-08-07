import 'es6-promise/auto'
import './bootstrap'
import Vue from 'vue'
import { store } from './store'
import Vuetify from 'vuetify'
import VueAuth from '@websanova/vue-auth'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import auth from './auth'
import router from './router'

import vueHeadful from 'vue-headful'
import Loader from './components/Loader'
import fileUpload from './components/file-upload'
import VueMoment from 'vue-moment'
const moment = require('moment')
require('moment/locale/id')

Vue.use(Vuetify)
Vue.router = router
Vue.use(VueRouter)

// Set Vue authentication
Vue.use(VueAxios, axios)
Vue.use(VueAuth, auth)
Vue.use(VueMoment, {
    moment
})

Vue.component('vue-headful', vueHeadful)
Vue.component('Loader', Loader)
Vue.component('file-upload', fileUpload)


$.file_upload = fileUpload;

import Index from './Index'

const app = new Vue({
    el: '#app',
    router,
    store,
    computed: {
        showLoader () {
            return store.getters.showLoader;
        },
    },
    components: { Index },
    template: '<Index />',
    vuetify: new Vuetify(),
});
