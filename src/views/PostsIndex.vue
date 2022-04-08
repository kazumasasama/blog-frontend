<template>
  <div class="container">
    <div v-for="post in posts" :key="post.id">
      <hr />
      <hr />
      <p>ID: {{ post.id }}</p>
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
      <img class="post-img" :src="post.image" />
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      posts: [],
    }
  },
  created() {
    this.indexPosts();
  },
  methods: {
    indexPosts() {
      axios.get("posts")
        .then((res) => {
          this.posts = res.data
        })
    },
  },
}
</script>

<style>
.post-img {
  max-height: 200px;
}
</style>