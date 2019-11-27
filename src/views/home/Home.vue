<template>
  <div class = "wrapper">
    <my-header class="my_header">
      <span slot='middle'>购物街</span>
    </my-header>
      <my-scroll class="contain">
        <!--导入轮播组件，并将轮播图数据传过去-->
        <swiper :banner="banner"></swiper>
        <!--商品推荐,传去数据-->
        <Recommend :recommend="recommend"></Recommend>
        <!--feature部分-->  
        <feature></feature>
        <tab-card :tabTitle="['流行','新款','精选']" @tabChange="tabChange"></tab-card>
        <goods-item :goodsItem='showGoods'></goods-item>
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
      </my-scroll>
  </div>
</template>
<script>
// 数据库请求文件
import { getHomeData, getHomeGoods } from '@/network/home'

import MyHeader from '@/components/content/header/Header'
import Swiper from './swiper/Swiper'
import Recommend from './recommend/Recommend'
import Feature from './feature/Feature'
import TabCard from '@/components/content/tabCard/TabCard'
import GoodsItem from '@/components/content/goods/GoodsItem'
import MyScroll from '@/components/common/scroll/Scroll'

export default {
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: {list: [],page: 0},
        news: {list: [],page: 0},
        sell: {list: [],page: 0}
      },
      // 默认类型时pop
      defaultType: 'pop'
    }
  },
  components: {
    MyHeader,
    Swiper,
    Recommend,
    Feature,
    TabCard,
    GoodsItem,
    MyScroll
  },
  created() {
    // 轮播和推荐
    this.getHomeData()
    // 默认三种商品都请求
    getHomeGoods('pop')
    getHomeGoods('sell')
    getHomeGoods('news')
  },
  methods: {
    // 轮播和推荐的请求
    getHomeData() {
      getHomeData().then(res=>{
        console.log(res)
        this.banner = res.data.data.banner.list
        this.recommend = res.data.data.recommend.list
      })
    },
    // 选项卡商品展示数据请求
    getHomeGoods(type) {
      // 每次请求时携带的page参数应该+1
      const page = this.goods[type].page + 1
      // 这个方法才是和home.js里对应的方法
      getHomeGoods(page,type).then(res=>{
        // 将请求的数据添加到对应类型的数组里
        this.goods[type].list.push(...res.data.list)
        // 数据请求完成，page应该加1
        this.goods[type].page += 1
      })
    },
    // tabcard组件点击事件传来tab的id。根据id切换不同类型。
    tabChange(id) {
      console.log(id)
      switch(id) {
        case 0:
          this.defaultType='pop'
          break
        case 1:
          this.defaultType='sell'
          break
        case 2:
          this.defaultType='news'
          break
      }
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.defaultType].list
    }
  }
}
</script>

<style lang="scss" scoped>
 @import '@/assets/css/variable.scss';
  .wrapper{
    padding-top: 1rem;
    // home 的高度：100%的视口高度。
      height: 100vh;
      overflow: hidden;
  }
  .my_header{
    background: $maincolor;
    color: #fff;
  }
  .contain{
    // css3的计算calc，100%是contain的整体高度，也就是父元素home的高度。
    //应该减去header的高度和tabbar的高度。
    // header的高度和padding-top抵消了，所以不用减。
    height: calc(100% - 1.2rem);
     overflow: hidden;

    // position: absolute;
    // top: 1rem;
    // bottom: 1.2rem;
  }
</style>