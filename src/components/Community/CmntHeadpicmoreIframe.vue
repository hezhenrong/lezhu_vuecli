<template>
	<div class="cmnt_headpicmore_iframe">
		<!--头部返回-->
		<div class="zr_header">
			<div class="img_left" @click="returnback_community">
				<img src="../../assets/images/common/左箭头.png"/>
			</div>
			<div class="p_center">
				<p>详情</p>
			</div>
			<div class="p_right">
				<p>分享</p>
			</div>
		</div>
		
		<iframe src="https://www.jd.com/"frameborder="no" border="0"></iframe>
		
	</div>
</template>

<script type="es6">
export default {
  name: 'Scan',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    returnback_community:function(){
    	this.$router.push('/index/community/cmnt_headpicmore')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	/*头部返回*/
	.cmnt_headpicmore_iframe .zr_header{
		display: flex;
		justify-content: space-between;
		padding: 0rem 0.75rem;
		height: 2.75rem;
		align-items: center;
		border-bottom: 0.05rem solid #d6d6d6;
		box-sizing: border-box;
	}
	.cmnt_headpicmore_iframe .zr_header p{
		color: #202020;
		font-size: 0.95rem;
	}
	.cmnt_headpicmore_iframe .zr_header .img_left{
		padding-top: 0.25rem;
	}
	.cmnt_headpicmore_iframe .zr_header .img_left img{
		width: 1.2rem;
		height: 1.2rem;
	}
	
	/*iframe*/
	html{
		height: 100%;
		overflow-x: hidden;
	}
	body{
		height: 100%;
	}
	#app{
		height: 100%;
	}
	.cmnt_headpicmore_iframe{
		height: 100%;
	}
	.cmnt_headpicmore_iframe iframe{
		width: 100%;
		height: calc(100% - 2.75rem);
	}
	
	
</style>