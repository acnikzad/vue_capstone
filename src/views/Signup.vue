<template>
  <div class="signup">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Sign Up Here</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
          <div class="form-group">
            <label>First Name:</label>
            <input type="text" class="form-control" v-model="first_name">
          </div>
          <div class="form-group">
            <label>Last Name:</label>
            <input type="text" class="form-control" v-model="last_name">
          </div>
          <div class="form-group">
            <label>Phone Number:</label>
            <input type="text" class="form-control" v-model="phone_number">
          </div>
          <div class="form-group">
            <label>Address:</label>
            <input type="text" class="form-control" v-model="home_address">
          </div>
          <div class="form-group">
            <label>Email:</label>
            <input type="text" class="form-control" v-model="email">
          <div class="form-group">
            <label>Password:</label>
            <input type="text" class="form-control" v-model="password">
          </div>
          <div class="form-group">
            <label>Password Confirmation:</label>
            <input type="text" class="form-control" v-model="password_confirmation">
          </div>
          <input type ="submit" class="btn btn-primary" value="Submit">  
        </div>
      </form>
    </div>
    <h1>This is the signup page</h1>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      first_name: "",
      last_name: "",
      phone_number: "",
      home_address: "",
      email: "",
      password: "",
      password_confirmation: "",
      errors: [],
    };
  },

  methods: {
    submit: function() {
      var params = {
        first_name: this.first_name,
        last_name: this.last_name,
        phone_number: this.phone_number,
        address: this.home_address,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .post("/api/users", params)
        .then(response => {
          this.$router.push("/login");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>