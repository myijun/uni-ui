<template>
	<view class="m-image">
		<image :src="src" @error="imageError" :mode="mode" @click="onClick"></image>
	</view>
</template>

<script>
	export default {
		name: 'm-image',
		props: {
			src: {
				type: String,
				default: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAkCAYAAABIdFAMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHhJREFUeNo8zjsOxCAMBFB/KEAUFFR0Cbng3nQPw68ArZdAlOZppPFIBhH5EAB8b+Tlt9MYQ6i1BuqFaq1CKSVcxZ2Acs6406KUgpt5/LCKuVgz5BDCSb13ZO99ZOdcZGvt4mJjzMVKqcha68iIePB86GAiOv8CDADlIUQBs7MD3wAAAABJRU5ErkJggg=='
			},
			mode: {
				type: String,
				default: 'aspectFill'
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
			onClick() {
				this.$emit('click');
			},
			imageError(e) {
				debugger;
				console.log(e);
			}
		}
	};
</script>

<style>
	/* image {
		width: 100%;
		height: 100%;
	} */
</style>
