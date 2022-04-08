<script>
import axios from "axios";

export default {
  data() {
    return {
      errors: [],
      newPost: {},
    };
  },
  methods: {
    submit() {
      axios
        .post("posts", this.newPost)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/posts");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="signup">
    <form v-on:submit.prevent="submit()">
      <h1>New Post</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label></label>
        <p>
          Title
          <input type="text" v-model="newPost.title" />
        </p>
        <p>
          Body
          <input type="text" v-model="newPost.body" />
        </p>
        <p>
          Image URL
          <input type="text" v-model="newPost.image" />
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </div>
    </form>
  </div>
</template>