<template>
  <ValidateForm msg="Welcome to Your Vue.js App"/>
</template>

<script>
import ValidateForm from './components/ValidateForm.vue'

export default {
  name: 'App',
  components: {
    ValidateForm
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
