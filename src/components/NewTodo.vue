<template>
  <Form :initial-values="values" :validation-schema="schema" @submit="onSubmit" ref="newTodo">
    <div>
      <Field type="text"
        name="title"
        v-model="values.title"
        :validateOnChange="false" />
      <ErrorMessage name="title" />
    </div>
    <input type="submit" value="Add todo" />
  </Form>
</template>

<style scoped>
</style>

<script lang="ts">
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

export default {
  name: 'NewTodo',
  props: {
    defalutTitle: String,
    onAddTodo: Function
  },
  data: (state) => {
    return {
      schema: yup.object({
        title: yup.string().required(),
      }),
      values: {
        title: state.defalutTitle
      }
    };
  },
  methods: {
    async onSubmit(values) {
      this.onAddTodo(values.title);
      this.values.title = '';
      this.$refs.newTodo.resetForm();
    }
  },
  components: {
    Field,
    Form,
    ErrorMessage
  }
}
</script>
