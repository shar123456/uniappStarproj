<template name="scoreCom">
	<view class="" style="width: 100%;display: flex;flex-direction: row;justify-content:flex-start;border: 0px solid red;
	margin-top: 3upx;">


	<image v-for="(item132,index) in yellowScore" :key="index" style="width: 30upx;height: 30upx;"
			src="../../static/images/starHL.png" mode=""></image> 
		<!-- 	<image style="width: 30upx;height: 30upx;" src="../../static/images/starHL.png" mode=""></image>
		<image style="width: 30upx;height: 30upx;" src="../../static/images/starHL.png" mode=""></image>
		<image style="width: 30upx;height: 30upx;" src="../../static/images/starHL.png" mode=""></image> -->
	<image v-for="(item5,indexs) in greyScore" style="width: 30upx;height:30upx;" src="../../static/images/star.png"
			mode=""></image> 
		<view class="" style="font-size: 12px;color: grey;margin-left: 9upx;" v-if="showNumber==1">
			{{score}}分
		</view>
	</view>
</template>

<script>
	export default {
		name: "scoreCom",
		//props:["score"],
		props: {
			score: {
				type: String
			},
			showNumber: {
				type: Number,
				required: false,
				default: 0
			}
		},
		data() {
			return {
				yellowScore: 0,
				greyScore: 5
			}
		},
		
		created() {
			var scroreTemp = 0;
			console.log(this.score)
			if (this.score != null && this.score != undefined && this.score != "") {
				scroreTemp = this.score;
			}
			this.yellowScore = parseInt(scroreTemp / 2);
			this.greyScore = 5 - this.yellowScore;
		},
		methods: {

		}
	}
</script>

<style>

</style>
