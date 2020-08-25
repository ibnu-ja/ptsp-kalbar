<template>
  <v-app>
    <dash-drawer />

    <dash-app-bar />

    <dash-view />

    <dash-footer />
  </v-app>
</template>

<script>
  export default {
    name: 'DashLayout',

    components: {
      DashDrawer: () => import('@/layouts/admin/Drawer'),
      DashAppBar: () => import('@/layouts/admin/AppBar'),
      DashFooter: () => import('@/layouts/admin/Footer'),
      DashView: () => import('@/layouts/admin/View'),
    },
  }
</script>
