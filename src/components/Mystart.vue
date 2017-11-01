<template>
  <div class="nojoin">
    <ul class="list">
      <li class="list-item">
        <div class="detail">
             <span class="detail-user">
                <span>1</span>
             </span>
          <div class="detail-info">
            <span class="ku"></span>
            <div class="arrow">
            </div>
            <span class="xiao"></span>
            <div class="jindutiao">
              <div></div>
            </div>
          </div>
          <span class="chakanbtn" @click="fn">

               </span>
        </div>
        <p>
          <span class="info">还差<span class="info-num">1</span>人，拼团成功为8人！</span>
        </p>
        <div class="line"></div>
      </li>
      <li class="list-item">
        <div class="detail">
             <span class="detail-user">
                <span>2</span>
             </span>
          <div class="detail-info">
            <span class="ku"></span>
            <div class="arrow">
            </div>
            <span class="xiao"></span>
            <div class="jindutiao">
              <div></div>
            </div>
          </div>
          <span class="chakanbtn" @click="fn">

               </span>
        </div>
        <p>
          <span class="info">还差<span class="info-num">1</span>人，拼团成功为8人！</span>
        </p>
        <div class="line"></div>
      </li>
      <li class="list-item">
        <div class="detail">
             <span class="detail-user">
                <span>3</span>
             </span>
          <div class="detail-info">
            <span class="ku"></span>
            <div class="arrow">
            </div>
            <span class="xiao"></span>
            <div class="jindutiao">
              <div></div>
            </div>
          </div>
          <span class="chakanbtn" @click="fn">

               </span>
        </div>
        <p>
          <span class="info">还差<span class="info-num">1</span>人，拼团成功为8人！</span>
        </p>
        <div class="line"></div>
      </li>
    </ul>
    <div :class="btnFlag ? 'redBtn':'grayBtn'" @click="isShow" ></div>
  </div>
</template>

<script>
  import Nostart from './Nostart.vue'
  export default {
    data() {
      return {
        num:1,
        btnFlag:true,
      }
    },
    components: {},
    methods: {
      fn(){
        this.$router.push('/listdetail')
      },
      isShow(){
        this.num+=1;
        if(this.num===3){
          this.btnFlag=false
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .nojoin{
    position: absolute;
    top: 2.5rem;
    bottom:1.2rem;
    width:6.7rem;
    background: url("../public/img/z_bgcanyu.png") no-repeat center center;
    background-size:100% 100% ;
    .redBtn{
      width:3.14rem;
      height: 1.1rem;
      background: url("../public/img/z_start-btn-red.png");
      background-size: 100% 100%;
      margin: 0.7rem auto 0;
    }
    .grayBtn{
      width:3.14rem;
      height: 1.1rem;
      background: url("../public/img/z_start-btn-gray.png");
      background-size: 100% 100%;
      margin: 0.7rem auto 0;
    }
    .list {
      width: 6.2rem;
      margin: .8rem auto 0;

      .list-item {
        width: 100%;
        height: 1.8rem;
        overflow: hidden;
        margin-top:1px;
        .detail {
          margin-top: .3rem;
          .detail-user {
            display: inline-block;
            width: .9rem;
            height: .74rem;
            line-height: .74rem;
            text-align: center;
            background: url("../public/img/z_icon.png") no-repeat;
            background-size: 6rem 6rem;
            background-position: -3.84rem -3.22rem;
            vertical-align: middle;
            font-size:0.3rem;
            color:#ffffff;
            span {
              display: block;
              margin:-0.05rem 0 0 -0.12rem;
            }
          }
          .detail-info {
            position: relative;
            display: inline-block;
            vertical-align: middle;
            width: 2.79rem;
            height: .9rem;
            margin-left: .3rem;
            .jindutiao {
              margin: 0.43rem auto 0;
              width: 2.64rem;
              height: .35rem;
              border: 1px solid #40210a;
              border-radius: 0.05rem;
              div {
                height: 100%;
                /*每增加一个人宽度增加0.325rem*/
                width: .325rem;
                background: #eb204d;
                border-right: 1px solid #40210a;
              }
            }
            .xiao, .ku, .arrow {
              background: url("../public/img/z_icon.png") no-repeat;
              background-size: 6rem 6rem;
            }
            .xiao, .ku {
              position: absolute;
              width: .47rem;
              height: .47rem;
              border-color: bisque;
              top: 0.08rem;
            }
            .ku {
              background-position: -0.94rem 0;
            }
            .xiao {
              right: -.05rem;
            }
            .arrow {
              /*每次走0.22rem成功后到头*/
              position: absolute;
              display: inline-block;
              width: 0.24rem;
              height: 0.24rem;
              left: .5rem;
              top: .15rem;
              background-position: -2.4rem 0;
            }
          }
          .chakanbtn {
            display: inline-block;
            vertical-align: middle;
            margin-left: .28rem;
            width: 1.6rem;
            height: 0.78rem;
            background: url("../public/img/z_icon.png") no-repeat;
            background-size: 6rem 6rem;
            font-size: 0;
            background-position: -3.81rem -1.7rem;
          }

        }
        p {
          font-size: 0.19rem;
          color: #785e47;
          line-height: .45rem;
          margin-left: 1.35rem;
          span {
            display: inline-block;

          }
          .username {
            width: 0.95rem;
            color: #40210a;
            margin: 0 .06rem 0 .05rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            vertical-align: middle;
            text-align: center;

          }
          .info{
            .info-num{
              color:#fe4741;
            }
          }
        }
        .line {
          margin: 0 auto;
          width: 5.84rem;
          height: 1px;
          background: url("../public/img/z_line.png") no-repeat center center;
        }
      }
    }

  }
</style>
