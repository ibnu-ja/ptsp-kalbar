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
        <v-btn text v-for="(item, i) in items" :key="i" :to="item.link">
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
      <!-- <div>
        <v-tabs
          class="hidden-sm-and-down"
          optional
        >
          <v-tab
            v-for="(item, i) in items"
            :key="i"
            :ripple="false"
            active-class="text--primary"
            class="font-weight-bold"
            min-width="96"
            text
            @click="linkOrScroll(item)"
          >
            {{ item.title }}
          </v-tab>
        </v-tabs>
      </div> -->

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
    items: [
      { title: "Beranda", link: '/', menu: '/' },
      { title: "Perizinan", link: '/perizinan', },
      { title: "Daftar", link: '' },
      { title: "Masuk", link: '' },
      { title: "Hubungi Kami", link: '' },
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
