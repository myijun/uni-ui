class Optimization {

	/**
	 * 节流原理：在一定时间内，只能触发一次.
	 * 时间间隔是1秒，每0.33333秒去执行一次方法，连续执行9下，那会执行3次函数
	 */
	static throttle = (fn, threshhold = 250) => {
		let last = 0;
		let timer = 0;
		return function() {
			let self = this;
			const args = [].slice.call(arguments);
			let now = +new Date();
			if (last && now < last + threshhold) {
				clearTimeout(timer)
				timer = setTimeout(function() {
					last = now;
					fn.apply(self, args);
				}, threshhold);
			} else {
				last = now;
				fn.apply(self, args);
			}
		}
	}
	
	/**
	 * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
	 * 时间间隔是1秒，在1秒范围内，执行一次后，会继续延迟1秒，知道最后一次点击，最后才会执行
	 * @param {Function} fn 要执行的回调函数 
	 * @param {Number} threshhold 延时的时间	 
	 */
	static debounce = (fn, threshhold = 250) => {
		var timer = 0;
		return function() {
			let self = this;
			const args = [].slice.call(arguments);
			clearTimeout(timer);
			timer = setTimeout(function() {
				fn.apply(self, args);
			}, threshhold);
		}
	}

}


export default Optimization;
