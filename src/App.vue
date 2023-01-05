<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
    <router-view v-if="isRouterAlive"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide(){
    return{
      reload:this.reload
    }
  },
  data(){
    return{
      isRouterAlive:true
    }
  },

  methods: {
    reload (){
      this.isRouterAlive = false
      this.$nextTick(function(){
        this.isRouterAlive = true
      })
    }
  }
}
</script>

<style lang="less">
  @import './style/variables';
  @import './style/element-ui';
  @import './style/common';
  @import './style/scrollBar';
</style>

