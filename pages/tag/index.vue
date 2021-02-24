<template>
	<view>
		<scroll-view class="VerticalNav nav bg-white" scroll-y scroll-with-animation style="height:calc(100vh)">
			<view class="">
				<view class="cu-timeline">
					<view class="cu-time">06-17</view>
					<view class="cu-item">
						<view class="flex align-center">
							<view class='cu-tag radius bg-green sm margin-right-xs'>新品上架</view>
							<text class="text-black">新品上架啦！限时2小时8折</text>
						</view>
						<view class="grid col-2 grid-square">
							<view class="bg-img" v-for="(item,index) in avatar" :key="index">
								<image src="../../static/img/2.jpg" mode=""></image>
							</view>
						</view>
					</view>
					<view class="cu-item text-grey cuIcon-evaluate_fill">
						<view class="grid col-2 bg-white ">
							<view class="padding-xs" v-for="(item,index) in ColorList" :key="index" v-if="index<12">
								<view class="padding radius text-center light" :class="'bg-' + item">
									<view class="text-lg">{{item}}</view>
									<view class="margin-top-sm text-Abc">{{item}}</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>

		</scroll-view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				avatar: ['https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
					'https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg',
					'https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg',
					'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
				],
				ColorList: [
					'red',
					'orange',
					'yellow',
					'olive',
					// 'green',
					// 'cyan',
					// 'blue',
					// 'purple',
					// 'mauve',
				],

			}
		},
		onLoad() {
			uni.setBackgroundColor({
				backgroundColor: '#ffffff',
				backgroundColorTop: '#222222',
				backgroundColorBottom: '#333333'
			});
		},
	}
</script>
<style scoped>
	.cu-timeline {
		height: 100%;
	}

	.nav .cu-item {
		height: auto !important;
	}
</style>
