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
import { Options, Vue } from 'vue-class-component';
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

type AddTodoHandler = (title: string) => void;

@Options({
  props: {
    defalutTitle: String,
    onAddTodo: Function
  },
  components: {
    Field,
    Form,
    ErrorMessage
  }
})
export default class NewTodo extends Vue {
  defalutTitle: string = '';
  onAddTodo!: AddTodoHandler;
  values: { title: string } = { title: '' };
  $refs!: { newTodo: { resetForm: () => void; } };

  data() {
    return {
      schema: yup.object({
        title: yup.string().required(),
      }),
      values: {
        title: this.defalutTitle
      }
    };
  }

  onSubmit(values: { title: string }) {
    this.onAddTodo(values.title);
    this.values.title = '';
    this.$refs.newTodo.resetForm();
  }
}
</script>
