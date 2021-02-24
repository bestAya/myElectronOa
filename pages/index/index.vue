<template>
	<view>
		<view style="width:100%">
			<banner></banner>
		</view>
		<view class="padding bg-white">
			<view class="">
				<view class="tabBox padding-tb flex align-end">
					<text class="text-xl text-bold padding-right-sm">
						百货上新
					</text>
					<text class="text-ABC text-sm text-gray">new appivals</text>
				</view>
				<view class="Newcat bg-brown radius">
					<view class="Newcat-banner image  ">
						<image src="../../static/img/1.png"></image>
					</view>
					<view class="Newcat-list padding-xs " v-for="item in 2">
						<view class="Newcat-list-item padding flex bg-white radius">
							<image src="../../static/img/2.jpg" mode=""></image>
							<view class="Newcat-list-item-pr">
								<view class="text-xl text-cut">韩版女式遮阳帽qweqweqwe</view>
								<view class="text-xs text-cut text-gray padding-top-xs">为美丽而做</view>
								<view class="text-xl text-price padding-tb-sm text-bold">66.00</view>
								<view class="Newcat-cat-but text-xs padding-tb-xs padding-lr-sm text-center round bg-yellow text-white">
									立即购买
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>



		</view>
		<!---->
		<view>
			<view class="tabBox padding flex align-end bg-white">
				<text class="text-xl text-bold padding-right-sm">
					猜你喜欢
				</text>
				<text class="text-ABC text-sm text-gray">you may also like</text>
			</view>
			<view>
				<view class="goods-list-box">
					<view class="goods-list-item-box" v-for="(item,index) in 6" :key="index" @click="handeRouter(item)">
						<view class="goods-list-item-wrap">
							<view>
								<image src="../../static/img/2.jpg">
							</view>
							<view class="padding-tb-xs padding-lr-sm">
								<view class="text-cut text-df padding-bottom-sm">韩版女式帽子</view>
								<text class="text-sm text-gray">已售1200</text>
								<view class="flex justify-between padding-bottom-sm padding-tb-xs ">
									<view class="text-price  text-bold  align-center">
										<text>600.00</text>
									</view>
									<text class="iconfont icon-jiahao2fill  text-yellow text-xl"></text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import banner from "./banner/index.vue"
	export default {
		components: {
			banner
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			handeRouter(item){
				wx.navigateTo({
					url:'/pages/goods/details'
				})
			},

		}
	}
</script>

<style>
	.content {
		background: #fff;
	}

	.tabBox>text {
		vertical-align: bottom
	}

	.Newcat {
		overflow: hidden;
	}

	.Newcat-banner>image {
		display: block;
		width: 100%;
		height: 300rpx;
	}

	.Newcat-list-item>image {
		width: 250rpx;
		height: 250rpx;
	}

	.Newcat-list-item-pr {
		flex: 1;
		padding-left: 70rpx;
		padding-top: 20rpx;
		overflow: hidden;
	}

	.Newcat-list:last-child {
		padding-top: 0;
	}

	.Newcat-cat-but {
		display: inline-block;
	}

	.goods-list-box {
		margin-top: 20rpx;
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.goods-list-item-box {
		width: 50%;
		margin-bottom: 20rpx;
	}

	.goods-list-item-box:nth-child(2n+1) .goods-list-item-wrap {
		margin-left: 20rpx;
		margin-right: 10rpx;
	}

	.goods-list-item-box:nth-child(2n) .goods-list-item-wrap {
		margin-left: 10rpx;
		margin-right: 20rpx;
	}

	.goods-list-item-wrap {
		/* height: 450rpx; */
		background: #fff;
		overflow: hidden;
		border-radius: 16rpx;
	}

	.goods-list-item-wrap view:nth-child(1) image {
		height: 330rpx;
	}
</style>
