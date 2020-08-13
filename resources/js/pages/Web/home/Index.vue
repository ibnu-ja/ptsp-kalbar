
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
      // 'theme-features',
      // 'features',
      'proses-pelayanan',
      'contact-us',
      'affiliates',
      'social-media',
      // 'keep-in-touch',
      // 'newsletter',
      // 'pro-features',
      // 'info',
      // 'scrolling',
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
