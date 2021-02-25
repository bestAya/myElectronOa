<template>
	<view class="Index bg-white">
		<!-- <view class="">
			<scroll-view class="recommend-item flex padding" scroll-x="true" :enable-flex="true"
			 scroll-left="120">
				<view class="recommend-item-box flex padding-tb-xs"  style="display: inline-block; width: 25%;" v-for="(item,index) in 10" :key="index">
					<view class="cat-list shadow-warp padding-tb round" >
						<text class="text-sm">鸭舌帽</text>
						<image src="../../static/img/cat1.png" mode=""></image>
					</view>
				</view>
			</scroll-view>
			
		</view> -->
		<!--搜索-->
		<view class="flex justify-between padding  align-center">
			<view class="text-bold seach-list">
				<text class="padding-lr-sm text-xxl">推荐</text>
				<text class="padding-lr-sm text-gray">好价</text>
				<text class="padding-lr-sm text-gray">热卖</text>
				<text class="padding-lr-sm text-gray">新品</text>
			</view>
			<view class="">
				筛选
			</view>
		</view>

		<!-- 瀑布流布局列表 -->
		<scroll-view class="VerticalNav nav" lower-threshold="200" @scrolltolower="scrollToLower" scroll-y
		 scroll-with-animation style="height:calc(100vh - 60px)">
			<waterfallsFlow :list="comList">
				<template v-slot:default="{item}">
					<view v-for="(item, index) of comList" :key="index" slot="slot{{index}}">
						<image :src="item % 2 ? '../../static/img/b2.jpg':'../../static/img/2.jpg'" mode="widthFix"></image>
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
					<!-- 此处添加插槽内容 -->
					<!-- <view class="cnt">
		           <view class="title">{{item.title}}</view>
		           <view class="text">{{item.text}}</view>
		         </view> -->
					
				</template>
			</waterfallsFlow>

		</scroll-view>
	</view>
</template>

<script>
	import waterfallsFlow from "@/components/maramlee-waterfalls-flow/maramlee-waterfalls-flow.vue";
	export default {
		components: {
			waterfallsFlow
		},
		data() {
			return {
				comList: [1,2,3,4,5,6], //商品列表
			};
		},

		onShow() {},

		methods: {
			scrollToLower() {
				this.comList = this.comList + 6;
			},
		},

	};
</script>

<style scoped="scoped" lang="scss">
	//瀑布流
	page {
		background-color: #eee;
		height: 100%;
	}

	.pubuBox {
		padding: 22rpx;
	}

	.pubuItem {
		column-count: 2;
		column-gap: 20rpx;
	}

	.item-masonry {
		box-sizing: border-box;
		border-radius: 15rpx;
		overflow: hidden;
		background-color: #fff;
		break-inside: avoid;
		/*避免在元素内部插入分页符*/
		box-sizing: border-box;
		margin-bottom: 20rpx;
		box-shadow: 0px 0px 28rpx 1rpx rgba(78, 101, 153, 0.14);
	}

	.item-masonry image {
		width: 100%;
	}

	.listtitle {
		padding-left: 22rpx;
		font-size: 24rpx;
		padding-bottom: 22rpx;

		.listtitle1 {
			line-height: 39rpx;
			text-overflow: -o-ellipsis-lastline;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			line-clamp: 2;
			-webkit-box-orient: vertical;
			min-height: 39rpx;
			max-height: 78rpx;
		}

		.listtitle2 {
			color: #ff0000;
			font-size: 32rpx;
			line-height: 32rpx;
			font-weight: bold;
			padding-top: 22rpx;

			.listtitle2son {
				font-size: 32rpx;
			}
		}

		.listtitle3 {
			font-size: 28rpx;
			color: #909399;
			line-height: 32rpx;
			padding-top: 22rpx;
		}
	}

	.Index {
		width: 100%;
		height: 100%;
	}

	.recommend-item {
		height: 330rpx;
		width: 100%;
		white-space: nowrap;
	}

	.recommend-item-box {
		width: 25%;
		display: inline-block;
	}

	.scroll-view_H,
	.scroll-view-item_H {
		height: 136rpx;
	}

	.scroll-view-item_H {
		width: 216rpx;
		margin-right: 20rpx;
	}

	.cat-ul {
		width: 100%;
		white-space: nowrap;
	}

	.cat-list {
		// width: 159rpx;
		// background-color: #007AFF;
		// height: 120rpx;
		height: 262rpx;
		margin: 0 20rpx;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: #fff;
		padding: 1px;
	}

	.cat-list image {
		display: block;
		width: 120rpx;
		height: 120rpx;
	}

	.seach-list {
		flex: 1;
	}
</style>
