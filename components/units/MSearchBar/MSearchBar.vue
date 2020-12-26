<template>
	<view class="m-search-bar">
		<view class="search-bar-input">
			<view class="home-back">
				<uni-icons type="arrowleft" @click="historyBack"></uni-icons>
			</view>
			<view class="input-bar">
				<view class="input-bar-left">
					<view @click="onChooseCity">{{city.title}}</view>
				</view>
				<view class="input-bar-right">
					<form @submit="formSubmit" @reset="formReset">
						<input type="text" value="" placeholder="请输入楼盘名称" />
					</form>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import {
		uniIcons
	} from '@dcloudio/uni-ui';
	import MHistory from '../../MHistory.js';
	export default {
		name: 'm-search-bar',
		props: {
			cityChoose: {
				type: Function
			}
		},
		data() {
			return {
				city: {
					"id": 0,
					"title": "北京市"
				}
			};
		},
		watch: {

		},
		mounted() {

		},
		methods: {
			historyBack: () => {
				MHistory.back();
			},
			onChooseCity: function() {
				this.$emit('cityChoose');
				uni.navigateTo({
					url: '../../../pages/city/index'
				})
			},
			formSubmit: function() {
				this.$emit('formSubmit');
			},
			formReset: function() {
				this.$emit('formReset');
			}
		},
		components: {
			uniIcons
		}
	};
</script>

<style>
	.m-search-bar {
		height: 81rpx;
	}

	.search-bar-input {
		display: flex;
	}

	.search-bar-input .input-bar {
		width: 608rpx;
		height: 82rpx;
		background: #F4F4F4;
		border-radius: 41rpx;
		line-height: 82rpx;
		padding: 0 20rpx;
		margin-left: 51rpx;
		display: flex;

	}

	.search-bar-input .input-bar input {
		height: 78rpx;
		padding: 2rpx;
	}

	.search-bar-input .input-bar-right {
		margin-left: 32rpx;
	}
</style>
