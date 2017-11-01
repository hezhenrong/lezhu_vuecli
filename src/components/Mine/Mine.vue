<template>
  <div class="mine">
  	<!--头部-->
    <div class="zr_header">
    	<!--头部1-->
    	<div class="zr_header1">
    		<img src="../../assets/images/mine/touxiang_normal.png"/>
    		<div class="word">
    			<p>13813813800</p>
    			<p>未绑定房产</p>
    		</div>
    	</div>
    	<!--头部2-->
    	<div class="zr_header2">
    		<ul>
    			<li>
    				<img src="../../assets/images/mine/mine_head2_1.png"/>
    				<p>我的钱包</p>
    			</li>
    			<li>
    				<img src="../../assets/images/mine/mine_head2_1.png"/>
    				<p>我的钱包</p>
    			</li>
    			<li>
    				<img src="../../assets/images/mine/mine_head2_1.png"/>
    				<p>我的钱包</p>
    			</li>
    		</ul>
    	</div>    	
    </div>
    
    <!--容器1-->
    <div class="zr_container1">
    	<ul>
    		<li>
    			<div class="img_left">
    				<img src="../../assets/images/mine/mine_head2_1.png"/>
    			</div>    			
    			<p>生活订单</p>
    			<div class="img_right">
    				<img src="../../assets/images/mine/右箭头.png"/>
    			</div>
    		</li>
    		<li>
    			<div class="img_left">
    				<img src="../../assets/images/mine/mine_head2_1.png"/>
    			</div>    			
    			<p>生活订单</p>
    			<div class="img_right">
    				<img src="../../assets/images/mine/右箭头.png"/>
    			</div>
    		</li>
    		<li>
    			<div class="img_left">
    				<img src="../../assets/images/mine/mine_head2_1.png"/>
    			</div>    			
    			<p>生活订单</p>
    			<div class="img_right">
    				<img src="../../assets/images/mine/右箭头.png"/>
    			</div>
    		</li>
    		<li>
    			<div class="img_left">
    				<img src="../../assets/images/mine/mine_head2_1.png"/>
    			</div>    			
    			<p>生活订单</p>
    			<div class="img_right">
    				<img src="../../assets/images/mine/右箭头.png"/>
    			</div>
    		</li>
    		<li>
    			<div class="img_left">
    				<img src="../../assets/images/mine/mine_head2_1.png"/>
    			</div>    			
    			<p>生活订单</p>
    			<div class="img_right">
    				<img src="../../assets/images/mine/右箭头.png"/>
    			</div>
    		</li>
    	</ul>
    </div>
    
    <!--容器2-->
    <div class="zr_container2">
    	<ul>
    		<li>
    			<div class="img_left">
    				<img src="../../assets/images/mine/mine_head2_1.png"/>
    			</div>    			
    			<p>设置</p>
    			<div class="img_right">
    				<img src="../../assets/images/mine/右箭头.png"/>
    			</div>
    		</li>
    		<li>
    			<div class="img_left">
    				<img src="../../assets/images/mine/mine_head2_1.png"/>
    			</div>    			
    			<p>设置</p>
    			<div class="img_right">
    				<img src="../../assets/images/mine/右箭头.png"/>
    			</div>
    		</li>
    	</ul>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Mine',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	.mine{
		background: #e5e5e5;
		color: #090909;
		padding-bottom: 5rem;
	}
	/*头部的头部1*/
	.mine .zr_header .zr_header1{
		width: 100%;
		height: 7.25rem;
		background: #42b341;
		display: flex;
		align-items: center;
		padding: 0rem 1.1rem;
		color: white;
	}
	.mine .zr_header .zr_header1 img{
		width: 3.5rem;
		height: 3.5rem;
		border-radius: 50%;
	}
	.mine .zr_header .zr_header1 .word{
		padding: 0rem 0.7rem;
	}
	.mine .zr_header .zr_header1 .word p{
		font-size: 0.95rem;
		text-align: left;
	}
	/*头部的头部2*/
	.mine .zr_header .zr_header2{
		background: #FFFFFF;
		padding: 0.3rem 0rem;
	}
	.mine .zr_header .zr_header2 ul{
		display: flex;
		justify-content: space-between;
	}
	.mine .zr_header .zr_header2 ul li{
		list-style: none;
		width: 33%;
	}
	.mine .zr_header .zr_header2 ul li img{
		width: 1.25rem;
		height: 1.25rem;
	}
	.mine .zr_header .zr_header2 ul li p{
		font-size: 0.9rem;
	}
	
	/*容器1*/
	.mine .zr_container1{
		background: #FFFFFF;
		margin-top: 0.5rem;
		padding: 0rem 0.75rem;
	}
	.mine .zr_container1 ul{
		display: flex;
		flex-direction: column;
	}
	.mine .zr_container1 ul li{
		list-style: none;
		display: flex;
		height: 2.5rem;
		align-items: center;
		border-bottom: 0.01rem solid #f2f2f2;
		box-sizing: border-box;
		justify-content: space-between;
	}
	.mine .zr_container1 ul li p{
		width: 100%;
		text-align: left;
		margin-left: 0.5rem;
	}
	.mine .zr_container1 ul li img{
		width: 1rem;
		height: 1rem;
	}
	
	/*容器2*/
	.mine .zr_container2{
		background: #FFFFFF;
		margin-top: 0.5rem;
		padding: 0rem 0.75rem;
	}
	.mine .zr_container2 ul{
		display: flex;
		flex-direction: column;
	}
	.mine .zr_container2 ul li{
		list-style: none;
		display: flex;
		height: 2.5rem;
		align-items: center;
		border-bottom: 0.01rem solid #f2f2f2;
		box-sizing: border-box;
		justify-content: space-between;
	}
	.mine .zr_container2 ul li p{
		width: 100%;
		text-align: left;
		margin-left: 0.5rem;
	}
	.mine .zr_container2 ul li img{
		width: 1rem;
		height: 1rem;
	}
</style>