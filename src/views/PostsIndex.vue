<template>
  <div class="container">
    <VueMultiselect
      v-model="selected"
      :options="options"
      :multiple="true"
    >
    </VueMultiselect>
    <div v-for="post in posts" :key="post.id">
      <hr />
      <hr />
      <div @click="this.$router.push(`/posts/${post.id}`)">
        <p>Click to see more info</p>
        <p>ID: {{ post.id }}</p>
        <h3>Title: {{ post.title }}</h3>
        <img class="post-img" :src="post.image" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import VueMultiselect from 'vue-multiselect'
export default {
  components: { VueMultiselect },
  data() {
    return {
      posts: [],
      selected: null,
      options: []
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
          this.options = this.posts.map(post => post)
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
<style src="vue-multiselect/dist/vue-multiselect.css"></style>

