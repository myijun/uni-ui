import xError from '../../../utils/xError.js';
import MRequest from '../../../utils/MRequest.js';
import AppMain from '../../appMain.js';
class MuWebviewUserBind {
	/**
	 * 微信登录
	 * @param {Function} success
	 */
	static localLogin(success) {

		let http = AppMain.getGlobalObject('http');
		uni.showLoading({
			title: "登录中"
		});
		uni.login({
			provider: 'weixin',
			success: function(res) {
				// complete: function(res) {
				let code = MRequest.get(res, 'code')

				if (code) {
					typeof success == 'function' && success(res);
				} else {
					xError.errorHandler(res, '获取登录信息失败!');
				}
			},
			fail: (res) => {
				xError.errorHandler(res, '获取登录信息失败!');
			}
		})
	}
}
export default MuWebviewUserBind;
