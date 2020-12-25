<template>
	<view class="yj-headline">
		<view class="headline">{{title}}</view>
		<navigator v-if="moreUrl" :url="moreUrl">{{moreTitle}}</navigator>
	</view>
</template>
<script>
	export default {
		name: 'm-headline',
		props: {
			moreUrl: {
				type: String,
				default: ''
			},
			moreTitle: {
				type: String,
				default: "查看全部"
			},
			title: {
				type: String,
				default: "标题"
			}
		},
		data() {
			return {

			};
		},
		watch: {

		},
		mounted() {

		},
		methods: {}
	};
</script>

<style>
</style>
