<template>
	<label :class="wrapClasses">
		<span :class="radioClasses">
			<span :class="innerClasses"></span>
			<input
				type="radio"
				:class="inputClasses"
				:disabled="disabled"
				:checked="currentValue"
				@change="handleChange"
			>
		</span>
		<slot>{{ label }}</slot>
	</label>
</template>
<script>
	import { findComponentUpward } from '@/utils/assist'
	import Emitter from '@/mixins/emitter'
	let prefixCls = 'v-radio'
	 export default {
        name: 'Radio',
        mixins: [ Emitter ],
        props: {
        	disabled: {
        		type: Boolean,
        		default: false
        	},
        	value: {
        		type: [String, Number, Boolean],
        		default: false
        	},
        	trueValue: {
        		type: Boolean,
        		default: true
        	},
        	falseValue: {
        		type: Boolean,
        		default: false
        	},
        	label: [String, Number]
        },
        computed: {
        	wrapClasses () {
        		return [
        			`${prefixCls}-wrapper`,
        			{
        				[`${prefixCls}-group-item`]: this.group,
        				[`${prefixCls}-wrapper-disabled`]: this.disabled,
        				[`${prefixCls}-wrapper-checked`]: this.currentValue
        			}
        		]
        	},
        	radioClasses () {
        		return [
        			`${prefixCls}`,
        			{
        				[`${prefixCls}-disabled`]: this.disabled,
        				[`${prefixCls}-checked`]: this.currentValue
        			}
        		]
        	},
        	innerClasses () {
        		return `${prefixCls}-inner`
        	},
        	inputClasses () {
        		return `${prefixCls}-input`
        	}
        },
        data () {
        	return {
        		currentValue: this.value,
        		parent: findComponentUpward(this, 'RadioGroup'),
        		group: false
        	}
        },
        methods: {
        	// 点击Radio组件时 如果有RadioGroup组件时 将选中的值 传回给父组件 否则发送对应的事件
        	handleChange (event) {
        		if (this.disabled) return
        		let checked = event.target.checked
        		this.currentValue = checked

        		let value = checked ? this.trueValue : this.falseValue
        		this.$emit('input', value)

        		if (this.group) {
        			this.parent.change({
        				value: this.label,
        				checked: this.value
        			})
        		} else {
        			this.$emit('on-change', value)
        			this.dispatch('FormItem', 'on-form-change', value)
        		}
        	},
        	// 修改Radio组件的值
        	updateValue () {
        		this.currentValue = this.value === this.trueValue
        	}
        },
        mounted () {
        	console.log('radio value:', this.value)
        	if (this.parent) this.group = true
        	if (!this.group) {
        		this.updateValue()
        	} else {
        		this.parent.updateValue()
        	}
        },
        watch: {
        	value (val) {
        		console.log('radio value has change...')
        		if (val !== this.trueValue && val !== this.falseValue) {
        			console.log('error...')
        		}
        		this.updateValue()
        	}
        }
    }
</script>
<style lang="less"></style>