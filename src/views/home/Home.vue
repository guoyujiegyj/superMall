<template>
  <div class = "contain">
    <my-header class="my_header">
      <span slot='middle'>购物街</span>
    </my-header>
    <div class="jack">jak</div>
  </div>
</template>
<script>
import MyHeader from '@/components/content/header/Header'
export default {
  data() {
    return {};
  },
  components: {
    MyHeader
  }
};
</script>

<style lang="scss" scoped>
 @import '@/assets/css/variable.scss';
  .my_header{
    background: $maincolor;
    color: #fff;
    //width: 10rem;
  }
  .jack{
    width: 75px;
    height: 75px;
    background: red;
  }

 
</style>