<template>
  <Header title="Todos" />
  <Todos />
  <div class="forms">
    <PostForm />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from './components/headers/Header.vue';
import Todos from './components/todos/Todos.vue';
import PostForm from './components/posts/PostForm.vue';

@Options({
  components: {
    Header,
    Todos,
    PostForm
  }
})
export default class App extends Vue {
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
.forms {
  display: grid;
  grid-template-columns: 200px 200px 200px;
}
</style>
