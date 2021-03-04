<template>
	<view class="">
		<!--内容-->
		<view class="centent">
			<view class="card-daer card-bottom">
				<view class="cu-list menu sm-border  ">
					<view class="cu-item arrow">
						<view class="content">
							<text class="">选择收货地址</text>
						</view>
						<view class="action">
							<text class="text-gray">微信支付</text>
						</view>
					</view>
				</view>
			</view>
			<view class="sub-ul  bg-white margin-top-sm padding">
				<view class="sub-ul-item  padding-tb flex" v-for="item in 12">
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
			<view class="cu-list menu sm-border margin-top-sm ">
				<view class="cu-item arrow">
					<view class="content">
						<text class="">配送方式</text>
					</view>
					<view class="action">
						<text class="text-gray">快递配送</text>
					</view>
				</view>
			</view>
			<view class="cu-list menu sm-border margin-top-sm ">
				<view class="cu-item arrow">
					<view class="content">
						<text class="">优惠券</text>
					</view>
					<view class="action">
						<text class="text-gray">暂无可用</text>
					</view>
				</view>
				<view class="cu-item arrow">
					<view class="content">
						<text class="">备注</text>
					</view>
				</view>
			</view>
			
			
			<view class="cu-list menu sm-border margin-top-sm ">
				<view class="cu-item">
					<view class="content">
						<text class="">优惠券/优惠</text>
					</view>
					<view class="action">
						<text class="text-red text-price">0</text>
					</view>
				</view>
				<view class="cu-item">
					<view class="content">
						<text class="">运费</text>
					</view>
					<view class="action">
						<text class="text-red text-price">0</text>
					</view>
				</view>
				<view class="cu-item">
					<view class="content">
						<text class="">商品价格</text>
					</view>
					<view class="action">
						<text class="text-red text-price">0</text>
					</view>
				</view>
				<view class="cu-item">
					<view class="content">
						<text class="">实际付款</text>
					</view>
					<view class="action">
						<text class="text-red text-price">0</text>
					</view>
				</view>
			</view>
			<view class="cu-list menu sm-border margin-top-sm ">
				<view class="cu-item arrow">
					<view class="content">
						<text class="">支付方式</text>
					</view>
					<view class="action">
						<text class="text-gray">微信支付</text>
					</view>
				</view>
			</view>
		</view>

		<!--确认订单-->
		<view class="cu-bar bg-white tabbar border shop">
			
			<view class="  text-left padding-sm" style="width: 60%;">
				<view class="text-red text-bold text-xl">总计：<text class="text-price">2800.00</text></view>
				<view class="text-xs text-orange">已优惠：<text class="text-price">2800.00</text></view>
			</view>
			<view class="bg-red submit">确认支付</view>
		</view>

	</view>

</template>

<script>
</script>

<style lang="scss">
	.centent {
		padding-bottom: calc(120rpx + env(safe-area-inset-bottom) / 2);
	}

	.cu-bar {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
	}

</style>
