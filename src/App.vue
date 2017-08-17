<template>
  <div id="app">
    <MyHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import header from 'components/header/index'

export default {
  name: 'app',
  components: {
    'MyHeader': header
  }
}
</script>
<style>
body{
  margin: 0;
  padding: 0;
}
</style>
