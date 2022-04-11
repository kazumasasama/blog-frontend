<template>
  <div class="signup">
    <form v-on:submit.prevent="submit()">
      <h1>Edit Post</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label></label>
        <p>
          Title
          <input type="text" v-model="updatingPost.title" />
        </p>
        <p>
          Body
          <input type="text" v-model="updatingPost.body" />
        </p>
        <p>
          Image URL
          <input type="text" v-model="updatingPost.image" />
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      errors: [],
      updatingPost: {},
    };
  },
  created() {
    axios.get(`posts/${this.$route.params.id}`)
      .then((res) => {
        this.updatingPost = res.data;
      })
  },
  methods: {
    submit() {
      axios
        .patch(`posts/${this.$route.params.id}`, this.updatingPost)
        .then(() => {
          this.$router.push(`/posts/${this.$route.params.id}`)
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>