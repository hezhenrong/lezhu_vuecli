<template>
  <div class="city">
  	<!--头部-->
    <div class="zr_header">
    	<div class="zr_header_small">
	    	<div class="svg_left">
	    		<svg viewBox="0 0 1024 1024" width="200" height="200">
						<path d="M282.4 460C344 580.8 443.2 680 564 741.6L657.6 648c11.2-11.2 28.8-15.2 43.2-10.4 48 16 100 24 152.8 24 23.2 0 42.4 19.2 42.4 42.4v148.8c0 23.2-19.2 42.4-42.4 42.4C452.8 896 128 571.2 128 170.4c0-23.2 19.2-42.4 42.4-42.4H320c23.2 0 42.4 18.4 42.4 41.6 0 53.6 8.8 104.8 24 152.8 4.8 15.2 1.6 31.2-10.4 43.2L282.4 460z" p-id="3295" fill="#313131"></path>
					</svg>
	    	</div>
	    	<div class="topic_center">
	    		长治市 电厂小区
	    	</div>
	    	<div class="border_right">
	    		劵
	    	</div>
	    </div>
    </div>  		
  		
  	<!--轮播-->
  	<div class="lunbo">
	  	<mt-swipe :auto="4000">
			  <mt-swipe-item>
			  	<img src="../../assets/images/city/city1.jpg"/>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<img src="../../assets/images/city/city2.jpg"/>
			  </mt-swipe-item>
			</mt-swipe>
  	</div>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	.city{
		background: #F4F4F4;
	}
	/*头部*/
	.city .zr_header{
		width: 100%;
		height: 2.55rem;
		background: url(../../assets/images/community/community_head_bg.jpg) repeat-x;
		display: flex;
		justify-content: center;
		position: fixed;
		top: 0;
		z-index: 999;
	}
	.city .zr_header .zr_header_small{
		width: calc(100% - 1.4rem);
		height: 2.55rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.city .zr_header .svg_left svg{
		width: 1.2rem;
		height: 1.2rem;
		padding-top: 0.35rem;
	}
	.city .zr_header .topic_center{
		font-size: 1.05rem;
	}
	.city .zr_header .border_right{
		font-size: 0.8rem;
		color: #DF2E3E;
		width: 1.35rem;
		height: 1.35rem;
		border: 2px solid #df2e3e;
		box-sizing: border-box;
		border-radius: 50%;
	}
	/*轮播*/
	.city .lunbo{
		height: 8.25rem;
		margin-top: 2.55rem;
	}
	.city .lunbo img{
		width: 100%;
		height: 8.25rem;
	}
	.city .lunbo .mint-swipe .mint-swipe-indicators{
		right: 0;
		left: auto;
	}
</style>