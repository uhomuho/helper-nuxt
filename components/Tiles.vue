<script>
import chunk from 'lodash/chunk'

export default {
  name: 'Tiles',
  props: {
    maxPerRow: {
      type: Number,
      default: 5
    }
  },
  render (createElement) {
    if (this.$slots.default && this.$slots.default.length <= this.maxPerRow) {
      return this.renderAncestor(createElement, this.$slots.default)
    } else {
      return createElement('div', { attrs: { 'class': 'is-tiles-wrapper' } }, chunk(this.$slots.default, this.maxPerRow).map((group) => {
        return this.renderAncestor(createElement, group)
      }))
    }
  },
  methods: {
    renderAncestor (createElement, elements) {
      return createElement('div', { attrs: { 'class': 'tile is-ancestor' } }, elements.map((element) => {
        if (element.tag) { return createElement('div', { attrs: { 'class': 'tile is-parent', 'style': 'display: flex; align-items: flex-start; justify-content: center;' } }, [element]) }
        return null
      }))
    }
  }
}
</script>
