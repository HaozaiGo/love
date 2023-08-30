
/*
 * @Author: xiaoHao
 * @Date: 2021-04-29 10:13:29
 * @LastEditTime: 2021-08-07 10:21:21
 * @LastEditors: Please set LastEditors
 * @Description: CommonMethod
 */
var month= new Date().getMonth();
var globalDate = new Date().getDate();
	month = month + 1 > 9 ? month + 1 : "0" + (month + 1);
	globalDate = globalDate > 9 ? globalDate : "0" + globalDate;
	
let commonMethod = {
 //构造一个含有目标参数的正则表达式对象
 getUrlParam(name) {
 	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); 
 	var r = window.location.search.substr(1).match(reg); //匹配目标参数
 	if (r != null) return unescape(r[2]);
 	return null; //返回参数值
 },
 
  /**
   * @description: 根据时间戳转换为适合的时间格式
   * @param {*list,field(字段)}
   * @return {*resultList}
   */
  transformTime(list, field) {
    for (let item of list) {
      const reTime = new Date(item[`${field}`]);
      let localTime =
        reTime.toLocaleDateString().replace(/\//g, "-") +
        " " +
        reTime.toTimeString().substr(0, 8);

      item[`${field}`] = localTime;
    }
    return list
  },

// 返回最近一周
returnCurrentWeek(){
	const end = new Date();
	const start = new Date();
	start.setTime(start.getTime() - 3600 * 1000 * 24* 7);
	let startMonth = start.getMonth() +1 >9?start.getMonth() +1:'0'+ (start.getMonth() +1),
			startDate = start.getDate() > 9?start.getDate():'0'+start.getDate();
	
	
	const date = [ startMonth + '月' + startDate ,month+ '月' + globalDate];
	return date;
},

  //返回今日日期
  returnToday() {
    return (() => {
      let year = new Date().getFullYear(),
        month = new Date().getMonth(),
        date = new Date().getDate();
      month = month + 1 > 9 ? month + 1 : "0" + (month + 1);
      date = date > 9 ? date : "0" + date;
      return year + '-' + month + '-' + date
    })()
  },
  //根据年月返回有多少天
  getDayInMonth(year, month) {
    month = parseInt(month, 10);
    let temp = new Date(year, month, 0);
    return temp.getDate()
  },
  //返回今日日期 time是传入的时分秒 包括时分秒
  returnTodayDefault(time) {
    return (() => {
      let year = new Date().getFullYear(),
        month = new Date().getMonth(),
        date = new Date().getDate();
      month = month + 1 > 9 ? month + 1 : "0" + (month + 1);
      date = date > 9 ? date : "0" + date;
      return year + '-' + month + '-' + date + " " + time
    })()
  },
  //返回今日日期时分秒 当前时分秒
  returnNow() {
    return (() => {
      let year = new Date().getFullYear(),
        month = new Date().getMonth(),
        date = new Date().getDate(),
        hours = new Date().getHours(),
        minutes = new Date().getMinutes(),
        second = new Date().getSeconds();
      month = month + 1 > 9 ? month + 1 : "0" + (month + 1);
      date = date > 9 ? date : "0" + date;
      return year + '-' + month + '-' + date + ' ' + hours + ':' + minutes + ':' + second
    })()
  },
  //返回当前月份
  returnMonth() {
    return (() => {
      let year = new Date().getFullYear();
      let month = new Date().getMonth();
      month = month + 1 > 9 ? month + 1 : "0" + (month + 1);
      return year + '-' + month

    })()
  },
	//返回当前月份
	returnMonthIOS() {
	  return (() => {
	    let year = new Date().getFullYear();
	    let month = new Date().getMonth();
	    month = month + 1 > 9 ? month + 1 : "0" + (month + 1);
	    return year + '/' + month
	
	  })()
	},
  //返回前个月份
  returnLastMonth() {
    return (() => {
      let year = new Date().getFullYear();
      let month = new Date().getMonth();
      month = (month + 1) > 9 ? month : "0" + month;
      return year + '-' + month

    })()
  },
  // 处理websocket的数据
  /**
   * @description: 
   * @param {*} sockData websocket的数据
   * @param {*} list  改变的目标数据
   * @return {*}
   */
  handleWebSocket(sockData, list) {
    try {
      let str = sockData.data.replace(/\\/g, ""); //去除'\'
      let jsonData = JSON.parse(str); //将后台获取到的字符串转为对象
      let replaceId = jsonData.collectMeterDataLast.waterMeterId;
      for (let i = 0; i < list.tableData.length; i++) {
        if (list.tableData[i].waterMeterId === replaceId) {
          console.log("alarmC");
          return list.tableData.splice(
            i,
            1,
            jsonData.collectMeterDataLast
          ); //将tableData中的对应位置替换
          // console.log(this.tableList.tableData);
        }
      }
    } catch (err) {
      console.log(err);
    }
  },



}
export default commonMethod
