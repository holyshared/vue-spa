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
import { Options, Vue } from 'vue-class-component';
import Menus from './Menus.vue';

@Options({
  props: {
    title: String
  },
  components: {
    Menus
  }
})
export default class Header extends Vue {
  opened!: boolean;

  toggleMenu() {
    this.opened = this.opened ? false : true;
  }
  data() {
    return {
      opened: false
    };
  }
}
</script>
