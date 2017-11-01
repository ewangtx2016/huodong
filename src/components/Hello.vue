<template>
<div class="lv_box_fa">


  <!--c7-->
  <a href="javascript:;" class="lv_d1" @click="lv_show(0)">
    <div>
      <img class="d_1" src="../public/img/lv_dbox.png" alt="" />
      <img class="d_2" src="../public/img/lv_dxia.png" />
    </div>
  </a>

  <a href="javascript:;" class="lv_d2" @click="lv_show(1)">
    <div>
      <img class="d_1" src="../public/img/lv_hdbox.png" alt="" />
      <img class="d_2" src="../public/img/lv_hdboxxia.png" />
    </div>
  </a>



  <!--c8-->
  <router-link to="/sign">
    <div class="lv_but_l">
      <div class="boxx">
        <img class="but_img" src="../public/img/bun_left.png" />
        <img class="but_img1" src="../public/img/lv_but_yun1.png" />
        <img class="but_img2" src="../public/img/lv_but_yun2.png" />
      </div>
    </div>
  </router-link>


  <router-link to="/list">
    <div class="lv_but_2">
      <div class="boxx">
        <img class="but_img" src="../public/img/bun_right.png" />
        <img class="but_img1" src="../public/img/lv_but_shou1.png" />
        <img class="but_img2" src="../public/img/lv_but_shou2.png" />
      </div>
    </div>
  </router-link>



  <div class="lv_box">
  	<!--c1-->
      <div class="lv_guang"></div>
      <div class="lv_moon"></div>
    <!--c2-->
    	<div class="yun1"></div>
    	<div class="yun2"></div>
    	<div class="yun3"></div>
    <!--c3-->
    	<div class="lv_tu"></div>
    	<div class="lv_gong"></div>
    	<div class="lv_tu_di"></div>
    	<div class="lv_fj"></div>
    	<div class="lv_tt"></div>

    	<!--c4-->
    	<div class="lv_change">
    		<img src="../public/img/hutong.png" />
    	</div>
    	<div class="lv_tuzi"></div>

    	<!--c5-->
    	<div class="lv_qian"></div>
    	<div class="lv_qian2"></div>

    	<!--c6-->

    	<div class="lv_tibg"></div>

    	<div class="lv_title"></div>
    	<div class="lv_title1"></div>

    	<div class="lv_qiu"></div>


</div>


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
