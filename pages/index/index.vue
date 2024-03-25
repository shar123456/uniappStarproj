<template>
	<view class="container">

		<!-- 轮播-->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1200" circular="true"
			style="width: 100%;height:450upx;border: 0px solid red;">
			<swiper-item v-for="(item12,index) in swipperUrlList" :key="index">
				<view class="swiper-item">
					<image :src="item12" class="carousel"></image>
				</view>
			</swiper-item>

		</swiper>
		<!-- 轮播 end-->

		<view class="" style="display: flex;flex-direction: row;justify-content:space-between;">
			<view
				style="background-color: #FFFFFF;width:80%;height: 90upx;display: flex;flex-direction: row;justify-content: flex-start;align-items: center;">
				<image src="../../static/images/fire.png" style="width: 50upx;height: 60%;border: 0px solid red;">
				</image>
				<view class=""
					style="width: 160upx;height: 100%;border: 0px solid red;display: flex;align-items: center;font-size: 17px;font-weight: bold;">
					经典推荐</view>

			</view>

			<view class=""
				style="font-size: 16px;font-weight: bold;color: #176bd8;background-color: #FFFFFF;width:20%;height: 90upx;display: flex;flex-direction: row;justify-content: center;align-items: center;">
				<text @click="changeRecommendation">换一换</text>
			</view>
		</view>

		<!-- 经典推荐-->
		<scroll-view scroll-x="true"
			style="background-color: #FFFFFF;width: 100%;white-space: nowrap;padding-left: 0px;">
			<view style="display: inline-block;margin-left: 0px;border: 0px solid red;box-sizing: border-box;"
				v-for="item in RecommendationList" :key="item.id">

				<view style="display: flex;flex-direction: column;align-items: center;
				margin-right: 10upx;">
					<image @click="GoDetailPage" :data-DetailId="item.id" :src="item.cover"
						style="width: 200upx;height: 220upx;border: 1px double #eceefe;" mode="">
					</image>
					<view style="width: 200upx;font-size: 14px;font-weight: bold;margin-top: 5px;
							white-space: nowrap;overflow: hidden;text-overflow: ellipsis;text-align: center;">
						{{item.name}}
					</view>
					
					<scoreCom :score="item.score" :showNumber="showNumber" />
				</view>
			</view>


		</scroll-view>
		<!-- 经典推荐 end-->

		<!-- 新品预告头 -->
		<view class="" style="display: flex;flex-direction: row;justify-content:space-between;margin-top: 12upx;">
			<view
				style="background-color: #FFFFFF;width:80%;height: 90upx;display: flex;flex-direction: row;justify-content: flex-start;align-items: center;">
				<image src="../../static/images/prediction.png" style="width: 50upx;height: 60%;border: 0px solid red;">
				</image>
				<view class=""
					style="width: 160upx;height: 100%;border: 0px solid red;display: flex;align-items: center;font-size: 17px;font-weight: bold;">
					新品预告</view>
			</view>

			<view class=""
				style="font-size: 16px;font-weight: bold;color: #176bd8;background-color: #FFFFFF;width:20%;height: 90upx;display: flex;flex-direction: row;justify-content: center;align-items: center;">
				<text></text>
			</view>
		</view>
		<!-- 新品预告头 end -->


		<!-- 新品预告 -->
		<view style="background-color: #FFFFFF;display: flex;width: 100%;height:220upx;
		flex-direction: row;flex-wrap: wrap;border: 0px solid red;justify-content:space-around;
			padding-left: 0upx;padding-right: 0upx;padding-bottom: 12upx;">
			<video id="video_1" @play="playVideo" data-videoId="video_1" style="width: 49%;height: 100%;"
				src="http://vfx.mtime.cn/Video/2019/02/04/mp4/190204084208765161.mp4" controls></video>
			<video id="video_2" @play="playVideo" data-videoId="video_2" style="width: 49%;height: 100%;"
				src="http://vfx.mtime.cn/Video/2019/03/18/mp4/190318231014076505.mp4" controls></video>

		</view>
		<!-- 新品预告 end -->


		<!-- 工厂直销头 -->
		<view class="" style="margin-top: 12upx;display: flex;flex-direction: row;justify-content:space-between;">
			<view
				style="background-color: #FFFFFF;width:80%;height: 90upx;display: flex;flex-direction: row;justify-content: flex-start;align-items: center;">
				<image src="../../static/images/factory.png" style="width: 50upx;height: 60%;border: 0px solid red;">
				</image>
				<view class=""
					style="width: 160upx;height: 100%;border: 0px solid red;display: flex;align-items: center;font-size: 17px;font-weight: bold;">
					工厂直销</view>
			</view>

			<view class=""
				style="font-size: 16px;font-weight: bold;color: #176bd8;background-color: #FFFFFF;width:20%;height: 90upx;display: flex;flex-direction: row;justify-content: center;align-items: center;">
				<text></text>
			</view>
		</view>
		<!-- 工厂直销头 end -->

		<!-- 工厂直销 -->

		<view
			style="width: 100%;;display: flex;flex-direction: column;
			justify-content: center;">


			<view v-for="(item1,gindex) in FactoryProductList" :key="item1.id"
				style="width: 100%;display: flex;flex-direction: row;
				justify-content: space-between;border-top: 1px solid #f7f7f7; 
				height: 290upx;margin-top: 1upx;padding: 0upx;box-sizing: border-box;
				margin-bottom: 8upx;background-color: #FFFFFF;">

				<view class="" style="width: 35%;border: 0px solid #007AFF;">
					<image @click="LookPic" :data-DetailSrc="item1.cover" :src="item1.cover"
						style="width: 100%;height:100%;border: 0px double #eceefe;" mode="">
					</image>
				</view>

				<view class="" style="width: 64%;border: 0px solid #007AFF;">
					<view @click="GoDetailPage" :data-DetailId="item1.id" 
					style="width: 100%;border-bottom: 1px solid #fafafa;height: 22%;line-height:60upx;
				font-size: 30upx;font-weight: bold;white-space: nowrap;overflow: hidden;text-overflow:ellipsis;">
						{{item1.name}}
					</view>
					<view @click="GoDetailPage" :data-DetailId="item1.id" style="width: 100%;border-bottom: 1px solid #fafafa;height: 40%;display: flex;align-items:center;
				font-size: 28upx;font-weight: 300;color: grey;">
						{{item1.desc}}
					</view>
					<view @click="GoDetailPage" :data-DetailId="item1.id"
						style="width: 100%;border-bottom: 1px solid #fafafa;height: 15%;
						display: flex;align-items:center;justify-content: flex-start;">
						<scoreCom :score="item1.score" :showNumber="showNumber" />
					</view>
					<view style="width: 100%;border-bottom: 0px solid red;height: 23%;
					display: flex;justify-content: space-between;
				padding-left: 0upx;align-items: center;">
						<view class="" style="color: red;font-weight: bold;">
							￥<text style="font-size: 31upx;">{{item1.price}}</text>
						</view>
						<view class="" style="width: 190upx;border: 0px solid red;display: flex;justify-content: space-around;
						align-items: center;">
							<view :animation="animationDataArr[gindex]" class=""
								style="display: inline-block;opacity: 0;color: #f8bc07;font-weight: bold;">
								+1
							</view>
							<image @click="praiseme" :data-gIndex="gindex" style="width: 45upx;height: 45upx;"
								src="../../static/images/dianzanHL.png" mode="">
							</image>
							<image @click="collect(item1.id)" style="width: 40upx;height: 40upx;margin-left: 15upx;margin-right: 15upx;"
								src="../../static/images/collectHL.png" mode=""></image>

						</view>
					</view>
				</view>
				
				
				
			</view>



     



		</view>

		<!-- 工厂直销  end -->

	</view>
</template>

<script>
	import common from "../../static/js/common.js";
	/* 导入评分组件 */
	import scoreCom from "../../components/scoreCom/scoreCom.vue";
	export default {
		components: {
			scoreCom
		},
		data() {
			return {
				swipperUrlList: [],
				showNumber: 1,
				RecommendationList: [],
				FactoryProductList: [],
				animationData: {

				},
				animationDataArr: [{}, {}, {}, {}, {}]
			}
		},
		onPullDownRefresh() {
			// uni.showLoading({
			// 	mask: true//显示遮罩，
			// }); //显示loading的提示框
			uni.showLoading()
			uni.showNavigationBarLoading(); //在头部导航栏上显示加载中的提示
			//获取经典推荐
			this.changeRecommendation();
			uni.stopPullDownRefresh(); //停止下拉刷新
			uni.hideNavigationBarLoading();
			uni.hideLoading(); //隐藏loading提示框
		},
		onUnload() {
			this.animationData = {};
			this.animationDataArr = [];
		},
		//此函数仅仅支持在微信小程序，分享到微信群或好友，不能分享到朋友圈
		onShareAppMessage(res) {
			let me = this;

			return {
				title: "Motic 网上商城",
				path: "pages/index/index"

			}

		},
		onHide() {
			//页面隐藏时暂停播放
			this.videoContext?.pause();
		},
		onLoad() {


			//            // #ifdef APP-PLUS||MP-WEIXIN
			//            //创建一个临时动画对象
			//            this.animation = uni.createAnimation();
			//            // #endif
			//创建一个临时动画对象
			this.animation = uni.createAnimation();


			//获取轮播图片
			if (!this.IsProduction) {
				this.GetCarouselData_Mock().then((res) => {
					this.swipperUrlList = res;
				});
			} else {
				this.GetCarouselData();

			}


			//获取经典推荐
			this.GetRecommendationData_Mock().then((res) => {
				this.RecommendationList = res;
			});


			this.GetFactoryProductData_Mock().then((res) => {
				this.FactoryProductList = res;
			});
		},
		methods: {
			//播放一个视频时，其他的停止
			playVideo(e) {	
				var me=this;
				 let videoId = e.currentTarget.dataset.videoid;
				me.videoContext=uni.createVideoContext(videoId);
				let videoArr=['video_1','video_2']
				videoArr.forEach(i=>{
					console.log(i)
					if(i!=videoId)
					{
						uni.createVideoContext(i).pause()
					}
				})
			},



			GetCarouselData_Mock() {
				return new Promise((res, rej) => {
					setTimeout(() => {
						let datas = [
							"https://www.motic-electric.com/upload/201506/2015062314402024.jpg",
							"https://www.motic-electric.com/upload/201508/201508111522.jpg",
							"https://www.motic-electric.com/upload/201508/201508111868.jpg",
							"https://www.motic-electric.com/upload/201506/20150623144408769.jpg"
						]
						res(datas);
					}, 500);
				})
			},

			GetCarouselData() {
				uni.request({
					url: `${common.serverUrl}/index/carousel/list`,
					method: "POST",
					success: (res) => {
						console.log(res)

					}
				});
			},


			GetRecommendationData_Mock() {
				return new Promise((res, rej) => {
					setTimeout(() => {
						let datas = common.RecommendationArray.filter(i => i.id > 0 && i.id < 8)
						res(datas);
					}, 500);
				})
			},
			changeRecommendation() {
				new Promise((res, rej) => {
					setTimeout(() => {

						let contains = [];
						for (let i = 0; i < 10000; i++) {
							let num = Math.floor(Math.random() * common.RecommendationArray.length);
							if (contains.indexOf(num) < 0) {
								contains.push(num);
							}
							if (contains.length >= 5) {
								break;
							}
						}
						this.RecommendationList = [];
						contains.forEach((item) => {
							this.RecommendationList.push(common.RecommendationArray[item]);

						})
					}, 500);
				})

			},
			GetFactoryProductData_Mock(index = 1) {
				return new Promise((res, rej) => {
					setTimeout(() => {
						let datas = common.RecommendationArray.filter(i => i.type == "Factory" && i.id >
							index * 10 && i.id <= index * 10 + 10)
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
			}, 
			
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
			
			
			//跳转到商品详情页面
			GoDetailPage(e) {
				let Id = e.currentTarget.dataset.detailid;
				//console.log(Id)
				uni.navigateTo({
					url: "../details/details?Id=" + Id,
				});
			},
			//图片预览
			LookPic(e) {
				let DetailSrc = e.currentTarget.dataset.detailsrc;

				uni.previewImage({
					urls: [DetailSrc],
				})
			}

		}
	}
</script>

<style>
	@import url("../../static/css/index.css");

	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;

	}

	.container {
		
		width: 100%;
		height: 100%;
		background: #f7f7f7;
display: flex;
	justify-content: center;
	flex-direction: column;
	}
</style>
