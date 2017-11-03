<template>
    <div class="lv_explain">
         <div class="lv_exbox">

           <img class="lv_exbox_hand" src="../public/img/db/db_gz_hand.png" />

         <!--	<img class="lv_j1" src="../public/img/lv_jiao2.png"/>
         	<img class="lv_j2" src="../public/img/lv_jiao1.png"/>-->
         	<div class="lv_bangtitle"><img src="../public/img/lv_lianr.png" /></div>
         	<div class="lvtext">
         		<h1><strong>活动时间：</strong><font color="#fa3e35">11月6日—11月30日</font></h1>
	         	<h1><strong>活动介绍：</strong></h1>
	         	<p>活动期间通过活动页面点击“我要拼团”按钮并填写拼团信息，并发起拼团邀请好友共同参与，组成8人团体即为拼团成功。所有拼团成功的学生100%获得四六级英语课程一份。活动结束后，我们还将在所有参与学生中抽取幸运者赠送一下奖品：</p>
        <h1><strong>特等奖：</strong>价值8688元的iPhone X 64G 2台</h1>
				<h1><strong>一等奖：</strong>价值3888元的中博课程神券（可购买中博全品类课程） 5张</h1>
				<h1><strong>二等奖：</strong>价值2888元的Apple wacth Series3  5台</h1>
				<h1><strong>三等奖：</strong>价值888元的中博课程神券（可购买中博全品类课程） 100张</h1>
				<h1><strong>四等奖：</strong>价值100元的京东E卡  200张</h1>
				<p style="text-align: center;"><font color="#fa3e35">注意：以上课程代金券可与双十一活动中的其他优惠同时使用，代金券使用不设找零。</font></p>



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
