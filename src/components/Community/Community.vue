<template>
  <div class="community">
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
    <!--头部图片-->
    <div class="zr_headpic" @click="gotoHeadpicmore">
    	<img src="../../assets/images/community/community_headimg_banner.jpg"/>
    </div>
    <!--头部图片下会动文字-->
    <div class="move_word_big">
    	<div class="four_word">
    		<div class="black_word">
    			乐住
    		</div>
    		<div class="white_word">
    			<div class="white_word_small">
    				头条
    			</div>
    		</div>
    	</div>
    	<div class="svg_word">
    		<div class="red_svg">
    			<svg viewBox="0 0 1024 1024" width="200" height="200">
						<path d="M733.31712 353.19296l127.24736-124.07296a41.50272 41.50272 0 1 0-57.46176-59.89888l-127.24224 124.07296a41.50272 41.50272 0 0 0 57.45664 59.89888z" p-id="2255" fill="#f40408"></path>
						<path d="M143.42144 568.56576c-0.82432 14.09024 4.46464 27.85792 14.10048 38.17472l235.80672 252.43136c46.85312 46.85312 88.54528 0 88.54528 0l319.07328-319.06816a83.72736 83.72736 0 0 0 24.52992-59.20256v-138.3936c0.12288-0.10752 0.01536 0 0.12288-0.10752l-53.76 53.76c-34.05824 34.06336-102.4 39.89504-142.08-1.06496-39.04-41.6-31.49824-102.47168 2.56-136.53504L689.92 204.8c-4.48 0 0.57344-0.1024-4.53632-0.1024h-156.88704c-21.83168 0-42.8032 8.5248-58.43456 23.76704l-310.61504 304.65536c-11.35616 12.29824-15.40096 24.71936-16.0256 35.44576z" p-id="2256" fill="#f40408"></path>
					</svg>
    		</div>
    		<div class="move_word">
    			<ul>
    				<li>了解乐住</li>
    				<li @click="gotoLezhuNew">了解乐住</li>
    			</ul>
    		</div>
    	</div>
    </div>
    
    <!--容器-->
    <div class="zr_container1">
    	<ul>
    		<li>
    			<div class="img">
    				<img src="../../assets/images/community/物业缴费.png"/>
    			</div>
    			<p>物业缴费</p>
    		</li>
    		<li>
    			<div class="img">
    				<img src="../../assets/images/community/报事报修.png"/>
    			</div>
    			<p>报事报修</p>
    		</li>
    		<li>
    			<div class="img">
    				<img src="../../assets/images/community/物业缴费.png"/>
    			</div>
    			<p>投诉建议</p>
    		</li>
    		<li>
    			<div class="img">
    				<img src="../../assets/images/community/物业缴费.png"/>
    			</div>
    			<p>交房验房</p>
    		</li>
    		<li>
    			<div class="img">
    				<img src="../../assets/images/community/物业缴费.png"/>
    			</div>
    			<p>物业通知</p>
    		</li>
    		<li>
    			<div class="img">
    				<img src="../../assets/images/community/物业缴费.png"/>
    			</div>
    			<p>业主须知</p>
    		</li>
    		<li>
    			<div class="img">
    				<img src="../../assets/images/community/物业缴费.png"/>
    			</div>
    			<p>物业风采</p>
    		</li>
    		<li>
    			<div class="img">
    				<img src="../../assets/images/community/物业缴费.png"/>
    			</div>
    			<p>我的劵包</p>
    		</li>
    	</ul>
    </div>
    
    <!--容器2-->
    <div class="zr_container2">
    	<ul>
    		<li>
    			<div class="img">
    				<img src="../../assets/images/community/电动汽车.png"/>
    			</div>
    			<div class="h3_p">
    				<h3>自助售货机</h3>
    				<p>快捷支付，轻松购物</p>
    			</div>
    		</li>
    		<li>
    			<div class="img">
    				<img src="../../assets/images/community/电动汽车.png"/>
    			</div>
    			<div class="h3_p">
    				<h3>自助售货机</h3>
    				<p>快捷支付，轻松购物</p>
    			</div>
    		</li>
    		<li>
    			<div class="img">
    				<img src="../../assets/images/community/电动汽车.png"/>
    			</div>
    			<div class="h3_p">
    				<h3>自助售货机</h3>
    				<p>快捷支付，轻松购物</p>
    			</div>
    		</li>
    		<li>
    			<div class="img">
    				<img src="../../assets/images/community/电动汽车.png"/>
    			</div>
    			<div class="h3_p">
    				<h3>自助售货机</h3>
    				<p>快捷支付，轻松购物</p>
    			</div>
    		</li>
    	</ul>
    </div>
    
    <!--底部图片-->
    <div class="bottom_pic">
    	<img src="../../assets/images/community/community_headimg_banner.jpg"/>
    </div>
  </div>
</template>

<script type="text/jscript">
export default {
  name: 'Community',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    gotoHeadpicmore:function(){
    	this.$router.push('/index/community/cmnt_headpicmore')
    },
    gotoLezhuNew:function(){
    	this.$router.push('/index/community/lezhu_news')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	.community{
		background: #f4f4f4;
	}
	/*头部*/
	.community .zr_header{
		width: 100%;
		height: 2.55rem;
		background: url(../../assets/images/community/community_head_bg.jpg) repeat-x;
		display: flex;
		justify-content: center;
		position: fixed;
		top: 0;
		z-index: 999;
	}
	.community .zr_header .zr_header_small{
		width: calc(100% - 1.4rem);
		height: 2.55rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.community .zr_header .svg_left svg{
		width: 1.2rem;
		height: 1.2rem;
		padding-top: 0.35rem;
	}
	.community .zr_header .topic_center{
		font-size: 1.05rem;
	}
	.community .zr_header .border_right{
		font-size: 0.8rem;
		color: #DF2E3E;
		width: 1.35rem;
		height: 1.35rem;
		border: 2px solid #df2e3e;
		box-sizing: border-box;
		border-radius: 50%;
	}
	/*头部图片*/
	.community .zr_headpic{
		width: 100%;
		margin-top: 2.55rem;
	}
	.community .zr_headpic img{
		width: 100%;
		vertical-align: top;
	}
	/*头部图片下大div*/
	.community .move_word_big{
		height: 2.5rem;
		background: #ffffff;
	}
	.community .move_word_big{
		display: flex;
		align-items: center;
	}
	.community .move_word_big .four_word{
		width: 3rem;
		height: 2.25rem;
		border-right: 1px solid #e8e8e8;
	}
	.community .move_word_big .four_word .black_word{
		font-size: 0.8rem;
	}
	.community .move_word_big .four_word .white_word{
		display: flex;
		justify-content: center;
	}
	.community .move_word_big .four_word .white_word .white_word_small{
		font-size: 0.8rem;
		color: white;
		width: 1.75rem;
		text-align: center;
		background: #f40408;
		border-radius: 0.2rem;
	}
	.community .move_word_big .svg_word{
		display: flex;
		align-items: center;
	}
	.community .move_word_big .svg_word .red_svg{
		padding: 0.35rem 0.35rem 0 0.5rem;
	}
	.community .move_word_big .svg_word .red_svg svg{
		width: 1.0rem;
		height: 1.0rem;
	}
	.community .move_word_big .svg_word .move_word{
		width: 3.6rem;
		height: 1.2rem;
		overflow: hidden;
		position: relative;
	}
	.community .move_word_big .svg_word .move_word ul{
		position: relative;
		top: 0rem;
		animation: let_word_move 4s infinite;
		-moz-animation: let_word_move 4s infinite;
		-webkit-animation: let_word_move 4s infinite;
		-moz-animation: let_word_move 4s infinite;
	}
	.community .move_word_big .svg_word .move_word ul li{
		list-style: none;
		font-size: 0.9rem;
	}
	/*动画*/
	@keyframes let_word_move{
		0%{top:0;}
		25%{top:-1.2rem;}
		100%{top:-1.2rem;}
	}
	@-moz-keyframes let_word_move{
		0%{top:0;}
		25%{top:-1.2rem;}
		100%{top:-1.2rem;}
	}
	@-webkit-keyframes let_word_move{
		0%{top:0;}
		25%{top:-1.2rem;}
		100%{top:-1.2rem;}
	}
	@-ms-keyframes let_word_move{
		0%{top:0;}
		25%{top:-1.0rem;}
		100%{top:-1.2rem;}
	}
	
	/*容器1*/
	.community .zr_container1{
		margin-top: 0.5rem;
		width: 100%;
		height: 8.75rem;
		background: white;
		display: flex;
		align-items: center;		
	}
	.community .zr_container1 ul{
		display: flex;
		flex-wrap: wrap;
		width: 100%;
	}
	.community .zr_container1 ul li{
		list-style: none;
		width: 25%;
	}
	.community .zr_container1 ul li:nth-child(5),.community .zr_container1 ul li:nth-child(6),.community .zr_container1 ul li:nth-child(7),.community .zr_container1 ul li:nth-child(8){
		margin-top: 0.8rem;
	}
	.community .zr_container1 ul li p{
		font-size: 0.9rem;
	}
	.community .zr_container1 ul li .img img{
		width: 2.25rem;
		height: 2.25rem;
	}
	
	/*容器2*/
	.community .zr_container2{
		display: flex;
		align-items: center;
		background: #FFFFFF;
		margin-top: 0.5rem;
		padding: 0.5rem;
	}
	.community .zr_container2 ul{
		display: flex;
		flex-wrap: wrap;
		width: 100%;
	}
	.community .zr_container2 ul li{
		list-style: none;
		width: calc(50% - 0.25rem);
		display: flex;
		justify-content: center;
		height: 5rem;
		align-items: center;
		border-right: 0.05rem solid #f9f9f9;
		box-sizing: border-box;
		border-bottom: 0.05rem solid #f9f9f9;
		border-top: 0.05rem solid #f9f9f9;
		margin-bottom: 0.5rem;
	}
	.community .zr_container2 ul li:nth-child(2n){
		margin-left: 0.5rem;
		border-right: 0rem;
		border-left: 0.05rem solid #f9f9f9;
	}
	.community .zr_container2 ul li .img img{
		width: 2.0rem;
		height: 2.0rem;
	}
	.community .zr_container2 ul li .h3_p{
		display: flex;
		flex-direction: column;
		text-align: left;
		padding-left: 0.2rem;
		
	}
	.community .zr_container2 ul li .h3_p h3{
		font-weight: normal;
		font-size: 0.8rem;
	}
	.community .zr_container2 ul li .h3_p p{
		font-weight: normal;
		font-size: 0.6rem;
	}
	
	/*底部图片*/
	.community .bottom_pic{
		padding: 0.5rem;
		margin-bottom: 3rem;
	}
	.community .bottom_pic img{
		width: 100%;
		display: block;
	}
</style>
