/**
 * Ganto
 * 2020.11.30
 */
(() => {
	var start = "2019-07-01 06:06:06", // 设置的时间
	start_ = new Date(start).getTime(); // 设置的时间戳

	var	now = new Date(), // 现在时间
	fullyear = now.getFullYear(), // 现在年份
	month = now.getMonth()+1, // 现在月份
	date = now.getDate(), // 现在日份
	hours = now.getHours(), // 现在小时
	minutes = now.getMinutes(), // 现在分钟
	seconds = now.getSeconds(), // 现在秒钟
	time = now.getTime(); // 现在时间戳

	var run = time - start_, // 现在时间戳和设置时间戳的差
	zhD = parseInt(run/1000/60/60/24), // 将时间戳转化为天数
	zhH = parseInt((run % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), // 将时间戳转化为小时数
	zhM = parseInt((run % (1000 * 60 * 60)) / (1000 * 60)), // 将时间戳转化为分钟数
	zhS = parseInt(run % (1000 * 60) / 1000); // 将时间戳转化为秒钟数

	// 如果数值小于10的时候，在数值前方拼接一个0
	if(month < 10){
		month = "0" + month
	}
	if(date < 10){
		date = "0" + date
	}
	if(hours < 10){
		hours = "0" + hours
	}
	if(minutes < 10){
		minutes = "0" + minutes
	}
	if(seconds < 10){
		seconds = "0" + seconds
	}
	if(zhD < 10){
		zhD = "0" + zhD
	}
	if(zhH < 10){
		zhH = "0" + zhH
	}
	if(zhM < 10){
		zhM = "0" + zhM
	}
	if(zhS < 10){
		zhS = "0" + zhS
	}
	console.log("%c\n" +
		"      A \n"+
		"     BBB \n"+
		"    CC CC \n"+
		"DDDD     DDDD \n"+
		"  EE     EE \n"+
		" FF  o.O  FF \n"+
		"GG         https://ganto.me \n\n"+
    "当前时间" + fullyear + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds + "；\n\n" +
    "加载页面花费掉了" + (Math.round(100 * performance.now()) / 100 / 1e3).toFixed(2) + "s。\n\n" +
    "小站平稳运行 " + zhD + "天" + zhH + "小时" + zhM + "分钟" + zhS + "秒钟 了。", "color: #51ffa4;");
})();
