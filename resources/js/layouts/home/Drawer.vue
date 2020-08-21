<template>
  <v-navigation-drawer
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
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'HomeDrawer',

    props: {
      items: {
        type: Array,
        default: () => ([]),
      },
    },
  }
</script>
