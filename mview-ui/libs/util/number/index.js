class NumberClass {
	/**
	 * 功能：金额按千位逗号分割
	 * @param {string} s 需要格式化的金额数值. 
	 * @param {type}   判断格式化后的金额是否需要小数位. 
	 */
	static formatMoney = (s, type) => {
		if (/[^0-9\.]/.test(s)) {
			return "0";
		}
		if (s == null || s == "") {
			return "0";
		}
		s = s.toString().replace(/^(\d*)$/, "$1.");
		s = (s + "00").replace(/(\d*\.\d\d)\d*/, "$1");
		s = s.replace(".", ",");
		var re = /(\d)(\d{3},)/;
		while (re.test(s)) {
			s = s.replace(re, "$1,$2");
		}
		s = s.replace(/,(\d\d)$/, ".$1");
		if (type == 0) { // 不带小数位(默认是有小数位)  
			var a = s.split(".");
			if (a[1] == "00") {
				s = a[0];
			}
		}
		return s;
	};

	/**
	 * 前置补0
	 * @param {string} num 需要补零的数据
	 * @param {Number}  n 数据长度
	 */
	static prefixInteger = (num, n) => {
		return (Array(n).join(0) + num).slice(-n);
	}

}
export default NumberClass;
