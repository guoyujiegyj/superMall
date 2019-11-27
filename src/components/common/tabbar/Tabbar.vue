<!--tabbar组件-->
<template>
  <div class="tabbar_box">
      <slot></slot>
  </div>
</template>
<script>

export default {
  data() {
    return {}
  },
  components: {
   
  }
}
</script>

<style  scoped>
.tabbar_box{
  position:fixed;
  left:0;
  bottom: 0;
  display: flex;
  align-items: center;
  /**tabbar的最大宽度 */
  max-width: 750px;
  width: 100%;
  height:1.2rem;
  background: #f6f6f6;
  box-shadow: 0 -1px 3px rgba(#000 ,.2);
  /**居中 */
  margin-left: 50%;
  transform: translateX(-50%);
  z-index: 100;
}

</style>