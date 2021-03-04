<template>
	<view class="">
		<view class="order-tab">
			<liuyuno-tabs :tabData="tabs" :activeIndex="defaultIndex" :defaultIndex="defaultIndex" @tabClick='tabClick'></liuyuno-tabs>
		</view>
		<view class="order-centent">
			<mescroll-body ref="mescrollRef" @init="mescrollInit" @down="downCallback" @up="loadData" :up="upOption" :down="downOption"
			 @emptyclick="emptyClick">
				<view>
					<view class="margin radius bg-white">
						<view class="cu-list menu sm-border">
							<view class="cu-item ">
								<view class="content">
									<text class=" text-bold">我的订单</text>
								</view>
								<view class="action">
									<text class="text-orange text-sm ">等待卖家付款</text>
								</view>
							</view>
						</view>
						<view class="sub-ul solid solid-top padding-lr">
							<view class="sub-ul-item padding-tb flex" v-for="item in 2">
								<image src="../../static/img/cat1.png" class="radius" mode="widthFix"></image>
								<view class="sub-ul-item-t flex">
									<view class="text-bold">
										家用摄像头
									</view>
									<view class="text-gray">
										规格:红色
									</view>
									<view class="flex justify-between align-center">
										<text class="text-price text-red">996.00</text>
										<text class="text-gray text-xs">x1</text>
									</view>
								</view>
							</view>
						</view>
						<!---->
						<view class="padding">
							<view class="text-right">
								<text class="text-black text-sm margin-right-sm">共2件商品 合计:</text><text class="text-price text-xl text-red">1388.00</text>
							</view>
							<view class="flex align-center justify-end">
								<button class="cu-btn line-gray  text-gray margin-left-sm"><text></text>取消订单</button>
								<button class="cu-btn line-blue margin-tb-sm margin-left-sm"><text></text> 立即付款</button>
								<button class="cu-btn line-red margin-tb-sm margin-left-sm"><text></text> 再次购买</button>
							</view>
						</view>
					</view>
				</view>


			</mescroll-body>

		</view>
	</view>
</template>

<script>
	import liuyunoTabs from "@/components/liuyuno-tabs/liuyuno-tabs.vue";
	export default {
		components: {
			liuyunoTabs
		},
		data() {
			return {
				tabs: ['全部', '待付款', '已付款', '待收货', '售后'],
				defaultIndex: 0,
				activeIndex:0,
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
		onLoad(option){
			console.log(option)
			this.defaultIndex = Number(option.index) ;
		},
		methods: {
			tabClick(index) {
				this.defaultIndex = index;
			},
			swiperChange(item) {
				console.log(item.detail.current)
				this.defaultIndex = item.detail.current;
			},
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
		},
	}
</script>

<style >
	.order-tab {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 999;
		background: #fff;
	}

	.order-centent {
		/* padding-top: 90rpx; */
		box-sizing: border-box;
	}
	
	.order-centent .mescroll-body{
		padding-top: 90rpx !important;
	}
</style>
