<template>
  <div class="searchForm">
    <KeywordForm :submit="onSubmit" />
    <PostList :items="macthedItems" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import KeywordForm, { KeywordFormValues } from './KeywordForm.vue';
import PostList from './PostList.vue';

@Options({
  components: {
    KeywordForm,
    PostList
  }
})
export default class SearchForm extends Vue {
  items!: { title: string, content: string }[];
  currentKeywords!: string;

  data() {
    return {
      items: [
        { title: 'title1', content: 'content1' },
        { title: 'title2', content: 'content2' },
        { title: 'title3', content: 'content3' },
      ],
      currentKeywords: ''
    };
  }
  get macthedItems() {
    if (!this.currentKeywords) {
      return this.items;
    }
    return this.items.filter((item: { title: string }) => {
      return item.title.startsWith(this.currentKeywords);
    });
  }
  onSubmit(values: KeywordFormValues) {
    this.currentKeywords = values.keywords;
  }
}
</script>
