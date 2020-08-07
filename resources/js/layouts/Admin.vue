<template>
  <v-app id="inspire">
    <Loader v-if="this.$root.showLoader" />
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.text"
          :to="item.link"
          exact
        >
          <v-list-item-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{item.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

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

    <v-content>
      <v-breadcrumbs
        :items="breadCrumbs"
        divider=">"
      >
        <template v-slot:item="props">
          <router-link
            :to="props.item.href"
            v-if="!props.item.disabled"
          >
            <v-breadcrumbs-item :class="[props.item.disabled && 'disabled']">
              {{ props.item.text }}
            </v-breadcrumbs-item>
          </router-link>
          <v-breadcrumbs-item
            :class="[props.item.disabled && 'disabled']"
            v-else
          >
            {{ props.item.text }}
          </v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>
      <!-- <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs> -->
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer
      color="indigo"
      absolute
      inset
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  props: {
    source: String,
  },
  data () {
    return {
      dialog: false,
      drawer: null,
      items: [
        { icon: 'mdi-home', text: 'ExTonan', link: "/" },
        { icon: 'mdi-view-dashboard', text: 'Beranda', link: "/dashboard/beranda" },
        { icon: 'mdi-filmstrip-box-multiple', text: 'Anime', link: "/dashboard/anime" },
        { icon: 'mdi-cog', text: 'Tes3', link: "/tes3" },
      ],
      breadCrumbs: []
    }
  },
  watch: {
    '$route.path': function (id) {
      this.changeBreadCrumbs()
    }
  },
  created () {
    this.changeBreadCrumbs()
  },
  methods: {
    changeBreadCrumbs () {
      let pathArray = this.$route.path.split('/')
      pathArray.shift()
      const breadCrumbs = []
      // needed to handle the intermediary entries for nested vue routes
      let breadcrumb = ''
      let lastIndexFound = 0
      for (let i = 0; i < pathArray.length; ++i) {
        breadcrumb = `${breadcrumb}${'/'}${pathArray[i]}`
        if (this.$route.matched[i] &&
          Object.hasOwnProperty.call(this.$route.matched[i], 'meta') &&
          Object.hasOwnProperty.call(this.$route.matched[i].meta, 'breadCrumb')) {
          breadCrumbs.push({
            href: i !== 0 && pathArray[i - (i - lastIndexFound)]
              ? '/' + pathArray[i - (i - lastIndexFound)] + breadcrumb
              : breadcrumb,
            disabled: i + 1 === pathArray.length,
            text: this.$route.matched[i].meta.breadCrumb || pathArray[i]
          })
          lastIndexFound = i
          breadcrumb = ''
        }
      }
      this.breadCrumbs = breadCrumbs
    }
  }
}
</script>