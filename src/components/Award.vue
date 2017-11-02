<template>
  <div class="nojoin">
    <div class="no_award">
      <img src="../public/img/z_award_xiaolong.png" alt="">
      您还没有任何奖品！
    </div>
    <ul class="list">
      <li class="list-item">
        <div class="detail">
             <span class="detail-user">
                <span>1</span>
             </span>
          <span class="list_text">
            恭喜您获得 iPhone X！
          </span>
        </div>
        <div class="line"></div>
      </li>
      <li class="list-item">
        <div class="detail">
             <span class="detail-user">
                <span>1</span>
             </span>
          <span class="list_text">
            恭喜您获得 iPhone X！
          </span>
        </div>
        <div class="line"></div>
      </li>
      <li class="list-item">
        <div class="detail">
             <span class="detail-user">
                <span>1</span>
             </span>
          <span class="list_text">
            恭喜您获得 iPhone X！
          </span>
        </div>
        <div class="line"></div>
      </li>
      <li class="list-item">
        <div class="detail">
             <span class="detail-user">
                <span>1</span>
             </span>
          <span class="list_text">
            恭喜您获得 iPhone X！
          </span>
        </div>
        <div class="line"></div>
      </li>
      <li class="list-item">
        <div class="detail">
             <span class="detail-user">
                <span>1</span>
             </span>
          <span class="list_text">
            恭喜您获得 iPhone X！
          </span>
        </div>
        <div class="line"></div>
      </li>
    </ul>
    <div class="btn">
      <span class="left"></span>
      <span class="right"></span>
    </div>
    <p class="award_text">您已获得 <span>0</span> 次抽奖机会，请发起拼团获取更多！</p>
  </div>
</template>

<script>
  import Nostart from './Nostart.vue'
  export default {
    data() {
      return {
      }
    },
    components: {},
    methods: {
      fn(){
        this.$router.push('/listdetail')
      },

    }
  }
</script>

<style scoped lang="less">
  .nojoin{
    position: absolute;
    overflow: scroll;
    top: 2.5rem;
    bottom:1.2rem;
    width:6.7rem;
    background: url("../public/img/z_award_bg.jpg") no-repeat center center;
    background-size:100% 100% ;
    .no_award{
      display: none;
      width: 3.27rem;
      height: 2.55rem;
      margin:2rem auto 0;
      text-align: center;
      line-height: .6rem;
      font-size: .24rem;
      color:#f37793;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .btn{
      margin: .1rem auto 0;
      text-align: center;
      span{
        display: inline-block;
        width: 1.87rem;
        height: .88rem;
        margin: .5rem 0.5rem 0;
      }
      .left{
        background: url("../public/img/z_award_red_btn.png") no-repeat top center;
        background-size: 100% 100%;
      }
      .right{
        background: url("../public/img/z_award_yellow_btn.png") no-repeat top center;
        background-size:100% 100%;
      }

    }
    .award_text{
      font-size: .25rem;
      color:#9d938d;
      text-align: center;
      line-height: .5rem;
      span{
        color:#eb204d;

      }

    }


    .list {
      overflow: hidden;
      display:block;
      width: 6.2rem;
      margin: .7rem auto 0;

      .list-item {
        width: 100%;
        height: 1.4rem;
        overflow: hidden;
        margin-top:2px;
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
          .list_text{
            font-size: .28rem;

            color:#40210a;

          }
        }

        .line {
          margin: .2rem auto 0;
          width: 5.84rem;
          height: 1px;
          background: url("../public/img/z_line.png") no-repeat center center;
        }
      }
    }

  }

</style>

