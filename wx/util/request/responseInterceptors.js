
/**
 * 响应拦截
 * 
 * @Description: xiaoHao
 * @Date: 2022-06-2 16:43:19
 * @param {Object} http
 */
module.exports = (vm) => {
	uni.$u.http.interceptors.response.use((response) => {
			
		if(Array.isArray(response.data)){
			// 针对字典
			return response 
		}
		/* 对响应成功做点什么 可使用async await 做异步操作*/
		if (response.data.code == 200 || response.data.code == 0 || response.data.code == -1) {
			// console.log(response.data)
			return response.data 
		}
		else if(response.data.code==401){	
				uni.removeStorage({ key: 'token'})
				setTimeout(() => {
					// 跳回登录页
					// location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx6579f8e802a54400&redirect_uri=http%3A%2F%2Fbemptest.ake.com.cn%2wmms_m%2FuserBind.html&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect"
				
					location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx6579f8e802a54400&redirect_uri=http%3A%2F%2Fbemptest.ake.com.cn%2Fwmms_m%2Findex.html%3Ftype%3D1&reset%3D1&response_type=code&scope=snsapi_userinfo&state=#wechat_redirect"	
					// uni.redirectTo({
					// 	url:'/pages/userBind/index'
					// })
				}, 500)
				return;
		}
		else{
		// 	if(response.data.code != 200 && response.data.code != 0 ){
		// 		vm.$u.toast('验证失败，请重新登录');

		// 	}
			return response.data
		}
	}, (response) => {
		/*  对响应错误做点什么 （statusCode !== 200）*/
		return Promise.reject(response)
	})
}
