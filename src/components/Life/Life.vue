<template>
  <div class="life">
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
			  	<img src="../../assets/images/life/life1.jpg"/>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<img src="../../assets/images/life/life2.jpg"/>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<img src="../../assets/images/life/life3.jpg"/>
			  </mt-swipe-item>
			</mt-swipe>
  	</div>
  	
  	<!--容器1-->
    <div class="zr_container1">
    	<ul>
    		<li>
    			<div class="img">
    				<img src="../../assets/images/life/life_container4.png"/>
    			</div>
    			<p>超市</p>
    		</li>
    		<li>
    			<div class="img">
    				<img src="../../assets/images/life/life_container4.png"/>
    			</div>
    			<p>超市</p>
    		</li>
    		<li>
    			<div class="img">
    				<img src="../../assets/images/life/life_container4.png"/>
    			</div>
    			<p>超市</p>
    		</li>
    		<li>
    			<div class="img">
    				<img src="../../assets/images/life/life_container4.png"/>
    			</div>
    			<p>超市</p>
    		</li>
    		<li>
    			<div class="img">
    				<img src="../../assets/images/life/life_container4.png"/>
    			</div>
    			<p>超市</p>
    		</li>
    		<li>
    			<div class="img">
    				<img src="../../assets/images/life/life_container4.png"/>
    			</div>
    			<p>超市</p>
    		</li>
    		<li>
    			<div class="img">
    				<img src="../../assets/images/life/life_container4.png"/>
    			</div>
    			<p>超市</p>
    		</li>
    		<li>
    			<div class="img">
    				<img src="../../assets/images/life/life_container4.png"/>
    			</div>
    			<p>超市</p>
    		</li>
    		<li>
    			<div class="img">
    				<img src="../../assets/images/life/life_container4.png"/>
    			</div>
    			<p>超市</p>
    		</li>
    		<li>
    			<div class="img">
    				<img src="../../assets/images/life/life_container4.png"/>
    			</div>
    			<p>超市</p>
    		</li>
    	</ul>
    </div>
  	
  	<!--容器2图片-->
    <div class="zr_container2">
    	<img src="../../assets/images/life/life_container_img.png"/>
    </div>
    
    <!--容器3-->
    <div class="zr_container3">
    	<h2>商家推荐</h2>
    	<ul>
    		<li>
    			<img src="../../assets/images/life/life_container3_2.jpg"/>
    			<p>苏宁易购</p>
    		</li>
    		<li>
    			<img src="../../assets/images/life/life_container3_2.jpg"/>
    			<p>苏宁易购</p>
    		</li>
    		<li>
    			<img src="../../assets/images/life/life_container3_2.jpg"/>
    			<p>苏宁易购</p>
    		</li>
    		<li>
    			<img src="../../assets/images/life/life_container3_2.jpg"/>
    			<p>苏宁易购</p>
    		</li>
    	</ul>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Life',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	.life{
		background: #F4F4F4;
	}
	/*头部*/
	.life .zr_header{
		width: 100%;
		height: 2.55rem;
		background: url(../../assets/images/life/life_head_bg.jpg) repeat-x;
		display: flex;
		justify-content: center;
		position: fixed;
		top: 0;
		z-index: 999;
	}
	.life .zr_header .zr_header_small{
		width: calc(100% - 1.4rem);
		height: 2.55rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.life .zr_header .svg_left svg{
		width: 1.2rem;
		height: 1.2rem;
		padding-top: 0.35rem;
	}
	.life .zr_header .topic_center{
		font-size: 1.05rem;
	}
	.life .zr_header .border_right{
		font-size: 0.8rem;
		color: #DF2E3E;
		width: 1.35rem;
		height: 1.35rem;
		border: 2px solid #df2e3e;
		box-sizing: border-box;
		border-radius: 50%;
	}
	
	/*轮播*/
	.life .lunbo{
		height: 8.25rem;
		margin-top: 2.55rem;
	}
	.life .lunbo img{
		width: 100%;
		height: 8.25rem;
	}
	.life .lunbo .mint-swipe .mint-swipe-indicators{
		right: 0;
		left: auto;
	}
	
	/*容器1*/
	.life .zr_container1{
		margin-top: 0.5rem;
		width: 100%;
		height: 8.75rem;
		background: white;
		display: flex;
		align-items: center;		
	}
	.life .zr_container1 ul{
		display: flex;
		flex-wrap: wrap;
		width: 100%;
	}
	.life .zr_container1 ul li{
		list-style: none;
		width: 20%;
	}
	.life .zr_container1 ul li:nth-child(9),.life .zr_container1 ul li:nth-child(10),.life .zr_container1 ul li:nth-child(6),.life .zr_container1 ul li:nth-child(7),.life .zr_container1 ul li:nth-child(8){
		margin-top: 0.8rem;
	}
	.life .zr_container1 ul li p{
		font-size: 0.9rem;
	}
	.life .zr_container1 ul li .img img{
		width: 1.5rem;
		height: 1.5rem;
	}
	
	/*容器2*/
	.life .zr_container2{
		padding: 0.5rem;
	}
	.life .zr_container2 img{
		width: 100%;
		height: 7rem;
		display: block;
	}
	
	/*容器3*/
	.life .zr_container3 h2{
		padding: 0.75rem;
		text-align: left;
		font-size: 1rem;
	}
	.life .zr_container3{
		background: #FFFFFF;
		padding: 0rem 0.2rem;
		margin-bottom: 3rem;
		padding-bottom: 0.75rem;
	}
	.life .zr_container3 ul{
		display: flex;
		justify-content: space-between;
	}
	.life .zr_container3 ul li{
		list-style: none;
		border: 0.05rem solid #eaeaea;
		width: calc(25% - 0.2rem);
		box-sizing: border-box;
		height: 4rem;
		padding: 0.3rem 0rem;
		border-radius: 0.25rem;
	}
	.life .zr_container3 ul li p{
		font-size: 0.65rem;
		line-height: 0.65rem;
		font-weight: normal;
	}
	.life .zr_container3 ul li img{
		width: 2rem;
		height: 2rem;
	}
</style>