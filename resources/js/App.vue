<template>
  <component v-bind:is="layout"></component>
</template>

<script>

const default_layout = 'web'
import Web from './layouts/Web'
import Admin from './layouts/Admin'
import Auth from './layouts/Auth'

export default {
  name: 'App',
  metaInfo: {
    title: 'App',
    titleTemplate: '%s | Zero Pro',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  },
  computed: {
    layout () {
      return (this.$route.meta.layout || default_layout) + '-layout';
    }
  },
  components: {
    'web-layout': Web,
    'admin-layout': Admin,
    'auth-layout': Auth,
    // define as many layouts you want for the application
  }
}
</script>