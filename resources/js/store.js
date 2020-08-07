'use strict'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        //loader
        showLoader: false,
        // breadcrumbs
        // breadcrumbs: [],
        // layout: 'admin-layout'
    },
    mutations: {
        // SET_LAYOUT (state, payload) {
        //     state.layout = payload
        // }
        showLoader(state) {
            state.showLoader = true
        },
        hideLoader(state) {
            state.showLoader = false
        },
        // breadcrumbs
        // setBreadcrumbs(state, items) {
        //     items.unshift({label:'Home',to:{name:'dashboard'}});
        //     state.breadcrumbs = items;
        // },
    },
    getters: {
        // layout (state) {
        //     return state.layout
        // }
        showLoader: state => {
            return state.showLoader
        },
        // get breadcrumbs
        // getBreadcrumbs: state => {
        //     return state.breadcrumbs
        // },
    }
})