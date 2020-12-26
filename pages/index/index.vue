<template>
	<mu-webview-user-bind :bindSrc="bindWebSrc" @login="handleLogin" @message="handleMessage"></mu-webview-user-bind>
</template>

<script>
	import {
		MuWebviewUserBind
	} from '../../components/units/mu-webview-user-login/mu-webview-user-bind.vue';
	export default {
		data() {
			return {
				'bindWebSrc': "https://m.wykji.cn/minigame.html"
			}
		},
		onLoad() {

		},
		onShow() {

		},
		methods: {
			handleLogin: function(res) {
				this.bindWebSrc = res;
			},
			handleMessage: function(res) {

			}
		},
		components: {
			MuWebviewUserBind
		}
	}
</script>
<style>
</style>
