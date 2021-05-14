<template>
  <article>
    <Header title="Example" />
    <div class="container">
      <RouterView />
    </div>
  </article>
</template>

<script lang="ts">
import { RouterView } from 'vue-router';
import Header from './components/headers/Header.vue';

export default {
  components: {
    Header,
    RouterView
  }
}
</script>

<style>
body {
  margin: 0;
}
.container {
  margin: 20px 20px 0 20px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.forms {
  display: grid;
  grid-template-columns: 220px 220px 220px;
}
</style>
