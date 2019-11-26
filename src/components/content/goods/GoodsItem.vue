<!--此组件时选项卡商品展示父组件-->
<template>
  <div>
    <!-- <goods-item-list v-for="(item,id) in goodsItem" :key="id" :goodsItemList='item'>

    </goods-item-list> -->
    <goods-item-list></goods-item-list>
  </div>
</template>
<script>
import GoodsItemList from './GoodsItemList'
export default {
  // 接受home传来的数据
  props: {
    goodsItem: Array,
    default() {
      return []
    }
  },
  data() {
    return {
      
    }
  },
  components: {
    GoodsItemList
  }
}
</script>

<style lang='scss' scoped>
</style>