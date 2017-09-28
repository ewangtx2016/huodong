<template>
    <div class="content">
      <Publicbtn>
      </Publicbtn>
      <div class="content-bg">
        <div class="user-detail">
          <Linkto></Linkto>
          <router-view></router-view>
        </div>
      </div>
    </div>
</template>7

<script>
  import Publicbtn from './Publicbtn.vue'
  import Linkto from '@/components/Linkto'
    export default {
        data() {
            return {}
        },
        components: {
          Linkto,
          Publicbtn
        },
        methods: {}
    }
</script>

<style scoped lang="less">
  .content {
    width:100%;
    height: 100%;
    background: url("../public/img/lv_bak.jpg") no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
    padding: 0.28rem 0;
    .content-bg{
      width: 100%;
      height: 100% ;
      background: url("../public/img/z_userbg.png") no-repeat;
      background-size:100% 100%;
      padding:0 0.44rem 0.48rem;
      .user-detail{
        overflow: hidden;
      }
    }
  }

</style>
