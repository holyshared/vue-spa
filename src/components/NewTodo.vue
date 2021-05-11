<template>
  <Form :initial-values="values">
    <Field type="text" name="title" :rules="isRequired" v-model="values.title" />
    <ErrorMessage name="title" />
  </Form>
  <input type="button" value="Add todo" @click="handleAddTodo" />
</template>

<style scoped>
</style>

<script lang="ts">
import { Field, Form, ErrorMessage } from 'vee-validate';

export default {
  name: 'NewTodo',
  props: {
    defalutTitle: String,
    onAddTodo: Function
  },
  data: (state) => {
    return {
      values: {
        title: state.defalutTitle
      }
    };
  },
  methods: {
    isRequired(value) {
      if (value && value.trim()) {
        return true;
      }
      return 'This is required';
    },
    handleAddTodo() {
      this.onAddTodo(this.values.title);
      this.values.title = '';
    }
  },
  components: {
    Field,
    Form,
    ErrorMessage
  }
}
</script>
