<template>
	<view class="">
		<form>
			<view class="cu-form-group">
				<view class="title">收货人</view>
				<input placeholder="请填写收货人姓名" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">手机号码</view>
				<input placeholder="请填写收货人手机号码" name="input" type="number"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">所在地区</view>
				<picker mode="region" @change="RegionChange" :value="region">
					<view class="picker text-left">
						<text v-if="region.length > 0">{{region[0]}}/{{region[1]}}/{{region[2]}}</text>
						<text class="text-grey">省市区县、乡镇等</text>
						
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">详细地址</view>
				<input placeholder="街道、楼牌号等" name="input"></input>
			</view>
		</form>
	</view>


</template>

<script>
	export default {
		data() {
			return {
				region: []
			}
		},
		methods: {
			RegionChange(item) {
				this.region = item.detail.value
				console.log(item.detail.value)
			},
		},
	}
</script>

<style>
</style>
