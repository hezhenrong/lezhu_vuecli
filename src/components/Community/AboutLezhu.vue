<template>
  <div class="AboutLezhu">
  	<!--头部返回-->
    <div class="zr_header">
		<div class="img_left" @click="returnback_lezhunews">
			<img src="../../assets/images/common/左箭头.png"/>
		</div>
		<div class="p_center">
			<p>详情</p>
		</div>
		<div class="p_right">
			<p>分享</p>
		</div>
	</div>
	
	<iframe src="https://spc.lezhu.tv:8443/LzAppAgent/ad/html/headlines.html?id=bf55a6b21b854cc6842eb29206a1230b&communityId=300001301&cityId=140400&param=download"
		frameborder="no" border="0"></iframe>
	
  </div>
</template>

<script type="es6">
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    returnback_lezhunews:function(){
    	this.$router.push('/index/community/lezhu_news')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	/*头部返回*/
	.AboutLezhu .zr_header{
		display: flex;
		justify-content: space-between;
		padding: 0rem 0.75rem;
		height: 2.75rem;
		align-items: center;
		border-bottom: 0.05rem solid #d6d6d6;
		box-sizing: border-box;
	}
	.AboutLezhu .zr_header p{
		color: #202020;
		font-size: 0.95rem;
	}
	.AboutLezhu .zr_header .img_left{
		padding-top: 0.25rem;
	}
	.AboutLezhu .zr_header .img_left img{
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
	.AboutLezhu{
		height: 100%;
	}
	.AboutLezhu iframe{
		width: 100%;
		height: calc(100% - 2.75rem);
		/*padding: 0rem 0.75rem;*/
		box-sizing: border-box;
	}
</style>
