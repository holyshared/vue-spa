<template>
  <Menus v-bind:opened="opened" @click="toggleMenu" />
  <header>
    <h1>{{title}}</h1>
    <button type="button" @click="toggleMenu">Menu</button>
  </header>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  height: 60px;
  border-bottom: 1px solid #ddd;
  padding: 0 20px;
}
h1 {
  text-align: center;
  order: 2;
  flex: 1;
}
button {
  order: 1;
}
</style>

<script lang="ts">
import Menus from './Menus.vue';

export default {
  name: 'Header',
  props: {
    title: String
  },
  data: () => {
    return {
      opened: false
    };
  },
  methods: {
    toggleMenu() {
      this.opened = this.opened ? false : true;
    }
  },
  components: {
    Menus
  }
}
</script>
