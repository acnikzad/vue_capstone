<template>
  <div class="dogshow">
      <center>
      <h2>Dog Profile</h2>
      <br>
      <section class="container">
        <div class="row features">
          <section class="col-6 col-12-narrower feature">
            <br>
              <div v-for="dog in user.dogs">
                <img v-bind:src="dog.image_url" width ="420">
              </div>
          </section>
          <section class="col-6 col-12-narrower feature">
            <div v-for="dog in user.dogs">
              <p class="text-left" >Name: {{dog.name}}</p>
              <p class="text-left">Breed: {{dog.breed}}</p>
              <p class="text-left">Color: {{dog.color}}</p>
              <p class="text-left">Age: {{dog.age}}</p>
              <p class="text-left">Weight: {{dog.weight}}</p>
              <p class="text-left">Bio: {{dog.bio}}</p>
            </div>
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