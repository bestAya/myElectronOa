<template>
	<view>
		<scroll-view class="VerticalNav nav" scroll-y scroll-with-animation style="height:calc(100vh - 75px)">
			<view class="bg-white">
				<view class="d-banner">
					<swiper class="screen-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
					 :autoplay="true" interval="5000" duration="500">
						<swiper-item v-for="(item,index) in swiperList" :key="index">
							<image src="../../static/img/b1.jpg" mode="aspectFill" v-if="item.type=='image'"></image>
							<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
						</swiper-item>
					</swiper>
				</view>
				<view class=" padding">
					<view class="flex justify-between align-center margin-bottom">
						<text class="text-price text-xxl text-bold text-orange">108.00</text>
						<text class="text-xs text-gray">101人购买</text>
					</view>
					<view class="text-lg">
						夏季薄款渔夫帽女韩版潮百搭遮脸日系防晒遮阳帽网红格子太阳帽子
					</view>
				</view>
			</view>
			<!--规格-->
			<view class="rules padding margin-tb-sm bg-white">
				<view class="rules-item flex"><text>品牌</text>
					<view class="">韩版</view>
				</view>
				<view class="rules-item flex"><text>发货</text>
					<view class="">北京</view>
				</view>
				<view class="rules-item flex"><text>运费</text>
					<view class="">满30包邮</view>
				</view>
			</view>
			<view class="del-img">
				<!-- <rich-text :nodes="strings"></rich-text> -->
				<image v-for="item in 0" :key="item" :src="`../../static/img/详情页_01_${item + 1}.png`" mode=""></image>
			</view>
		</scroll-view>

		<view class="cu-bar bg-white tabbar border shop">
			<!-- <button class="action" open-type="contact">
				<view class="cuIcon-service text-green">
					<view class="cu-tag badge"></view>
				</view>
				客服
			</button> -->
			<view class="action text-orange">
				<view class="cuIcon-favorfill"></view> 已收藏
			</view>
			<view class="action">
				<view class="cuIcon-cart">
					<view class="cu-tag badge">99</view>
				</view>
				购物车
			</view>
			<view class="bg-red submit" @click="open">立即订购</view>
		</view>
		<goodActive :visible.sync="activeFlag">
			<view class="padding">
				<view class="">
					<image src="../../static/img/2.jpg" mode=""></image>
					<view class="">
						<view class="">夏季薄款渔夫帽女韩版潮百搭遮</view>
						<text>600.00</text>
					</view>
				</view>
				<view class="">
					<view class="">颜色</view>
					<view class="">
						
					</view>
				</view>
			</view>
			<view class="cu-bar bg-white tabbar border shop">
				<view class="bg-grey submit">立即订购</view>
				<view class="bg-red submit">立即订购</view>
			</view>
		</goodActive>
		


	</view>
</template>

<script>
	import goodActive from "../../components/goods-active/goods-active.vue"
	export default {
		components:{
			goodActive
		},
		data() {
			return {
				activeFlag:false,
				swiperList: [{
					id: 0,
					type: 'image',
				}, {
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
				}, {
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				}, {
					id: 3,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				}],
				dotStyle: true,
				imglist: [],
			};
		},
		methods:{
			open(){
				this.activeFlag = true;
			}
		},
	}
</script>
<style scoped="scoped" lang="scss">
	.screen-swiper {
		height: 619rpx;
	}

	.rules-item>view,
	.rules-item text {
		padding: 20rpx 0;
	}

	.rules-item text {
		width: 120rpx;
	}

	.rules-item>view {
		color: #000000;
	}

	.del-img image {
		width: 100%;
		height: 481rpx;
		float: left;
	}
	.VerticalNav{
		// margin-bottom: 55px;
	}
</style>
