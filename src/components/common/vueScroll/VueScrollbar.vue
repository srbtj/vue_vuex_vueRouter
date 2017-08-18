<template>
	<!-- 滚动容器 -->
	<div
		ref="scrollWrap"
		:style="styles"
		:class="['vue-scroll-wrapper', classes ? ' ' + classes : '']"
		@click="calculateSize"
	>
		<!-- 滚动区域 -->
		<div
			ref="scrollArea"
			:style="{
				marginTop: top * -1 + 'px',
				marginLeft: left * -1 + 'px'
			}"
			:class="['vue-scroll-area', dragging ? '' : 'vue-scrollbar-transition']"
			@wheel="scroll"
			@touchstart="startDrag"
			@touchmove="onDrag"
			@touchend="stopDrag"
		>
			<slot></slot>
		</div>
	</div>
</template>
<script type="text/ecmascript-6">
	export default{
		name: 'vueScrollbar',
		props: {
			classes: String,
			styles: Object,
			speed: {
				type: Number,
				default: 50
			},
			onMaxScroll: Function
		},
		components: {},
		data () {
			return {
				ready: false,
				top: 0,
				left: 0,
				scrollAreaHeight: 0,
				scrollAreaWeight: 0,
				scrollWrapperHeight: 0,
				scrollWrapperWidth: 0,
				vMovement: 0, //垂直移动
				hMovement: 0, //水平移动
				dragging: false,
				start: { x: 0, y: 0 },
				allowBodyScroll: false

			}
		},
		methods: {
			scroll (e) {
				console.log(e)
				this.calculateSize(() => {
					// 设置滚轮步骤
					let num = this.speed
					// DOM event   滚动时 shift键是否被按下
					// 默认滚动方向是垂直的  当按下 shift 时 滚动方向变成水平
					let shifted = e.shiftkey
					// 滚动的初始值
					let scrollY = e.deltaY > 0 ? num : -(num)
					let scrollX = e.deltaX > 0 ? num : -(num)
					console.log(num, shifted)

					if (shifted && e.deltaX == 0) scrollX = e.deltaY > 0 ? num : -(num)

					// 滚动的下一个值
					let nextY = this.top + scrollY
					let nextX = this.left + scrollX

					// 是否可以滚动
					let canScrollY = this.scrollAreaHeight > this.scrollWrapperHeight
					let canScrollX = this.scrollAreaWeight > this.scrollWrapperWidth

					// 垂直滚动
					if (canScrollY && !shifted) this.normalizeVertical(nextY)

					// 水平滚动
					if (shifted && canScrollX) this.normalizedHorizontal(nextX)
				})
			},
			startDrag (e) {},
			onDrag (e) {},
			stopDrag () {},
			calculateSize () {},
			normalizeVertical (next) {
				//const elementSize = this.getSize()

				// 垂直滚动
			},
			getSize () {
				let $scrollArea = this.$refs.scrollArea
				let $scrollWrapper = this.$refs.scrollWrapperHeight

				let elementSize = {
					scrollAreaHeight: $scrollArea.children[0].clientHeight,
					scrollAreaWeight: $scrollArea.children[0].clientWeight,

					scrollWrapperHeight: $scrollWrapper.clientHeight,
					scrollWrapperWidth: $scrollWrapper.clientWidth
				}

				return elementSize
			}
		}

	}
</script>
<style lang="less">
	
</style>