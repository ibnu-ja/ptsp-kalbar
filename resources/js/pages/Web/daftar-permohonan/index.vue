
<script>
// Extensions
import View from '@/pages/Web/View'

// Mixins
import LoadSections from '@/mixins/load-sections'

export default {
  name: 'Home',

  metaInfo: { title: 'Home' },

  extends: View,

  mixins: [
    LoadSections([
      'carousel',
      'proses-pelayanan',
      'contact-us',
      'social-media',
    ]),
  ],

  props: {
    id: {
      type: String,
      default: 'home',
    },
  },
}
</script>
