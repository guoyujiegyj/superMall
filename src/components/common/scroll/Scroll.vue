<template>
  <div class="scroll" ref = 'scroll'>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.scroll, {
      
    })
  }
}
</script>

<style lang='scss' scoped>

</style>