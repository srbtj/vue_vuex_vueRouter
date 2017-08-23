<template>
	<div :class="">
		<!-- <v-radio :label="'性别'" v-model="radioVal"/> -->
		<radio-group v-model="radioVal">
			<v-radio :label="'aaa'" />
			<v-radio :label="'bbb'" />
			<v-radio :label="'ccc'" />
		</radio-group>
	</div>
</template>
<script>
	import Radio from 'components/common/radio'
	export default{
		name: 'inputComponent',
		components: { 'v-radio': Radio, 'radio-group': Radio.Group },
		data () {
			return {
				radioVal: 'aaa'
			}
		}
	}
</script>
<style lang="less"></style>