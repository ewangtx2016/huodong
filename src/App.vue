<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import './public/js/public'
export default {
  name: 'app'
}
</script>

<style lang="less">
  @import './public/less/public.less';
  body{
    font-size: 0.16rem;
  }
</style>
