<template>
  <div class="LezhuNews">
		<!--头部返回-->
		<div class="zr_header">
			<div class="img_left" @click="returnback_community">
				<img src="../../assets/images/common/左箭头.png"/>
			</div>
			<div class="p_center">
				<p>乐住头条</p>
			</div>
		</div>
		
		<!--容器-->
		<div class="zr_container">
			<ul>
				<li @click="gotoAboutLezhu">
					<p>了解乐住</p>
					<img src="../../assets/images/community/京东广告.jpg"/>
				</li>
				<li @click="gotoAboutLezhu">
					<p>了解乐住</p>
					<img src="../../assets/images/community/京东广告.jpg"/>
				</li>
				<li @click="gotoAboutLezhu">
					<p>了解乐住</p>
					<img src="../../assets/images/community/京东广告.jpg"/>
				</li>
				<li @click="gotoAboutLezhu">
					<p>了解乐住</p>
					<img src="../../assets/images/community/京东广告.jpg"/>
				</li>
			</ul>
		</div>
		
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
    returnback_community:function(){
    	this.$router.push('/index/community')
    },
    gotoAboutLezhu:function(){
    	this.$router.push('/index/community/lezhu_news/about_lezhu')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	/*height100%样式*/
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
	.LezhuNews{
		background: #f3f3f3;
		height: 100%;
	}
	/*头部返回*/
	.LezhuNews .zr_header{
		display: flex;
		justify-content: space-between;
		padding: 0rem 0.75rem;
		height: 2.75rem;
		align-items: center;
		border-bottom: 0.05rem solid #d6d6d6;
		box-sizing: border-box;
		background: #FFFFFF;
	}
	.LezhuNews .zr_header .p_center{
		width: 100%;
	}
	.LezhuNews .zr_header p{
		color: #202020;
		font-size: 0.95rem;
		width: 100%;
	}
	.LezhuNews .zr_header .img_left{
		padding-top: 0.25rem;
	}
	.LezhuNews .zr_header .img_left img{
		width: 1.2rem;
		height: 1.2rem;
	}
	
	/*容器*/
	.LezhuNews .zr_container{
		padding: 0rem 0.75rem;
		background: #FFFFFF;
		margin-top: 0.5rem;
	}
	.LezhuNews .zr_container ul li{
		list-style: none;
		height: 4.55rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 0.05rem solid #F3F3F3;
	}
	.LezhuNews .zr_container ul li p{
		font-size: 0.95rem;
		color: #202020;
	}
	.LezhuNews .zr_container ul li img{
		width: 6.5rem;
		height: 3.8rem;
	}
</style>