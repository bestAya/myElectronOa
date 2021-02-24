<template>
	<view class="mask" catchtouchmove="preventTouchMove" v-if="flag" @click.stop="hide">

		<view class="goods-active" @click.stop="flag = true">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			visible: {
				default: false,
			}
		},
		data() {
			return {
				flag: false
			}
		},
		methods:{
			hide(){
				this.flag = false;
				this.$emit('update:visible', false);
			}
		},
		computed:{
			active(){
				return this.visible
			}
		},
		watch:{
			active(val){
				this.flag = val;
			}
		}
	}
</script>

<style>
	/* 遮罩层 */
	.mask {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background:rgb(0,0,0,0.5);
		z-index: 9000;
	}

	.goods-active {
		position: absolute;
		bottom: 0;
		left: 0;
		/* height: 50%; */
		width: 100%;
		background: #fff;
		z-index: 9001;
		border-radius: 14rpx;
	}
</style>
