<template>
  <div class="goodItemBox">
    <img :src="goodsitem.show.img" alt="">
    <p>{{goodsitem.title}}</p>
    <span class="price">￥{{goodsitem.price}}</span>
    <span class="cfav">{{goodsitem.cfav}}</span>
  </div>
</template>

<script>
export default {
name: "goodsList-item",
  props:{
    goodsitem:{
      type:Object,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.goodItemBox{
  width: 48%;
  position: relative;


}
.goodItemBox img{
  width: 100%;
}
.goodItemBox p{
  line-height: 14px;
  bottom: 0px;
  overflow:hidden;
  text-overflow:ellipsis;
  display:-webkit-box;
  -webkit-line-clamp:2;
  -webkit-box-orient:vertical;
  font-size: 12px;
  margin-top: 6px;
}
.price{
  font-size: 16px;
  color: #ff5777;
}
.cfav{
  text-align: right;
  font-size: 12px;
  color: #999999;
  float: right;
  padding-right: 10px;

}
</style>