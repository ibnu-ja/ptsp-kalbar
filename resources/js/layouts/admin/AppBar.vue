<template>
    <div>
      <dash-drawer v-model="drawer" />

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        link
        @click.prevent="$auth.logout()"
      >
        logout
        <v-icon right>mdi-account-arrow-right</v-icon>
      </v-btn>
    </v-app-bar>
    </div>
</template>

<script>
export default {
  name: 'DashbAppBar',
  components: {    
      DashDrawer: () => import('@/layouts/admin/Drawer'),
  },
  data() {
    return {
      drawer: null
    }
  }
} 
</script>
