<template>
  <div>
    <b-container>
      <h1 class="title pb-3 pt-3">
        <strong> Login </strong>
      </h1>
      <div>
        <b-row align-h="center">
          <b-form-group label="Email Address:">
            <b-col>
              <b-form-input
                class="column"
                type="email"
                v-model="email"
                name="email"
                placeholder="email"
                required
              />
            </b-col>
          </b-form-group>
          <b-form-group label="Password:">
            <b-col>
              <b-form-input
                class="column"
                type="password"
                v-model="password"
                name="password"
                placeholder="password"
                required
              />
            </b-col>
          </b-form-group>
          </b-row>
          <br />
          <div class="error" v-html="error" />
          <br />
          <b-button class="shadow rounded" pill variant="dark" @click="login">
            Login
          </b-button>
      </div>
    </b-container>
  </div>
</template>

<script>
/* eslint-disable */
import authenticationService from "@/services/authenticationService";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async login() {
      try {
        const response = await authenticationService.login({
          email: this.email,
          password: this.password,
        });
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.token)

      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
