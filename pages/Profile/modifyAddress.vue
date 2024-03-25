<template>
	<view class="midifyAddrssContainer">
		<view class="" style="width: 100%;border: 0px solid red;
		display: flex;justify-content: center;">
			<form @submit="midifyAddress" style="width: 99%;;border: 0px solid blue;
			display: inline-flex;justify-content: center;">


				<view class="" style="width: 726upx;border: 0px solid green;
			">
					<input type="text" :value="adressObj.name" placeholder="请输入名字" placeholder-class="graywords;" style="background-color:#FFFFFF;height: 80upx;line-height: 80upx;margin-bottom: 10upx;
				padding: 10upx;color: #3B4144;font-size: 32upx;
				" maxlength="12" name="name" />
					<input type="text" :value="adressObj.phone" placeholder="请输入电话" placeholder-class="graywords;"
						style="background-color:#FFFFFF;height: 80upx;line-height: 80upx;margin-bottom: 10upx;
				padding: 10upx;color: #3B4144;font-size: 32upx; " maxlength="12" name="phone" />
					<picker mode="region" @change="regionChange" name="addressH" style="background-color:#FFFFFF;height: 80upx;line-height: 80upx;
				 width: 100%;color: #3B4144;font-size: 32upx;margin-bottom: 10upx ">
						<view>{{adressObj.addressH==undefined||adressObj.addressH==""?"未选择":adressObj.addressH}}</view>
					</picker>
					<input type="text" value="" placeholder="请输入详细地址" placeholder-class="graywords;" style="background-color:#FFFFFF;height: 80upx;line-height: 80upx;margin-bottom: 10upx;
				padding: 10upx;color: #3B4144;font-size: 32upx;" maxlength="12" name="addressDetail" />


					<view class="" style="width: 100%;border: 0px solid red;display: flex;justify-content: space-between;
				 background-color:#FFFFFF;height: 80upx;line-height: 80upx;color: #3B4144;font-size: 32upx;">

						<view class="uni-list-cell-db" style="padding-left: 10upx;">设为默认地址</view>
						<switch :checked="adressObj.isDefault" name="isDefault" />


					</view>

				</view>

				<view class="" style="width: 100%; margin-top: 130upx;">
					<button type="primary" :loading="isShow" form-type="submit" style="width: 100%;">保存</button>
					<button v-if="Mtype=='add'?false:true" type="default" :loading="isShow" @click="deleteAddress(adressObj.id)"
						style="width: 100%;margin-top: 30upx; ">删除</button>
				</view>

			</form>
		</view>
	</view>
</template>

<script>
	import common from "../../static/js/common.js";
	export default {
		data() {
			return {
				adressObj: {},
				isShow: false,
				selectAddress: "",
				Mtype: ""
			}
		},
		onLoad(option) {
			let AddressId = option.AddressId;
			this.Mtype = option.Mtype
			let address = this.$store.state.addressDatas.filter(i => i.id == AddressId);
			//console.log(address)
			if (address.length > 0) {
				/* this.deepCopy(address[0], this.adressObj) */
                  this.adressObj.id=address[0].id;
				  this.adressObj.name=address[0].name;
				  this.adressObj.phone=address[0].phone;
				  this.adressObj.isDefault=address[0].isDefault;
				  this.adressObj.addressH=address[0].addressH;
			}

		},
		methods: {
			async midifyAddress(e) {
					uni.showLoading({
						mask: true,
						title: "正在提交中..."
					})

					if (!e.detail.value.name) {
						uni.hideLoading()
						uni.showToast({
							title: "名称不能为空.",
							duration: 2000,
							icon: "error"
						})
						return;
					}

					if (this.Mtype == "add") {


						let name = e.detail.value.name;
						let phone = e.detail.value.phone;
						let isDefault = e.detail.value.isDefault;

						let addressH = this.adressObj.addressH;

						let temp = {
							id: -1,
							name,
							phone,
							isDefault,
							addressH

						}
						let result = await this.$store.dispatch("ModifyAddress", temp)

						if (result) {
							uni.navigateBack({
								delta: 1
							})
						} else {
							uni.hideLoading()
							uni.showToast({
								title: "保存失败.",
								duration: 2000,
								icon: "error"
							})
						}
					} else {
						let name = e.detail.value.name;
						let phone = e.detail.value.phone;
						let isDefault = e.detail.value.isDefault;

						let addressH = this.adressObj.addressH;
						let temp = {
							id: this.adressObj.id,
							name,
							phone,
							isDefault,
							addressH

						}

						let result = await this.$store.dispatch("ModifyAddress", temp)
						if (result) {
							uni.navigateBack({
								delta: 1
							})
						} else {
							uni.hideLoading()
							uni.showToast({
								title: "更新失败.",
								duration: 2000,
								icon: "error"
							})
						}
					}
					/* uni.showModal({
					    title: '提示',
					    content: '该功能正在完善,稍后发布...',
					    success: function (res) {
					        if (res.confirm) {
					            console.log('用户点击确定');
					        } else if (res.cancel) {
					            console.log('用户点击取消');
					        }
					    }
					}); */
				},
            deleteAddress(id){
			
				let index=this.$store.state.addressDatas.findIndex(i=>i.id==id)
				
				 this.$store.state.addressDatas.splice(index,1); 
				uni.navigateBack({
					delta: 1
				}) 
			}
				,
			regionChange(e) {
				let selectaddress = e.detail.value;
				let addressStr=selectaddress.join(","); 
				 
				this.selectAddress = addressStr;
				this.adressObj.addressH = addressStr;
				//console.log(selectaddress)
			},
			deepCopy(p, c) {
				var c = c || {};
				for (var i in p) {
					if (typeof p[i] === "object") {
						c[i] = (p[i].constructor === Array) ? [] : {};
						deepCopy(p[i], c[i])
					} else {
						c[i] = p[i]
					}
				}
				return c;
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

	.midifyAddrssContainer {
		width: 100%;
		height: 100%;
		background-color: #f7f7f7;
		position: absolute;
	}
</style>
