let commonT = {
	//baseUrl: 'http: //fawnuat.xuexiluxian.cn/ " ,
	baseUrl: '',
	data: {},
	header: {
		"Content-Type": "application/json",
		//"Content-Type": "application/x-wow-form-urlencoded",
	},
	method: 'GET',
	dataType: 'json',
}




let requestT = function(options = {}) {

	options.url = commonT.baseUrl + options.url;
	options.data = options.data || commonT.data;
	options.header = options.header || commonT.header;
	options.dataType = options.dataType || commonT.dataType;
	return new Promise((res, rej) => {


		uni.showLoading({
			title: '加载中...'
		})
		uni.request({
			...options,
			success: (result) => {

				if (result.data.resultCode != 200) {
					setTimeout(function() {
						uni.hideLoading()
					}, 300)
				}
				setTimeout(function() {
					uni.hideLoading()
				}, 300)
				let data = result.data;
				//console.log(data)
				if (data) {
					res(data)
				} else {
					res(result.data)
				}

			}




		})
	})

}

export default {
	commonT,
	requestT
}