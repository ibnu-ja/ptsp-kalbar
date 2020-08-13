<script>
  // Extensions
  import View from '@/pages/Web/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Perizinan',

    metaInfo: { title: 'Layanan Perizinan' },

    extends: View,

    mixins: [
      LoadSections([
        'hero-alt',
        'proses-pelayanan',
        'theme-features',
        'affiliates',
        'newsletter',
        'pro-features',
        'info',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'about',
      },
    },
  }
</script>
