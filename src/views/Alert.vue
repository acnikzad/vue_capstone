<template>
  <div class="alert">
    <h1>{{ message }}</h1>
    <button @click="showAlert">Hello world</button>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "This is an alert"
    };
  },
  created: function() {},
  methods: {
    showAlert() {
      this.$swal('Your dog is outside the specified parameters');
    }
  }
};
</script>