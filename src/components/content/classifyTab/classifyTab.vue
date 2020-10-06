<template>
  <div class="classifyTab">
    <div class="classify" v-for="(item,index) in titleList"
         :class="{active:index === ifyIndex}"
          @click="ifyClick(index)">
          <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
name: "classifyTab",
  props:{
   titleList:{
     type:Array,
     default() {
       return []
     }
   }
  },
  data(){
    return{
      ifyIndex:0
    }
  },
  methods:{
    ifyClick(index){

      this.ifyIndex = index
      this.$emit('tabck',index);

    }
  }
}
</script>

<style scoped>
.classifyTab{
  display: flex;
  width: 100%;
}
.classify{
  flex: 1;
  text-align: center;
  line-height: 44px;
  font-size: 16px;
}
.active span{
  border-bottom: 4px solid #ff5777;
  padding: 4px 8px;
}
.active{
  color: #ff5777;
}
</style>