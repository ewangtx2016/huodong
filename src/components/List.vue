<template>
    <div class="content">
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
               <span class="zhulibtn" @click="tishi">
                 <img src="../public/img/z_zhulibtn.png" alt="">
               </span>
               <span class="fenxiangbtn">
                 <img src="../public/img/z_fenxiangbtn.png" alt="">
               </span>
           </div>
           <p>
             <span class="username">张三啊asdsad</span>
             <span class="info">还差<span class="info-num">1</span>人，拼团成功为8人！</span>
           </p>
           <div class="line"></div>
         </li>
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
             <span class="zhulibtn" @click="tishi">
                 <img src="../public/img/z_zhulibtn.png" alt="">
               </span>
             <span class="fenxiangbtn">
                 <img src="../public/img/z_fenxiangbtn.png" alt="">
               </span>
           </div>
           <p>
             <span class="username">张三啊asdsad</span>
             <span class="info">还差<span class="info-num">1</span>人，拼团成功为8人！</span>
           </p>
           <div class="line"></div>
         </li>
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
             <span class="zhulibtn" @click="tishi">
                 <img src="../public/img/z_zhulibtn.png" alt="">
               </span>
             <span class="fenxiangbtn">
                 <img src="../public/img/z_fenxiangbtn.png" alt="">
               </span>
           </div>
           <p>
             <span class="username">张三啊asdsad</span>
             <span class="info">还差<span class="info-num">1</span>人，拼团成功为8人！</span>
           </p>
           <div class="line"></div>
         </li>
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
             <span class="zhulibtn" @click="tishi">
                 <img src="../public/img/z_zhulibtn.png" alt="">
               </span>
             <span class="fenxiangbtn">
                 <img src="../public/img/z_fenxiangbtn.png" alt="">
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
        components: {

        },
        methods: {
          tishi(){
            if(confirm('亲！只能助力一次哦，选个人数最多的去助力吧！')){
              this.$router.push('/userdetail/myjoin')
            }
          }
        }
    }
</script>

<style scoped lang="less">
  .content {
    width: 100%;
    height: 100%;
    background: url("../public/img/z_zhuli.jpg") no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
    .list {
      width: 6.11rem;
      margin: 3rem auto 0;
      height: 7.5rem;
      overflow: auto;

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
            width: 2.42rem;
            height: .9rem;
            margin-left: .2rem;
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
              right: 0;
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
          .fenxiangbtn, .zhulibtn {
            display: inline-block;
            margin-left: .10rem;
            width: 1.07rem;
            height: 0.98rem;
            line-height: 1.07rem;
            text-align: center;
            vertical-align: middle;
            font-size: 0;
            img {
              width: 100%;
              height: 100%;
            }
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
            margin: 0 .06rem 0 .18rem;
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
