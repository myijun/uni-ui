import error from './libs/util/error';
import log from './libs/util/log';
import data from './libs/util/data'
import localLogin from './libs/util/location';
import http from './libs/util/request';
import optimization from './libs/util/optimization';
import NumberClass from './libs/util/number';
const $y = {
	error,
	log,
	data,
	localLogin,
	http,
	optimization,
	'number': NumberClass
}

uni.$y = $y;

const install = Vue => {
	Vue.prototype.$y = $y;
}

export default {
	install
}
