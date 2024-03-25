<template>
	<view class="prePic">
		<image :src="cover" mode="widthFix" @longpress="operateImage">
		</image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cover: ""
			}
		},
		onLoad(option) {
			this.cover = option.cover;
			console.log("showpic")
			//通过api修改导航栏的属性
			uni.setNavigationBarColor({
				frontColor: "#ffffff",
				backgroundColor: "#000000"
			});
		},
		methods: {
operateImage(){
	let me=this;
	uni.showActionSheet({
	    //itemList: ['下载图片', 'B', 'C'],
		itemList: ['下载图片'],
	    success: function (res) {
	        //console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
			  console.log(me.cover)
			if(res.tapIndex==0){
				uni.showLoading({
				    title: '图片保存中',
				});
				
				uni.downloadFile({
				    url: me.cover, //仅为示例，并非真实的资源
				    success: (res) => {
						let tempFilePaths=res.tempFilePath;
				       console.log(tempFilePaths)
					   uni.saveImageToPhotosAlbum({
					               filePath: res.tempFilePaths,
					               success: function () {
					                  uni.showToast({
					                  	title:"保存成功",
										duration:2000
					                  })
					               }
					           });
					   
					   
					   
				    },
					complete() {
						uni.hideLoading();
					}
				});
				
			}
	    },
	    fail: function (res) {
	        console.log(res.errMsg);
	    }
	});
}
		}
	}
</script>

<style>
	.prePic {
		width: 100%;
		height: 100vh;
		background-color: black;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
