<template>
  <div class="searchForm">
    <KeywordForm :submit="onSubmit" />
    <PostList :items="macthedItems" />
  </div>
</template>

<script lang="ts">
import { computed, ref } from 'vue';
import KeywordForm, { KeywordFormValues } from './KeywordForm.vue';
import PostList from './PostList.vue';

const filterPosts = (keywords: string, items: { title: string }[]) => {
  return items.filter((item: { title: string }) => {
    return item.title.startsWith(keywords);
  });
};

export default {
  components: {
    KeywordForm,
    PostList
  },
  setup() {
    const items = [
      { title: 'title1', content: 'content1' },
      { title: 'title2', content: 'content2' },
      { title: 'title3', content: 'content3' },
    ];
    const currentKeywords = ref('');
    const macthedItems = computed(() => {
      return (!currentKeywords.value) ? items : filterPosts(currentKeywords.value, items);
    });
    const onSubmit = (values: KeywordFormValues) => {
      currentKeywords.value = values.keywords;
    };
    return {
      macthedItems,
      onSubmit,
    };
  }
};
</script>
