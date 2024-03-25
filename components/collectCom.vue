<template name="collectCom" >
	<view class="" style="width: 350upx;height: 390upx;border: 1upx solid #dedede;margin-top: 15upx;
	background-color: #FFFFFF;margin-left: 16upx;display: flex;flex-direction: column;justify-content: center;
	align-items: center;">
		
		<view @click="GoDetailPage()" class="" style="width: 100%;height: 70%;border-bottom: 1px solid #eee;">
			<image style="width: 100%;height: 100%;" 
			:src="cover" mode=""></image>
			
		</view>
		<view class="" style="
		display: flex;align-items: center;justify-content: center;height: 30%;width: 90%;
		color: #3B4144;font-size: 30upx;font-weight:bold;">
			{{name}}
		</view>
		
	</view>
</template>

<script>
	export default {
		name:"collectCom",
		props:["name","cover","Id"],
		data() {
			return {
				
			};
		},
		methods:{
			//跳转到商品详情页面
			GoDetailPage(e) {
				let Id = this.Id;
				//console.log(Id)
				uni.navigateTo({
					url: "../details/details?Id=" + Id,
				});
			},
		}
		
	}
</script>

<style>
.collectContainer {
		width: 100vw;
		height: 100%;
		position: absolute; 
		background-color: #f7f7f7;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;

		flex-wrap: wrap;
		align-items: flex-start;
		align-content: flex-start;
	}
</style>
