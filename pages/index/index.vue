<template>


	<view>
		<button type="default" @click="handleClick">123</button>
		<view class="">
			<text>
				{{values.join('-')}}
			</text>
		</view>
		<view class="">
			<text>
				{{values2.join('-')}}
			</text>
		</view>
	</view>

</template>

<script>
	
	export default {
		data() {
			return {
				values: [
					"12"
				],
				values2: [
					'12'
				]
			}
		},
		onLoad() {

		},
		onShow() {

			console.log(this.$y.number.formatMoney(456464));
			console.log(this.$y.number.prefixInteger(9, 10));
		},
		methods: {
			handleClick: function() {
				let that = this;

				let fun = this.$y.pattern.single(res => {
					return that.$y.optimization.debounce(function() {
						that.values.push("12");
					}, 5e2)
				});


				let fun2 = this.$y.pattern.single(res => {
					return that.$y.optimization.throttle(function() {
						that.values2.push("12");
					}, 5e2)
				});
				
				fun.exec();
				fun2.exec();
			}

		},
		components: {

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
