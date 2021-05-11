<template>
  <Header title="Todos" />
  <Todos />
</template>

<script lang="ts">
import Header from './components/Header.vue';
import Todos from './components/Todos.vue';

export default {
  name: 'App',
  components: {
    Header,
    Todos
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
