<template>
	<view class="container">
		<view class="" style="width: 100%;height:450upx;border: 1px solid #eee;">
				<video id="starVideo" style="width: 100%;height: 100%;" src="https://vfx.mtime.cn/Video/2019/01/15/mp4/190115161611510728_480.mp4" controls></video>
		</view>
		
		<!-- 商品描述 -->
		<view class="" style="width: 100%;height:400upx;border: 1px solid #eee;background-color: #FFFFFF;">
				<view  style="width: 100%;display: flex;flex-direction: row;justify-content: space-between;
				border: 1px solid #eceefe; height:400upx;">
				
					<view class="" style="width: 40%;border: 1px solid #fafafa;
					display: flex;align-items: center;padding: 5upx;">
						
						
						<!-- <image @click="LookPic"  :src="goodInfo.cover" 
						style="width: 100%;height:100%;border: 0px double red;" mode="">
						</image> -->
					<navigator style="width: 100%;height:100%;border: 0px double red;" :url="'../previewPicture/previewPicture?cover='+goodInfo.cover">
							<image  :src="goodInfo.cover"
							style="width: 100%;height:100%;border: 0px double red;" mode="" />
							
						</navigator>
						
						
					</view>
				
					<view class="" style="width: 60%;border: 1px solid #fafafa;padding: 15upx;background-color: #fafafa;">
						<view style="width: 100%;border-bottom: 1px solid #dedede;height: 20%;;
					font-size: 33upx;font-weight: bold;display: flex;align-items:center;">
							{{goodInfo.name?goodInfo.name:"*****"}}
						</view>
						<view style="width: 100%;border-bottom: 1px solid #dedede;height: 30%;display: flex;align-items:center;
					font-size: 28upx;font-weight: 300;color: grey;">
							{{goodInfo.desc?goodInfo.desc:"暂无相关信息"}}
						</view>
						<view
							style="width: 100%;border-bottom: 1px solid #dedede;height: 15%;
							display: flex;align-items:center;justify-content: flex-start;
							font-size: 28upx;font-weight: 300;color: grey;">
							上市时间：{{goodInfo.createDate?goodInfo.createDate:"未知"}}
						
						</view>
						
						<block v-if="goodInfo.score>=0">
						<view
							style="width: 100%;border-bottom: 1px solid #dedede;height: 15%;display: flex;align-items:center;justify-content: flex-start;">
							<scoreCom :score="goodInfo.score" :showNumber="showNumber" />
						</view>
						</block>
						
						
						
						<view style="width: 100%;border-bottom: 0px solid #fafafa;height: 20%;display: flex;justify-content: space-between;
					padding-left: 5upx;align-items: center;">
							<view class="" style="color: red;font-weight: bold;">
								￥<text style="font-size: 31upx;">{{goodInfo.price}}</text>
							</view>
							<view class="" style="width: 190upx;">
								<view :animation="animationDataArr[goodInfo.id]" class=""
									style="display: inline-block;opacity: 0;color: #f8bc07;font-weight: bold;">
									+1
								</view>
								<image @click="praiseme" :data-gIndex="goodInfo.id"  style="width: 45upx;height: 45upx;"
									src="../../static/images/dianzanHL.png" mode="">
								</image>
								<image @click="collect(goodInfo.id)" style="width: 40upx;height: 40upx;margin-left: 15upx;"
									src="../../static/images/collectHL.png" mode=""></image>
				
							</view>
						</view>
					</view>
				</view>
		</view>
	     <!-- 商品描述 end -->
		 
		 <!-- 商品介绍 -->
		 
		 <view class="" style="width: 98%;border: 1px solid #dedede;margin-top: 15upx;
		 padding: 10upx;background-color:  #fafafa;;;">
		 <view class="" style="font-size: 32upx;font-weight: 300;color: grey;
		 margin-bottom: 10upx;">
		 	商品介绍
		 </view>
		 <view class="" style="font-size: 31upx;font-weight: 500;color: #333333;
		 text-indent: 40upx;line-height: 53upx;letter-spacing: 5upx;">
		 	{{goodInfo.name}}{{desc}}
		 </view>
	     <scrollPicCom /> 
	<view class="" style="font-size: 31upx;font-weight: 500;color: #333333;
	text-indent: 40upx;line-height: 53upx;letter-spacing: 5upx;">
	   该商品性能极佳，适合各种科研项目，简单易用，后期支持免费升级等业务，如有问题，请及时与
	   客服取得联系。
	</view>
		 </view>
		 
		 
	     <!-- 商品介绍 end -->
	
	</view>
</template>

<script>
	import common from "../../static/js/common.js";
	import scoreCom from "../../components/scoreCom/scoreCom.vue";
	export default {
		components: {
			scoreCom
		},
		data() {
			return {
				showNumber: 1,
				desc:"",
				goodId:"",
				goodInfo:{},
				animationData: {
				
				},
				animationDataArr: [{}, {}, {}, {}, {}]
			}
		},
		onUnload() {
			this.animationData = {};
			this.animationDataArr = [];
		},
		//页面初次渲染完成，获取video的上下文对象
		onReady() {
			this.videoContext=uni.createVideoContext("starVideo");
		},
		onHide() {
			//页面隐藏时暂停播放
			this.videoContext.pause();
		},
		onShow() {
			//页面显示时开始播放
			//if(this.videoContext)
			//this.videoContext.play();
		},
		onLoad(option) {
			//通过api修改导航栏的属性
			// uni.setNavigationBarColor({
			// 	frontColor:"#FFFFFF",
			// 	backgroundColor:"#000000"
			// })
			
			
			//创建一个临时动画对象
			this.animation = uni.createAnimation();
			this.desc=common.desc;
			let paramId=option.Id;
			this.goodId=option.Id;
		
			this.GetFactoryProductData_Mock().then((res)=>{
					//console.log(res[0])
					this.goodInfo=res[0];
			});
		},
		//此函数仅仅支持在微信小程序，分享到微信群或好友，不能分享到朋友圈
		onShareAppMessage(res){
			let me=this;
			console.log(me.goodInfo.id)
			return{
				title:me.goodInfo.name,
				path:"pages/details/details?Id="+me.goodInfo.id
			
			}
			
		},
		//监听导航栏的按钮,该分享不支持微信小程序
		onNavigationBarButtonTap(e) {
			var index =e.index;
			let me=this;
			console.log(me.goodInfo.id)
			if(index==0){
				uni.share({
				    provider: "weixin",
				    scene: "WXSceneSession",
				    type: 0,
				    href: "http://uniapp.dcloud.io/",
				    title: "uni-app分享",
				    summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
				    imageUrl: "https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/d8590190-4f28-11eb-b680-7980c8a877b8.png",
				    success: function (res) {
				        console.log("success:" + JSON.stringify(res));
				    },
				    fail: function (err) {
				        console.log("fail:" + JSON.stringify(err));
				    }
				});
			}
		},
		methods: {
			GetFactoryProductData_Mock(index = 1) {
				return new Promise((res, rej) => {
					setTimeout(() => {
						let datas = common.RecommendationArray.filter(i => i.id==this.goodId)
						res(datas);
					}, 500);
				})
			},
			praiseme(e) {
			
				let index = e.currentTarget.dataset.gindex;
				console.log(index);
			
			
				this.animation.translateY(-30).opacity(1).step({
					duration: 400
				});
				this.animationData = this.animation;
				this.animationDataArr[index] = this.animationData.export();
				setTimeout(function() {
						this.animation.translateY(0).opacity(0).step({
							duration: 0
						});
						this.animationData = this.animation;
						this.animationDataArr[index] = this.animationData.export();
					}.bind(this)
			
					, 500);
			}
		,
		collect(Id){
			
			
			let datas = common.RecommendationArray.filter(i => i.id==Id)
			if(datas!=undefined&&datas!=null&&datas.length>0)
			{
				
				let temp=datas[0];
				let CollectInfo=uni.getStorageSync("GCollectInfo");
				if(CollectInfo!=null&&CollectInfo!=""&&CollectInfo!=undefined)
				{
					let collects=CollectInfo.filter(i => i.id==Id)
					if(!(collects!=null&&collects!=""&&collects!=undefined))
					{
						CollectInfo.push(temp);
						uni.setStorageSync("GCollectInfo",CollectInfo)
					}
				}
				else
				{
					uni.setStorageSync("GCollectInfo",[temp])
				}
			}
			
			
			
			
			
			
			
			
			uni.showToast({
				title:"已收藏",
				duration:1000,
				icon:"success"
			})
		},
		//图片预览
		LookPic(param){
			console.log(this.goodInfo.cover)
			uni.previewImage({
			            urls: [this.goodInfo.cover],
						})
		}
		
		}
	}
</script>

<style>
*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
.container{
	width:100%;
	height: 100%;
	background-color:  #f7f7f7;;

}
</style>
