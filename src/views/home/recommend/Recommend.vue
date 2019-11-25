<template>
  <div class="recommend">
    <div v-for="(item,id) in recommend" :key="id" class="recommend_item">
      <a href="item.link" >
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  // 商品推荐的数据
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang='scss' scoped>
.recommend{
  display: flex;
  margin-top: .16rem;
  border-bottom: 8px solid #eee;
  padding-bottom: .266667rem;
  //width: 100%;
  .recommend_item{
    flex: 1;
    text-align: center;
    img{
      width: 2.2rem;
      margin-bottom: .106667rem;
    }
  }
}

</style>