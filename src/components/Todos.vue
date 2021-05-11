<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      <span>{{ item.title }}</span>
      <input type="checkbox" v-bind:checked="item.done" v-on:change="toggleDone(item)" />
    </li>
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
  methods: {
    toggleDone(todo) {
      todo.done ? false : true;

      console.log(this.items);
    }
  }
}
</script>
