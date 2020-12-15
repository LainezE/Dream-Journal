<template>
  <div>
    <h1>Register</h1>
    <input
      type="email"
      v-model="email"
      name="email"
      placeholder="email"
    />
    <input
      type="password"
      v-model="password"
      name="password"
      placeholder="password"
    />
    <br>
    <div class = "error" v-html = "error"/>
    <br>
    <v-btn @click="register">
      Register
    </v-btn>
  </div>
</template>

<script>
import authenticationService from '@/services/authenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await authenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
