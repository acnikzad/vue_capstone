<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <router-link to="/signup"> Sign Up Here</router-link>
    <br>
    <router-link to="/login"> Login Here</router-link>
    <br>
    <router-link to="/map"> Map</router-link>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Welcome to Block Hound!"
    };
  },
};
</script>