<template>
  <div class="signup container">
    <div class="row">
      <div class="col-sm-6">
        <form v-on:submit.prevent="submit()">
          <div class="card border-secondary mb-3" style="max-width: 18rem;">
            <div class="card-header">New Post</div>
            <div class="card-body text-secondary">
              <div>
                <input placeholder="Title" type="text" v-model="newPost.title" />
              </div>
              <div>
                <input placeholder="Body" type="text" v-model="newPost.body" />
              </div>
              <div>
                <input placeholder="Image URL" type="text" v-model="newPost.image" />
              </div>
              <input type="submit" value="Submit" />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

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