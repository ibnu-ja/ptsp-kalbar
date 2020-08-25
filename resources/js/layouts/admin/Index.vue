<template>
  <v-app>
    <dash-app-bar />

    <dash-view />

    <dash-footer />
  </v-app>
</template>

<script>
  export default {
    name: 'DashLayout',

    components: {
      DashAppBar: () => import('@/layouts/admin/AppBar'),
      DashFooter: () => import('@/layouts/admin/Footer'),
      DashView: () => import('@/layouts/admin/View'),
    },
  }
</script>
