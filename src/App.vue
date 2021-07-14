<template>
  <div id="app">
    <CrudVue/>
  </div>
</template>

<script>
import CrudVue from './components/CrudVue.vue'

export default {
  name: 'App',
  components: {
    CrudVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
