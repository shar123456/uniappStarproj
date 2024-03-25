
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
//引入vuex
import store from './store'
//把vuex定义成全局组件
Vue.prototype.$store = store
Vue.config.productionTip = false
Vue.prototype.IsProduction=false;
Vue.prototype.GetGlobleUser=function(){
	let userInfo=uni.getStorageSync("GUserInfo");
	if(userInfo!=null&&userInfo!=""&&userInfo!=undefined)
	{
		return UserInfo;
	}else
	{
		return null;
	}
	
}
App.mpType = 'app'

const app = new Vue({
	//挂载
	    store,
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif