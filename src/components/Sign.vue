<template>
   <div class="lv_sign">
   		<div class="sig_box">
   			<p>
   				<input class="lv_inp" placeholder="姓名" type="text" name="" id="" value="" />
   			</p>
   			<p>
   				<input class="lv_inp" placeholder="电话" type="tel" name="" id="" value="" />
   			</p>
   			<p>
   				<input class="lv_inp" placeholder="所在高校" type="text" name="" id="" value="" />
   			</p>
   			<p>
   				<input class="lv_inp" placeholder="所学专业" type="text" name="" id="" value="" />
   			</p>



   			<div @touchstart="submit" class="lv_tijiao" href="javascript:;"><img src="../public/img/lv_tijiao.png" /></div>


   		</div>
   </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        components: {},
        methods: {
        	submit:function(){
        		if(confirm('确定要提交吗？')){
        			alert('提交成功！');
        			this.$router.push({
        				path:'/userdetail/mystart'
        			})
        		}
        	}
        }
    }
</script>

<style scoped>
</style>
