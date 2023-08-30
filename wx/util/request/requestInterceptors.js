
/**
 * 请求拦截
 * 
 * @Description: xiaoHao
 * @Date: 2022-06-2 16:43:19
 * @param {Object} http
 */
const setting = require('@/util/request/config.js');
import commonMethod from '@/common/common.js'
 
module.exports = (vm) => {
    uni.$u.http.interceptors.request.use((config) => { 
			
				let token;
				token = getApp().globalData.token;
				
		
				if(!token){
					token = uni.getStorageSync('access_token')
				}
				if(!token){
					token = vm.$store.state.token;
				}
				// 有token时候
				if(token){
					config.header.Authorization ="Bearer " + token;
					
					config.data = config.data || {}
					
					return config
				}
				
				// token不存在 重新获取
				if(!token){
					var type = commonMethod.getUrlParam('type')
					var code = commonMethod.getUrlParam('code')
					
					if(code){
						uni.request({
							url: setting.baseUrl + '/wmmsservice/wechat/wxAuth',
							method:'GET',
							data:{
								username: 'wxcode-' + code
							},
							 success: (res)=> {
									token = res.data.token;
									uni.setStorageSync('access_token',res.data.token);
									config.header.Authorization ="Bearer " + token;
									config.data = config.data || {}
									
									alert('reset' + token)
									
									if(type == 1){
										// 用户绑定
										uni.redirectTo({
											url:'/pages/userBind/index'
										})
									}
									if(type == 2){
										// 发票抬头
										uni.redirectTo({
											url:'/pages/InvoiceTitle/index/index'
										})
									}
									if(type == 3){
										// 余额充值
										uni.redirectTo({
											url:'/pages/charge/charge'
										})
									}
									if(type == 4){
										// 水费缴纳
										uni.redirectTo({
											url:'/pages/WaterFeePayment/index'
										})
									}
									if(type == 5){
										// 用量统计
										uni.redirectTo({
											url:'/pages/ConsumptionStatistics/index'
										})
									}
									if(type == 6){
										// 账单记录
										uni.redirectTo({
											url:'/pages/billRecordList/billRecordList'
										})
									}
									if(type == 7){
										// 开票记录
										uni.redirectTo({
											url:'/pages/billRecord/openBillRecord'
										})
									}
									if(type == 8){
										// 消息通知
										uni.redirectTo({
											url:'/pages/MessageNotification/index/index'
										})
									}
									if(type == 9){
										// 用户公告
										uni.redirectTo({
											url:'/pages/announcement/announcement'
										})
									}
									if(type == 10){
										// 使用反馈
										uni.redirectTo({
											url:'/pages/userFeedBack/userFeedBack'
										})
									}
									if(type == 11){
										// 用户指南
										uni.redirectTo({
											url:'/pages/userGuide/userGuide'
										})
									}
									
									setTimeout(()=>{
										return config
									},500)
									
								}
						})
					}
					return;
			
				}
				// setTimeout(() => {
				// 	// 跳回登录页
				
				// 	 location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx6579f8e802a54400&redirect_uri=http%3A%2F%2Fbemptest.ake.com.cn%2Fwmms_m%2Findex.html%3Ftype%3D1&reset%3D1&response_type=code&scope=snsapi_userinfo&state=#wechat_redirect"	
				// 	// uni.redirectTo({
				// 	// 	url:'/pages/userBind/index'
				// 	// })
				// }, 1500)
			
    }, (config) => 
        Promise.reject(config))
}
