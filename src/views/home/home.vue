<template>
<div id="home">
  <nav-bar class="VavTitle">
    <div slot="center">购物街</div>
  </nav-bar>
  <swiper></swiper>
  <h2>首页</h2>
</div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import {gethomeMultiata} from '@/network/home'
import Swiper from '@/components/common/Swiper/swiper'
export default {
name: "home",
  data(){
    return {
      banner:[],
      recommend:[]
    }
  },
  components:{
    NavBar,
    Swiper
  },
  created() {

    gethomeMultiata().then( res =>{
      this.banner = res.data.banner.list
      this.recommend = res.data.recommend.list

    })

  }
}
</script>

<style scoped>
.VavTitle{
  width: 100%;
  background: #ff5777;
  color: #fff;
  line-height: 44px;
  font-size:18px;
  font-weight: 600;
}
</style>