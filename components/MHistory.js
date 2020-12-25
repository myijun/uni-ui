import xError from '../utils/xError.js';
class MHistory {
	/**
	 * 
	 */
	static back(delta = 1) {
		let pages = getCurrentPages();
		if (pages.length == 1) {
			uni.switchTab({
				url: '../../../pages/index/index',
				fail: (res) => {
					xError.errorHandler(res, '跳转页面失败!');
				}
			});
		} else {
			uni.navigateBack({
				'delta': delta
			});
		}
	}
}
export default MHistory
