<template>
  <div>
    <v-app-bar
      id="home-app-bar"
      app
      color="white"
      elevation="1"
    >
      <base-img
        :src="require('@/assets/kemenag-logo.png')"
        class="mr-3 hidden-xs-only"
        contain
        max-width="52"
        width="100%"
      />

      <v-toolbar-title class="text-h4">PTSP-Kalbar</v-toolbar-title>

      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down">
        <!-- UNLOGGED -->
        <v-btn
          text
          v-for="(item, i) in items.unlogged"
          :key="i"
          :to="item.link"
          v-if="!$auth.check()"
        >
          {{item.title}}
        </v-btn>
        <!-- LOGGED -->
        <v-btn
          text
          v-for="(item, i) in items.logged"
          :key="i"
          :to="item.link"
          v-if="$auth.check()"
        >
          {{item.title}}
        </v-btn>
        <!-- logout button -->
        <v-btn
          text
          v-if="$auth.check()"
          @click.prevent="$auth.logout()"
        >
          Logout
        </v-btn>
      </v-toolbar-items>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      />
    </v-app-bar>

    <home-drawer
      v-model="drawer"
      :items="items"
    />
  </div>
</template>

<script>
export default {
  name: 'HomeAppBar',

  components: {
    HomeDrawer: () => import('./Drawer'),
  },
  data: () => ({
    path: '',
    drawer: null,
    items: {
      unlogged: [
        { title: "Beranda", link: '/', menu: '/' },
        { title: "Layanan", link: '/layanan', },
        { title: "Daftar", link: '/register', },
        { title: "Masuk", link: '/login', },
        { title: "Hubungi Kami", link: '/contact-us' },
      ],
      logged: [
        { title: "Beranda", link: '/', menu: '/' },
        { title: "Layanan", link: '/layanan', },
        { title: "Hubungi Kami", link: '/contact-us' },        
        { title: "Dashboard", link: '/dashboard' },
      ]
    },
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
  },
  computed: {
    activeUsers: function () {

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
