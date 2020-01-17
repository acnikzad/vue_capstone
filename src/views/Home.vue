<template>
  <div class="home">
      <div id="promo-wrapper">
        <section id="promo">
          <h2>Welcome to Block Hound</h2>
          <h1>Safely connecting you and your pup</h1>
          <a href="http://localhost:8080/signup" class="button">Begin Here</a>
        </section>
      </div>
      <div class="wrapper">
        <section class="container">
          <div class="row features">
            <section class="col-12 col-12-narrower feature">
              <div class="image-wrapper first">
                <a href="#" class="image featured"><img src="https://i.imgur.com/vzMJvm8.jpg" alt=""/></a>
              </div>
              <p>Using GPS technology, we accurately track your dog and alert you if they are outside of your specified parameters</p>
            </section>
          </div>
          <ul class="actions major">
            <li><a href="#" class="button">Elevate my awareness</a></li>
          </ul>
        </section>
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
      message: "Welcome to Block Hound!"
    };
  },
};
</script>