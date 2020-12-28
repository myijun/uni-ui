<template>
	<view class="mu-list-item">
		123
	</view>
</template>
<script>
	/**
		 * 使用组件:<mu-load-page ref="loadPage" @BPullDownRefresh="pullDownRefresh" @BReachBottom="reachBottom">
		 * 监听页面上/下拉事件
		 *onPullDownRefresh: function() {
				this.$refs.loadPage.$emit('pullDownRefresh');
			},
			onReachBottom: function() {
				this.$refs.loadPage.$emit('reachBottom');
			} 
		*滚动时调用this.$refs.loadPage.$emit('loaded');调整加载更多状态栏
		 */
	export default {
		name: 'mu-list-item',
		props: {

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

		},
		methods: {

		},
		components: {

		}
	};
</script>


<style>
	.mu-list-item {
		display: inline-block;
		width: 100%;
		height: 500rpx;
	}
</style>
