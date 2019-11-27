<template>
  <div class="contain">
    <swiper v-if="banner.length>1" :options="swiperOption">
        <swiper-slide v-for="(item,id) in banner" :key="id" >
            <a href="item.link">
              <img :src="item.image" alt="">
            </a>
          </swiper-slide>
        <!--轮播图的分页，点点点-->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
  </div>
</template>
<script>
export default {
  props: {
    banner: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      // 轮播组件配置。
      swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          // 循环播放
          loop: true,
          // 自动播放
          autoplay: {
            delay: 3000,
          }
        }
    }
  }
}
</script>

<style lang='scss' scoped>
// .contain{
//   width: 100%;
//   max-width: 750px;
// }
// .swiper-container{
//   width: 100%;
//   max-width: 750px;
// }
.swiper-container img{
  width: 100%;
}
</style>