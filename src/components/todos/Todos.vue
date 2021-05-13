<template>
  <p v-if="completed">completed</p>
  <NewTodo defalutTitle="next todo" :onAddTodo="addTodo" />
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
import { Options, Vue } from 'vue-class-component';
import Todo from './Todo.vue';
import NewTodo from './NewTodo.vue';

@Options({
  components: {
    Todo,
    NewTodo
  }
})
export default class Todos extends Vue {
  items!: { id: number; title: string; done: boolean; }[];

  data() {
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
  }
  get completed() {
    return this.items.every(item => item.done);
  }
  addTodo(title: string) {
    this.items.push({
      id: (new Date().getTime()),
      title,
      done: false
    });
  }
}
</script>
