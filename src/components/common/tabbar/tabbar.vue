<template>
  <div id="tab">
    <slot>
      <tab-bar-item path="/home" activecolor="#ff5777">
        <img slot="item-img" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="item-img-active" src="~assets/img/tabbar/home-active.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/fenlei" activecolor="#ff5777">
        <img slot="item-img" src="~assets/img/tabbar/leimupinleifenleileibie.svg" alt="">
        <img slot="item-img-active" src="~assets/img/tabbar/leimupinleifenleileibie-active.svg"  alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cat" activecolor="#ff5777">
        <img slot="item-img" src="~assets/img/tabbar/gouwuche.svg" alt="">
        <img slot="item-img-active" src="~assets/img/tabbar/gouwuche-active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/wode" activecolor="#ff5777">
        <img slot="item-img" src="~assets/img/tabbar/wode.svg" alt="">
        <img slot="item-img-active" src="~assets/img/tabbar/wode-active.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </slot>
  </div>
</template>

<script>
import TabBarItem from './tabbat-item'
export default {
name: "tabbar",
  components:{
    TabBarItem
  }
}
</script>

<style scoped>
#tab{
  background: #f6f6f6;
  display: flex;
  width: 100%;
  position: fixed;
  left: 0px;
  bottom: 0px;
  height: 50px;
  box-shadow:  1px  -3px 2px rgba(100,100,100,.1);
  z-index: 2;

}

</style>