<script>
  // Extensions
  import View from '@/pages/Web/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'FourOhFour',

    metaInfo: { title: 'Oops! No Page Found' },

    extends: View,

    mixins: [
      LoadSections([
        '404',
        'newsletter',
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
