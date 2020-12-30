import xError from '../../utils/xError.js';
import MRequest from '../../utils/MRequest.js';
import cfg from '../../utils/config.js';
import xLog from '../../utils/xLog.js';
class MuLocaltion {


	constructor() {
		this.scope = false;
		// let self = this;
		this.getScope();
	}



	/**
	 * 获取地理位置权限
	 */
	getScope(success) {
		let self = this;
		uni.getSetting({
			success: function(res) {
				let authSetting = MRequest.get(res, 'authSetting');
				if (authSetting['scope.userLocation']) {
					self.scope = true;
					typeof success == 'function' && success.call(self);
					return;
				}
				uni.authorize({
					scope: 'scope.userLocation',
					success: function(res) {
						self.scope = true;
						typeof success == 'function' && success.call(self);
					},
					fail: function() {
						xError.errorHandler('获取定位权限失败，不能正常使用应用!');
						uni.showModal({
							content: "获取定位权限失败，您可以在设置里勾选小程序获取地理位置",
							showCancel: false,
							success: function() {}
						})
					}
				})
			},
			fail: function() {
				xError.errorHandler('获取定位信息');
			}
		})
	}

	/**
	 * 获取基础地理位置信息
	 */
	getLocation() {
		let that = this;
		return new Promise((resolve, reject) => {
			let success = () => {
				uni.getLocation({
					type: "wgs84",
					geocode: true,
					success: function(res) {
						resolve(res);
					},
					fail: function() {
						reject();
						xError.errorHandler('获取定位权限失败，不能正常使用应用!');
					}
				})
			}
			if (that.scope == false) {
				that.getScope(success);
			} else {
				success();
			}
		});

	}
	//#ifdef MP-WEIXIN
	/**
	 * 获取腾讯地图的地理位置
	 */
	getQQMapLocation() {
		let that = this;
		return new Promise((resolve, reject) => {
			const QQMapWX = require('../../plugins/qqmap-wx-jssdk.js');
			let _location = {};
			that.getLocation().then(res => {
				_location = Object.assign({}, res);
				let qqmapsdk = new QQMapWX({
					key: cfg.LBS_MAP_APP_KEY
				});
				xLog.log(_location);
				qqmapsdk.reverseGeocoder({
					location: {
						latitude: res.latitude,
						longitude: res.longitude
					},
					success: function(res) {
						resolve(res);
					},
					fail: res => {
						xError.errorHandler(res);
						reject(res);
					}
				});
			})
		});
	}
	// #endif



}
export default MuLocaltion;
