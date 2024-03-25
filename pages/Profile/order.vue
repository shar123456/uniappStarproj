<template>
	<view class="orderContainer">
		<collectCom v-if="!showEmpty" v-for="(item) in collectArr" :key="item.id" :name="item.name"
			:cover="item.cover" :Id="item.id" /> 

		<view class="" v-if="showEmpty" style="width: 100%;color: #3B4144;display: flex;flex-direction: column;
					justify-content: center;height: 400upx;justify-content: center;">
					<image
					   style="width: 100%;height: 100%;"  src="https://res.iyiou.com/Public/Main/PC/images/kcb/null.png" mode=""></image>
			<view class="" style="width: 100%;text-align: center;">
				暂无订单信息.
			</view>
		</view>
		
		
		
		
		
		
		
		
		
		
		
	</view>
</template>

<script>
	/* 导入组件 */
	import collectCom from "../../components/collectCom.vue";

	export default {
		components: {
			collectCom
		},
		data() {
			return {
				collectArr: [],
				showEmpty: true
			}
		},
		onShow() {
			let CollectInfo =null;

			if (CollectInfo != null && CollectInfo != "" && CollectInfo != undefined) {
				this.collectArr = CollectInfo;
				this.showEmpty = false

			} else {
				this.collectArr = [];
				this.showEmpty = true
			}
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.orderContainer {
		width: 100%;
		height: 100%;
		/* position: absolute; */
		min-height: 100vh;
		background-color: #f7f7f7; 
		display: flex;
		flex-direction: row;
		

		flex-wrap: wrap;
		align-items: flex-start;
		align-content: flex-start;
	}
</style>

