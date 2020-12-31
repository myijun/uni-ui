<template>
	<view>
		<view>演示效果</view>
		<view>
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
			<view>
				<u-button type="primary" shape="square" @click="handleClick">触发</u-button>

			</view>
		</view>
		<view>
			<u-subsection :list="list" @change="sectionChange" :current="current"></u-subsection>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						name: 'debounce'
					},
					{
						name: 'throttle'
					}
				],
				current: 0,
				values: [
					""
				],
				values2: [
					''
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
			sectionChange(index) {
				this.values = [];
				this.values2 = [];
				this.current = index;
			},
			handleClick: function() {
				let that = this;
				let fun = undefined;
				let fun2 = undefined;
				if (this.current == 0) {
					fun = this.$y.pattern.single(res => {
						return that.$y.optimization.debounce(function() {
							that.values.push("12");
						}, 5e3)
					});
					fun2 = this.$y.pattern.single(res => {
						return that.$y.optimization.debounce(function() {
							that.values2.push("12");
						}, 5e3)
					});
				} else {
					fun = this.$y.pattern.single(res => {
						return that.$y.optimization.throttle(function() {
							that.values.push("12");
						}, 5e3)
					});
					fun2 = this.$y.pattern.single(res => {
						return that.$y.optimization.throttle(function() {
							that.values2.push("12");
						}, 5e3)
					});
				}

				fun.exec();
				fun2.exec();
			}

		},
		components: {

		}
	}
</script>

<style>
</style>
