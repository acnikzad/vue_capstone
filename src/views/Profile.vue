<template>
  <div class="home">
    <div id="map">
      <gmap-map
        :center="center"
        :zoom="zoom"
        map-type-id="roadmap"
        style="width: 100%; height: 600px">
        <gmap-marker
          :key="index"
          v-for="(m, index) in markers"
          :clickable="true"
          :draggable="true"
          :position="m.position"
          :icon="markerOptions"
          @click="center=m.position"
        />
      </gmap-map>
    </div>

    <h1>User Profile</h1>
    <p>Name: {{ user.first_name }} {{ user.last_name }}</p>
    <p>Email: {{ user.email}}</p>    
    <p>Phone Number: {{user.phone_number}}</p>
    <p>Address: {{ user.home_address}}</p>
    <p><router-link to="/userupdate">Update Info</router-link></p>
    <br>

    <h1>Dog Profile</h1>

    <div v-for="dog in user.dogs">
        <p>Name: {{dog.name}}</p>
        <p>Breed: {{dog.breed}}</p>
        <p>Coordinates: {{latitude}}, {{longitude}}</p>
        <p>Nearest Street Address: {{address}}</p>
        <img v-bind:src="dog.image_url" height="300px">
        <br>
    </div>
    <template >
      <h1>Alert</h1>
      <p>Cooper is outside your specified parameters</p>
      <p>Coordinates: {{latitude}}, {{longitude}}</p>
      <p>Nearest Street Address: {{address}}</p>
      <button v-on:click="alertCreate">Alert Neighbors</button>     <button v-on:click="alertDisplay">Dismiss</button>
    </template>
  </div>
</template>

<style>
</style>

<script>
import * as VueGoogleMaps from "vue2-google-maps";
import axios from "axios";
const startMarker = ('http://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-Free-PNG-Image.png');
export default {
  data: function() {
    return {
      latitude: "38.5450266666667",
      longitude: "-121.441875555556",
      address: "", 
      message: "Welcome to Vue.js!",
      user: {},
      currentUser: {},
      route: [],
      newDogId: "",
      newUserId: "",
      center: {lat:38.58166, lng:-121.49445},
      zoom: 13,
      dog_route: [],
      name: "",
      markers:[{
        position: {lat:38.5451264, lng:-121.4420857},
      }],
      markerOptions: {
        url: startMarker,
        size: {width: 50, height: 50, f: 'px', b: 'px',},
        scaledSize: {width: 30, height: 30, f: 'px', b: 'px',}
      }
    };
  },
  created: function() {
    this.interval = setInterval(() => this.realTimeLocation(), 10000);

    axios.get(`/api/user`).then(response => {
      this.user = response.data;
      console.log(response);
    });

  },

  methods: {
    alertCreate() {
      console.log('creating alert...');
      this.indicator = true;
      // var params = {
      //   dog_id: this.newDogId,
      //   user_id: this.newUserId,
      // };

      // axios.patch(`/api/alerts/1`).then(response => {

      // });

      this.center = {lat:this.latitude, lng: this.longitude},
      this.zoom = 16;

      this.markers.push({position: {lat:this.latitude, lng:this.longitude}});
      console.log(this.markers);
    },

    alertDisplay() {
      // $swal function calls SweetAlert into the application with the specified configuration.
      this.$swal('Alert','Your dog is outside of specified parameters', '');
    },
    realTimeLocation() {
      axios.patch(`/api/dogs/1`).then(response => {
        // this.$router.push(`/dogs/1`);
        this.latitude = response["data"]["latitude"];
        this.longitude = response["data"]["longitude"];
        this.address = response["data"]["address"];
        console.log(response["data"]["latitude"]);
        console.log(response["data"]["longitude"]);
        console.log(response["data"]["address"]);

        if (this.latitude > 38.54524 || this.latitude < 38.5449 || this.longitude > -121.44167 || this.longitude < -121.44188) {
          // console.log("creating alert");
          // alert("Cooper is out of your specified parameters");
          this.alertCreate();
        }

      });
    },

    addMarker: function(theMarker) {
      console.log(theMarker);


    }
  //   selectUser: function(theRecipe) {
  //     console.log('selecting the user');
  //     // if (theRecipe.selected === true) {
  //     //   theRecipe.selected = false;
  //     // } else {
  //     //   theRecipe.selected = true;
  //     // }
  //     theUser.selected = !theUser.selected;
  //     console.log(theUser);
  //   },
  }

  // computed: {
  //   sendAlert: function() {
  //     console.log("automatically correcting?")
  //     var dog_latitude = dog.latitude
  //     var dog_longitude = dog.longitude 

  // }
};
</script>

<!-- 38.54508, -121.441795555556 -->