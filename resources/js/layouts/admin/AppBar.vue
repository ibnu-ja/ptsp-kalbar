<template>
  <div>
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

    <dash-drawer
      v-model="drawer"
      :items="items"
    />
  </div>
</template>

<script>
export default {
  name: 'DashbAppBar',

  components: {
    DashDrawer: () => import('./Drawer'),
  },
  data: () => ({
    path: '',
    drawer: null,
    items: [
      { icon: 'mdi-home', title: 'PTSP', link: "/" },
      { icon: 'mdi-view-dashboard', title: 'Beranda', link: "/dashboard/beranda" },
      { icon: 'mdi-handshake', title: 'Layanan', link: "/dashboard/layanan" },
      { icon: 'mdi-cog', text: 'Tes3', title: "/tes3" },
    ],
    options: {
      duration: 300,
      easing: 'easeInOutCubic'
    }
  }),
  methods: {
    linkOrScroll: function (item) {
      if (item.link == this.$route.fullPath) {
        this.$vuetify.goTo(item.target, this.options)
      }
      else {
        this.$router.push(item.link)
        if (item.target)
          this.$vuetify.goTo(item.target, this.options)
      }
    }
  }
} 
</script>

<style lang="sass">
#home-app-bar
  .v-tabs-slider
    max-width: 24px
    margin: 0 auto

    .v-tab
      &::before
        display: none
</style>
