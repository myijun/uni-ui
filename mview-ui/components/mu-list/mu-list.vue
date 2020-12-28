<template>
	<view class="mu-list" :class="'mu-list-scroll-view-'+type">
		<scroll-view enable-flex="true" :scroll-x="'horizontal'==type" :scroll-y="'horizontal'!=type">
			<slot />
		</scroll-view>
	</view>
</template>
<script>
	export default {
		name: 'mu-list',
		props: {
			type: {
				type: String,
				default: "horizontal"
			}
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

</style>
