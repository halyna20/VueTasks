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
body {
  height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  height: 100vh;
}
.container input {
  margin: 10px;
}

.error {
  color: red;
}
</style>
