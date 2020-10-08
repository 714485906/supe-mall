<template>
<div id="home">
  <!--首页头部-->
  <nav-bar class="VavTitle"><div slot="center">购物街</div></nav-bar>


  <scroll id="aaaa" ref="scroll" :isProbeType="3" :ispullupload="true" @scroll="scrollCoent" @TopPullingUp="moreUp">
    <!--轮播图-->
    <swiper-home :siderimg="banner" class="siderBox"></swiper-home>
    <!--购物推荐-->
    <home-recommend :HomeRecommend="recommend"></home-recommend>
    <!--本周推荐-->
    <homekeywords :Homekeywords="keywords"> </homekeywords>
    <!--分类-->
    <classify-tab :titleList="['流行','新款','精选']"
                  class="isyBox"
                  @tabck="tabck"></classify-tab>

    <goods-list :goods="goods[tabType].list"></goods-list>
  </scroll>

  <top-bscroll @click.native="topBtn" v-show="Isshow"></top-bscroll>




</div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import scroll from '@/components/common/scroll/scroll'
import topBscroll from '@/components/content/topBoscroll/topbscroll'
import classifyTab from '@/components/content/classifyTab/classifyTab'
import goodsList from '@/components/content/goods/goodsList'
import {gethomeMultiata,gethomeData} from '@/network/home'

import swiperHome from '@/views/home/childComps/swiperHome'
import HomeRecommend from '@/views/home/childComps/HomeRecommend'
import Homekeywords from '@/views/home/childComps/Homekeywords'
export default {
name: "home",
  data(){
    return {
      banner:[],
      recommend:[],
      keywords:[],
      goods:{
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      tabType:'pop',
      Isshow:false
    }

  },
  components:{
    NavBar,
    classifyTab,
    goodsList,
    topBscroll,
    swiperHome,
    HomeRecommend,
    Homekeywords,
    scroll

  },
  created() {

   this.gethomeMultiata();
    this.gethomeData('pop')
    this.gethomeData('new')
    this.gethomeData('sell')

  },
  methods:{
    /*
    * 业务逻辑
    * */
    tabck(index){
      console.log(index);
      switch (index){
        case 0:
          this.tabType = 'pop'
              break
        case 1:
          this.tabType = 'new'
              break
        case 2:
          this.tabType = 'sell'
              break
      }
    },

    topBtn(){
        this.$refs.scroll.scroll.scrollTo(0,0,500)
    },
    scrollCoent(postion){
     // console.log(postion);
      this.Isshow = (-postion.y) > 800
    },
    moreUp(){
      this.gethomeData(this.tabType)
    },
    /*
    * 数据请求
    * */
    gethomeMultiata (){
      gethomeMultiata().then( res =>{
        this.banner = res.data.banner.list
        this.recommend = res.data.recommend.list
        this.keywords = res.data.keywords.list
      })
    },

    gethomeData(type){
      const page = this.goods[type].page + 1
      console.log(page)
      gethomeData(type,page).then( res =>{
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1

        //可以进行下载上拉刷新
        this.$refs.scroll.scroll.finishPullUp();
        //加载完之后 重新计算一下高度
        this.$refs.scroll.scroll.refresh()

      })
    }


  }
}
</script>

<style scoped>

#home{
  height: 100vh;
}
.VavTitle{
  width: 100%;
  background: #ff5777;
  color: #fff;
  line-height: 44px;
  font-size:18px;
  font-weight: 600;
}
.siderBox{
 padding-top: 44px;
}

.isyBox{
  position: sticky;
  top: 44px;
  z-index: 1;
  background: #fff;
}
#aaaa{
  position: absolute;
  top: 0px;
  bottom: 65px;
  left: 2%;
  right: 2%;
  overflow: hidden;

}
</style>