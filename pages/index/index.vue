<template>
	<!-- <mu-webview-user-bind :bindSrc="bindWebSrc" @login="handleLogin" @message="handleMessage"></mu-webview-user-bind> -->
	<!-- <web-view src="https://uniapp.dcloud.io/static/web-view.html"></web-view> -->
	<view>
		<!-- <web-view v-if="src" :src="src"></web-view>		 -->
		<mu-list>
			<mu-list-item v-for="(item,index) in datalist" :key="index">
				
			</mu-list-item>
		</mu-list>


		<uni-list>
			<uni-list-item title="列表文字" note="列表描述信息"></uni-list-item>
			<uni-list-item :disabled="true" title="列表文字" note="列表禁用状态"></uni-list-item>
		</uni-list>

	</view>





</template>

<script>
	// import {
	// 	MuWebviewUserBind
	// } from '../../components/units/mu-webview-user-login/mu-webview-user-bind.vue';
	import {
		MuList
	} from '../../mview-ui/components/mu-list/mu-list.vue';
	import {
		MuListItem
	} from '../../mview-ui/components/mu-list-item/mu-list-item.vue';
	import {
		uniList,
		uniListItem
	} from '@dcloudio/uni-ui'
	export default {
		data() {
			return {
				'bindWebSrc': "https://m.wykji.cn/minigame.html",
				"src": "",
				datalist: [{
						"a": 1,
					},
					{
						"a": 2,
					},
					{
						"a": 2,
					},
					{
						"a": 2,
					},
					{
						"a": 2,
					},
					{
						"a": 2,
					},
					{
						"a": 2,
					},
					{
						"a": 2,
					},
					{
						"a": 2,
					},
					{
						"a": 2,
					}
				]
			}
		},
		onLoad() {

		},
		onShow() {
			let vm = this;
			setTimeout(res => {
				vm.src = "https://uniapp.dcloud.io/static/web-view.html";
			}, 2e3);
		},
		methods: {
			// handleLogin: function(res) {
			// 	this.bindWebSrc = res;
			// },
			// handleMessage: function(res) {

			// }


		},
		components: {
			// MuWebviewUserBind
			MuList,
			MuListItem,
			uniList,
			uniListItem
		}
	}
</script>
<style>
	.scroll-view-item_H {
		display: inline-block;
		width: 100%;
		height: 300rpx;
	}
</style>
