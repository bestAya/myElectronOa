<template>
	<view class="">
		<view class="address-item card-daer card-top margin-bottom">
			<view class="padding flex justify-between align-center text-bold text-xl">
				<text>张振亚</text>
				<text>15110804272</text>
			</view>
			<view class="padding-lr margin-bottom-sm">
				北京市北京大兴区鹿华路7号棠颂雅苑一号楼311
			</view>
			<view class="padding flex justify-between align-center solid solid-top">
				<view class="">
					<radio class="radio blue sm" v-model="value" :checked="value==1?true:false" value="1" /><text></text>
					<text class="padding-left">默认地址</text>
				</view>
				<view class=" text-gray text-sm flex">
					<text class="padding-left">删除</text>
					<navigator url="/pages/my/addressfrom" hover-class="none" class="padding-left">编辑</navigator>
				</view>
			</view>
		</view>
		<view class="padding-lr">
			<navigator url="/pages/my/addressfrom" hover-class="none" class="cu-btn radius block bg-blue margin-tb-sm lg"><text class=""></text>新增地址</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: 1
			}
		}
	}
</script>

<style>
</style>
