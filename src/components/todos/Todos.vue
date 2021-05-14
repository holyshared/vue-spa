<template>
  <div class="todos">
    <p v-if="completed">completed</p>
    <NewTodo defalutTitle="next todo" :onAddTodo="addTodo" />
    <ul>
      <Todo v-for="item in items" :key="item.id" :title="item.title" v-model:checked="item.done" />
    </ul>
  </div>
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
import { ref, computed } from 'vue';
import Todo from './Todo.vue';
import NewTodo from './NewTodo.vue';

export default {
  components: {
    Todo,
    NewTodo
  },
  setup() {
    const items = ref([
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
    ]);
    const completed = computed(() => {
      return items.value.every(item => item.done);
    });
    const addTodo = (title: string) => {
      items.value.push({
        id: (new Date().getTime()),
        title,
        done: false
      });
    };

    return {
      items,
      completed,
      addTodo
    };
  }
};
</script>
