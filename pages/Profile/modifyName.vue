<template>
	<view class="modifyNameContainer">
		<form  @submit="submitNickName" style="width: 750upx;height: 280upx;border: 0px solid red;
		display: inline-flex;justify-content: center;">
			
			
		<view class="" style="width: 730upx;height: 280upx;border: 0px solid #dedede;
		display:inline-flex;justify-content: space-around;flex-direction: column;">
			<input type="text" :value="nickName" placeholder="请输入昵称" placeholder-class="graywords;"
			style="background-color:#FFFFFF;height: 80upx;line-height: 80upx;margin-top: 20upx;
			width: 100%;"
			maxlength="12" name="nickname"
			 />
			 
			<button type="primary" :loading="isShow" form-type="submit"
			style="width: 100%;">提交</button>
		</view>
		</form>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				nickName:"",
				isShow:false
			}
		},
		onLoad() {
			let userInfo=uni.getStorageSync("GUserInfo");
			if(userInfo!=null&&userInfo!=""&&userInfo!=undefined)
			{
				this.nickName=userInfo.user;			
				
			}
		},
		methods:{
			async submitNickName(e){
				this.isShow=true;
				uni.showLoading({
					mask:true,
					title:"正在提交中..."
				})
				await this.delayTime();
				let nickName=e.detail.value.nickname;
				let userInfo=uni.getStorageSync("GUserInfo");
				if(userInfo!=null&&userInfo!=""&&userInfo!=undefined)
				{
					userInfo.user=nickName;		
				    uni.setStorageSync("GUserInfo",userInfo)				
				}
				uni.hideLoading()
				this.isShow=false;
				uni.navigateBack({
					delta:1
				})
				
			}
		
		
		,
		delayTime(){
			return new Promise((res,jec)=>{
				setTimeout(()=>{
					res(true)
				},1100)
			})
		},
		}
	}
	
	
</script>

<style>
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	.modifyNameContainer{
		width: 100%;
		height: 100%;
		position: absolute;
		background-color: #f7f7f7;
	
	}
</style>
