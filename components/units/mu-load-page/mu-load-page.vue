<template>
	<view class="mu-load-page">
		<slot></slot>
		<u-loadmore :status="status" />
	</view>
</template>
<script>
	export default {
		name: 'mu-load-page',
		props: {},
		data() {
			return {
				status: 'loadmore',
			};
		},
		watch: {

		},
		computed: {
			scrollTop: function() {

			}
		},
		mounted() {
			this.$on('pullDownRefresh', function() {
				uni.stopPullDownRefresh();
				this.$u.throttle(this.pullDownRefresh, 1e3)
			});

			this.$on('reachBottom', function() {
				this.$u.throttle(this.reachBottom, 1e3)
			});

			this.$on('loaded', function(res = {}) {
				this.status = res.status || 'loadmore';
			});

		},
		methods: {
			pullDownRefresh: function() {
				this.$emit('BPullDownRefresh')
				this.status = 'loading';
			},
			reachBottom: function() {
				this.$emit('BReachBottom')
				this.status = 'loading';
			}
		},
		components: {

		}
	};
</script>

<style>
</style>
