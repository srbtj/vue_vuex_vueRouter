import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Main from 'components/main'
import inputComponent from 'components/children/inputComponent'
Vue.use(Router)

let router = new Router({
	linkActiveClass: 'active',
	routes: [{
		path: '/',
		name: 'Main',
		component: Main,
		children: [
			{
				path: '',
				redirect: 'input'
			},
			{
				path: 'input',
				component: inputComponent
			},
			{
				path: 'radio',
				component: Main
			}
		]
	}]
})

// router.linkActiveClass '.active'

export default router