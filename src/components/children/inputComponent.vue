<template>
	<div :class="">
		<v-input />
	</div>
</template>
<script>
	import Input from 'components/common/input'
	export default{
		name: 'inputComponent',
		components: { 'v-input': Input }
	}
</script>
<style lang="less"></style>