<template>
	<view class="addressContainer">
		
		<view v-for="(item) in addressList" :key="item.id" class="" style="width: 97%;height: 170upx;border: 1px solid #ececec;
		background-color: #fffffb;margin-bottom: 7upx;margin-top: 1upx;
		display: flex;border-radius: 15upx;flex-shrink: 0;">
			
			<view class="" style="width: 85%;height: 100%;border-bottom: 0px solid #555555;
			display: flex;flex-direction: column;align-items: center;">
				<view class="" style="width: 98%;height: 45%;border-bottom: 1px solid #efefef;
				display: flex;align-items: center;overflow: hidden;color:#3B4144;font-size: 36upx;
				padding-left: 10upx;">
					{{item.name}}  {{item.phone}}   <text v-if="item.isDefault" style="margin-left: 35upx;font-size: 27upx;color: white;border: 1px solid red;background-color: red;border-radius: 15upx;padding:3upx">默认</text>
				</view>
				<view class="" style="height: 55%;border: 0px solid blue;
				word-wrap:break-word; width: 98%;color:#3B4144;font-size: 29upx;
				display: flex;align-items: center;padding-left: 10upx;">
					{{item.addressH==undefined||item.addressH==""?"未选择":item.addressH}}
				</view>
			</view>
			<view class="" style="width: 15%;height: 100%;border: 0px solid red;
			display: flex;justify-content: center;align-items: center;">
				<image @click="midifyAddress(item.id)" style="width: 50%;height: 50%;" src="../../static/images/modify.png" mode=""></image>
			</view>
		</view>
		
		
		<view style="width: 100%;;border: 0px solid red;position: fixed;
		bottom: 80upx;display: flex;justify-content: center;">
			  <button @click="midifyAddress('-1')" style="width: 90%;" type="primary">新增</button>
		</view>
		
	</view>
</template>

<script>
	import common from "../../static/js/common.js";
	export default{
		data(){
			return{
				addressList:[]
			}
			
		},
		onLoad() {
			  console.log(this.$store.state.addressDatas)
			this.addressList=this.$store.state.addressDatas;
		}
	,
	methods:{
		midifyAddress(_addressId){
			let AddressId=_addressId;
			let Mtype="mod";
			if(AddressId=="-1")
			{
				Mtype="add";
			}
			uni.navigateTo({
				url:"modifyAddress?AddressId="+AddressId+"&Mtype="+Mtype
			})
			return;
			uni.showModal({
			    title: '提示',
			    content: '该功能正在完善,稍后发布...',
			    success: function (res) {
			        if (res.confirm) {
			            console.log('用户点击确定');
			        } else if (res.cancel) {
			            console.log('用户点击取消');
			        }
			    }
			});
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
	.addressContainer{
		width: 100%;
		height: 76vh;
		
		background-color:  #f7f7f7;;
		display:flex;
		flex-direction: column;
		align-items: center;
		
		overflow-y: auto;
	}
</style>
