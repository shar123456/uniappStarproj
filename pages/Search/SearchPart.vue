<template>


	<view class="container">



		<!-- 搜索 -->
		<view class="Up" style="background: #f7f7f7;width: 100%;height: 90upx;border: 0px solid red;display: flex;
		flex-direction: row;align-items: center;padding-left: 15upx;padding-right: 15upx;
		z-index: 1;position: fixed;top:100;">
			<view class="Up-L"
				style="background-color: #eaeaea;display: flex;align-items: center;justify-content: center;width: 100upx;height: 100%;border-right: 1px solid #dedede;">
				<image style="width: 70%;height: 70%;" src="../../static/images/searchIcon.png" mode=""></image>
			</view>
			<view class="Up-R" style="background-color: #eaeaea;flex-grow: 1;height: 100%;border: 0px solid blue;padding-left: 10upx;
			font-size: 14px;">
				<input style="height: 100%;" @confirm="searchBtn" confirm-type="search" focus ref="searchTxt"
					placeholder="搜索商品" maxlength="20" />
			</view>
		</view>
		<!-- 搜索 end -->


		<!-- 内容1 -->
		<view v-if="false" class="" style="border: 0px solid red;margin-top: 128upx;">
			<view class="" v-if="showEmpty" style="width: 100%;color: red;display: flex;
			justify-content: center;">
				未检索到任何数据.
			</view>
			<view class="" style="border: 0px solid red;width: 100%;
			font-size: 30upx;color: grey;padding-left: 15upx;margin-top: 158upx;">
				分类：
			</view>
			<view class="" style="width: 100%;border: 0px solid red;
			display: flex;justify-content: flex-start;flex-wrap: wrap;">
				<view class="" style="160upx;margin-left: 20upx;padding: 10upx;
				font-size: 34upx;color: #72b0ca;font-weight: 500;" @click="clickSearchCategory">
					教学显微镜
				</view>
				<view class="" style="160upx;margin-left: 20upx;padding: 10upx;
				font-size: 34upx;color: #72b0ca;font-weight: 500;" @click="clickSearchCategory">
					实验显微镜
				</view>
				<view class="" style="160upx;margin-left: 20upx;padding: 10upx;
				font-size: 34upx;color: #72b0ca;font-weight: 500;" @click="clickSearchCategory">
					科学研究显微镜
				</view>
				<view class="" style="160upx;margin-left: 20upx;padding: 10upx;
				font-size: 34upx;color: #72b0ca;font-weight: 500;" @click="clickSearchCategory">
					医疗显微镜
				</view>
				<view class="" style="160upx;margin-left: 20upx;padding: 10upx;
				font-size: 34upx;color: #72b0ca;font-weight: 500;" @click="clickSearchCategory">
					高精显微镜
				</view>
				<view class="" style="160upx;margin-left: 20upx;padding: 10upx;
				font-size: 34upx;color: #72b0ca;font-weight: 500;" @click="clickSearchCategory">
					智能显微镜
				</view>

			</view>


			<view class="" style="border: 0px solid red;width: 100%;
			font-size: 30upx;color: grey;padding-left: 15upx;margin-top: 30upx;">
				搜索热门商品：
			</view>
			<view class="" style="border: 0px solid red;width: 100%;;
			  display: flex;flex-direction: row;
			  flex-wrap: wrap;justify-content: flex-start;">
				<view v-for="(item,index) in RecommendationList" :key="item.id" class="" style="width: 33%;height: 240upx;border: 0px solid #f1f7f9;
				">
					<view class="" style="width: 100%;height: 100%;;
					display: flex;justify-content: center;align-items: center;">
						<image @click="GoDetailPage" :data-DetailId="item.id" :src="item.cover"
							style="width: 90%;height: 90%;border: 1px solid #f1f7f9">
					</view>
				</view>
			</view>
		</view>
		<!-- 内容1 end -->


		<!-- 内容 -->
		<view v-else class="" style="border: 0px solid red;margin-top: 90upx;
		width: 100%;;
		display: flex;flex-direction: row;
		flex-wrap: wrap;justify-content: flex-start;">

			<view v-if="!showEmpty" class="" v-for="item in FactoryProductList" :key="item.id"
				style="width: 49.5%;box-sizing: border-box;padding: 10upx;height: 550upx;border: 0px solid blue;;display: flex;justify-content: flex-start;flex-direction: column;">
				<view class="" style="width: 100%;height: 350upx;border: 1px solid #f1f7f9;">
					<image  @click="GoDetailPage" :data-DetailId="item.id" :src="item.cover" style="width: 100%;height: 100%;">
				</view>
				<view class="" style="width: 100%;height: 200upx;border: 1px solid #f1f7f9;
				box-sizing: border-box;padding: 10upx;;
				">
					<view class="" style="width: 100%;font-size: 30upx;font-weight: bold;
					">
						{{item.name}}
					</view>
					<view class="" style="width: 100%;height: 60upx;
					display: flex;justify-content: space-between;align-items: center;border: 0px solid red;">
						<view class="" style="color: red;font-weight: bold;">
							￥<text style="font-size: 31upx;"> {{item.price}}</text>
						</view>
						<view class="" style="width: 10%;height: 40upx;">
							<image @click="collect(item.id)" style="width: 100%;height: 100%;" src="../../static/images/collectHL.png" mode="">
							</image>
						</view>

					</view>
					<scoreCom :score="item.score" :showNumber="showNumber" />
				</view>
			</view>



            <view class="" v-if="showEmpty" style="width: 100%;color: #3B4144;display: flex;
			justify-content: center;margin-top: 50upx;">
				未检索到任何数据.
			</view>





		</view>





		<!-- 内容 end -->
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
				IsShowSearchRecommend: false,
				showNumber: 1,
				RecommendationList: [],
				FactoryProductList: [],
				keyWord: "",
				currentPage: 0,
				showEmpty: false
			}
		},
		onShow(e) {

			this.IsShowSearchRecommend = true;
			this.showEmpty = false;
			if (this.IsShowSearchRecommend) {
				//获取经典推荐
				this.changeRecommendation();
				//获取uniapp组件内的文本框 
				this.$refs.searchTxt?.$refs.input.focus();
			}


		},
		onLoad(option) {
this.keyWord=option.keyWord;
let categoryTemp=option.categoryTemp

if(option.searchType=='category')
{
	
	uni.showLoading({
		title: "loading..."
	})
	uni.showNavigationBarLoading();
	this.IsShowSearchRecommend = false;
	this.GetFactoryProductData_Mock(1,categoryTemp).then((res) => {
		
		if (res.length > 0) {
			this.IsShowSearchRecommend = false;
			this.FactoryProductList = res;
		} else {
			this.IsShowSearchRecommend = true;
			this.showEmpty = true;
		}
		
		
		
		uni.hideNavigationBarLoading();
		uni.hideLoading(); //隐藏loading提示框
	});
}else
{
	this.searchBtn(this.keyWord);
}

			// this.GetFactoryProductData_Mock().then((res) => {
			// 	this.FactoryProductList = res;
			// });





		},
		//上拉触发
		onReachBottom() {
			uni.showLoading({
				title: "loading..."
			})
			uni.showNavigationBarLoading();
			let txtValue = this.keyWord;


			this.currentPage = this.currentPage + 1;
			let index = this.currentPage;
			console.log(index)

			new Promise((res, rej) => {
				setTimeout(() => {
					let datas = common.RecommendationArray.filter(i => i.name.indexOf(txtValue) > 0 && i
						.id >
						index * 10 && i.id <= index * 10 + 10)

					if (datas.length > 0) {
						console.log("上拉加载")
						this.FactoryProductList = this.FactoryProductList.concat(datas);
					} else {

						console.log("没有更多了")
					}
					uni.hideNavigationBarLoading();
					uni.hideLoading(); //隐藏loading提示框
					res(datas);
				}, 500);
			})
		},
		methods: {
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
			GetFactoryProductData_Mock(index = 1,category="") {
				return new Promise((res, rej) => {
					setTimeout(() => {
						console.log(category)
						if(category!="")
						{
						let datas = common.RecommendationArray.filter(i => i.category == category)
						res(datas);	
						}
						else
						{
							let datas = common.RecommendationArray.filter(i => i.type == "Factory" && i.id >
								index * 10 && i.id <= index * 10 + 10)
							res(datas);
						}
						
					}, 500);
				})
			},
			clickSearchCategory() {
				uni.showLoading({
					title: "loading..."
				})
				uni.showNavigationBarLoading();
				this.IsShowSearchRecommend = false;
				this.GetFactoryProductData_Mock().then((res) => {
					this.FactoryProductList = res;
					uni.hideNavigationBarLoading();
					uni.hideLoading(); //隐藏loading提示框
				});

			},
			searchBtn(e) {
				let me =this;
				uni.showLoading()
				uni.showNavigationBarLoading(); //在头部导航栏上显示加载中的提示
				let txtValue="";
				if(e.detail)
				{
					 txtValue = e.detail.value;
				}
				else{
					txtValue=e;
				}

				this.keyWord = txtValue;
				let index = 0;
				this.currentPage = 0;
				this.FactoryProductList = [];
				new Promise((res, rej) => {
					setTimeout(() => {
						let datas = common.RecommendationArray.filter(i => i.name.indexOf(txtValue) >= 0 &&
							i.id >
							index * 10 && i.id <= index * 10 + 10)

						if (datas.length > 0) {
							me.IsShowSearchRecommend = false;
							me.FactoryProductList = datas;
							me.showEmpty = false;
						} else {
							me.IsShowSearchRecommend = true;
							me.showEmpty = true;
							console.log(me.showEmpty)
						}
						res(datas);
						uni.hideNavigationBarLoading();
						uni.hideLoading(); //隐藏loading提示框
					}, 500);
				})
				
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
				    url: "../details/details?Id="+Id,
				});
			}
		}
	}
</script>

<style>
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;

	}

	.container {
		width: 100%;
		height: 100%;
		position: absolute;

	}
</style>
