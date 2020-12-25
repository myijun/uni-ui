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
</style>
