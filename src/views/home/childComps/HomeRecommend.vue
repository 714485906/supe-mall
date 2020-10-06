<template>
  <div class="recommend">
      <div class="recommend-item" v-for="item in HomeRecommend" :key="item.title">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
        <div>{{item.title}}</div>
      </div>
  </div>
</template>

<script>
export default {
name: "HomeRecommend",
  props:{
    HomeRecommend:{
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
  padding:8px 0px 20px;
  border-bottom: 8px solid #eee;
}
.recommend-item{
  flex:1;
  text-align: center;
  font-size: 12px;

}
.recommend-item img{
  width: 70px;
  height: 70px;
  margin-bottom: 8px;

}

</style>