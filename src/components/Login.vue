<template>
    <div class="lv_login">
    	<div class="lv_close" @touchstart="hide"></div>
    	<div class="lv_logbox">
    		<p>输入手机号，参与拼团机会。</p>
    		<div class="lv_li lv_li_tel">
    			<input type="tel" class="lv_input" placeholder="请填写手机号" />
    			<a href="javascript:;" class="lv_but_tl">获取<br />验证码</a>
    		</div>
    		<div class="lv_li">
    			<input type="number" class="lv_input" placeholder="填写验证码" />
    		</div>
    		<div class="lv_sub">
    			<img src="../public/img/lv_but1.png" />
    		</div>
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
