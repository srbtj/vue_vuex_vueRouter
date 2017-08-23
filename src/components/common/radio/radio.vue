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
        	wrapClasses () {},
        	radioClasses () {},
        	innerClasses () {},
        	inputClasses () {}
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
        	handleChange (event) {},
        	// 修改Radio组件的值
        	updateValue () {
        		this.currentValue = this.value === this.trueValue
        	}
        },
        mounted () {
        	if (this.parent) this.group = true
        	if (!this.group) {
        		this.updateValue()
        	} else {
        		this.parent.updateValue()
        	}
        }
    }
</script>
<style lang="less"></style>