<template>
  <div>
    这里输出item具体内容。ssssssssss
    ssssssssssss
    sssssssssssssssss
    ssssssssssssss
  </div>
</template>
<script>
export default {
  // 接受goodsItem传来的参数。
  props: {
    goodsItemList: Array,
    default() {
      return []
    } 
  },
  data() {
    return {}
  }
}
</script>

<style lang='scss' scoped>
</style>