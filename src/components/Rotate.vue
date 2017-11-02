<template>
  <div class="lv_rotate">

    <publicbtn></publicbtn>


    <div class="lv_rotitle">您已拥有<div class="playnum">1</div>次抽奖机会，点击立刻抽奖！</div>

      <div class="g-content">
        <div class="g-lottery-case">
          <div class="g-left">

            <div class="g-lottery-box">
              <div class="g-lottery-img">
                <a class="playbtn" href="javascript:;" title="开始抽奖"></a>
              </div>
            </div>
          </div>
        </div>
      </div>






  </div>
</template>

<script>
  import '../public/js/jquery.rotate.min';
  import '../public/js/rotate';
  import publicbtn from './Publicbtn.vue';
  export default {
    data() {
      return {
        close	:	false
      }
    },
    components: {
      publicbtn
    },
    methods: {
      hide:function(){
        this.$emit('change-v',this.close);
      }
    }
  }
</script>

<style scoped>

</style>
