import Vue from 'vue'
import App from './App'
import mView from './mview-ui';
import uView from './uview-ui';
Vue.use(mView);
Vue.use(uView);
// import AppMain from './components/appMain.js'
Vue.config.productionTip = false

App.mpType = 'app'
// Vue.prototype.$App = new AppMain();
const app = new Vue({
	...App
})
app.$mount()
