class Pattern {

	static singlePool = {};

	/**创建一个单例可执行方法
	 * @param {function} fn 
	 */
	static single(fn) {
		if (typeof fn !== 'function') {
			throw error('只能对function方法生成单例');
		}
		let uuid = Symbol.for((fn).toString());

		if (Pattern.singlePool[uuid]) {
			return Pattern.singlePool[uuid];
		}
		return Pattern.singlePool[uuid] = {
			"exec": fn(),
			"destroy": ((uuid) => {
				return function() {
					if (!Pattern.singlePool[uuid]) {
						return false;
					}

					delete Pattern.singlePool[uuid];
					delete this['exec'];
					delete this['destroy'];
				}
			})(uuid)
		}
	}
}
export default Pattern;
