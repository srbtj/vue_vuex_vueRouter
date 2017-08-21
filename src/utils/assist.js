export function oneOf (array, str) {
	for (let i = 0, len = array.length; i < len; i++) {
		if (array[i] === str) {
			return true
		}
	}
	return false
}

/**
	向上查找祖先组件
**/
export function findComponentUpward (context, componentName, componentNames) {
	if (typeof componentName === 'string') {
		componentNames = [componentName]
	} else {
		componentNames = componentName
	}
	// vm.$parent 父实例 如果有的话
	let parent = context.$parent
		// $options.name 获取当前实例的自定义 name 值
	let name = parent.$options.name
	while (parent && (!name || componentNames.indexOf(name) < 0)) {
		parent = parent.$parent
		if (parent) name = parent.$options.name
	}
	return parent
}