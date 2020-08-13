<template>
  <v-container>
    <v-row>
      <v-col cols="12">
       <h1 id="first"></h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import * as easings from 'vuetify/es5/services/goto/easing-patterns'

export default {
  name: 'SectionScrolling',
  data () {
    return {
      type: 'number',
      number: 9999,
      selector: '#first',
      selections: ['#first', '#second', '#third'],
      selected: 'Button',
      elements: ['Button', 'Radio group'],
      duration: 300,
      offset: 0,
      easing: 'easeInOutCubic',
      easings: Object.keys(easings),
    }
  },
  computed: {
    target () {
      const value = this[this.type]
      if (!isNaN(value)) return Number(value)
      else return value
    },
    options () {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing,
      }
    },
    element () {
      if (this.selected === 'Button') return this.$refs.button
      else if (this.selected === 'Radio group') return this.$refs.radio
    },
  },
}
</script>