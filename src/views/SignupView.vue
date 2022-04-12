<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newUserParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="signup container">

    <ul>
      <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
    </ul>

    <form v-on:submit.prevent="submit()">
      <div class="card border-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header">Signup</div>
        <div class="card-body text-secondary">
          <div>
            <input placeholder="Name" type="text" v-model="newUserParams.name" />
          </div>
          <div>
            <input placeholder="Email" type="email" v-model="newUserParams.email" />
          </div>
          <div>
            <input placeholder="Password" type="password" v-model="newUserParams.password" />
          </div>
          <div>
            <input placeholder="confirm password" type="password" v-model="newUserParams.password_confirmation" />
          </div>
          <input type="submit" value="Submit" />
        </div>
      </div>
    </form>
  </div>
</template>