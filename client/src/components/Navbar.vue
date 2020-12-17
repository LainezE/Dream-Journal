<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <router-link to="HelloWorld">
        <b-navbar-brand>Dream Journal</b-navbar-brand>
      </router-link>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button
              size="sm"
              pill
              class="shadow rounded my-2 my-sm-0 mr-2"
              type="submit"
              >Search</b-button
            >
          </b-nav-form>
          <router-link to="login">
            <b-button
              v-if="!$store.state.isUserLoggedIn"
              size="sm"
              class="shadow rounded my-2 my-sm-0 mr-2"
              pill
              variant="info"
            >
              Login
            </b-button>
          </router-link>
          <router-link to="register">
            <b-button
              v-if="!$store.state.isUserLoggedIn"
              size="sm"
              class="shadow rounded"
              pill
              variant="info"
            >
              Register
            </b-button>
          </router-link>
          <router-link to="HelloWorld">
            <b-button
              v-if="$store.state.isUserLoggedIn"
              size="sm"
              class="shadow rounded"
              pill
              variant="info"
            >
              Signout
            </b-button>
          </router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  /* eslint-disable */
  methods: {
    async signout() {
       this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.token);
    },
  },
};
</script>

<style scoped>
</style>
