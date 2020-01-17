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
    <div class="wrapper">
      <center>
        <section class="container">
          <div class="row features">
              <section class="col-4 col-12-narrower feature">
                <div class="image-wrapper first">
                  <a href="http://localhost:8080/usershow" class="image featured"><div class="top-foto"><img src="https://i.imgur.com/8p1sG2G.jpg" alt="" /></div></a>
                </div>
                <h3>User Profile</h3>
                <p>Name: {{ user.first_name }} {{ user.last_name }}</p>
                <p>Email: {{ user.email}}</p>    
                <p>Phone Number: {{user.phone_number}}</p>
                <p>Address: {{ user.home_address}}</p>
              </section>
              <section class="col-4 col-12-narrower feature">
                <div class="image-wrapper">
                  <a href="http://localhost:8080/dogshow" class="image featured"><img src="https://i.imgur.com/jr0tlst.jpg" alt="" /></a>
                </div>
                <h3>Dog Profile</h3>
                <div v-for="dog in user.dogs">
                  <p>Name: {{dog.name}}</p>
                  <p>Breed: {{dog.breed}}</p>
                  <p>Coordinates: {{latitude}}, {{longitude}}</p>
                  <p>Nearest Street Address: {{address}}</p>
                </div>
              </section>
              <section class="col-4 col-12-narrower feature">
                <div class="image-wrapper">
                  <a href="#" class="image featured"><img src="https://i.imgur.com/6yiEUA8.jpg" alt="" width=""/></a>
                </div>
                <h3>GPS Device</h3>
                <div v-for="dog in user.dogs">
                  <p>Device ID: 00000-39925</p>
                  <p>Battery Life: {{battery}}</p>
                  <p>Last Ping Time: {{dog.ping_time}}</p>
                </div>
              </section>
          </div>
        </section>
      </center>
    </div>
    <br>
    <center>
      <button type="button" class="" data-toggle="modal" data-target="#exampleModalCenter">
        Send an Alert
      </button>
    </center>
    <br>
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">ALERT</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Cooper is outside of your specified parameters</p>
            <p>Coordinates: {{latitude}}, {{longitude}}</p>
            <p>Nearest Street Address: {{address}}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="" data-dismiss="modal">Dismiss</button>
            <button type="button" class="">Alert Neighbors!</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>

<script>
import * as VueGoogleMaps from "vue2-google-maps";
import axios from "axios";
const startMarker = ('http://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-Free-PNG-Image.png');
export default {
  name: 'ExampleModal',
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
      battery: "",
      time: 0,
      duration: 5000,
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
      $('#exampleModalCenter').modal('show');
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
        this.battery = response["data"]["battery_percentage"];
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
    },
    // show() {
    //   this.$modal.show('hello-world', { foo: 'bar' });
    // },
    // hide() {
    //   this.$modal.hide('hello-world');
    // },
    // openModal() {
    //   this.$modal.show({
    //     template: `<b>{{time}}</b>`,
    //     props: ['time']
    //   }, {
    //     time: this.time
    //   }, {
    //     width: 300,
    //     height: 300
    //   }, {
    //     'before-open': this.beforeOpen,
    //     'before-close': this.beforeClose
    //   });
    // },
    // beforeOpen(event) {
    //   console.log(event);
    //   // Set the opening time of the modal
    //   this.time = Date.now();
    // },
    // beforeClose(event) {
    //   console.log(event);
    //   // If modal was open less then 5000 ms - prevent closing it
    //   if (this.time + this.duration < Date.now()) {
    //     event.stop();
    //   }
    // }
  }
};
</script>

<!-- 38.54508, -121.441795555556 -->