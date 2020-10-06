<template>
  <div class="goods-List-item">
    <goods-List-item v-for="item in goods" :goodsitem="item" ></goods-List-item>
  </div>
</template>

<script>
import goodsListItem from '@/components/content/goods/goodsListItem'
export default {
name: "goodsList",
  props:{
    goods:{
        type:Array,
        default(){
          return []
        }
    }
  },
  components:{
    goodsListItem
  }
}
</script>

<style scoped>
.goods-List-item{
  width: 96%;
  display: flex;
  flex-wrap: wrap;
  justify-content:space-around;
  margin: 0 auto;
}
</style>