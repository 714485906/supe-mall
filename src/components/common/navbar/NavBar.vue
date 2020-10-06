<template>
    <div class="nav-bar">
      <div class="left">
        <slot name="left">左</slot>
      </div>
      <div class="center">
        <slot name="center">中</slot>
      </div>
      <div class="right">
        <slot name="right">右</slot>
      </div>
    </div>
</template>

<script>
export default {
name: "NavBar"
}
</script>

<style scoped>
.nav-bar{
  display: flex;
  width: 100%;
  height: 44px;
  text-align: center;
  position: fixed;
  z-index: 1;
}
.nav-bar .left{
  width: 60px;
  height:44px;

  line-height: 44px;
}
.nav-bar .right{
  width: 60px;
  height:44px;

  line-height: 44px;
}

.nav-bar .center{
  flex: 1;
  height:44px;


}
</style>