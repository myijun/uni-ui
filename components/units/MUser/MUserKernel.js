import xError from '../../../utils/xError.js';
import MRequest from '../../../utils/MRequest.js';
import AppMain from '../../appMain.js';
class MUserKernel {
	/**
	 * 微信登录
	 * @param {Function} success
	 */
	static wechatUserLogin(success) {

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
					http.postRequest('{mock}/user/userThirdLoginWX', {
						code: code
					}).then(res => {
						// debugger;
						let status = MRequest.get(res, 'status')
						if (status == 100000) {
							uni.hideLoading();
							typeof success == 'function' && success(res);
							return;
						}
						if (status == -900001) { //获取用户信息资料
							MUserKernel.registerUserInfo();
						}
					}).catch(res => {
						xError.errorHandler(res, '获取登录信息失败!');
					});
				} else {
					xError.errorHandler(res, '获取登录信息失败!');
				}
			},
			fail: (res) => {
				xError.errorHandler(res, '获取登录信息失败!');
			}
		})
	}

	/**
	 * 获取进行注册时要提交的用户信息
	 */
	static registerUserInfo() {
		uni.getUserInfo({
			provider: 'weixin',
			success: function(infoRes) {
				let http = AppMain.getGlobalObject('http');
				http.postRequest('{mock}/user/userThirdRegisterWX', {
					signature: MRequest.get(infoRes, 'signature'),
					rawData: MRequest.get(infoRes, 'rawData'),
					encryptedData: MRequest.get(infoRes, 'encryptedData'),
					iv: MRequest.get(infoRes, 'iv')
				}).then(res => {
					let status = MRequest.get(res, 'status')
					if (status == 100000) {
						uni.hideLoading();
						typeof success == 'function' && success(res);
						return;
					}
					console.log('错误信息：' + res.msg);
					xError.errorHandler(res, '注册失败!');
				}).catch(res => {
					xError.errorHandler(res, '获取登录信息失败!');
				});
				console.log('用户昵称为：' + infoRes.userInfo.nickName);

			}
		});
	}

}
export default MUserKernel;
