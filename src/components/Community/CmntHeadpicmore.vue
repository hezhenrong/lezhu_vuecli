<template>
	<div class="cmnt_headpicmore">
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
		
		<!--容器1-->
		<div class="zr_container1">
			<div class="zr_container1_header">
				<h2>淮海物业电厂智慧试点小区上线了</h2>
				<p>发布时间： 2016-11-22 11:40:00</p>
			</div>
			<div class="zr_container1_container">
				<p>热烈庆祝淮海物业管理有限公司电厂小区率先开通智慧社区智能服务平台，请广大业主踊跃下载体验！这是一款可以把物业公司装进手机里的智能化系统，帮助广大业主实现报事，报修，物业费，水电费的便捷交纳，内容涉及居民生活的方方面面，欢迎体验，真正实现送广大业主物业费的平台。</p>
			</div>
		</div>
		
		<!--容器2-->
		<div class="zr_container2">
			<!--头部-->
			<div class="zr_container2_header">
				<hr />
				<div class="hr_p">
					广告
				</div>
			</div>
			<!--广告-->
			<div class="zr_container2_container" @click="gotoiframe">
				<img src="../../assets/images/community/京东广告.jpg"/>
			</div>
		</div>
		
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
    	this.$router.push('/index/community')
    },
    gotoiframe:function(){
    	this.$router.push('/index/community/cmnt_headpicmore/cmnt_headpicmore_iframe')
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	/*头部返回*/
	.cmnt_headpicmore .zr_header{
		display: flex;
		justify-content: space-between;
		padding: 0rem 0.75rem;
		height: 2.75rem;
		align-items: center;
		border-bottom: 0.05rem solid #d6d6d6;
		box-sizing: border-box;
	}
	.cmnt_headpicmore .zr_header p{
		color: #202020;
		font-size: 0.95rem;
	}
	.cmnt_headpicmore .zr_header .img_left{
		padding-top: 0.25rem;
	}
	.cmnt_headpicmore .zr_header .img_left img{
		width: 1.2rem;
		height: 1.2rem;
	}
	
	/*容器1*/
	.cmnt_headpicmore .zr_container1 .zr_container1_header{
		height: 3.75rem;
		border-bottom: 0.05rem solid #ababab;
		box-sizing: border-box;		
		padding: 0.75rem 0.6rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.cmnt_headpicmore .zr_container1 .zr_container1_header h2{
		font-size: 0.8rem;
		text-align: left;
		color: #202020;
	}
	.cmnt_headpicmore .zr_container1 .zr_container1_header p{
		font-size: 0.6rem;
		line-height: 0.7rem;
		text-align: left;
		color: #727272;
	}
	
	/*容器1*/
	.cmnt_headpicmore .zr_container1 .zr_container1_container{
		padding: 1.5rem 0.6rem;
	}
	.cmnt_headpicmore .zr_container1 .zr_container1_container p{
		font-size: 0.75rem;
		line-height: 1.2rem;
		text-align: left;
		text-indent: 1.5rem;
		font-weight: normal;
	}
	
	/*容器2*/
	.cmnt_headpicmore .zr_container2 {
		position: relative;
		bottom: -5rem;
	}
	/*头部*/
	.cmnt_headpicmore .zr_container2 .zr_container2_header{
		position: relative;
	}
	.cmnt_headpicmore .zr_container2 .zr_container2_header .hr_p{
		width: 2.5rem;
		height: 1.5rem;
		position: relative;
		left: 50%;
		top: -0.75rem;
		transform: translateX(-50%);
		background: #FFFFFF;
		font-size: 0.85rem;
		text-align: center;
		line-height: 1.5rem;
	}
	/*广告图片*/
	.cmnt_headpicmore .zr_container2 .zr_container2_container img{
		width: 100%;
		height: 7.5rem;
	}
</style>