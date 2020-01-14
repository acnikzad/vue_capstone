<template>
  <div class="map">
    <h1>{{ message }}</h1>
    <div id="map">
      <gmap-map
        :center="{lat:38.58166, lng:-121.49445}"
        :zoom="12"
        map-type-id="roadmap"
        style="width: 1200px; height: 600px">
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
      message: "Welcome to the map",
      center: {lat:38.58166, lng:-121.49445},
      dog_route: [],
      markers:[{
        position: {lat:38.5451264, lng:-121.4420857},
      }],

      markerOptions: {
        url: startMarker,
        size: {width: 50, height: 50, f: 'px', b: 'px',},
        scaledSize: {width: 30, height: 30, f: 'px', b: 'px',}
      }
    };
    // {
    //   name: "App",
    //   components: {
    //     VueGoogleMaps
    //   },
    // };
  },
};
</script>


