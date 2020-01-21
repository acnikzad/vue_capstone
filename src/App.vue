<template>
  <div id="app">
    <!-- Header -->
    <div id="header-wrapper">
      <div id="header" class="container">
        <!-- Logo -->
        <h1 id="logo"><a href="index.html">Block Hound<img src="https://image.flaticon.com/icons/png/512/21/21645.png" height="14px"></a></h1>
        <!-- Nav -->
        <nav id="nav">
          <ul>
            <li>
            </li>
            <li><a href="http://localhost:8080/signup">Sign Up</a></li>
            <li><a href="http://localhost:8080/login">Login</a></li>
            <li class="break"><a href="http://localhost:8080/logout">Logout</a></li>
            <li><a href="http://localhost:8080/about">About Us</a></li>
          </ul>
        </nav>
      </div>s
    </div>
    <router-view/>

    <!-- Footer -->
    <div id="footer-wrapper">
      <div id="copyright" class="container">
        <ul class="menu">
          <li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
</style>