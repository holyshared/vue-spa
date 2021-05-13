<template>
  <div class="keywordsForm">
    <Form @submit="submit">
      <Field name="keywords" v-model="keywords" />
      <ErrorMessage name="keywords" />
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
import { ref } from 'vue';
import { Field, Form, ErrorMessage } from 'vee-validate';

export interface KeywordFormValues extends Record<string, any> {
  keywords: string;
}

export default {
  props: {
    submit: Function
  },
  components: {
    Form,
    Field,
    ErrorMessage
  },
  setup() {
    const keywords = ref('');
    return {
      keywords: keywords.value,
    };
  }
};
</script>
