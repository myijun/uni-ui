<template>
	<view class="m-list" :class="'m-list-'+type">
		<view class="m-list-item" :class="'m-list-item-'+item.name" v-for="(item,index) in items" :key="index">
			<text class="m-list-item-name">{{item.label}}{{type=="vertical"?":":""}}</text>
			<text class="m-list-item-value">{{item.value}}</text>
			<slot name="item-{{item.name}}"></slot>
		</view>
	</view>
</template>
<script>
	/**
	 * MList 列表数据
	 * @property {String} type = [vertical|horizontal] 显示方式
	 * 	@value vertical 纵向
	 * 	@value horizontal 横向	 
	 */
	export default {
		name: 'm-list',
		props: {
			items: {
				type: Object
			},
			type: {
				type: String,
				default: "vertical"
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

		}
	};
</script>

<style>
	.m-list-item-name {
		color: #8c8c8c;
		margin-right: 21rpx;
	}

	.m-list-item-value {
		color: #393939;
	}

	.m-list-item {
		margin-bottom: 25rpx;
	}

	.m-list-horizontal {
		display: flex;
		flex: 1;
		justify-content: space-between;
		flex-direction: row;
		flex-wrap: wrap;
		text-align: center;
		margin-bottom: 10rpx;
		margin-top: 0;
	}

	.m-list-horizontal .m-list-item {
		display: table;
		margin-bottom: 0;
	}

	.m-list-horizontal .m-list-item-name {
		display: table-footer-group;
		font-size: 30rpx;
		margin-right: 0;
	}

	.m-list-horizontal .m-list-item-value {
		display: table-header-group;
		color: #2171ff;
		font-weight: bold;
		font-size: 50rpx;
	}
</style>
