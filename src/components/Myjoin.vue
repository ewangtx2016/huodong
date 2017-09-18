<template>
  <div class="nojoin">
    <ul class="list">
      <li class="list-item">
        <div class="detail">
             <span class="detail-user">
               <img src="" alt="">
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
          <span class="fenxiangbtn">

               </span>
        </div>
        <p>
          <span class="username">张三啊asdsad</span>
          <span class="info">还差<span class="info-num">1</span>人，拼团成功为8人！</span>
        </p>
        <div class="line"></div>
      </li>
    </ul>
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
            this.$router.push('/userdetail/mystart')
          }
        }
    }
</script>

<style scoped lang="less">
  .nojoin{
    position: absolute;
    top: 3rem;
    width:6.7rem;
    height:9.7rem ;
    background: url("../public/img/z_bgfaqi.png") no-repeat center center;
    background-size:100% 100% ;
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
            height: .9rem;
            border-radius: 50%;
            border: 1px solid #40210a;
            line-height: .9rem;
            text-align: center;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .detail-info {
            position: relative;
            display: inline-block;
            vertical-align: middle;
            width: 2.27rem;
            height: .9rem;
            margin-left: .1rem;
            .jindutiao {
              margin: 0.43rem auto 0;
              width: 2.29rem;
              height: .35rem;
              border: 1px solid #40210a;
              border-radius: 0.05rem;
              div {
                height: 100%;
                width: 0.287rem;
                background: #eb204d;
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
              /*每次走0.17rem成功后到头*/
              position: absolute;
              display: inline-block;
              width: 0.24rem;
              height: 0.24rem;
              left: .5rem;
              top: .15rem;
              background-position: -2.4rem 0;
            }
          }
          .fenxiangbtn, .chakanbtn {
            display: inline-block;
            vertical-align: middle;
            margin-left: .08rem;
            width: 1.28rem;
            height: 0.7rem;
            background: url("../public/img/z_icon.png") no-repeat;
            background-size: 6rem 6rem;
            font-size: 0;
          }
          .chakanbtn{
            background-position: -1.90rem -1.77rem;
          }
          .fenxiangbtn{
            background-position: 0 -1.77rem;
          }
        }
        p {
          font-size: 0.18rem;
          color: #785e47;
          line-height: .45rem;
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
            vertical-align: middle;text-align: center;

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
