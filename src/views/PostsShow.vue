<template>
  <div class="container">
    <div>
      <hr />
      <hr />
      <p>ID: {{ post.id }}</p>
      <button @click="this.$router.push(`/posts/${post.id}/edit`)">Edit</button>
      <button @click="destroyPost()">Delete</button>
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
      <p>
        <a :href="post.image">{{ post.image }}</a>
      </p>
      <img :src="post.image" />
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      errors: [],
      post: {},
    }
  },
  created() {
    this.showPost();
  },
  methods: {
    showPost() {
      axios.get(`posts/${this.$route.params.id}`)
        .then((res) => {
          this.post = res.data;
        })
    },
    destroyPost() {
      axios.delete(`posts/${this.$route.params.id}`)
        .then(() => {
          this.$router.push("/posts");
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

    t.integer "user_id"
    t.string "title"
    t.text "body"
    t.string "image"