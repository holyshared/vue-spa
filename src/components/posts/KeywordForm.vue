<template>
  <div class="keywordsForm">
    <Form @submit="submit">
      <Field name="keywords" v-model="values.keywords" />
      <input type="submit" value="find" />
    </Form>
  </div>
</template>

<style>
.keywordsForm {
  text-align: left;
  margin-bottom: 10px;
}
</style>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

export interface KeywordFormValues extends Record<string, any> {
  keywords: string;
}

@Options({
  props: {
    submit: Function
  },
  components: {
    Form,
    Field,
    ErrorMessage
  }
})
export default class KeywordForm extends Vue {
  submit!: (values: KeywordFormValues) => void;

  data() {
    return {
      values: {
        keywords: ''
      }
    };
  }
}
</script>
