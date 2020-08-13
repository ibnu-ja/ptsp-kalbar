<script>
  // Extensions
  import View from '@/pages/Web/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Pro',

    metaInfo: { title: 'Pro Features' },

    extends: View,

    mixins: [
      LoadSections([
        'hero-alt',
        'pro-features',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'pro',
      },
    },
  }
</script>
