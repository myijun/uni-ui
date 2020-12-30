import error from './libs/util/error';
import log from './libs/util/log';
import data from './libs/util/data'
import localLogin from './libs/util/location';
import http from './libs/util/request';
const $y = {
	error,
	log,
	data,
	localLogin,
	http
}

uni.$y = $y;

const install = Vue => {
	Vue.prototype.$y = $y;
}

export default {
	install
}
