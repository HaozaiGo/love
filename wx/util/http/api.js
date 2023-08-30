/*
 * @Author: YangHuaJian
 * @Date: 2022-06-06 13:59:42
 * @LastEditTime: 2022-06-10 14:14:39
 * @LastEditors: YangHuaJian
 * @Description: 
 * @FilePath: \Water-Marketing-Systemd:\ake\linhshi_app\Lingshi-Official-Account\util\http\api.js
 */

const http = uni.$u.http

// post请求
export const postMenu = (data, config = {}) => http.post('/ebapi/public_api/index', data, config)

// get请求，
export const getMenu = (params) => http.get('/ebapi/public_api/index', params)


// 字典
export const getDict = (params) => http.get(`/wmmsservice/system/dict/data/types/${params.url}`)

//获取用户绑定
export const getPersonalInfo = (params) => http.get('/wmmsservice/wechat/queryCustomerBind',params)

// 查询用户
export const getCustomerBy = (params) => http.get('/wmmsservice/wechat/queryCustomerBy',params)

// 绑定用户
export const bindCustomer = (data) => http.post(`/wmmsservice/wechat/bindCustomer?customerIds=${data.customerIds}`,data)

// 用户反馈
export const getFeedback = (params) => http.get('/wmmsservice/wxFeedback/list',params)

// 用户反馈 提交
export const addFeedback = (data) => http.post(`/wmmsservice/wxFeedback/addFeedback`,data)

// 用户反馈 --查看详情页
export const getFeedbackDetail = (params) => http.get('/wmmsservice/wxFeedback/getDetails',params)

// 获取用户指南列表
export const getUserGuideList = (params) => http.get('/wmmsservice/wxGuide/list',params)

// 获取用户指南详情
export const getUserGuideDetail = (params) => http.get('/wmmsservice/wxGuide/getGuideById',params)

// 用户公告
export const getAnnouncementList = (params) => http.get('/wmmsservice/wxNotice/list',params)

// 公告详情
export const getAnnouncementDetail = (params) => http.get('/wmmsservice/wxNotice/getDetailById',params)

// 发票信息列表
export const getInvoiceList = (params) => http.get('/wmmsservice/wx/invoice/rec/list',params)


//微信公众号-个人服务-发票管理-发票抬头-获取票据信息列表
export const getInvoiceDetail = (data) => http.get('/wmmsservice/wx/invoice/info/list',data)

//微信公众号-个人服务-发票管理-发票抬头-更新票据信息
export const updateInvoiceDetail = (data) => http.put('/wmmsservice/wx/invoice/info/update',data)

//微信公众号-信息查询-消息通知-列表
export const notificationList = (params) => http.get('/wmmsservice/wechat/info/notification/list',params)

//微信公众号-信息查询-用量统计-列表
export const quantityStatisticList = (params) => http.get('/wmmsservice/wechat/info/quantityStatistic/list',params)

//微信公众号-信息查询-查询未缴费的账单-列表
export const queryNoPayCashItem = (params) => http.get('/wmmsservice/payRec/queryNoPayCashItem',params)

//微信公众号-信息查询-查询未缴费的账单-详情
export const queryNoPayCashDetail = (params) => http.get('wmmsservice/billing/cashItem/detail',params)

//微信公众号-信息查询-查询未缴费的账单-账单缴费
export const billPay = (data) => http.post('/wmmsservice/payRec/billPay',data)

// 开票记录--详情
export const getBillsDetail = (params) => http.get('/wmmsservice/wx/invoice/rec/saveInvoiceRecToWx',params)

// 余额充值
export const reChargeApi = (data, config = {}) => http.post('/wmmsservice/wxPay/RechargeByNYBank',data)

// 余额充值wx
export const reChargeWxApi = (data, config = {}) => http.post('/wmmsservice/wxPay/payMoneyCheck',data)

// 余额明细
export const getChargeDetail = (params) => http.get('/wmmsservice/wxPay/queryBalanceDetail',params)

// 账单记录
export const getBillRecordList = (params) => http.get('/wmmsservice/wx/cash/info/list',params)
// 解绑用户
export const unbindCustomer = (data) => http.post(`/wmmsservice/wechat/unbindCustomer?customerId=${data.customerIds}`,data)
// 上传图片

export const uploadImg = (data) => http.post(`/wmmsservice/common/upload`,data)
//删除图片
export const delImg = (params)=>http.get(`/wmmsservice/common/deleteFile`,params)
// 用水价格
export const queryPriceDetail = (params)=>http.get(`/wmmsservice/billing/hall/queryPriceDetail`,params)

// 联动所需金额
export const queryNeetAmt = (params)=>http.get(`/wmmsservice/billing/hall/queryNeetAmt`,params)

// 收费是否针对水量充值
export const queryIsLadder = (params)=>http.get(`/wmmsservice/billing/hall/queryIsLadder`,params)

