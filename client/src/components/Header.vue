<template>
  <v-toolbar fixed dark class="red darken-4">
    <v-menu :nudge-width="100">
        <template v-slot:activator="{ on }">
          <v-toolbar-title v-on="on">
            <v-toolbar-side-icon></v-toolbar-side-icon>
          </v-toolbar-title>
        </template>

        <v-list>
          <v-list-tile>
            <v-list-tile-title>
              <router-link class="router-link" to="register">
                Register
              </router-link>
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
    </v-menu>
    <v-toolbar-title class="mr-4">
        <span
            class="home"
            @click="navigateTo({name: 'Home'})">
            HeartlandMacs
        </span>
    </v-toolbar-title>

    <v-toolbar-items>
        <v-btn flat dark>
            <router-link class="router-link" to="InventoryMain">
                Inventory
            </router-link>
        </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
        <v-btn flat dark>
            <router-link class="router-link" to="login">
                Login
            </router-link>
        </v-btn>
        <v-btn flat dark>
            <router-link class="router-link" to="register">
                Sign Up
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

.router-link {
    color: black;
    underline: none;
}

.home:hover {
    color: black;
}
</style>
