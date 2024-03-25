import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		addressDatas: getAddress(),
	},

	mutations: {
		muModifyAddress(state, payload) {
		
			

			let addressId = payload.id;
			let address = state.addressDatas.find(i => i.id == addressId);
			if (address) {
				for (var key in address) {
					address[key] = payload[key]
				}
			} else {
				 var Idt = state.addressDatas.map((i => {
				                        return i.id
				                    }));
				                    Idt.sort((a, b) => {
				                        return b - a;
				                    })
									
				payload.id = Idt[0] + 1;
				state.addressDatas.push(payload);
			}
			
		},
	},
	actions: {
		ModifyAddress({
			commit,
			state
		}, payload) {

			return new Promise((resolve, reject) => {
				setTimeout(() => {
					if (!payload) {
							resolve(false)
					}
					if (!payload.id) {
						resolve(false)
					}
					commit("muModifyAddress", payload);
					
					resolve(true)
				}, 700);
			});
		},
	}
})

function getAddress() {
	console.log("获取地址原始数据")
	return [{
			id: 1,
			name: "李丽丽",
			phone: "15985862969",
			isDefault: false,
			addressH:"福建省,厦门市,思明区"
		},
		{
			id: 2,
			name: "张勇",
			phone: "15622346969",
			isDefault: true,
			addressH:"福建省,厦门市,湖里区"
		}, {
			id: 3,
			name: "马芸",
			phone: "15933652928",
			isDefault: false,
			addressH:"福建省,厦门市,集美区"
		}, {
			id: 4,
			name: "王菲",
			phone: "13551006989",
			isDefault: false,
			addressH:"福建省,厦门市,同安区"
		}
	]
}
export default store
