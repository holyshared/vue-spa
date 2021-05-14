<template>
  <div class="forms">
    <Todos />
    <PostForm />
    <SearchForm />
  </div>
</template>

<style>
</style>

<script lang="ts">
import Todos from '../todos/Todos.vue';
import PostForm from '../posts/PostForm.vue';
import SearchForm from '../posts/SearchForm.vue';

export default {
  components: {
    Todos,
    PostForm,
    SearchForm
  }
};
</script>
