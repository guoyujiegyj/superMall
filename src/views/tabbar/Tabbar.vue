<template>
  <!--common里的tabbar组件-->
  <tab-bar>
      <!--common里的tabbaritem组件-->
      <TabbarItem path='/home'>
        <img slot='slot_img' src="@/assets/images/home.png" alt="">
        <img slot='slot_img_active' src="@/assets/images/home_active.png" alt="">
        <div slot='slot_div'>首页</div>
      </TabbarItem>
      <TabbarItem path='/category'>
        <img slot='slot_img' src="@/assets/images/class.png" alt="">
        <img slot='slot_img_active' src="@/assets/images/class_active.png" alt="">
        <div slot='slot_div'>分类</div>
      </TabbarItem>
      <TabbarItem path='/cart'>
        <img slot='slot_img' src="@/assets/images/shopcart.png" alt="">
        <img slot='slot_img_active' src="@/assets/images/shopcart_active.png" alt="">
        <div slot='slot_div'>购物车</div>
      </TabbarItem>
      <TabbarItem path='/profile'>
        <img slot='slot_img' src="@/assets/images/mine.png" alt="">
        <img slot='slot_img_active' src="@/assets/images/mine_active.png" alt="">
        <div slot='slot_div'>我</div>
      </TabbarItem>
    </tab-bar>
</template>
<script>
// 导入tabbar组件。
import TabBar from '@/components/common/tabbar/Tabbar.vue'
import TabbarItem from '@/components/common/tabbar/TabbarItem.vue'
export default {
  data() {
    return {};
  },
  components: {
    TabBar,
    TabbarItem
  }
};
</script>

<style  lang="scss" scoped>
</style>