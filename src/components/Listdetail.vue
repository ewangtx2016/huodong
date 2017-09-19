<template>
    <div class="content">
      <Publicbtn></Publicbtn>
        <div class="content-box">
          <div class="header">
           <div class="header-box1"></div>
           <div class="header-box2">
             <img src="" alt="">
           </div>
           <p>张三ljl</p>
           <div class="header-box3"></div>
          </div>
          <div class="mid">
            <p>还差<span>1</span>成团！</p>
            <ul>
              <li><img src="" alt=""></li>
              <li><img src="" alt=""></li>
              <li><img src="" alt=""></li>
              <li><img src="" alt=""></li>
              <li><img src="" alt=""></li>
              <li><img src="" alt=""></li>
              <li><img src="" alt=""></li>
              <li><img src="" alt=""></li>
            </ul>
          </div>
          <div class="footer">
            <div class="zhili-btn"></div>
            <div class="fengxiang-btn"></div>
          </div>
        </div>
    </div>
</template>

<script>
  import Publicbtn from './Publicbtn.vue'
    export default {
        data() {
            return {}
        },
        components: {
          Publicbtn
        },
        methods: {}
    }
</script>

<style scoped lang="less">
  .content{
    width: 100%;
    height: 100%;
    background: url("../public/img/z_zhuli.jpg") no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
    padding: 2.6rem 1.4rem 1.38rem;
    .content-box{
      width:100%;
      height:1.64rem;
      .header{
        width:100%;
        height: 2.9rem;
        margin:0 auto;
        .header-box1,.header-box3{
          width:3.16rem;
          height: .6rem;
          margin: 0 auto;

        }
        .header-box1{

          background: url("../public/img/z_zlxq-faqi.png") no-repeat center center;
          background-size:100% 100%;
        }
        .header-box3{
          background: url("../public/img/z_zlxq-tuanyuan.png") no-repeat center center;
          background-size:100% 100%;
        }
        .header-box2 {
          margin:0.2rem auto 0;
          width: .9rem;
          height: .9rem;
          border-radius: 50%;
          border: 1px solid #40210a;
          line-height: .9rem;
          text-align: center;
          background: url("../public/img/z_zlxq-renyuan-bg.png") no-repeat ;
          background-size:100% 100%;
          img {
            width: 100%;
            height: 100%;
          }
        }
        p{
          text-align:center;
          font-size: .2rem;
          color:#40210a;
          line-height: .6rem;
        }
      }
      .mid{
        margin-top:.39rem;
        width:100%;
        height: 2.66rem;
        border:1px solid #40210a;
        background: #fdedd5;
        p{
          font-size: .2rem;
          color:#40210a;
          margin-left:0.62rem;
          line-height: .5rem;
          span{
            color:#fa4438;
          }
        }
        ul{
          display: flex;
          -webkit-flex-wrap: wrap;
          li{
            margin-left:0.22rem;
            margin-bottom: .2rem;
            width: .9rem;
            height: .9rem;
            border-radius: 50%;
            border: 1px solid #40210a;
            background: url("../public/img/z_zlxq-renyuan-bg.png") no-repeat ;
            background-size:100% 100%;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
      .footer{
        width:100%;
        height: 100%;
        margin-top:.2rem ;
        .zhili-btn{
          display: inline-block;
          width:1.81rem;
          height: 1.64rem;
          background: url("../public/img/z_zlxq-zhulibtn.png") no-repeat center center;
          background-size: 100% 100%;
        }
        .fengxiang-btn{
          display: inline-block;
          margin-left: .76rem;
          width: 1.94rem;
          height: 1.64rem;
          background: url("../public/img/z_zlxq-fenxiangbtn.png") no-repeat center center;
          background-size: 100% 100%;
        }
      }
    }
  }
</style>
