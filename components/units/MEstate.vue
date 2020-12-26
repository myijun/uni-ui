<template>
	<view>
		<view class="estate-list">
			<view class="estate-item" v-for="(item,index) in items" :key="index">

				<view class="estate-props">
					<view class="thumb">
						<m-image :src="item.thumb" :mode="aspectFill"></m-image>
					</view>
				</view>
				<navigator :url="`../../pages/item/detail/index?id=${item.id}`">
					<view class="estate-props estate-detail">
						<view class="estate-title">{{item.title}}</view>
						<view class="yj-tags divider">
							<view class="tag-item" v-for="(tag,tagIndex) in item.tags" :key="tagIndex">
								{{tag.text}}
							</view>
						</view>
						<view class="props">
							<view class="price">{{item.price}}</view>
							<view class="trait">
								<view class="trait-item" v-for="(trait,traitIndex) in item.trait" :key="traitIndex">
									{{trait.text}}
								</view>
							</view>
						</view>
					</view>
				</navigator>
			</view>
		</view>
		<slot name="bottom"></slot>
	</view>
</template>
<script>
	import {
		MImage
	} from './MImage.vue';
	export default {
		name: 'm-estate',
		props: {
			items: {
				type: Array,
				default: []
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
			MImage
		}
	};
</script>

<style>
	.estate-item {
		margin-bottom: 29rpx;
		padding: 38rpx 0 33rpx 20rpx;
		height: 177rpx;
		overflow: hidden;
		display: flex;
		font-size: 20rpx;
		background: #fff;
	}

	.estate-props .thumb {
		width: 236rpx;
		height: 177rpx;
		overflow: hidden;
		margin-right: 19rpx;
		background: #F4F4F4;
		border-radius: calc(5rpx);
	}

	.estate-props image {
		width: 100%;
	}

	.estate-detail>view {
		margin-bottom: 15rpx;
	}

	.estate-detail .estate-title {
		font-weight: bold;
		color: #2c2c2c;
		font-size: 25rpx;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}

	.estate-detail .yj-tags {
		color: #E5E5E5;
	}

	.estate-detail .props {
		display: flex;
		color: #2466eb;
		font-size: 18rpx;
	}

	.estate-detail .props .trait {
		display: flex;
	}

	.estate-detail .props .trait .trait-item {
		padding: 0 10rpx;
	}
</style>
