<template>
	<div class="main-wrap">
		<VueScrollbar>
			<div class="sidebar">
				<v-input :value="12345" :autofocus="false">
					<div slot="prepend">this is prepend content</div>
					<div slot="append">this is append content</div>
				</v-input>
			</div>
			<div class="container">这是内容模块</div>
		</VueScrollbar>
	</div>
</template>
<script type="text/ecmascript-6">
	import VueScrollbar from '../common/vueScroll/VueScrollbar'
	import Input from 'components/common/input'
	export default{
		name: 'main',
		components: {
			VueScrollbar,
			'v-input': Input
		},
		data () {
			return {
				items: []
			}
		},
		methods: {
			scroll () {
				console.log('wheel ...')
			}
		},
		mounted () {

		}
	}
</script>
<style lang="less">
	@import './main';
</style>