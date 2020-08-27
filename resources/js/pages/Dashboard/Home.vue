<template>
  <div class="component-wrap">
    <div class="">
      {{$auth.check({permissions: ['add layanan']})}}
      <!-- {{this.$auth.user().permission}} -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Beranda',
  data () {
    return {
    }
  },
  methods: {    
  },
  mounted () {
    // getUser()
    // console.log('asdasd')
  }
}
</script>