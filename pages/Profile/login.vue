<template>
	<view class="loginContainer">
		<view class="" style="border: 0px solid #dedede;
		width: 100%;height: 300upx;margin-top: 90upx;
		display: flex;justify-content: center;align-items: center;">
			<image style="width: 70%;height: 70%;" src="../../static/images/moticLogo.jpg" mode=""></image>
		</view>

		<form @submit="formSubmit">

			<view class="" style="border: 0px solid #dedede;
		width: 100%;height: 230upx;
		display: flex;justify-content:space-around;align-items: center;flex-direction: column;">
				<view class="" style="display: flex; border-bottom:1px solid #dedede;width: 95%;
		padding: 10upx;color: grey;font-size: 33upx;font-weight: 300;
		padding-left: 25upx;">
					<text style="width: 100upx;">账户：</text><input name="userName" v-model="userName" type="text"
						placeholder="请输入文本" />
				</view>
				<view class="" style="display: flex; border-bottom:1px solid #dedede;width: 95%;
		padding: 10upx;color: grey;font-size: 33upx;font-weight: 300;
		padding-left: 25upx;">
					<text style="width: 100upx;">密码：</text><input name="pwd" v-model="pwd" password=true type="text"
						placeholder="请输入密码" />
				</view>

			</view>

			<view class="" style="border: 0px solid #dedede;
		width: 100%;height: 190upx;
		display: flex;justify-content:space-around;align-items: center;flex-direction: column;">

				<button :loading="loadBtn" :disabled="disabledBtn" form-type="submit" type="warn"
					style="width: 80%;">登录</button>

			<!-- 	<button type="warn" style="width: 80%;" @click="eee">登录777</button> -->
			</view>
		</form>

		<!-- 第三方登录H5不支持，所以隐藏掉 -->

		<!-- #ifndef H5 -->



		<view class="" style="width: 100%;border: 0px solid #dedede;
		display: flex;flex-direction: column;align-items: center;">

			<view class="" style="display: flex;justify-content: center;align-items: center;
			width: 90%;border:0px solid red;height: 80upx;">
				<text style="border-top:1px solid #d0d0d0;width: 30%;"></text><text style="color: #d0d0d0;
					font-size: 29upx;margin-left: 15upx;;margin-right: 15upx;">第三方账户登录</text>
				<text style="border-top:1px solid #d0d0d0;width: 30%;"></text>
			</view>

			<view @click="getWxData" class="" style="display: flex;justify-content: center;align-items: center;
			width: 90%;border:0px solid red;">
				<button open-type="getUserInfo" @getuserinfo="wxLogin" style="background-image: url('http://pic50.photophoto.cn/20190305/1190120507913157_b.jpg');
					  width: 60upx;height: 60upx;background-repeat: no-repeat;
					  background-size: cover;background-color: white;
					  border: 0px solid #FFFFFF;"></button>
			</view>
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isUserLogin: true,
				userName: "admin",
				pwd: "123456",
				loadBtn: false,
				disabledBtn: false
			}
		},
		methods: {

			getWxData() {
				uni.showLoading({
					title: "登陆中..."
				})
				uni.getUserProfile({
					desc: "获取会员资料",
					success(e) {
						uni.hideLoading()
						console.log(e)

						let user = e.userInfo.nickName;
						let avatarUrl = e.userInfo.avatarUrl;
						let userId = new Date().getTime()
						let birthday = "1900-01-01";
						let gender = "";
						uni.setStorageSync("GUserInfo", {
							user,
							avatarUrl,
							userId,
							birthday,
							gender
						})

						uni.switchTab({
							url: "./Profile"
						})

					},
					complete() {
						uni.hideLoading()
					},
					fail() {
						uni.hideLoading()
					}

				});

			},


			formSubmit(e) {
				this.loadBtn = true;
				this.disabledBtn = true;
				let user = e.detail.value.userName;
				let pwd = e.detail.value.pwd;
				let userId = new Date().getTime()
				let avatarUrl = "http://img.duoziwang.com/2018/17/05232038720859.jpg";
				let birthday = "1900-01-01";
				let gender = "";
				this.loginFunc({
					user,
					pwd,
					userId,
					avatarUrl,
					birthday,
					gender
				}).then((res) => {
					if (res) {
						this.loadBtn = false;
						this.disabledBtn = false;
						uni.switchTab({
							url: "./Profile"
						})
					} else {
						this.loadBtn = false;
						this.disabledBtn = false;
						uni.showToast({
							title: "账户或密码错误.",
							duration: 2000,
							icon: "error"
						})
					}
				});
			},

			//实现微信小程序端的微信登录

			eee(e) {
				
				
				
				
				
				/* uni.request({
										    url: 'https://api.weixin.qq.com/cgi-bin/message/subscribe/send?access_token='+'51_QNlXuPGM9m-f4pbJoz8-btGVoN8N2z52hSRlFnEYaRB3ziMEJN-QDoCKqAkA1neVPafanc8YmxY9zunfCfz0eXmoNovaKMpg4vbnP9WWgxj_1fpWRkjAhl_X_XeWWQLRm5xqrJZD0mM_7u4MIJOdAHALMR', //仅为示例，并非真实接口地址。
										    data: {
										        "touser": "oPkQY5UJlgB68KauYfhg3v5Ma4Ds",
												 "template_id": "vOpn4D02C_0de3u0dGwB6_6-98RMXWk8kLjIMuOjCeo",
												
												"data": {
												      "thing1": {
												          "value": "339208499"
												      },
												      "thing2": {
												          "value": "2015年01月05日"
												      },
												     
												  },
												
										    },
										   method:"POST",
										    success: (res) => {
												//获取用户具体信息
										        console.log(res);
										      
										    }
										});
				 */
				
				
				
				
				
             
             

				uni.requestSubscribeMessage({
					tmplIds: ["vOpn4D02C_0de3u0dGwB6_6-98RMXWk8kLjIMuOjCeo"],
					success(res) {
						console.log(res)
					}
				});
			},

			wxLogin(e) {
				console.log(e) //获取到用户基本信息




				/* uni.showModal({
				    title: '提示',
				    content: '开测试版，暂不支持...',
				    success: function (res) {
				        if (res.confirm) {
				            console.log('用户点击确定');
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
				return; */
				//通过微信开放能力，获取微信用户的基本信息
				var userInfo = e.detail.userInfo;
				//console.log(userInfo)
				//实现微信登录
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {

						//获得微信登录的授权码code
						let code = loginRes.code;
						console.log(code)
						/* uni.request({
						    url: 'https://api.weixin.qq.com/sns/jscode2session', //仅为示例，并非真实接口地址。
						    data: {
						        "appid": "wx8f5e000124c5db35",
								"secret":"9e223c1d3076b4a314fe99932782927f",
								"js_code":code,
								"grant_type":"authorization_code",
						    },
						   method:"POST",
						    success: (res) => {
								//获取用户具体信息
						        console.log(res);
						      
						    }
						}); */

					}
				});
			},
			loginFunc(params) {
				return new Promise((res, rej) => {
					setTimeout(() => {
						if (params.pwd != "123456" || params.user != "admin") {
							res(false);
						} else {
							uni.setStorageSync("GUserInfo", params)
							res(true);
						}

					}, 1000)
				})
			}
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		;
		box-sizing: border-box;
	}

	.loginContainer {
		width: 100%;
		height: 100%;
		background: #FFFFFF;
		display: flex;
		justify-content: center;
		flex-direction: column;


	}
</style>
