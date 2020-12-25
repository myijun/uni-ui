<template>
	<view class="m-icon-tips">
		<uni-icons :type="type" :size="size"></uni-icons>
		<text>{{text}}</text>
	</view>
</template>
<script>
	import {
		uniIcons
	} from '@dcloudio/uni-ui';
	export default {
		name: 'm-icon-tips',
		props: {
			text: {
				type: String
			},
			type: {
				type: String,
				default: "info"
			},
			size: {
				type: Number,
				default: 20
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
		methods: {

		},
		components: {
			uniIcons
		}
	};
</script>

<style>
	.m-icon-tips {
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
	}
	.m-icon-tips uni-icons{
		position: relative;
		top: 5rpx;
		margin-right: 5rpx;
	}
	.m-icon-tips text {
		font: #aeaeae;
		font-size: 25rpx;
		position: relative;
		top: -20rpx;

	}
</style>
