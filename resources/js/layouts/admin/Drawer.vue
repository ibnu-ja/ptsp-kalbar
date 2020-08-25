<template>
  <!-- <v-navigation-drawer
    fixed
    temporary
    v-bind="$attrs"
    v-on="$listeners"
  >
    <v-list
      color="white"
    >
      <v-list-item
        v-for="(name, i) in items"
        :key="i"
        :to="name.link"
        :exact="name === 'Home'"
        color="primary"
      >
        <v-list-item-content>
          <v-list-item-title v-text="name.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer> -->
  <v-navigation-drawer
    v-model="drawer"
    app
  >
    <v-list dense>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.link"
        exact
      >
        <v-list-item-action>
          <v-icon>{{item.icon}}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{item.title}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'DashDrawer',
  data() {
    return {
      drawer: null
    }
  },
  props: {
    items: {
      type: Array,
      default: () => ([]),
    },
  },
}
</script>
