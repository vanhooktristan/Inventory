<template>
  <v-layout>
    <v-flex xs2 offset-xs3>
      <v-btn block color="secondary" dark>Inventory List</v-btn>
      <v-btn block color="secondary" dark>Customers</v-btn>
      <v-btn fab dark color="red darken-4">
        <v-icon>+</v-icon>
      </v-btn>
    </v-flex>
    <v-flex xs1></v-flex>
    <v-flex xs2>
      <v-btn block color="secondary" dark>Check-In</v-btn>
      <v-btn block color="secondary" dark>Check-Out</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import image from '@/assets/heartlandmacslogo.jpg'
export default {
  name: 'InventoryMain',
  data () {
    return {
      image: image
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
