<!--
	单选按钮组的设置思路：
		传统的 input['radio'] 指定的同一个name ，点击哪一个 另外的几个不选中
		Radio组件并没有指定 name 属性，那么如何指定初始值， 即一开始哪个是选中的 或者 选择一个时 其它的怎样变成没有选中，即组件是如何关联的 ？？？

		Radio是否选中，本身不做处理，根据 按钮组传入的值来决定

		当Radio组件切换时 ，再通知 RadioGroup 修改参数值

		vue中使用 v-model 进行双向绑定， 其实现方式是：
			v-bind:value=""
			v-on:input=""

		所以当组件使用 v-model 进行双向绑定时  应当要做的两件事
			1. 指定 value 属性
			2. 当值变化时 广播 input 事件  即  this.$emit('input', value)
-->
<template>
	<div :class="classes">
		<slot></slot>
	</div>
</template>
<script>
	import { oneOf, findComponentsDownward } from '@/utils/assist'
	import Emitter from '@/mixins/emitter'
	let prefixCls = 'v-radio-group'
	export default {
        name: 'RadioGroup',
        mixins: [ Emitter ],
        props: {
        	value: {
        		type: [String, Number],
        		default: ''
        	},
        	size: {
        		validator (val) {
        			return oneOf(['small', 'large'], val)
        		}
        	},
        	vertical: {
        		type: Boolean,
        		default: false
        	},
        	type: {
        		validator (val) {
        			return oneOf(['button'], val)
        		}
        	}
        },
        computed: {
        	classes () {
        		return [
        			`${prefixCls}`,
        			{
        				[`${prefixCls}-vertical`]: this.vertical,
        				[`${prefixCls}-button`]: !!this.type,
        				[`${prefixCls}-${this.size}`]: !!this.size
        			}
        		]
        	}
        },
        data () {
        	return {
        		children: [],
        		currentValue: this.value
        	}
        },
        methods: {
        	// 改变Radio组件的值
        	updateValue () {
        		let value = this.value  //获取当前RadioGroup指定的值
        		// 获取 RadioGroup组件 下的 子组件
        		let childrens = this.children = findComponentsDownward(this, 'Radio')
        		if (childrens.length) {
        			childrens.forEach(child => {
        				// 当子组件的 label === value 当前子组件 选中
        				child.currentValue = value === child.label
        				child.group = true
        			})
        		}
        	},
        	// 当 Radio 值改变时 修改 RadioGroup 绑定的值
        	change (data) {
        		this.currentValue = data.value
        		this.updateValue()
        		this.$emit('input', data.value) // 当值变更时 修改v-model绑定的值
        		this.$emit('on-change', data.value) // 当值变更时 将当前选中的值返回给需要者
        		this.dispatch('FormItem', 'on-form-change', data.value) // 广播给表单
        	}
        },
        mounted () {
        	this.updateValue()
        },
        watch: {
        	value () {
        		console.log('radio group value has change ...')
        		this.updateValue()
        	}
        }
    }
</script>
<style lang="less"></style>