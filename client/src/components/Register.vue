<template>
  <v-layout row wrap>
    <v-flex xs4 offset-xs4>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-spacer></v-spacer>
          <v-toolbar-title>Register</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>

        <div class="pl-4 lr-4 pt-2 pb-2">
        <v-flex xs8 offset-xs2>
          <v-text-field
            label="Email"
            v-model="email"
          ></v-text-field>
          <br>
          <v-text-field
            label="Password"
            v-model="password"
          ></v-text-field>
        </v-flex>
        <br>
        <div class="error" v-html="error" />
        <v-btn class="cyan"
         @click="register">
          Register
        </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
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
        await AuthenticationService.register({
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

<style>
.error {
  color: red;
}
</style>
