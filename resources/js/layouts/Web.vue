<template>
  <v-app id="inspire">
    <loader v-if="showLoader"></loader>
    <router-view></router-view>
  </v-app>
</template>

<script>
import loader from '@components/loader.vue'

export default {
  computed: {
    showLoader () {
      return this.$store.getters.showLoader;
    },
  },
  components: {
    loader
  },
  data () {
    return {
      dialog: false,
      drawer: null,
      items: [
        {
          icon: 'mdi-home', text: 'Pelayanan', menu: [
            { title: 'Click Me' },
            { title: 'Click Me' },
            { title: 'Click Me' },
            { title: 'Click Me 2' },
          ],
        },
        { icon: 'mdi-home', text: 'Antrian Online', link: "/" },
        { icon: 'mdi-history', text: 'Bantuan', link: "/dashboard" },
        { divider: true },
        { icon: 'mdi-content-copy', text: 'Login', link: "/tes2" },
      ],
    }
  },
}
</script>