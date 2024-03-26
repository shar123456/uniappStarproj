<template>


	<view class="container">
<van-button type="default">默认按钮</van-button>
<van-button type="primary">主要按钮</van-button>
<van-button type="info">信息按钮</van-button>
<van-button type="warning">警告按钮</van-button>
<van-button type="danger">危险按钮</van-button>


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
				<input style="height: 100%;" @confirm="searchBtnTo" confirm-type="search" focus ref="searchTxt"
					placeholder="搜索商品" maxlength="20" />
			</view>
		</view>
		<!-- 搜索 end -->


		<!-- 内容1 -->
		<view v-if="IsShowSearchRecommend" class="" style="border: 0px solid red;margin-top: 128upx;">
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
				font-size: 34upx;color: #72b0ca;font-weight: 500;" @click="clickSearchCategory('jx')">
					教学显微镜
				</view>
				<view class="" style="160upx;margin-left: 20upx;padding: 10upx;
				font-size: 34upx;color: #72b0ca;font-weight: 500;" @click="clickSearchCategory('sy')">
					实验显微镜
				</view>
				<view class="" style="160upx;margin-left: 20upx;padding: 10upx;
				font-size: 34upx;color: #72b0ca;font-weight: 500;" @click="clickSearchCategory('kx')">
					科学研究显微镜
				</view>
				<view class="" style="160upx;margin-left: 20upx;padding: 10upx;
				font-size: 34upx;color: #72b0ca;font-weight: 500;" @click="clickSearchCategory('yl')">
					医疗显微镜
				</view>
				<view class="" style="160upx;margin-left: 20upx;padding: 10upx;
				font-size: 34upx;color: #72b0ca;font-weight: 500;" @click="clickSearchCategory('gj')">
					高精显微镜
				</view>
				<view class="" style="160upx;margin-left: 20upx;padding: 10upx;
				font-size: 34upx;color: #72b0ca;font-weight: 500;" @click="clickSearchCategory('zn')">
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

			<view class="" v-for="item in FactoryProductList" :key="item.id"
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
							<image style="width: 100%;height: 100%;" src="../../static/images/collectHL.png" mode="">
							</image>
						</view>

					</view>
					<scoreCom :score="item.score" :showNumber="showNumber" />
				</view>
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
		onLoad() {


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
			GetFactoryProductData_Mock(index = 1) {
				return new Promise((res, rej) => {
					setTimeout(() => {
						let datas = common.RecommendationArray.filter(i => i.type == "Factory" && i.id >
							index * 10 && i.id <= index * 10 + 10)
						res(datas);
					}, 500);
				})
			},
			clickSearchCategory(e) {
				
				
				
				//console.log(Id)
				uni.navigateTo({
				    url: "../Search/SearchPart?categoryTemp="+e+'&searchType=category',
				});
				
				/* uni.showLoading({
					title: "loading..."
				})
				uni.showNavigationBarLoading();
				this.IsShowSearchRecommend = false;
				this.GetFactoryProductData_Mock().then((res) => {
					this.FactoryProductList = res;
					uni.hideNavigationBarLoading();
					uni.hideLoading(); //隐藏loading提示框
				}); */
				
				
				/* uni.showModal({
				    title: '提示',
				    content: '暂不支持，该功能正在完善...',
				    success: function (res) {
				        if (res.confirm) {
				            console.log('用户点击确定');
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
				 */
				

			},
			searchBtn(e) {
				let txtValue = e.detail.value;

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
							this.IsShowSearchRecommend = false;
							this.FactoryProductList = datas;
						} else {
							this.IsShowSearchRecommend = true;
							this.showEmpty = true;
						}
						res(datas);
					}, 500);
				})
			},
			searchBtnTo(e) {
				let txtValue = e.detail.value;			
				this.keyWord = txtValue;
				
				//console.log(Id)
				uni.navigateTo({
				    url: "../Search/SearchPart?keyWord="+txtValue,
				});
				
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
