<template>
	<view class="Index">
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
		<view class="flex justify-between padding bg-white align-center">
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
		 <view class="margin-sm bg-gray">
		 	<waterfallsFlow :list="comList">
		 		<template>
		 			<view v-for="(item, index) of comList" :key="index" slot="slot{{index}}">
		 				<!-- <image :src="item % 2 ? '../../static/img/b2.jpg':'../../static/img/2.jpg'" mode="widthFix"></image> -->
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
		 </view>
			

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
				comList: [{
						id: 1,
						image_url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599475741266&di=e36d6c01c93320e2ba1504d8357248f4&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F30%2F29%2F01300000201438121627296084016.jpg",
						title: "可爱的小猫咪呀",
						text: "小小的猫咪，甚是呆萌，呆萌呆萌呆萌呆萌呆萌呆萌呆萌呆萌呆萌呆萌呆萌呆萌呆萌呆萌呆萌呆萌呆萌呆萌呆萌",
					},
					{
						id: 2,
						image_url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599475934834&di=7a37b8d628252c4aced6ed0decba9442&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F43%2F74%2F01300000164151121808741085971.jpg",
						title: "迪士尼动画",
						text: "迪士尼动画之……",
					},
					{
						id: 3,
						image_url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599476083909&di=a5debff35edec5de105bc105d6fdbce3&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F77%2F77%2F01300000336597125202779973172.jpg",
						title: "火箭",
						text: "火箭升空瞬间，宏伟壮观啊",
					},
					{
						id: 5,
						image_url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599476129760&di=7a3db0b14f6a74240bbfa7922ba22f45&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F82%2F55%2F01300000349330124003555691086.jpg",
						title: "华佗",
						text: "华佗人物画像 中国画 线条画 毛笔画 彩色画",
					},
					{
						id: 6,
						image_url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599476215687&di=97c2bbf6f3a1a3e2a6a2dc77dfe4bea7&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F72%2F82%2F19300000009075130804824786610.jpg",
						title: "恐龙",
						text: "恐龙来啦",
					},
					{
						id: 7,
						image_url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599476258176&di=29622b0f0cfd659aecebabaae352d02c&imgtype=0&src=http%3A%2F%2F1882.img.pp.sohu.com.cn%2Fimages%2Fblog%2F2011%2F3%2F25%2F13%2F13%2Fu48513077_12fa4ba953ag213.jpg",
						title: "手",
						text: "什么？",
					},
					{
						id: 8,
						image_url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599476300222&di=49712f992d8f7bbb1a5851eced71cbe2&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F71%2F56%2F16300000988660128426569668958.jpg",
						title: "百年好合",
						text: "百年好合 结婚 庚帖 二次元",
					},
					{
						id: 9,
						image_url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599476416001&di=ea1a1f8f9b1274d39c05af3e48041e6a&imgtype=0&src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F12420002963%2F641",
						title: "5G",
						text: "5G 来啦",
					},
					{
						id: 10,
						image_url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599476497015&di=2dfa9a6ec465d7330bc0b4433d63cd9e&imgtype=0&src=http%3A%2F%2Fimgo.zjjjtg.com%2Fimg2020%2F9%2F4%2F10%2F2020090410315179234.jpg",
						title: "LEVEL 2",
						text: "LEVEL 2",
					},
					{
						id: 12,
						image_url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599476567983&di=040976a1cd1a6e5510a237c57bdcff06&imgtype=0&src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F12421051168%2F641",
						title: "王者荣耀",
						text: "王者荣耀 龙 快来打龙 请求集合",
					},
				], //商品列表
			};
		},

		onShow() {},

		methods: {
			scrollToLower() {
				// this.comList = this.comList + 6;
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
