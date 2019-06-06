<template>
  <v-layout class='bodyContatiner'>
    <v-flex></v-flex>
    <v-flex xs4>
      <v-btn class="bigButton" block color="secondary" dark>Inventory List</v-btn>
      <br>
      <v-btn class="bigButton" block color="secondary" dark>Customers</v-btn>
      <br>
      <v-btn class="bigButton" block color="secondary" dark>For Sale</v-btn>
    </v-flex>
    <v-flex></v-flex>
    <v-flex xs4>
      <v-btn class="bigButton" block color="secondary" dark>Check-In</v-btn>
      <br>
      <v-btn class="bigButton" block color="secondary" dark>Check-Out</v-btn>
      <br>
      <v-btn class="addButton" fab dark color="red darken-4">
        +
      </v-btn>
    </v-flex>
    <v-flex></v-flex>
  </v-layout>
</template>

<script>
import backgroundImage from '@/assets/background.jpg'
import image from '@/assets/heartlandmacslogo.jpg'
export default {
  name: 'InventoryMain',
  data () {
    return {
      backgroundImage: backgroundImage,
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
.addButton {
  font-size: 30px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
}
.bigButton {
  height: 100px;
  font-size: 2vw;
}

.bodyContainer {
  background-image: backgroundImage;
}
</style>
