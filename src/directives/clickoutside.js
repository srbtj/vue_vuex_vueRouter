export default {
	bind (el, binding, vnode) {
		function documentHandle (e) {
			if (el.contains(e.target)) {
				return false
			}
		}

		el.__vueClickOutside = documentHandle
		document.addEventListener('click', documentHandle, false)
	},
	unbind (el) {
		console.log('has remove')
		document.removeEventListener('click', el.__vueClickOutside, false)
	}
}