<template>
    <div class="nojoin">
      <div class="btn" @click="fn"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        components: {},
        methods: {
          fn(){
            this.$router.push('/sign')
          }
        }
    }
</script>

<style scoped lang="less">
.nojoin{
   position: absolute;
   top: 2.5rem;
   width:6.7rem;
   bottom:1.2rem;
   background: url("../public/img/z_nostart.png") no-repeat center center;
   background-size:100% 100% ;
  .btn{
    width:3.3rem;
    height: 1.5rem;
    margin-top:6.5rem;
    margin-left: 1.6rem;
  }
 }
</style>
