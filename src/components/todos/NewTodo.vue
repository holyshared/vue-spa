<template>
  <form @submit="onSubmit">
    <div>
      <Field type="text" name="title" :validateOnChange="false" />
      <ErrorMessage name="title" />
    </div>
    <input type="submit" value="Add todo" />
  </form>
</template>

<style scoped>
</style>

<script lang="ts">
import { Field, Form, ErrorMessage, FormState, FormActions, useForm } from 'vee-validate';
import * as yup from 'yup';

type AddTodoHandler = (title: string) => void;

interface TodoValues extends Record<string, any> {
  title: string;
}

export default {
  components: {
    Field,
    ErrorMessage
  },
  props: {
    defalutTitle: String,
    onAddTodo: Function
  },
  setup(props: { defalutTitle: string, onAddTodo: AddTodoHandler }) {
    const { resetForm, handleSubmit } = useForm<{ title: string }>({
      validationSchema: yup.object({
        title: yup.string().required(),
      }),
      initialValues: {
        title: props.defalutTitle
      },
    });
    const onSubmit = handleSubmit(values => {
      props.onAddTodo(values.title);
      resetForm({ values: { title: '' } });
    });
    return {
      onSubmit
    };
  }
};
</script>
