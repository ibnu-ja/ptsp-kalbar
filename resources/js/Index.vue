<template>
  <component v-bind:is="layout"></component>
</template>

<script>

const default_layout = 'web'
import Web from './layouts/Web'
import Admin from './layouts/Admin'
import Auth from './layouts/Auth'

export default {
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