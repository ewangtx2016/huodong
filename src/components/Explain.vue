<template>
    <div class="lv_explain">
         <div class="lv_exbox">

           <img class="lv_exbox_hand" src="../public/img/db/db_gz_hand.png" />

         <!--	<img class="lv_j1" src="../public/img/lv_jiao2.png"/>
         	<img class="lv_j2" src="../public/img/lv_jiao1.png"/>-->
         	<div class="lv_bangtitle"><img src="../public/img/lv_lianr.png" /></div>
         	<div class="lvtext">
         		<h1><strong>活动时间：</strong><font color="#fa3e35">10月1日—10月15日</font></h1>
	         	<h1><strong>活动介绍：</strong></h1>
	         	<p>活动期间通过活动页面点击“我要拼团”按钮并填写拼团信息，并发起拼团邀请好友共同参与，组成8人团体即为拼团成功。完成拼团成员，每人将获得价值680元四六级英语课程一份（无二次消费）。活动结束后，我们还将在所有参与学生中抽取幸运者赠送一下奖品：</p>
        <h1><strong>一等奖(3名)：</strong>iphone X 64G一部</h1>
				<h1><strong>二等奖(5名)：</strong>kindle Paperwhite一部</h1>
				<h1><strong>三等奖(50名)：</strong>100元京东E卡一张</h1>
				<p style="text-align: center;"><font color="#fa3e35">备注：发起人获得以上奖品的几率更大。</font></p>



         	</div>

         	<a class="but_know" @touchstart="hide" href="javascript:;"><img src="../public/img/lv_tousatrt.png" /></a>
         </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            	close	:	false
            }
        },
        components: {},
        methods: {
        	hide:function(){
        		this.$emit('change-v',this.close);
        	}
        }
    }
</script>

<style scoped>

</style>
