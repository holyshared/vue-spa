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
import { Options, Vue } from 'vue-class-component';

@Options({
  emits: ['update:checked'],
  props: {
    title: String,
    checked: Boolean
  }
})
export default class Todo extends Vue {
  title: string = '';
  checked: boolean = false;
}
</script>
