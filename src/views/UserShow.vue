<template>
  <div class="usershow">
      <center>
      <h2>User Profile</h2>
      <br>
      <section class="container">
        <div class="row features">
          <section class="col-6 col-12-narrower feature">
            <br>
              <img v-bind:src="user.image_url" width = "420">
          </section>
          <section class="col-6 col-12-narrower feature">
            <br>
            <p class="text-left" >First Name: {{user.first_name}}</p>
            <p class="text-left" >Last Name: {{user.last_name}}</p>
            <p class="text-left" >Email: {{user.email}}</p>
            <p class="text-left" >Phone Number: {{user.phone_number}}</p>
            <p class="text-left" >Address: {{user.home_address}}</p>
          </section>
          </div>
        </section>
        <a href="http://localhost:8080/profile">Back</a>
      </center>
  </div>
</template>

<style>

</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      user: {},
    };
  },
  created: function() {
    axios.get(`/api/user`).then(response => {
      this.user = response.data;
      console.log(response);
    });
  },
  methods: {}
};
</script>