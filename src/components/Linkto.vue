<template>
    <div class="nav">
      <router-link to="/userdetail/mystart" v-show="flagStart">
        <div class="nav-start">
          <span>
            <img src="../public/img/z-faqi.png" alt="">
          </span>
        </div>
      </router-link>
     <!-- <router-link to="/userdetail/Nostart"v-show="!flagStart">
        <div class="nav-start">
          <span>
            <img src="../public/img/z-faqi.png" alt="">
          </span>
        </div>
      </router-link>-->
      <router-link class="bj" to="/userdetail/myjoin" v-show="flagJoin">
        <div class="nav-join">
          <span>
            <img src="../public/img/z_canyu.png" alt="">
          </span>
        </div>
      </router-link>
      <!--<router-link to="/userdetail/nojoin" v-show="!flagJoin">
        <div class="nav-join">
          <span>
            <img src="../public/img/z_canyu.png" alt="">
          </span>
        </div>
      </router-link>-->
      <router-link to="/userdetail/award" v-show="flagStart">
        <div class="nav-start">
          <span>
            <img  src="../public/img/z_award.png" alt="">
          </span>
        </div>
      </router-link>
    </div>

</template>

<script>
    export default {
        data() {
            return {

              flagStart:'123',
              flagJoin:'234',
            }
        },
        components: {},
        methods: {
          fn(){
            if(this.flag)this.$router.push('/userdetail/myjoin')
            else {
              this.$router.push('/userdetail/Nojoin')
            }
          }
        }
    }
</script>

<style scoped lang="less">
  .nav{
    margin: 1.8rem auto 0;
   /* width:4.44rem;*/
    height: 1.54rem;
    a{
      display:inline-block;
      border:0.04rem  solid #40210a;
      border-radius:0.17rem;
      width:2.07rem;
      height: 1.45rem;
      span{
        display:block;
        width: 1.77rem;
        height:0.33rem;
        margin:.2rem auto 0;
        img {
          width:100%;
          height: 100%;
        }
      }
    }
    .bj{
      margin:0 0.13rem;
    }
   .router-link-active{
     background: url("../public/img/z_active.png") no-repeat center center;
     background-size: 100% 100%;
     border: none;
   }
  }
</style>
