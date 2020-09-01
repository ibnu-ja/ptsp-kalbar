import Vue from 'vue'
import Vuetify from 'vuetify'

import id from 'vuetify/es5/locale/id'

Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        dark: false,
        themes: {
            light: {
                primary: '#42a5f6',
                secondary: '#050b1f',
                accent: '#204165',
            },
            dark: {},
        },
    },
    lang: {
        locales: { id },
        current: 'id',
    },
})