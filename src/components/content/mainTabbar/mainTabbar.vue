<template>
  <div>
    <router-view></router-view>
    <tab-bar></tab-bar>
  </div>
</template>
<script>
import TabBar from "components/common/tabbar/tabbar";
export default {
  name:"App",
  components:{
    TabBar
  }
}
</script>

<style>

</style>