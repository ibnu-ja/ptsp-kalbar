<template>
  <v-main>
    <v-fade-transition mode="out-in">
      <div>
        <dash-breadcrumb />
        <router-view />
      </div>
    </v-fade-transition>
  </v-main>
</template>

<script>
export default {
  name: 'DashBaseView',
  components: {
    DashBreadcrumb: () => import('./Breadcrumb'),
  }
}
</script>
