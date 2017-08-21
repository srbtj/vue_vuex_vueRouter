<template>
  <div id="app">
    <MyHeader />
    <router-view></router-view>
    <MyFooter />
  </div>
</template>

<script>
import header from 'components/header'
import footer from 'components/footer'
export default {
  name: 'app',
  components: {
    'MyHeader': header,
    'MyFooter': footer
  }
}
</script>
<style>
#app{
  min-height: 100%;
  height: auto !important;
  height: 100%;
  position: relative;
}
</style>
