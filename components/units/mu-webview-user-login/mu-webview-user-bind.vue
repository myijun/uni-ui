<template>
	<view>
		<web-view :src="bindSrc" @message="handleMessage"></web-view>
	</view>
</template>
<script>
	/**
	 * 通过webview和小程序用户进行绑定
	 * @description 通过webview和小程序用户进行绑定
	 */
	import MuWebviewUserBind from './MuWebviewUserBind.js';
	export default {
		name: 'mu-webview-user-bind',
		props: {
			bindSrc: {
				type: String
			},
			isShow: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {

			};
		},
		watch: {

		},
		computed: {

		},
		mounted() {
			let vm = this;
			MuWebviewUserBind.localLogin(function(res) {
				//test
				res.code = '123123123';
				vm.$emit('login', `${vm.bindSrc}?minicode=${res.code}`)
			})
		},
		methods: {
			//接受通过页面发送过来的用户登录信息.包含API接口登录令牌
			handleMessage(res) {
				uni.hideLoading();
				this.$emit('message', res);
			}
		},
		components: {

		}
	};
</script>

<style>
</style>
