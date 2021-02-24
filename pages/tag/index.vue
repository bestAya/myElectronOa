<template>
	<view class="content">
		<view class="goods-list-box">
			<view class="goods-list-item-box" v-for="(item,index) in 6" :key="index">
				<view class="goods-list-item-wrap">
					<view>
						<image src="../../static/img/2.jpg">
					</view>
					<view class="padding-tb-xs padding-lr-sm">
						<view class="text-cut text-df padding-bottom-sm">韩版女式帽子</view>
						<view class="text-price padding-tb-xs text-xl text-bold padding-bottom-sm">600.00</view>
					</view>

				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				result: [{
					
					photo: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg',
					title: '韩版女式帽子',
					price: '600'
				}, {
					photo: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg',
					title: 'shiahdiashdiashid',
					price: '600'
				}]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	
</style>
