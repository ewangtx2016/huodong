<template>
    <div>
      <div class="public-btn">
        <div class="icon-home" @click="to_home"></div>
        <div class="icon-explain" @click="lv_show"></div>
      </div>
      <transition name="fade">
        <div class="lv_alert"  v-show="alert">
          <div class="lv_alert_box">
            <Explain @change-v="changeVlue"></Explain>
          </div>
        </div>
      </transition>
    </div>
</template>

<script>
   import Explain from './Explain.vue'
    export default {
        data() {
            return {
              alert:false,
            }
        },
        components: {
          Explain
        },
        methods: {
          lv_show:function(){
            this.alert = true;
          },
          changeVlue:function(value){
            this.alert 	= value;
          },
          to_home(){
            this.$router.push('/')
          }
        }
    }
</script>

<style scoped lang="less">
  .public-btn{
    position: absolute;
    top:.1rem;
    left: 0;
    width: 100%;
    height:.75rem;
    padding: 0 .2rem;
    .icon-home{
      display: inline-block;
      width: .72rem;
      height: .72rem;
      line-height: .72rem;
      background: url("../public/img/z_home-btn.png") no-repeat center ;
      background-size: 100% 100%;
    }
    .icon-explain{
      position:absolute;
      width: 1.44rem;
      height: .4rem;
      top:50%;
      margin-top:-.2rem;
      right:.2rem;
      background: url("../public/img/z_youxiguize-btn.png") no-repeat center center;
      background-size: 100% 100%;
    }
  }
  .lv_alert{
    position: fixed;
    left: 0;
    top:0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
    z-index: 999;
  }
  .fade-enter-active {
    animation: bounce-in .5s;
  }
  .fade-leave-active{
    animation: bounce-in .5s reverse;
  }


  @keyframes bounce-in {
    0% {
      transform: translateY(-100%);
    }
    50% {
      transform: translateY(-20px);
    }
    63% {
      transform: translateY(0);
    }
    70% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
</style>
