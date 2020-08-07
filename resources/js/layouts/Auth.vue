<template>
  <v-app id="inspire">
    <v-progress-linear
      v-if="this.$root.showLoader"
      style="z-index: 103"
      indeterminate
      absolute
      top
      v-bind:class="{ loader: true }"
    ></v-progress-linear>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>