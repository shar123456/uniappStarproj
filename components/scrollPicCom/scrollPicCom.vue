<template>
	<view style="width: 100%;height: 300upx;border: 0px solid #eee;
	display: flex;flex-direction: column;margin-bottom: 15upx;margin-top: 15upx;">
		<view class="" style="border: 0px solid red;height: 70upx;line-height: 70upx;
		color: grey;">
			商品图文
		</view>
		
		<scroll-view scroll-x="true" style="border-top: 1px solid #f8f8f8;flex-grow: 1;width: 100%;white-space: nowrap;" >	
			<view v-for="(item,index) in picList" :key="index" class="" style="height: 100%;width: 220upx;display: inline-block;
			height: 100%;border: 0px solid red;margin-right: 15upx;">				
			<image style="width: 100%;height: 100%;" :src="item" class="carousel"></image>
			</view>
			
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name:"scrollPicCom",
		data() {
			return {
				picList:["http://ku.90sjimg.com/element_origin_min_pic/18/07/26/1ccfac59da49ef573936fca239e2b16d.jpg",
				"http://img63.chem17.com/9/20140728/635421449392132785993.jpg",
				"http://www.bioon.com.cn/ewebeditor/fckup/2014/11/20141119151503137397.jpg",
				"http://www.shangguang.com/upfile/2016/05/20160520032319_876.jpg",
				"http://www.bioon.com.cn/ewebeditor/fckup/2014/11/20141117144519625852.jpg"]
			};
		}
	}
</script>

<style>

</style>
