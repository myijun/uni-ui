class AppMain {

	constructor() {
		this.oauthProviders = [];
		uni.getProvider({
			'service': 'oauth',
			'success': res => {
				this.oauthProviders = res.provider;
			}
		})

		this.miniProgram = uni.getAccountInfoSync() || [];
	}

	/**
	 *@return {array} 
	 */
	getOauthProviders() {
		return this.oauthProviders;
	}

	static objects = {};

	/**
	 * @param {string} key
	 * @param {Object} obj
	 */
	static setGlobalObject(key, obj) {
		AppMain.objects[key] = obj;
	}


	static getGlobalObject(key) {
		return AppMain.objects[key] || undefined;
	}

}
export default AppMain;
