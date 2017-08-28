<template>
	<transition name="fade">
		<div :class="classes">
			<div :class="mainClasses">
				<span :class="dotClasses"></span>
				<div :class="textClasses">
					<slot></slot>
				</div>
			</div>
		</div>
	</transition>
</template>
<script>
	import { oneOf } from '@/utils/assist'
	let prefixCls = 'v-spin'
	export default{
		name: 'Spin',
		props: {
			size: {
				validator (val) {
					return oneOf(['small', 'large'], val)
				}
			},
			fix: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			classes () {
				return [
					`${prefixCls}`,
					{
						[`${prefixCls}-${this.size}`]: !!this.size,
						[`${prefixCls}-fix`]: this.fix,
						[`${prefixCls}-show-text`]: this.showText
					}
				]
			},
			mainClasses () {
				return `${prefixCls}-main`
			},
			dotClasses () {
				return `${prefixCls}-dot`
			},
			textClasses () {
				return `${prefixCls}-text`
			}
		},
		data () {
			return {
				showText: false
			}
		},
		mounted () {
			console.log(this.$slots)
			this.showText = this.$slots.default !== undefined
		}
	}
</script>
<style lang="less">
	
</style>