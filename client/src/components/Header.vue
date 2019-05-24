<template>
  <v-toolbar fixed dark class="red">
    <v-toolbar-title class="mr-4">
        <span
            class="home"
            @click="navigateTo({name: 'Home'})">
            HeartlandMacks Inventory
        </span>
    </v-toolbar-title>

    <v-toolbar-items>
        <v-btn flat dark>
            Browse
        </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
        <v-btn flat dark>
            <router-link to="login">
                Login
            </router-link>
        </v-btn>
        <v-btn flat dark>
            <router-link to="register">
                Sign-In
            </router-link>
        </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
.home {
    cursor: pointer;
}

.home:hover {
    color: black;
}
</style>
