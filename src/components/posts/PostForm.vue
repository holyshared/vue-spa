<template>
  <Form class="form" :validation-schema="schema" v-slot="{ meta: { valid } }" @submit="onSubmit">
    <fieldset>
      <div class="field">
        <label for="title">title</label>
        <Field id="title" type="text" name="title" v-model="values.title" />
        <ErrorMessage name="title" />
      </div>
      <div class="field">
        <label for="content">content</label>
        <Field id="content" as="textarea" name="content" v-model="values.content" />
        <ErrorMessage name="content" />
      </div>
      <input type="submit" value="post" :disabled="!valid" />
    </fieldset>
  </Form>
</template>

<style scoped>
.form {
  margin: 0 20px;
}
.field {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 15px;
}
label {
  margin-bottom: 5px;
}
span[role='alert'] {
  color: #f00;
}
fieldset {
  border-radius: 5px;
  border-color: #ddd;
  border-width: 1px;
  border-style: solid;
}
</style>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

interface PostValues extends Record<string, any> {
  title: string;
  content: string;
}

@Options({
  components: {
    Form,
    Field,
    ErrorMessage
  }
})
export default class PostForm extends Vue {
  data() {
    return {
      schema: yup.object({
        title: yup.string().required(),
        content: yup.string().required(),
      }),
      values: {
        title: '',
        content: '',
      }
    };
  }
  onSubmit(v: PostValues) {
    console.log(v);
  }
}
</script>
