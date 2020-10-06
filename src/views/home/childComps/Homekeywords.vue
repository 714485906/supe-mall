<template>
  <div class="recommend">
    <div class="recommend-title">本周推荐</div>

      <div class="recommend-item" v-for="item in Homekeywords" :key="item.title">
        <a>
          <img src="https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png" alt="">
        </a>
        <div>{{item.words}}</div>
      </div>
  </div>
</template>

<script>
export default {
name: "HomeRecommend",
  props:{
    Homekeywords:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommend{
  width: 100%;
  display: flex;
  /*padding:8px 0px 5px;*/
  border-bottom: 8px solid #eee;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;

}
.recommend-item{
  /*flex: 1;*/
width: 25%;
  text-align: center;
  font-size: 12px;
  margin-bottom: 15px;

}
.recommend-item img{
  width: 65px;
  height: 65px;
  margin-bottom: 8px;
}
.recommend-title{
  width: 100%;
  line-height: 44px;
  text-align: center;
  font-size: 16px;
}

</style>