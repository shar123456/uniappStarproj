<template>
	<view class="modifyGenderContainer">
		<form  @submit="submitGender" style="width: 750upx;height: 300upx;border: 0px solid red;
		display: inline-flex;justify-content: center;">
			
			
		<view class="" style="width: 730upx;height: 300upx;border: 0px solid #dedede;
		display:inline-flex;justify-content:space-between;flex-direction: column;">
			<radio-group @change="radioChange" name="gender"
			style="height: 80upx;line-height: 80upx;margin-top: 0upx;
			width: 100%;"
			
			>
			                <label  style="display:flex;background-color:#FFFFFF;border-bottom: 1px solid #dedede;">
			                    <view>
			                        <radio value="男" :checked="gender=='男'" />
			                    </view>
			                    <view>男</view>
			                </label>
							<label  style="display:flex;background-color:#FFFFFF;">
							    <view>
							        <radio value="女"   :checked="gender=='女'"/>
							    </view>
							    <view>女</view>
							</label>
			            </radio-group>
			 
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
				gender:"",
				isShow:false
			}
		},
		onLoad() {
			let userInfo=uni.getStorageSync("GUserInfo");
			if(userInfo!=null&&userInfo!=""&&userInfo!=undefined)
			{
				this.gender=userInfo.gender;			
				
			}
		},
		methods:{
			async submitGender(e){
				
				let gender=e.detail.value.gender;
				console.log(gender)
				if(gender!="男"&&gender!="女")
				{
					uni.showToast({
						duration:1000,
						title:"请先选择性别.",
						icon:"error"
					})
					return;
				}
				this.isShow=true;
				uni.showLoading({
					mask:true,
					title:"正在提交中..."
				})
				await this.delayTime();
				
				let userInfo=uni.getStorageSync("GUserInfo");
				if(userInfo!=null&&userInfo!=""&&userInfo!=undefined)
				{
					userInfo.gender=gender;		
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
		radioChange(e){
			let genderT=e.detail.value;
			this.gender=genderT;
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
	.modifyGenderContainer{
		width: 100%;
		height: 100%;
		position: absolute;
		background-color: #f7f7f7;
	
	}
</style>
