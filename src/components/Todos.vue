<template>
  <p v-if="completed">completed</p>
  <ul>
    <Todo v-for="item in items" :key="item.id" :title="item.title" v-model:checked="item.done" />
  </ul>
</template>

<style scoped>
ul {
  text-align: left;
  list-style: none;
  display: flex;
  flex-direction: column;
}
</style>

<script lang="ts">
import Todo from './Todo.vue';

export default {
  name: 'Todos',
  data: () => {
    return {
      items: [
        {
          id: 1,
          title: 'todo1',
          done: false
        },
        {
          id: 2,
          title: 'todo2',
          done: true
        },
        {
          id: 3,
          title: 'todo3',
          done: false
        },
      ]
    };
  },
  computed: {
    completed() {
      return this.items.every(item => item.done);
    }
  },
  components: {
    Todo,
  }
}
</script>
