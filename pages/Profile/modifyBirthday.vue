<template>
	<view class="modifyBirthdayContainer">
		<form  @submit="submitBirthday" style="width: 750upx;height: 280upx;border: 0px solid red;
		display: inline-flex;justify-content: center;">
			
			
		<view class="" style="width: 730upx;height: 280upx;border: 0px solid #dedede;
		display:inline-flex;justify-content: space-around;flex-direction: column;">
			<picker mode="date"  @change="dateChange" name="Birthday"
			style="background-color:#FFFFFF;height: 80upx;line-height: 80upx;margin-top: 20upx;
			width: 100%;">
				<view>{{Birthday}}</view>
			</picker>
			 
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
				Birthday:"",
				isShow:false
			}
		},
		onLoad() {
			let userInfo=uni.getStorageSync("GUserInfo");
			if(userInfo!=null&&userInfo!=""&&userInfo!=undefined)
			{
				
				if(userInfo.birthday!=null&&userInfo.birthday!=""&&userInfo.birthday!=undefined)
				{this.Birthday=userInfo.birthday;	}	
					else
					{
						this.Birthday="1990-01-01";	
					}
				
			}
		},
		methods:{
			async submitBirthday(e){
				this.isShow=true;
				uni.showLoading({
					mask:true,
					title:"正在提交中..."
				})
				await this.delayTime();
				let Birthday=e.detail.value.Birthday;
				let userInfo=uni.getStorageSync("GUserInfo");
				if(userInfo!=null&&userInfo!=""&&userInfo!=undefined)
				{
					userInfo.birthday=Birthday;		
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
		dateChange(e){
			let selectBirthday=e.detail.value;
			this.Birthday=selectBirthday;
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
	.modifyBirthdayContainer{
		width: 100%;
		height: 100%;
		position: absolute;
		background-color: #f7f7f7;
	
	}
</style>
