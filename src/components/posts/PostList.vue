<template>
  <p v-if="isEmpty">empty list</p>
  <div v-for="item in items" :key="item.title" class="postItem">
    <div class="postDetail">
    <span class="postTitle">{{item.title}}</span>
    <span class="postContent">{{item.content}}</span>
    </div>
  </div>
</template>

<style>
.postItem {
  text-align: left;
  margin-bottom: 15px;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: center; 
  flex-direction: column;
  padding: 10px 0;
  margin: 0;
}
.postDetail {
  display: flex;
  flex-direction: column;
}
.postContent {
  flex: 1;
}
</style>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    items: Array
  }
})
export default class PostList extends Vue {
  items!: { title: string; content: string; }[];

  get isEmpty()  {
    return this.items.length <= 0;
  }
}
</script>
