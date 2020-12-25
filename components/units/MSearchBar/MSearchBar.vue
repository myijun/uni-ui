<template>
	<view class="m-search-bar">
		<view class="search-bar-input">
			<view class="home-back">
				<uni-icons type="arrowleft" @click="historyBack"></uni-icons>
			</view>
			<view class="input-bar">
				<view>
					<view @click="onChooseCity">{{city.title}}</view>
				</view>
			</view>
		</view>
		<view class="search-bar-filter"></view>
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
			}
		},
		components: {
			uniIcons
		}
	};
</script>

<style>

</style>
