<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ManageCity msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ManageCity from './components/ManageCity.vue'

export default {
  name: 'app',
  components: {
    ManageCity
  }
}
</script>

<style>
</style>
