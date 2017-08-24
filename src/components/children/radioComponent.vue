<template>
	<div :class="" style="margin-top: 5px;">
		<!-- <v-radio :label="'性别'" v-model="radioVal"/> -->
		<radio-group v-model="radioVal" :type="'button'">
			<v-radio :label="'aaa'" />
			<v-radio :label="'bbb'" />
			<v-radio :label="'ccc'" :disabled="true"/>
		</radio-group>

		<radio-group v-model="radioVal">
			<v-radio :label="'aaa'" />
			<v-radio :label="'bbb'" />
			<v-radio :label="'ccc'" :disabled="true"/>
		</radio-group>

		<div>当前选择的项：{{ radioVal }}</div>
	</div>
</template>
<script>
	import Radio from 'components/common/radio'
	export default{
		name: 'inputComponent',
		components: { 'v-radio': Radio, 'radio-group': Radio.Group },
		data () {
			return {
				radioVal: 'ccc'
			}
		}
	}
</script>
<style lang="less"></style>