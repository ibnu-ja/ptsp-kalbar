<template>
  <v-app id="inspire">
    <Loader v-if="this.$root.showLoader" />
    <v-navigation-drawer
      v-model="drawer"
      temporary=""
      bottom
      app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-list-item
            :key="item.text"
            :to="item.link"
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="blue darken-3"
      dark
    >
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="item in items"
          :key="item.text"
          :to="item.link"
          text
        > {{item.text}} </v-btn>
      </v-toolbar-items>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
      ></v-text-field>
      <v-btn icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <router-view></router-view>
      </v-container>
    </v-content>
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
        { icon: 'mdi-home', text: 'Home', link: "/" },
        { icon: 'mdi-history', text: 'Admin', link: "/dashboard" },
        { icon: 'mdi-content-copy', text: 'Tes2', link: "/tes2" },
        { icon: 'mdi-cog', text: 'Tes3', link: "/tes3" },
      ],
    }
  },
}
</script>