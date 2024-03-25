<template>
	<view class="mineContainer">
		
		<view class="" style="width: 100%;height: 0upx;border: 0px solid red;">			
			
			<view class="" style="width: 100%;height: 120upx;border-bottom: 1px solid #f7f7f7;
			padding:5upx;
			display: flex;">					
				<view @click="funcClick('tx')" class="" style="border: 0px solid red;flex-grow: 1;display: flex;
				justify-content:flex-start;align-items: center;letter-spacing: 3upx;
				padding-left: 10upx;
				color: #3B4144;">
					头像
				</view>
				<view @click="funcClick('tx')" class="" style="border: 0px solid red;width: 100upx;
				display: flex;justify-content:flex-end;align-items: center;">
					<image style="width: 65%;height: 65%;border-radius: 50%;" 
					:src="avatarUrl" mode=""></image>
				</view>
				<view  @click="funcClick('tx')" class="" style="border: 0px solid red;width: 80upx;
				display: flex;justify-content: center;align-items: center;">
					<image style="width: 35%;height: 35%;" src="../../static/images/rightarrow.png" mode=""></image>
				</view>		
			</view>
			
			
			<view class="" style="width: 100%;height: 120upx;border-bottom: 1px solid #f7f7f7;
			padding:5upx;
			display: flex;">					
				<view @click="funcClick('nc')" class="" style="border: 0px solid red;flex-grow: 1;display: flex;
				justify-content:flex-start;align-items: center;letter-spacing: 3upx;
				padding-left: 10upx;
				color: #3B4144;">
					昵称
				</view>
				<view @click="funcClick('nc')" class="" style="border: 0px solid red;width: 100upx;
				display: flex;justify-content:flex-end;align-items: center;color: grey;
				width: 270upx;">
						{{nickName}}
				</view>
				<view  @click="funcClick('nc')" class="" style="border: 0px solid red;width: 80upx;
				display: flex;justify-content: center;align-items: center;">
					<image style="width: 35%;height: 35%;" src="../../static/images/rightarrow.png" mode=""></image>
				</view>		
			</view>
			
			
			
			<view class="" style="width: 100%;height: 120upx;border-bottom: 1px solid #f7f7f7;
			padding:5upx;
			display: flex;">					
				<view @click="funcClick('sr')" class="" style="border: 0px solid red;flex-grow: 1;display: flex;
				justify-content:flex-start;align-items: center;letter-spacing: 3upx;
				padding-left: 10upx;
				color: #3B4144;">
					生日
				</view>
				<view @click="funcClick('sr')" class="" style="border: 0px solid red;width: 100upx;
				display: flex;justify-content:flex-end;align-items: center;color: grey;
				width: 270upx;">
						{{birthday}}
				</view>
				<view  @click="funcClick('sr')" class="" style="border: 0px solid red;width: 80upx;
				display: flex;justify-content: center;align-items: center;">
					<image style="width: 35%;height: 35%;" src="../../static/images/rightarrow.png" mode=""></image>
				</view>		
			</view>
			
			
			<view class="" style="width: 100%;height: 120upx;border-bottom: 1px solid #f7f7f7;
			padding:5upx;
			display: flex;">					
				<view @click="funcClick('xb')" class="" style="border: 0px solid red;flex-grow: 1;display: flex;
				justify-content:flex-start;align-items: center;letter-spacing: 3upx;
				padding-left: 10upx;
				color: #3B4144;">
					性别
				</view>
				<view @click="funcClick('xb')" class="" style="border: 0px solid red;width: 100upx;
				display: flex;justify-content:flex-end;align-items: center;color: grey;
				width: 270upx;">
						{{gender}}
				</view>
				<view  @click="funcClick('xb')" class="" style="border: 0px solid red;width: 80upx;
				display: flex;justify-content: center;align-items: center;">
					<image style="width: 35%;height: 35%;" src="../../static/images/rightarrow.png" mode=""></image>
				</view>		
			</view>
			
			
			
		</view>
		
		
		<view class="" style="width: 100%;height: 200upx;border:0px solid #dedede;
		position: fixed;bottom: 0;display: flex;flex-direction: column;justify-content: space-around;">
			 <button style="width: 100%;" :loading="loadHCBtn" :disabled="disabledHCBtn" @click="clearStorage" type="default">清理缓存</button>
			  <button style="width: 100%;" :loading="loadTCBtn" :disabled="disabledTCBtn" @click="logOut" type="default">退出登录</button>
		</view>
	</view>
	
	</template>




<script>
	export default {
		data() {
			return {
				loadHCBtn:false,
				disabledHCBtn:false,
				loadTCBtn:false,
				disabledTCBtn:false,
				avatarUrl:"",
				nickName:"",
				birthday:"",
				gender:""
			}
		},
		onShow() {
			let userInfo=uni.getStorageSync("GUserInfo");
			if(userInfo!=null&&userInfo!=""&&userInfo!=undefined)
			{
				
				this.avatarUrl= userInfo.avatarUrl;
				this.nickName=userInfo.user;
				this.birthday=userInfo.birthday;
				console.log(userInfo.gender)
				this.gender=userInfo.gender==""||userInfo.gender==undefined?"未选择":userInfo.gender;
			}
		},
		methods: {
		
		async	logOut(){
				this.loadTCBtn=true;
				this.disabledTCBtn=true;
				uni.showToast({
					duration:2000,
					title:"正在退出中...",
					mask:true,
					icon:"loading"
				});
				await this.delayTime();
				 uni.removeStorageSync('GUserInfo');
				 this.loadTCBtn=false;
				 this.disabledTCBtn=false;
				 uni.switchTab({
				 	url:"./Profile"
				 })
			},
			async clearStorage   () {
				this.loadHCBtn=true;
				this.disabledHCBtn=true;
				await this.delayTime();
				 uni.removeStorageSync('GCollectInfo');
				uni.showToast({
					duration:2000,
					title:"清理缓存成功",
					mask:false
				})
				this.loadHCBtn=false;
				this.disabledHCBtn=false;
			},
			delayTime(){
				return new Promise((res,jec)=>{
					setTimeout(()=>{
						res(true)
					},1100)
				})
			},
			
			funcClick(e){
				if(e=="tx")
				{
					let me=this;
					uni.showActionSheet({
					    //itemList: ['下载图片', 'B', 'C'],
						itemList: ['查看我的头像','从相册选择上传'],
					    success: function (res) {
					        //console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
							  
							  var faceArr=[]
							  faceArr.push(me.avatarUrl)
							if(res.tapIndex==0){
								uni.previewImage({
									urls: faceArr,
									current:faceArr[0]
								})																					
							}
							else
							{
								//从相册选择上传
								uni.chooseImage({
								    count: 1, //默认9
								    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
								    sourceType: ['album','camera'], //从相册选择
								    success: function (res) {
										let urlTemp=res.tempFilePaths[0];
								        console.log(JSON.stringify(res));
										
										uni.navigateTo({
											url: "./uploadPic?FilePath="+urlTemp,
										});
										
								    }
								});
								
								
							}
					    },
					    fail: function (res) {
					        console.log(res.errMsg);
					    }
					});
				}
			
			  if(e=="nc")
			  {
				  uni.navigateTo({
				  	url:"modifyName"
				  })
			  }
			if(e=="sr")
			{
							  uni.navigateTo({
							  	url:"modifyBirthday"
							  })
			}
			if(e=="xb")
			{
							  uni.navigateTo({
							  	url:"modifyGender"
							  })
			}
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
.mineContainer{
	width: 100%;
	height: 100%;
	background: #FFFFFF;
	display: flex;
	justify-content: center;
	flex-direction: column;
	
	
}
</style>

