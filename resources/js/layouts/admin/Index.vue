<template>
  <v-app>
    <!-- <home-system-bar /> -->

    <dash-app-bar />

    <dash-view />

    <dash-footer />

    <!-- <home-settings /> -->
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
