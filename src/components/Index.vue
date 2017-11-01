<template>

  <div class="db_box">
    <img class="db_img db_qiu1 animated bounceInDown" style="animation-delay:0.2s;" src="../public/img/db/db_qiu.png" alt="">
    <img class="db_img db_hj  animated bounceInDown" style="animation-delay:0.3s;" src="../public/img/db/db_hj.png" alt="">

    <img class="db_img db_fc animated bounceInDown"  style="animation-delay:0.4s;" src="../public/img/db/db_chuan.png" alt="">

    <img class="db_img db_xfc animated bounceInDown"  style="animation-delay:0.5s;" src="../public/img/db/db_fc.png" alt="">




    <img class="db_img db_juan  animated bounceInDown"  style="animation-delay:0.6s;" src="../public/img/db/db_juan.png" alt="">

    <img class="db_img db_mu_1  animated bounceInDown"  style="animation-delay:0.6s;" src="../public/img/db/db_mu_1.png" alt="">

    <img class="db_img db_mu_2  animated bounceInDown"  style="animation-delay:0.6s;" src="../public/img/db/db_mu_2.png" alt="">

    <img class="db_img db_music  animated bounceInDown"  style="animation-delay:0.8s;" src="../public/img/db/db_music.png" alt="">

    <img class="db_img db_qiu2  animated bounceInDown"  style="animation-delay:0.8s;" src="../public/img/db/db_qiu2.png" alt="">

    <img class="db_img db_xiao  animated bounceInDown"  style="animation-delay:0.8s;" src="../public/img/db/db_xiao.png" alt="">

    <img class="db_img db_yun  animated bounceInDown"   src="../public/img/db/yun.png" alt="">


    <img class="db_img db_ti  animated bounceInDown"  style="animation-delay:1s;" src="../public/img/db/db_ti.png" alt="">

    <img class="db_img db_watch  animated bounceInDown"  style="animation-delay:1s;" src="../public/img/db/db_watch.png" alt="">


    <img class="db_img db_x  animated bounceInDown"  style="animation-delay:1.2s;" src="../public/img/db/db_x.png" alt="">

    <img class="db_img db_xx  animated bounceInDown"  style="animation-delay:1.2s;" src="../public/img/db/db_xx.png" alt="">

    <img class="db_img db_yun2  animated bounceInDown"  style="animation-delay:1.2s;" src="../public/img/db/db_yun2.png" alt="">

    <img class="db_img db_zbg  animated bounceInDown"   style="animation-delay:1.4s;" src="../public/img/db/db_zbg.png" alt="">

    <img class="db_img db_zui  animated bounceInDown"  style="animation-delay:1.4s;" src="../public/img/db/db_zui.png" alt="">

    <img class="db_img db_text  animated bounceInDown" style="animation-delay:1.4s;" src="../public/img/db/db_text.png" alt="">

    <img class="db_img db_dj animated zoomInUp" style="animation-delay:1.6s;" src="../public/img/db/db_die.png" alt="">




    <router-link to="/sign"><a class="db_img db_but_l  animated bounceInLeft" style="animation-delay:2s;" href="javascript:void(0)"><img src="../public/img/db/bun_left.png"  ></a></router-link>

    <router-link to="/list"><a class="db_img db_but_r  animated bounceInRight" style="animation-delay:2s;" href="javascript:void(0)"><img src="../public/img/db/bun_right.png"  ></a></router-link>



    <a href="javascript:void(0)"   style="animation-delay:1.6s;" class="db_cj_a db_img db_cj animated bounceInUp"><img class="db_cj_img"   src="../public/img/db/db_hand.png" alt=""></a>



    <div class="db_cd"></div>
    <div class="db_cd db_cdr"></div>


    <!--c7-->
    <a href="javascript:;" class="db_img db_m1" @click="lv_show(0)">
        <img src="../public/img/db/db_home.png"  />
    </a>

    <a href="javascript:;" class="db_img db_m2" @click="lv_show(1)">
        活动规则
    </a>



    <!--alert-->
    <transition name="fade">
      <div class="lv_alert"  v-show="alert">
        <div class="lv_alert_box">
          <login v-if="exp==0" @change-v="changeVlue"></login>
          <explain v-else-if="exp==1" @change-v="changeVlue"></explain>
        </div>
      </div>
    </transition>



  </div>







</template>

<script>
  import explain from './Explain.vue'
  import login   from './Login.vue'
  export default {
    data () {
      return {
        alert:false,
        exp:0
      }
    },
    methods:{
      lv_show:function(index){
        this.alert = true;
        this.exp = index;
      },
      changeVlue:function(value){
        this.alert 	= value;
      }
    },
    components:{
      explain,
      login
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .fade-enter-active {
    animation: bounce-in .5s;
  }
  .fade-leave-active{
    animation: bounce-in .5s reverse;
  }


  @keyframes bounce-in {
    0% {
      transform: translateY(-100%) translateZ(1000px);
    }
    50% {
      transform: translateY(-20px) translateZ(1000px);
    }
    63% {
      transform: translateY(0) translateZ(1000px);
    }
    70% {
      transform: translateY(-10px) translateZ(1000px);
    }
    100% {
      transform: translateY(0px) translateZ(1000px);
    }
  }

  .lv_alert{
    background: rgba(0,0,0,0.5);
    transform: translateZ(2000px);
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
  }
</style>
