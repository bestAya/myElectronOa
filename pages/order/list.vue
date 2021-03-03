<template>
	<view class="">
	 <liuyuno-tabs :tabData="tabs" :defaultIndex="defaultIndex" @tabClick='tabClick' />
	</view>
</template>

<script>
	import liuyunoTabs from "@/components/liuyuno-tabs/liuyuno-tabs.vue";
	export default {
	    components: {
	        liuyunoTabs
	    },
		data(){
			return {
				tabs:['全部','待付款','已付款','待收货','售后'],
				defaultIndex:0,
			}
		},
		methods:{
			tabClick(){},
		},
	}
</script>

<style>
</style>
