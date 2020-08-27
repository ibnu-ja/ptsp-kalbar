<script>
  // Extensions
  // import View from '@/pages/Web/View'

  // // Mixins
  // import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Layanan',

    metaInfo: { title: 'Daftar Layanan' },

    // extends: View,

    // mixins: [
    //   LoadSections([
    //     'hero-alt',
    //     'jenis-pelayanan',
    //     // 'theme-features',
    //     // 'affiliates',
    //     // 'newsletter',
    //     // 'pro-features',
    //     // 'info',
    //   ]),
    // ],

    props: {
      id: {
        type: String,
        default: 'about',
      },
    },
  }
</script>
