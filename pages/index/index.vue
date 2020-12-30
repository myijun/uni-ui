<template>
	<!-- <mu-webview-user-bind :bindSrc="bindWebSrc" @login="handleLogin" @message="handleMessage"></mu-webview-user-bind> -->
	
	<view>
		<web-view src="https://uniapp.dcloud.io/static/web-view.html"></web-view>
		<!-- <web-view v-if="src" :src="src"></web-view>		 -->
	<!-- 	<mu-list>

			<mu-list-item v-for="(item,index) in datalist" :key="index" :item="item">
				12312312
				<view>{{item.data}}</view>				
			</mu-list-item>

		</mu-list>

 -->

	</view>





</template>

<script>
	import {
		MuWebviewUserBind
	} from '../../components/units/mu-webview-user-login/mu-webview-user-bind.vue';
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
						"data": new Date
					},
					{
						"a": 2,
						"data": new Date
					},
					{
						"a": 2,
						"data": new Date
					},
					{
						"a": 2,
						"data": new Date
					},
					{
						"a": 2,
						"data": new Date
					},
					{
						"a": 2,
						"data": new Date
					},
					{
						"a": 2,
						"data": new Date
					},
					{
						"a": 2,
						"data": new Date
					},
					{
						"a": 2,
						"data": new Date
					},
					{
						"a": 2,
						"data": new Date
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
			MuWebviewUserBind,
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
