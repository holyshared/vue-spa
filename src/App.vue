<template>
  <Header title="Todos" />
  <Todos />
  <div class="forms">
    <PostForm />
    <SearchForm />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from './components/headers/Header.vue';
import Todos from './components/todos/Todos.vue';
import PostForm from './components/posts/PostForm.vue';
import SearchForm from './components/posts/SearchForm.vue';

@Options({
  components: {
    Header,
    Todos,
    PostForm,
    SearchForm
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
  grid-template-columns: 220px 220px 220px;
}
</style>
