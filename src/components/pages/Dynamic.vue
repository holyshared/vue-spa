<template>
  <h2>{{name}}</h2>
</template>

<style>
</style>

<script lang="ts">
import { toRefs, reactive, watch } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const user = reactive({ name: route.params.username as string });
    const { name } = toRefs(user);

    watch(
      () => route.params.username,
      async (username) => {
        name.value = username as string;
      }
    );

    return {
      name
    };
  }
};
</script>
