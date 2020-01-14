<template>
  <div class="UserUpdate">
    <h1>{{ message }}</h1>
    <p>First Name: <input type="text" v-model="user.first_name"></p>
    <p>Last Name: <input type="text" v-model="user.last_name"></p>
    <p>Email: <input type="text" v-model="user.email"></p>
    <p>Phone Number: <input type="text" v-model="user.phone_number"></p>
    <p>Home Address: <input type="text" v-model="user.home_address"></p>
    <button v-on:click="updateUser(theUser)">Update Profile</button>
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
      users: [],
      currentUser: {},
    };
  },
  created: function() {
    axios.get(`/api/user`).then(response => {
      this.user = response.data;
      console.log(response);
    });
  },
  
  methods: {

    updateUser: function(theUser) {
      console.log('updating the the user...');
      var params = {
        first_name: theUser.first_name,
        last_name: theUser.last_name,
        email: theUser.email,
        phone_number: theUser.phone_number,
        home_address: theUser.home_address
      };
      axios.patch(`/api/users/${theUser.id}`, params).then(response => {
        console.log(response.data);
        theUser.first_name = response.data.first_name;
        theUser.last_name = response.data.last_name;
        theUser.email = response.data.email;
        theUser.phone_number = response.data.phone_number;
        theUser.home_address = response.data.home_address;
      });
    }
  }
};
</script>


<!--     updateRecipe: function(theRecipe) {
      console.log('updating the recipe...');
      console.log(theRecipe);
      var params = {
        title: theRecipe.title,
        chef: theRecipe.chef,
        ingredients: theRecipe.ingredients,
        directions: theRecipe.directions,
        prep_time: theRecipe.prep_time,
      }
      axios.patch(`/api/recipes/${theRecipe.id}`, params).then(response => {
        console.log(response.data);
        theRecipe.title = response.data.title;
        theRecipe.directions = response.data.directions;
        theRecipe.ingredients = response.data.ingredients;
        theRecipe.prep_time = response.data.prep_time;
        theRecipe.chef = response.data.chef;
      });
    }, -->