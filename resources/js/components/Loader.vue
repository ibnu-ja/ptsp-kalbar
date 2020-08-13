<template>
  <div>
    <v-progress-linear
      style="z-index: 103"
      indeterminate
      absolute
      top
    ></v-progress-linear>
    <v-overlay
      :value="80"
      style="z-index: 102"
    > 
       <v-progress-circular
        style="z-index: 103"
        :size="70"
        :width="7"
        color="white"
        indeterminate
      ></v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>
export default {
  name: 'loader',
}
</script>

<style></style>