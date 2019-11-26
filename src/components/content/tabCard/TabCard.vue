<template>
  <div class="tab_card">
    <span v-for="(item,id) in tabTitle" :key="id">
      <a href="" :class="{active: nowIndex===id}" @click.prevent="tabClick(id)">
        {{item}}
      </a>
    </span>
  </div>
</template>
<script>
export default {
  props: {
    tabTitle: {
      type: Array
    }
  },
  data() {
    return {
      nowIndex: 0
    }
  },
  methods: {
    // 点击时tab切换
    tabClick(id) {
      this.nowIndex = id
      // 点击时向外触发事件,并传去id
      this.$emit('tabChange',id)
    }
  }
}
</script>

<style lang='scss' scoped>
@import '@/assets/css/variable.scss';
.tab_card{
  // 两行代码完成吸顶效果。
  position: sticky;
  top: 1rem;
  
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  display: flex;
  justify-content: space-around;
  background: #fff; 
  a{
    padding: .133333rem .266667rem;
  }
}
.active{
  color: $maincolor;
  border-bottom: 2px solid $maincolor;
}
</style>