<template>
  <div class="wrapper" ref="scroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BetterScroll from '@better-scroll/core'
import PullUp from '@better-scroll/pull-up'
BetterScroll.use(PullUp)
export default {
name: "scroll",
  data(){
    return{
      scroll:null
    }
  },
  props:{
    isProbeType:{
      type:Number,
      default:0
    },
    ispullupload:{
       type:Boolean,
        default: false
    }
  },
  mounted() {
    setTimeout(()=>{
      //1.创建scroll
      this.scroll = new BetterScroll(this.$refs.scroll, {
        probeType: this.isPullUpLoad,
        click:true,
        pullUpLoad:this.ispullupload
      })

      //2.监听scroll的位置
      this.scroll.on('scroll', (postion) => {
      //  console.log(postion)
        this.$emit('scroll',postion)
      })

      //监听上拉事件
      this.scroll.on('pullingUp',()=>{

        this.$emit("TopPullingUp")
        //this.scroll.finishPullUp()
        // this.scroll.refresh()
      })

    },500);

  }

}
</script>


<style scoped>

</style>