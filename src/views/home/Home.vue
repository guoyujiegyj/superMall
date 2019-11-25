<template>
  <div class = "contain">
    <my-header class="my_header">
      <span slot='middle'>购物街</span>
    </my-header>
    <!--导入轮播组件，并将轮播图数据传过去-->
    <swiper :banner="banner"></swiper>
    <!--商品推荐,传去数据-->
    <Recommend :recommend="recommend"></Recommend>
    <!--feature部分-->  
    <feature></feature>
    <tab-card :tabTitle="['流行','热榜','最新']"></tab-card>
    <ul>
      <li>jack</li>
      <li>jack</li>
      <li>jack</li>
      <li>jack</li>
      <li>jack</li>
      <li>jack</li>
      <li>jack</li>
      <li>jack</li>
      <li>jack</li>
      <li>jack</li>
      <li>jack</li>
      <li>jack</li>
      <li>jack</li>
      <li>jack</li>
      <li>jack</li>
      <li>jack</li>
      <li>jack</li>
      <li>jack</li>
      <li>jack</li>
      <li>jack</li>
      <li>jack</li>
      <li>jack</li>
      <li>jack</li>
      <li>jack</li>
      <li>jack</li>
      <li>jack</li>
      <li>jack</li>
      <li>jack</li>
      <li>jack</li>
      <li>jack</li>
      <li>jack</li>
      <li>jack</li>
      <li>jack</li>
      <li>jack</li>
      <li>jack</li>
      <li>jack</li>
      <li>jack</li>
      <li>jack</li>
      <li>jack</li>
      <li>jack</li>
      <li>jack</li>
      <li>jack</li>
      <li>jack</li>
      <li>jack</li>
      <li>jack</li>
      <li>jack</li>
      <li>jack</li>
      <li>jack</li>
    </ul>
  </div>
</template>
<script>
// 数据库请求文件
import { getHomeData } from '@/network/home'

import MyHeader from '@/components/content/header/Header'
import Swiper from './swiper/Swiper'
import Recommend from './recommend/Recommend'
import Feature from './feature/Feature'
import TabCard from '@/components/content/tabCard/TabCard'

export default {
  data() {
    return {
      banner: [],
      recommend: []
    }
  },
  components: {
    MyHeader,
    Swiper,
    Recommend,
    Feature,
    TabCard
  },
  created() {
    getHomeData().then(res=>{
      console.log(res)
      this.banner = res.data.data.banner.list
      this.recommend = res.data.data.recommend.list
    })
  }
}
</script>

<style lang="scss" scoped>
 @import '@/assets/css/variable.scss';
  .contain{
      padding-top: 1rem;
      
  }
  .my_header{
    background: $maincolor;
    color: #fff;
  }
</style>