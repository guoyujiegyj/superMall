<template>
  <div class="tabbar_item" @click="routeLink">
    <!--slot用来接收app.vue传来的元素,图片和文字-->
    <slot v-if="!isActive" name='slot_img'></slot>
    <slot v-else name='slot_img_active'></slot>
    <div :class="{active: isActive}">
      <!--slot不能设置样式，因为会被替换，所以为其包裹div，然后写样式。-->
      <slot name='slot_div'></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    path: String
  },
  data() {
    return {
    }
  },
  computed: {
    isActive() {
      return this.$route.path===this.path?true:false
    }
  },
  methods: {
    routeLink() {
      this.$router.push(this.path)
    }
  }
}
</script>

<style lang='scss'  scoped>
@import '@/assets/css/variable.scss';
.tabbar_item{
  flex: 1;
  text-align: center;
}
.tabbar_item img{
  margin:2px 0;
  width:.32rem;
  height:.32rem;
  vertical-align: middle;
}
.active{
  color: hotpink;
}
</style>