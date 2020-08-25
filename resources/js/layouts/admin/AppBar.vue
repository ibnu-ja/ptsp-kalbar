<template>
    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
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
</template>

<script>
export default {
  name: 'DashbAppBar',
} 
</script>
