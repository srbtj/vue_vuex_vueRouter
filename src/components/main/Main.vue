<template>
	<div class="main-wrap">
		<VueScrollbar>
			<div class="sidebar">
				<div v-for="item in items">{{ item }}</div>
			</div>
			<div class="container">这是内容模块</div>
		</VueScrollbar>
	</div>
</template>
<script type="text/ecmascript-6">
	import VueScrollbar from '../common/vueScroll/VueScrollbar'
	export default{
		name: 'main',
		components: { VueScrollbar },
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
			for (let i = 0; i < 100; i++) {
				this.items.push(i)
			}
		}
	}
</script>
<style lang="less">
	@import './main';
</style>