//  autofocus  html5新特性
<template>
	<div :class="wrapClasses">
		<div :class="[prefixCls + '-group-prepend']" v-if="prepend" v-show="slotReady"><slot name="prepend"></slot></div>
		<input
			ref="input"
			:class="inputClasses"
			:type="type"
			:name="name"
			:value="currentValue"
			:size="size"
			:maxlength="maxlength"
			:autofocus="autofocus"
			:placeholder="placeholder"
			:readonly="readonly"
			:disabled="disabled"
			@focus="handleFocus"
			@blur="handleBlur"
			@input="handleInput"
			@change="handleChange"
		>
		<div :class="[prefixCls + '-group-append']" v-if="append" v-show="slotReady"><slot name="append"></slot></div>
	</div>
</template>
<script>
	import { oneOf, findComponentUpward } from '@/utils/assist'
	let prefixCls = 'v-input'
	export default{
		name: 'vInput',
		props: {
			placeholder: {
				type: String,
				default: '请输入'
			},
			disabled: {
				type: Boolean,
				default: false
			},
			size: {
				validator (value) {
					return oneOf(['small', 'large', 'default'], value)
				}
			},
			type: {
				type: String,
				default: 'text'
			},
			value: {
				type: [String, Number],
				default: ''
			},
			maxlength: {
				type: Number
			},
			readonly: {
				type: Boolean,
				default: false
			},
			name: String,
			autofocus: {
				type: Boolean,
				default: false
			},
			number: {
				type: Boolean,
				default: false
			}
		},
		data () {
			return {
				prepend: true,
				append: true,
				slotReady: false,
				prefixCls: prefixCls,
				currentValue: this.value
			}
		},
		computed: {
			wrapClasses () {
				return [
					`${prefixCls}-wrapper`,
					{
						[`${prefixCls}-wrapper-${this.size}`]: !!this.size,
						[`${prefixCls}-type`]: this.type,
						[`${prefixCls}-group`]: this.prepend || this.append,
						[`${prefixCls}-group-${this.size}`]: (this.prepend || this.append) && this.size,
						[`${prefixCls}-group-with-prepend`]: this.prepend,
						[`${prefixCls}-group-with-append`]: this.append
					}
				]
			},
			inputClasses () {
				return [
					`${prefixCls}`,
					{
						[`${prefixCls}-${this.size}`]: !!this.size
					}
				]
			}
		},
		methods: {
			handleFocus (event) {
				this.$emit('on-focus', event)
			},
			handleBlur (event) {
				this.$emit('on-blur', event)
				if (!findComponentUpward(this, ['DatePicker', 'TimePicker', 'Cascader', 'Search'])) {
					// this.dispatch('FormItem', 'on-form-blur', this.currentValue)
				}
			},
			/**
			 * 值改变时立即触发  oninput  通过js改变值时 不会触发 oninput 事件
			**/
			handleInput (event) {
				let oInput = this.$refs.input
				let value = oInput.value.trim()
				if (this.number) value = Number.isNaN(Number(value)) ? value : Number(value)
				this.$emit('input', value)
				this.setCurrentValue(value)
				this.$emit('on-change', event)
			},
			/**
			 * 值改变且失去焦点时触发 onchange  通过js改变值时 不会触发 onchange 事件
			**/
			handleChange (event) {
				console.log('handle change...')
				this.$emit('on-change', event)
			},
			setCurrentValue (val) {
				if (val === this.currentValue) return
				this.currentValue = val

				if (!findComponentUpward(this, ['DatePicker', 'TimePicker', 'Cascader', 'Search'])) {
					// this.dispatch('FormItem', 'on-form-change', val)
				}
			}
		},
		watch: {
			value (val) {
				console.log('has watch .... ')
				this.setCurrentValue(val)
			}
		},
		mounted () {
			this.prepend = this.$slots.prepend !== undefined
			this.append = this.$slots.append !== undefined
			this.slotReady = true
		}
	}
</script>
<style lang="less"></style>