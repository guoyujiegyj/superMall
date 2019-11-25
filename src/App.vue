<template>
  <div id="app">
    <!--views/tabbar组件-->
    <tab-bar class="tabbar"></tab-bar>
    <router-view></router-view>
  </div>
</template>
<script>
import TabBar from '@/views/tabbar/Tabbar'
export default {
  data() {
    return {

    }
  },
  components: {
    TabBar
  }
}
</script>
<style lang='scss' scoped>
  @import 'assets/css/base.css';
  
 
</style>
