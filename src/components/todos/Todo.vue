<template>
<li>
  <label>
    <input type="checkbox"
      :checked="checked"
      @change="$emit('update:checked', $event.target.checked)" />
    {{title}}
  </label>
  </li>
</template>

<script lang="ts">
export default {
  props: {
    title: String,
    checked: Boolean
  },
  emits: ['update:checked'],
};
</script>
