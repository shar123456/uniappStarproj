<template>
	<view class="uploadPicContainer">
		<view class="" style="width: 100%;height: 60%;;
		display: flex;justify-content: center;">
			<image style="border: 1px solid #f0f0f0" :src="avatarUrl" mode="scaleToFill"></image>		
		</view>
		<view class="" style="width: 100%;height: 100upx;border-top: 1px solid #dedede;
		position: fixed;bottom: 0;display: flex;justify-content: space-between;align-items: center;
		padding: 0upx;background-color: #f0f0f0;font-size: 36upx;font-weight: 500;">
			<view @click="reChoosePic" class="" style="width: 200upx;height: 100upx;border: 0px solid blue;
			display: flex;justify-content: center;align-items: center;">
				重新选择
			</view>
			<view @click="uploadPic" class="" style="width: 200upx;height: 100upx;border: 0px solid blue;
			display: flex;justify-content: center;align-items: center;">
				确认上传
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loadHCBtn: false,
				disabledHCBtn: false,
				loadTCBtn: false,
				disabledTCBtn: false,
				avatarUrl: ""
			}
		},
		onLoad(option) {
			this.avatarUrl=option.FilePath;
			console.log(this.avatarUrl)
		},
		methods:{
			reChoosePic(){
				let me =this;
				//从相册选择上传
				uni.chooseImage({
				    count: 1, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album','camera'], //从相册选择
				    success: function (res) {
						let urlTemp=res.tempFilePaths[0];
						me.avatarUrl=urlTemp;
				    }
				});
			},
			uploadPic(){
				let me =this;
				uni.showLoading({title:"正在上传..."})
				let userInfo=uni.getStorageSync("GUserInfo");
				userInfo.avatarUrl=me.avatarUrl;
				uni.setStorageSync("GUserInfo",userInfo)
				uni.hideLoading(); //隐藏loading提示框
				uni.switchTab({
					url:"./Profile"
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
	.uploadPicContainer{
		width: 100%;
		height: 100%;
		background-color: #f7f7f7;
		position: absolute;
	}
</style>
