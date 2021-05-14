<template>
  <Menus :opened="opened" @click="toggleMenu" />
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
import { ref } from 'vue';
import Menus from './Menus.vue';

export default {
  components: {
    Menus
  },
  props: {
    title: String
  },
  setup() {
    const opened = ref(false);
    const toggleMenu = () => {
      opened.value = opened.value ? false : true;
    };
    return {
      opened,
      toggleMenu
    };
  }
};
</script>
