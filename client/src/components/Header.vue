<template>
  <v-toolbar fixed dark class="red darken-4">
    <v-toolbar-title class="mr-4">
      <span
        class="home"
        @click="navigateTo({name: 'Home'})">
        Heartland Macs
      </span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>
    <v-menu :nudge-width="100">
        <template v-slot:activator="{ on }">
          <v-toolbar-title v-on="on">
            <v-toolbar-side-icon></v-toolbar-side-icon>
          </v-toolbar-title>
        </template>

        <v-list class="menu-list">
          <v-list-tile>
            <v-list-tile-title>
              <router-link class="router-link" to="register">
                Register
              </router-link>
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-title>
              <router-link class="router-link" to="login">
                Login
              </router-link>
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-title>
              <router-link class="router-link" to="InventoryMain">
                Inventory
              </router-link>
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
    </v-menu>
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
    text-decoration: none;
}

.home:hover {
    color: black;
}

</style>
