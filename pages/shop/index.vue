<template>
	<view class="">
		<mescroll-body ref="mescrollRef" @init="mescrollInit" @down="downCallback" @up="loadData" :up="upOption" :down="downOption"
		 @emptyclick="emptyClick">
			<checkbox-group @change="checkboxChange">
				<view class="bg-white padding">
					<view class="shop-li flex align-center" v-for="item in shopList" :key="item.id">
						<view class="item-check padding-lr">
							<checkbox :value="value" class="round red" checked="false" />
						</view>
						<view class="cat-list-item padding-tb solid-bottom bg-white">
							<view class="cat-list-item-right flex padding-lr-sm align-center">
								<image src="../../static/img/cat1.png" mode=""></image>
								<view class="text-dl margin-left-sm">
									<text class="text-bold">高清家用摄像头</text>
									<view class="text-xs margin-tb-xs text-grey">
										<text class="margin-right-sm">颜色:白色</text>
										<text class="margin-right-sm">规格:白色</text>
									</view>
									<view class="flex justify-between align-end">
										<text class="text-price text-red text-tag text-xl price">680</text>
										<!-- <text class="text-minor ft-sm">x1</text> -->
										<view class="InputNumber">
											<uni-number-box :min="1" :max="100" :value="value" :disabled="false" />
										</view>
									</view>

								</view>
							</view>
						</view>
					</view>
				</view>

			</checkbox-group>
		</mescroll-body>

		<view class="cart-bottom">
			<view class="check-box flex align-end">
				<checkbox-group @change="checkboxAll">
					<checkbox class="round red" :checked="isChecked" />
				</checkbox-group>
				<!-- <text class="margin-left text-xl">全选</text> -->
				<view class="cart-bottom-text">
					<text class="margin-lr">全选</text>
					<text>合计：</text>
					<text class="text-price text-xxl text-red">{{123123}}</text>
				</view>
			</view>

			<view class="btn" @click="onSubmit">
				提交订单
			</view>
		</view>

	</view>
</template>

<script>
	import UniNumberBox from '@/components/uni-number-box/uni-number-box.vue'
	export default {
		components: {
			UniNumberBox
		},
		data() {
			return {
				isChecked: false,
				value: '',
				shopList: [{
					id: 1,
				}, {
					id: 2,
				}, {
					id: 3,
				}],
				//下拉刷新的配置参数
				downOption: {},
				//上拉加载的配置参数
				upOption: {
					empty: {
						use: true, // 是否显示空布局
						// icon: this.$http.domain()+"static/images/cart-empty.png", // 图标路径
						tip: '~ 暂无相关数据 ~', // 提示
						btnText: '去逛逛 >', // 按钮
						fixed: false, // 是否使用fixed定位,默认false; 配置fixed为true,以下的top和zIndex才生效 (transform会使fixed失效,最终会降级为absolute)
						top: "100rpx", // fixed定位的top值 (完整的单位值,如 "10%"; "100rpx")
						zIndex: 99 // fixed定位z-index值
					}
				},
			}
		},
		methods: {
			checkboxAll() {},
			checkboxChange(row) {

			},
			onSubmit() {
				wx.navigateTo({
					url:'/pages/goods/subindex'
				})
			},
			//初始化
			mescrollInit() {},
			emptyClick() {},
			//下拉刷新
			downCallback(mescroll) {
				setTimeout(() => {
					mescroll.endByPage()
				}, 300)

			},

			//上拉加载的回调
			loadData(mescroll) {
				mescroll.endErr()
			},
		}
	}
</script>

<style lang="scss">
	.cat-list-item {
		flex: 1;
	}

	.cat-list-item image {
		display: block;
		width: 140rpx;
		height: 140rpx;
	}

	.cat-list-item-right>view {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.InputNumber {
		height: 100rpx;
		display: flex;
		align-items: center;
	}

	.price {
		/* height: 80rpx; */
		line-height: 80rpx;
	}

	.cart-bottom {
		width: 100%;
		height: 100rpx;
		position: fixed;
		bottom: 0px;
		left: 0;
		border-top: 2rpx solid #eee;
		background-color: #fff;
		display: flex;

		.check-box {
			float: left;
			height: 100rpx;
			line-height: 100rpx;
			padding-left: 45rpx;
		}

		.cart-bottom-text {
			flex: 1;
			padding-right: 240rpx;
			color: #323233;
			text-align: right;
			font-size: 24rpx;
			float: right;
			height: 100rpx;
			line-height: 100rpx;

			view {
				display: inline-block;

				&:last-child {
					color: #ee0a24;

					text {
						color: #ee0a24;

						&:last-child {
							font-size: 34rpx;
							padding-left: 5rpx;
						}
					}
				}
			}
		}

		.btn {
			width: 200rpx;
			height: 80rpx;
			line-height: 80rpx;
			border: none;
			position: absolute;
			display: inline-block;
			margin: 0;
			padding: 0;
			font-size: 30rpx;
			text-align: center;
			border-radius: 50rpx;
			cursor: pointer;
			transition: opacity .2s;
			top: 10rpx;
			right: 20rpx;
			color: #fff;
			background-color: #ee0a24;
			background: linear-gradient(90deg, #ff6034, #ee0a24);
		}
	}
</style>
