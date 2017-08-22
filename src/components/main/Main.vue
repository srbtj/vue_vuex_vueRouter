<template>
	<div class="main-wrap">
		<VueScrollbar>
			<div class="sidebar">
				<!-- <v-input :value="12345" :autofocus="false" :icon="'checkmark'"
				>
					<div slot="prepend">this is prepend content</div>
					<div slot="append">this is append content</div>
				</v-input>

				<span>2222222<i class="v-icon v-icon-checkmark"></i></span> -->
				<ul class="list">
					<li v-for="item in items" class="list-item">
						<router-link :to="item.path" class="link-item">{{ item.text }}</router-link>
					</li>
				</ul>
			</div>
			<div class="container">
				<router-view></router-view>
			</div>
		</VueScrollbar>
	</div>
</template>
<script type="text/ecmascript-6">
	import VueScrollbar from '../common/vueScroll/VueScrollbar'
	import Input from 'components/common/input'

	let datas = [
		{
			path: 'input',
			text: 'input组件'
		},
		{
			path: 'radio',
			text: 'radio组件'
		}
	]
	export default{
		name: 'main',
		components: {
			VueScrollbar,
			'v-input': Input
		},
		data () {
			return {
				items: datas
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