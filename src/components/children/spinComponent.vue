<template>
	<div :class="">
		<Spin :size="'small'"></Spin>
		<Spin></Spin>
		<Spin :size="'large'"></Spin>

	</div>
</template>
<script>
	import Spin from 'components/common/spin'
	export default{
		name: 'spinComponent',
		components: { Spin }
	}
</script>
<style lang="less">
	
</style>