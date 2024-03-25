<template>
	<view class="profileContainer">
		
	<!-- 	head -->
		
		
		<view class="" style="width: 100%;height: 180upx;
		border: 1px solid #eee;background-color: #FFFFFF;display: flex;
		border-top: 0px;">
			
			<view class="" style="height: 100%;width: 25%; border: 0px solid red;
			display: flex;justify-content: center;align-items: center;">
			
				<image v-if="!isUserLogin" style="width: 65%;height: 65%;border-radius: 50%;border: 0px solid #eee;" src="../../static/images/avator.png" mode=""></image>
			
			<image v-else @click="goToMine"   style="width: 65%;height: 65%;border-radius: 50%;border: 0px solid #eee;" 
			:src="avatarUrl" mode=""></image>
			
			
			</view>
			<view class="" style="height: 100%;width: 50%; border: 0px solid red;
			display: flex;justify-content: center;align-items: center;">
			
		
				<view v-if="isUserLogin" class="" style="width: 100%;height: 60%;border: 0px solid red;
				display: flex;flex-direction: column;justify-content: space-around;">
					
					<view class="" style="font-size: 35upx;font-weight: 400;
					color: #4b5256;">
						{{userName}}
					</view>
					<view class="" style="font-size: 35upx;font-weight: 400;
					color: #4b5256;">
						ID&nbsp;:<text style="margin-left: 6upx;">Mo{{userId}}</text>
					</view>
				</view>
				
				<view v-else class="" style="width: 100%;height: 60%;border: 0px solid red;
				display: flex;flex-direction: column;justify-content: space-around;">
						<navigator url="./login">
							<view class="" style="font-size: 35upx;font-weight: 400;
							color: #4b5256;">
								登录/注册
							</view>
						</navigator>
					
					
					
					
				</view>
				
				
			</view>
			<view class="" style="height: 100%;width: 25%; border: 0px solid red;
			padding-top: 20upx;padding-right: 20upx;display: flex;justify-content: flex-end;">
			<navigator  v-if="isUserLogin" url="./mine" style="width: 31%;height: 31%;border: 0px solid red;">
				<image style="width: 100%;height: 100%;" src="../../static/images/setting.png" mode=""></image>
			</navigator>
					
			</view>
			
		</view>
		
			<!-- 	head  end -->
		
		<view class="" style="width: 100%;;
		border: 1px solid #eee;background-color: #FFFFFF;display: flex;
		border-top: 0px;margin-top: 15upx;flex-direction: column;">
		
		
		<view class="" style="width: 100%;height: 100upx;border-bottom: 1px solid #f7f7f7;
		padding:5upx;
		display: flex;">		
			<view class="" style="border: 0px solid red;width: 100upx;
			display: flex;justify-content: center;align-items: center;">
				<image @click="funcClick('kf')" style="width: 55%;height: 55%;" src="../../static/images/kf.png" mode=""></image>
			</view>
			<view @click="funcClick('kf')" class="" style="flex-grow: 1;display: flex;
			justify-content:flex-start;align-items: center;letter-spacing: 3upx;
			color: #3B4144;">
				联系客服
			</view>
			<view  @click="funcClick('kf')" class="" style="border: 0px solid red;width: 80upx;
			display: flex;justify-content: center;align-items: center;">
				<image style="width: 45%;height: 45%;" src="../../static/images/rightarrow.png" mode=""></image>
			</view>		
		</view>
		
		
		
		
		<view class="" style="width: 100%;height: 100upx;border-bottom: 1px solid #f7f7f7;
		padding:5upx;
		display: flex;">		
			<view class="" style="border: 0px solid red;width: 100upx;
			display: flex;justify-content: center;align-items: center;">
				<image @click="funcClick('order')" style="width: 55%;height: 55%;" src="../../static/images/order.png" mode=""></image>
			</view>
			<view @click="funcClick('order')" class="" style="flex-grow: 1;display: flex;
			justify-content:flex-start;align-items: center;letter-spacing: 3upx;
			color: #3B4144;">
				订单管理
			</view>
			<view  @click="funcClick('order')" class="" style="border: 0px solid red;width: 80upx;
			display: flex;justify-content: center;align-items: center;">
				<image style="width: 45%;height: 45%;" src="../../static/images/rightarrow.png" mode=""></image>
			</view>		
		</view>
		
		<view class="" style="width: 100%;height: 100upx;border-bottom: 1px solid #f7f7f7;
		padding:5upx;
		display: flex;">		
			<view class="" style="border: 0px solid red;width: 100upx;
			display: flex;justify-content: center;align-items: center;">
				<image @click="funcClick('address')" style="width: 55%;height: 55%;" src="../../static/images/address.png" mode=""></image>
			</view>
			<view @click="funcClick('address')" class="" style="flex-grow: 1;display: flex;
			justify-content:flex-start;align-items: center;letter-spacing: 3upx;
			color: #3B4144;">
				地址管理
			</view>
			<view  @click="funcClick('address')" class="" style="border: 0px solid red;width: 80upx;
			display: flex;justify-content: center;align-items: center;">
				<image style="width: 45%;height: 45%;" src="../../static/images/rightarrow.png" mode=""></image>
			</view>		
		</view>
		
		<view class="" style="width: 100%;height: 100upx;border-bottom: 1px solid #f7f7f7;
		padding:5upx;
		display: flex;">		
			<view class="" style="border: 0px solid red;width: 100upx;
			display: flex;justify-content: center;align-items: center;">
				<image @click="funcClick('collect')" style="width: 55%;height: 55%;" src="../../static/images/collect1.png" mode=""></image>
			</view>
			<view @click="funcClick('collect')" class="" style="flex-grow: 1;display: flex;
			justify-content:flex-start;align-items: center;letter-spacing: 3upx;
			color: #3B4144;">
			收藏
			</view>
			<view  @click="funcClick('collect')" class="" style="border: 0px solid red;width: 80upx;
			display: flex;justify-content: center;align-items: center;">
				<image style="width: 45%;height: 45%;" src="../../static/images/rightarrow.png" mode=""></image>
			</view>		
		</view>
		
		
		<view class="" style="width: 100%;height: 100upx;border-bottom: 1px solid #f7f7f7;
		padding:5upx;
		display: flex;">		
			<view class="" style="border: 0px solid red;width: 100upx;
			display: flex;justify-content: center;align-items: center;">
				<image @click="funcClick('about')" style="width: 55%;height: 55%;" src="../../static/images/about.png" mode=""></image>
			</view>
			<view @click="funcClick('about')" class="" style="flex-grow: 1;display: flex;
			justify-content:flex-start;align-items: center;letter-spacing: 3upx;
			color: #3B4144;">
			关于我们
			</view>
			<view  @click="funcClick('about')" class="" style="border: 0px solid red;width: 80upx;
			display: flex;justify-content: center;align-items: center;">
				<image style="width: 45%;height: 45%;" src="../../static/images/rightarrow.png" mode=""></image>
			</view>		
		</view>
		
		
		
		
			
		</view>
		
		
		
		
		
		
		
		
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isUserLogin:false,
				userName:"",
				userId:"",
				avatarUrl:"http://img.duoziwang.com/2018/17/05232038720859.jpg"
			}
		},
		onShow() {
			let userInfo=uni.getStorageSync("GUserInfo");
			if(userInfo!=null&&userInfo!=""&&userInfo!=undefined)
			{
				this.isUserLogin=true;			
				this.userName=userInfo.user;
				this.userId= userInfo.userId;
				this.avatarUrl= userInfo.avatarUrl;
			}
			else
			{
				this.isUserLogin=false;
				this.userName="";
				this.userId= "";
				this.avatarUrl="http://img.duoziwang.com/2018/17/05232038720859.jpg"
			}
		},
		methods: {
			funcClick(para){
				//console.log(para)
				if(!this.isUserLogin)
				{
					uni.showToast({
						icon:"error",
						duration:1500,
						title:"请先登录."
					})
				}
				else
				{
					
					if(para=="about")
					{
						uni.navigateTo({
							url:"./about"
						})
						return;
					}
					if(para=="collect")
					{
						uni.navigateTo({
							url:"./collect"
						})
						return;
					}
					
					
					if(para=="kf")
					{
						uni.makePhoneCall({
						    phoneNumber: '15985830143s' //仅为示例
						});
						return;
					}
					if(para=="address")
					{
						uni.navigateTo({
							url:"./address"
						})
						return;
					}
					if(para=="order")
					{
						uni.navigateTo({
							url:"./order"
						})
						return;
					}
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
		
		,goToMine(){
			uni.navigateTo({
				url:"mine"
			})
		}
		
		}
	}
</script>

<style>
*{
	margin: 0;
	padding: 0;;
	box-sizing: border-box;
}
.profileContainer{
	width: 100%;
	height: 100%;
	background: #f7f7f7;
	display: flex;
	
	flex-direction: column;
	position: absolute;
	
}
</style>
