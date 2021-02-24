<template>
	<view>
		<view class="cu-list menu-avatar">
			<view class="cu-item">
				<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Taric.png);">
					<view class="cu-tag badge">99+</view>
				</view>
				<view class="content">
					<view class="text-grey">
						<view class="text-cut">瓦洛兰之盾-塔里克</view>
						<view class="cu-tag round bg-orange sm">战士</view>
					</view>
					<view class="text-gray text-sm flex">
						<view class="text-cut">
							塔里克是保护者星灵，用超乎寻常的力量守护着符文之地的生命、仁爱以及万物之美。塔里克由于渎职而被放逐，离开了祖国德玛西亚，前去攀登巨神峰寻找救赎，但他找到的却是来自星界的更高层的召唤。现在的塔里克与古代巨神族的神力相融合，以瓦洛兰之盾的身份，永不疲倦地警惕着阴险狡诈的虚空腐化之力。
						</view>
					</view>
				</view>
				<!-- <view class="action">
						<view class="text-grey text-xs">22:20</view>
						<view class="cuIcon-notice_forbid_fill text-gray"></view>
					</view> -->
			</view>
		</view>
		<view class="bg-white padding">
			<view class="flex">
				<view class="flex-sub bg-grey padding-sm margin-xs radius">1</view>
				<view class="flex-sub bg-grey padding-sm margin-xs radius">1</view>
			</view>
		</view>
		<view class="cu-list menu sm-border">
			<view class="cu-item arrow" v-for="item in 10">
				<view class="content">
					<text class="cuIcon-circlefill text-grey"></text>
					<text class="text-grey">图标 + 标题</text>
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
<style></style>
