<template>
	<view class="m-user">
		<view class="user-items">
			<view class="user-item">
				<view class="user-avatar">
					<m-image :src="user.avatar"></m-image>
				</view>
			</view>
			<view class="user-item" v-if="!user.userId">
				<button v-if="!canIUseGetUserInfo" open-type="getUserInfo" class="about-self button-link" @getuserinfo="getuserinfo">请登录/注册</button>
				<button class="about-self button-link" v-else @click="userLogin">请登录/注册</button>
			</view>
			<view class="user-item" v-else>
				<button class="about-self button-link">{{user.nickname}}</button>
			</view>
		</view>
	</view>
</template>
<style>
	.m-user {
		height: 346rpx;
		background: #517cfc;
		overflow: hidden;
	}

	.user-items {
		margin-top: 87rpx;
		display: flex;
		align-items: center
	}



	.user-item:first-child {
		padding-left: 28rpx;
		margin-right: 34rpx;
	}

	.user-avatar {
		width: 115rpx;
		height: 115rpx;
		overflow: hidden;
		border-radius: 50%;
		background: #d8d8d8;
	}

	.user-avatar image {
		width: 100%;
	}

	.about-self {
		color: #FFFFFF;
	}
</style>
<script>
	import {
		MImage
	} from '../MImage.vue';
	import MRequest from '../../../utils/MRequest.js';
	import xError from '../../../utils/xError.js';
	import MUserKernel from './MUserKernel.js'

	export default {
		name: 'm-user',
		props: {

		},
		data() {
			return {
				defaultAvatar: "../../../static/images/customer.png",
				user: getApp().globalData.user
			};
		},
		watch: {

		},
		computed: {
			canIUseGetUserInfo: () => {
				console.log(uni.canIUse('button.open-type.getUserInfo'));
				return uni.canIUse('button.open-type.getUserInfo');
			}
		},
		mounted() {},
		methods: {
			getuserinfo: res => {

			},
			userLogin: function() {
				let vm = this;
				if (~this.$App.getOauthProviders().indexOf('weixin')) {
					MUserKernel.wechatUserLogin(function(res) {

						getApp().globalData.token = MRequest.get(res, 'data', 'token');
						vm.user = getApp().globalData.user = MRequest.get(res, 'data', 'user');
						console.log(vm.user)
					})
				}
			}
		},
		components: {
			MImage
		}
	};
</script>
