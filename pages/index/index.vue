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
	let fun;
	let fun2;
	export default {
		data() {
			return {
				values: [
					"12"
				],
				values2:[
					'12'
				]
			}
		},
		onLoad() {

		},
		onShow() {
			
			console.log(this.$y.number.formatMoney(456464));
			console.log(this.$y.number.prefixInteger(9,10));
		},
		methods: {
			handleClick: function() {
				let that = this;				
				if (!fun) {
					let func = function() {
						that.values.push("12");
					}
					fun = that.$y.optimization.debounce(func, 5e2);
				}
				if (!fun2) {
					let func2 = function() {
						that.values2.push("12");
					}
					fun2 = that.$y.optimization.debounce(func2, 5e2);
				}
				fun();
				fun2();
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
