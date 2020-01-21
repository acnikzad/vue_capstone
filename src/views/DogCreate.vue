<template>
  <div class="dog-new">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h2>Create a Dog Profile</h2>
        <div class="form-group">
          <label>Name:</label>
          <input type="text" class="form-control" v-model="name" width="50">
        </div>
        <div class="form-group">
          <label>Color:</label>
          <input type="text" class="form-control" v-model="color" width="50">
        </div>
        <div class="form-group">
          <label>Breed:</label>
          <input type="text" class="form-control" v-model="breed" width="50">
        </div>
        <div class="form-group">
          <label>Age:</label>
          <input type="text" class="form-control" v-model="age" width="50">
        </div>
        <div class="form-group">
          <label>Weight:</label>
          <input type="text" class="form-control" v-model="weight" width="50">
        </div>
        <div class="form-group">
          <label>Image URL:</label>
          <input type="text" class="form-control" v-model="image_url" width="50">
        </div>
        <div class="form-group">
          <label>Bio:</label>
          <input type="text" class="form-control" v-model="bio" width="50">
        </div>
        <center>
          <input type="submit" class="btn btn-primary" value="Submit">
        </center>
      </form>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      name: "",
      color:"",
      breed:"",
      age:"",
      weight:"",
      image_url:"",
      bio:"",

    };
  },
  created: function() {},
  methods: {
    submit: function() {

      var params = {
        name: this.name,
        color: this.color,
        breed: this.breed,
        age: this.age,
        weight: this.weight,
        image_url: this.image_url,
        bio: this.bio
      };

      axios
        .post("/api/dogs", params)
        .then(response => {
          this.$router.push("/profile");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });

    }
  }
};
</script>