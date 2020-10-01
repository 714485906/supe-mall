<template>
  <div class="bar-item" @click="activeUrl()">
    <div v-if="!active">
      <slot name="item-img"></slot>
    </div>
    <div v-else>
      <slot name="item-img-active"></slot>
    </div>
    <div :style="activecolor1">
      <slot name="item-text"></slot>
    </div>



  </div>
</template>

<script>
export default {
name: "tabbat-item",
  props:{
    path:String,
    activecolor:{
      type:String,
      beautify:''
    }
  },
  data(){
    return{
     // active:true
    }
  },
  computed:{

    active(){

      return this.$route.path.indexOf(this.path) !== -1

    },
    activecolor1(){

     return this.active ? {color: this.activecolor} :{}

    }

},
  methods:{
    activeUrl() {
      console.log(this.path)
      this.$router.replace(this.path).catch(err =>{console.log(err)})
    }
  }
}
</script>

<style scoped>
.bar-item{
  flex: 1;
  text-align: center;
  font-size: .75rem;

}
.bar-item img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
  margin-bottom: 0px;
}
/*.itemTextActive{*/
/*  color: red;*/
/*}*/
</style>