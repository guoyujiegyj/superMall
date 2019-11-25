<template>
  <div class="header">
    <slot name="left"></slot>
    <slot name="middle"></slot>
    <slot name="right"></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang='scss' scoped>
.header{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  max-width: 750px;
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  /**居中 */
  margin-left: 50%;
  transform: translateX(-50%)
}
</style>