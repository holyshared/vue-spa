<template>
  <aside v-if="opened">
    <h2>Menus</h2>
    <ul>
      <li>menu1</li>
      <li>menu2</li>
    </ul>
    <button type="button" @click="onClick">close</button>
  </aside>
</template>

<style scoped>
button {
  width: 100px;
}

aside {
  position: absolute;
  z-index: 1;
  left:0;
  top:0;
  padding: 20px;
  margin: 0;
  background-color: #333;
  color: #fff;
}
h2 {
  font-size: 1em;
  border-bottom: 1px solid #fff;
  text-transform: uppercase;
  text-align: center;
  margin: 0 0 10px 0;
  padding: 0 0 10px 0;
}

ul {
  font-size: 0.8em;
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
}
</style>

<script lang="ts">
export default {
  name: 'Menus',
  props: {
    opened: Boolean,
    onClick: Function
  }
}
</script>
